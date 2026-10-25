const civilizations = {
  Light: { color: "#e9c84c", sigil: "+", short: "L" },
  Water: { color: "#4cb8ca", sigil: "~", short: "W" },
  Darkness: { color: "#9d77d5", sigil: "x", short: "D" },
  Fire: { color: "#ff6848", sigil: "^", short: "F" },
  Nature: { color: "#72a96b", sigil: "*", short: "N" },
};

const cardPool = [
  { name: "La Ura Giga", civ: "Light", cost: 1, power: 2000, type: "Guardian", rarity: "C" },
  { name: "Urth, Purifying Elemental", civ: "Light", cost: 7, power: 5500, type: "Angel Command", rarity: "R" },
  { name: "Hanusa, Radiance Elemental", civ: "Light", cost: 6, power: 8500, type: "Angel Command", rarity: "VR" },
  { name: "Holy Awe", civ: "Light", cost: 6, power: 0, type: "Spell", rarity: "R" },
  { name: "Diamond Cutter", civ: "Light", cost: 5, power: 0, type: "Spell", rarity: "U" },
  { name: "Aqua Hulcus", civ: "Water", cost: 3, power: 2000, type: "Cyber Lord", rarity: "U" },
  { name: "Aqua Sniper", civ: "Water", cost: 8, power: 5000, type: "Liquid People", rarity: "R" },
  { name: "Crystal Paladin", civ: "Water", cost: 4, power: 5000, type: "Liquid People", rarity: "VR" },
  { name: "Crystal Lancer", civ: "Water", cost: 6, power: 8000, type: "Liquid People", rarity: "R" },
  { name: "Marine Flower", civ: "Water", cost: 1, power: 2000, type: "Fish", rarity: "C" },
  { name: "Bloody Squito", civ: "Darkness", cost: 1, power: 1000, type: "Ghost", rarity: "C" },
  { name: "Horrid Worm", civ: "Darkness", cost: 2, power: 2000, type: "Parasite Worm", rarity: "C" },
  { name: "Terror Pit", civ: "Darkness", cost: 7, power: 0, type: "Spell", rarity: "R" },
  { name: "Death Smoke", civ: "Darkness", cost: 4, power: 0, type: "Spell", rarity: "U" },
  { name: "Ghost Touch", civ: "Darkness", cost: 2, power: 0, type: "Spell", rarity: "C" },
  { name: "Bolshack Dragon", civ: "Fire", cost: 6, power: 6000, type: "Armored Dragon", rarity: "VR" },
  { name: "Rothus the Traveler", civ: "Fire", cost: 5, power: 4000, type: "Armored Dragon", rarity: "R" },
  { name: "Scarlet Skyterror", civ: "Fire", cost: 8, power: 6000, type: "Armored Wyvern", rarity: "R" },
  { name: "Pyrofighter Magnus", civ: "Fire", cost: 4, power: 3000, type: "Human", rarity: "U" },
  { name: "Armored Blaster Valdios", civ: "Fire", cost: 4, power: 5000, type: "Human", rarity: "R" },
  { name: "Bronze-Arm Tribe", civ: "Nature", cost: 3, power: 1000, type: "Beast Folk", rarity: "U" },
  { name: "Silver Axe", civ: "Nature", cost: 4, power: 3000, type: "Beast Folk", rarity: "C" },
  { name: "Tower Shell", civ: "Nature", cost: 5, power: 5000, type: "Colony Beetle", rarity: "C" },
  { name: "Natural Snare", civ: "Nature", cost: 6, power: 0, type: "Spell", rarity: "R" },
  { name: "Fighter Dual Fang", civ: "Nature", cost: 6, power: 8000, type: "Beast Folk", rarity: "VR" },
];

const bots = ["Mina", "Rook", "Jax", "Sora", "Vale", "Kite", "Ash"].map((name, index) => ({
  name,
  preference: Object.keys(civilizations)[index % 5],
  picks: [],
}));
const totalPacks = 3;
const picksPerPack = 15;
const seatCount = 8;
let packNumber = 0;
let pickNumber = 0;
let seatPacks = [];
let playerPicks = [];
let selectedCardId = null;
let cardId = 0;
let isDraftComplete = false;

const cardGrid = document.querySelector("#card-grid");
const pickButton = document.querySelector("#pick-button");
const logMessage = document.querySelector("#log-message");
const summaryModal = document.querySelector("#summary-modal");

function shuffled(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function makeCard(source) {
  return { ...source, id: cardId++ };
}

function makePack() {
  return shuffled(Array.from({ length: picksPerPack }, () => makeCard(cardPool[Math.floor(Math.random() * cardPool.length)])));
}

function startPack() {
  seatPacks = Array.from({ length: seatCount }, makePack);
  pickNumber = 0;
  packNumber += 1;
  selectedCardId = null;
  document.querySelectorAll(".round-step").forEach((step) => {
    const stepNumber = Number(step.dataset.step);
    step.classList.toggle("active", stepNumber === packNumber);
    step.classList.toggle("complete", stepNumber < packNumber);
  });
  logMessage.textContent = `Pack ${String(packNumber).padStart(2, "0")} is in. The table is passing ${packNumber % 2 ? "left" : "right"}.`;
  render();
}

function botCardScore(card, bot) {
  const draftedCount = bot.picks.filter((pick) => pick.civ === card.civ).length;
  const rarityScore = { C: 0, U: 1.5, R: 3, VR: 4.5 }[card.rarity] || 0;
  const curveScore = card.power ? Math.min(card.power / 3000, 2) : 1.3;
  const preferenceScore = card.civ === bot.preference ? 2 : 0;
  return rarityScore + curveScore + preferenceScore + draftedCount * 0.4 + Math.random();
}

function selectBotPick(pack, bot) {
  if (!pack.length) return null;
  const ranked = pack.map((card) => ({ card, score: botCardScore(card, bot) }));
  ranked.sort((first, second) => second.score - first.score);
  return ranked[0].card;
}

function draftSelectedCard() {
  if (isDraftComplete || selectedCardId === null) return;
  const playerPack = seatPacks[0];
  const chosenIndex = playerPack.findIndex((card) => card.id === selectedCardId);
  if (chosenIndex < 0) return;
  const [chosen] = playerPack.splice(chosenIndex, 1);
  playerPicks.push(chosen);
  bots.forEach((bot, index) => {
    const pack = seatPacks[index + 1];
    const botPick = selectBotPick(pack, bot);
    if (botPick) {
      pack.splice(pack.findIndex((card) => card.id === botPick.id), 1);
      bot.picks.push(botPick);
    }
  });
  pickNumber += 1;
  selectedCardId = null;
  seatPacks = packNumber % 2 === 1
    ? [...seatPacks.slice(1), seatPacks[0]]
    : [seatPacks[seatPacks.length - 1], ...seatPacks.slice(0, -1)];

  if (pickNumber >= picksPerPack) {
    if (packNumber >= totalPacks) {
      isDraftComplete = true;
      logMessage.textContent = "All three packs are drafted. Nice work at the table.";
      render();
      showSummary();
      return;
    }
    startPack();
    return;
  }

  logMessage.textContent = `${chosen.name} added to your pool. The remaining cards move to the next seat.`;
  render();
}

function renderCards() {
  const pack = seatPacks[0] || [];
  cardGrid.replaceChildren();
  pack.forEach((card, index) => {
    const civ = civilizations[card.civ];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `draft-card${card.id === selectedCardId ? " selected" : ""}`;
    button.style.setProperty("--civ", civ.color);
    button.style.animationDelay = `${Math.min(index * 14, 180)}ms`;
    button.setAttribute("aria-pressed", String(card.id === selectedCardId));
    button.setAttribute("aria-label", `${card.name}, ${card.civ}, cost ${card.cost}${card.power ? `, power ${card.power}` : ", spell"}`);
    button.innerHTML = `<span class="card-art" data-sigil="${civ.sigil}"><span class="cost-badge">${card.cost}</span><span class="rarity-mark">${card.rarity}</span></span><span class="card-info"><strong class="card-name">${card.name}</strong><span class="card-meta"><span>${card.type}</span><b class="card-power">${card.power ? card.power.toLocaleString() : "SPELL"}</b></span></span>`;
    button.addEventListener("click", () => {
      selectedCardId = card.id;
      const typeLabel = card.power ? `${card.power.toLocaleString()} power` : "spell";
      document.querySelector("#selection-note").innerHTML = `<span class="keycap">${card.civ.toUpperCase()}</span> ${card.name} / ${typeLabel}`;
      pickButton.disabled = false;
      renderCards();
    });
    cardGrid.append(button);
  });
}

function renderPool() {
  document.querySelector("#pool-count").textContent = String(playerPicks.length).padStart(2, "0");
  document.querySelector("#deck-meter-fill").style.width = `${(playerPicks.length / (totalPacks * picksPerPack)) * 100}%`;
  const counts = Object.fromEntries(Object.keys(civilizations).map((civ) => [civ, 0]));
  playerPicks.forEach((card) => { counts[card.civ] += 1; });
  document.querySelector("#civ-counts").innerHTML = Object.entries(civilizations).map(([civ, info]) => `<div class="civ-count" title="${civ}"><i style="--civ:${info.color}"></i><b>${counts[civ]}</b><span>${info.short}</span></div>`).join("");
  const pickedList = document.querySelector("#picked-list");
  if (!playerPicks.length) {
    pickedList.innerHTML = '<p class="empty-state">Your picks will appear here.</p>';
  } else {
    pickedList.innerHTML = [...playerPicks].reverse().slice(0, 18).map((card) => `<div class="picked-row"><span>${card.name}</span><small>${civilizations[card.civ].short} / ${card.rarity}</small></div>`).join("");
  }
}

function renderSeats() {
  const currentNames = ["You", ...bots.map((bot) => bot.name)];
  document.querySelector("#seat-list").innerHTML = currentNames.map((name, index) => {
    const isYou = index === 0;
    const preference = isYou ? "YOU" : bots[index - 1].preference.toUpperCase();
    const isActive = !isYou && !isDraftComplete && pickNumber % 3 === (index % 3);
    return `<div class="seat-row${isYou ? " you" : ""}${isActive ? " active-bot" : ""}"><span class="seat-avatar">${isYou ? "Y" : name[0]}</span><span class="seat-name">${name}</span><small>${preference}</small></div>`;
  }).join("");
}

function render() {
  renderCards();
  renderPool();
  renderSeats();
  document.querySelector("#pack-label").textContent = `PACK ${String(packNumber).padStart(2, "0")} / 03`;
  document.querySelector("#pick-label").innerHTML = `PICK ${String(Math.min(pickNumber + 1, picksPerPack)).padStart(2, "0")} <i>/ 15</i>`;
  document.querySelector("#pack-progress-fill").style.width = `${Math.max(6.67, (pickNumber / picksPerPack) * 100)}%`;
  document.querySelector("#table-subtitle").textContent = isDraftComplete ? "Draft complete." : `${seatPacks[0]?.length || 0} cards in the pack passed to you.`;
  document.querySelector("#selection-note").innerHTML = '<span class="keycap">CLICK</span> a card to inspect it';
  pickButton.disabled = selectedCardId === null || isDraftComplete;
}

function showSummary() {
  const counts = Object.fromEntries(Object.keys(civilizations).map((civ) => [civ, 0]));
  playerPicks.forEach((card) => { counts[card.civ] += 1; });
  document.querySelector("#summary-total").textContent = String(playerPicks.length);
  document.querySelector("#summary-colors").textContent = String(Object.values(counts).filter(Boolean).length);
  document.querySelector("#summary-civ-list").innerHTML = Object.entries(counts).filter(([, count]) => count).map(([civ, count]) => `<span class="summary-color"><i style="--civ:${civilizations[civ].color}"></i>${civ} / ${count}</span>`).join("");
  summaryModal.classList.remove("hidden");
  document.querySelector("#close-summary").focus();
}

function restartDraft() {
  packNumber = 0;
  pickNumber = 0;
  seatPacks = [];
  playerPicks = [];
  selectedCardId = null;
  cardId = 0;
  isDraftComplete = false;
  bots.forEach((bot) => { bot.picks = []; });
  summaryModal.classList.add("hidden");
  startPack();
}

pickButton.addEventListener("click", draftSelectedCard);
document.querySelector("#restart-top").addEventListener("click", restartDraft);
document.querySelector("#restart-summary").addEventListener("click", restartDraft);
document.querySelector("#close-summary").addEventListener("click", () => summaryModal.classList.add("hidden"));
summaryModal.addEventListener("click", (event) => {
  if (event.target === summaryModal) summaryModal.classList.add("hidden");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") summaryModal.classList.add("hidden");
  if (event.key === "Enter" && selectedCardId !== null && !isDraftComplete) draftSelectedCard();
});

startPack();