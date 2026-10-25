const civilizations = {
  Light: { color: "#e9c84c", sigil: "+", short: "L" },
  Water: { color: "#4cb8ca", sigil: "~", short: "W" },
  Darkness: { color: "#9d77d5", sigil: "x", short: "D" },
  Fire: { color: "#ff6848", sigil: "^", short: "F" },
  Nature: { color: "#72a96b", sigil: "*", short: "N" },
};

const cardNamesByCiv = {
  Light: "Chilias, the Oracle|Dia Nork, Moonlight Guardian|Emerald Grass|Frei, Vizier of Air|Gran Gure, Space Guardian|Holy Awe|Iere, Vizier of Bullets|Iocant, the Oracle|La Ura Giga, Sky Guardian|Lah, Purification Enforcer|Laser Wing|Lok, Vizier of Hunting|Miele, Vizier of Lightning|Moonlight Flash|Rayla, Truth Enforcer|Reusol, the Oracle|Ruby Grass|Senatine Jade Tree|Solar Ray|Sonic Wing|Szubs Kin, Twilight Guardian|Toel, Vizier of Hope",
  Water: "Aqua Hulcus|Aqua Knight|Aqua Soldier|Aqua Vehicle|Brain Serum|Candy Drop|Crystal Memory|Faerie Child|Hunter Fish|Illusionary Merfolk|King Coral|King Ripped-Hide|Marine Flower|Phantom Fish|Revolver Fish|Saucer-Head Shark|Seamine|Spiral Gate|Teleportation|Tropico|Unicorn Fish|Virtual Tripwire",
  Darkness: "Black Feather, Shadow of Rage|Bloody Squito|Bone Assassin, the Ripper|Bone Spider|Creeping Plague|Dark Clown|Dark Raven, Shadow of Grief|Dark Reversal|Death Smoke|Ghost Touch|Gigaberos|Gigagiele|Gigargon|Masked Horror, Shadow of Scorn|Night Master, Shadow of Decay|Skeleton Soldier, the Defiled|Stinger Worm|Swamp Worm|Terror Pit|Vampire Silphy|Wandering Braineater|Writhing Bone Ghoul",
  Fire: "Armored Walker Urherion|Artisan Picora|Bolshack Dragon|Brawler Zyler|Burning Power|Chaos Strike|Crimson Hammer|Deadly Fighter Braid Claw|Draglide|Explosive Fighter Ucarn|Fatal Attacker Horvath|Fire Sweeper Burning Hellion|Gatling Skyterror|Immortal Baron, Vorg|Magma Gazer|Meteosaur|Nomad Hero Gigio|Onslaughter Triceps|Rothus, the Traveler|Stonesaur|Super Explosive Volcanodon|Tornado Flame",
  Nature: "Aura Blast|Bronze-Arm Tribe|Burning Mane|Coiling Vines|Dimension Gate|Dome Shell|Fear Fang|Forest Hornet|Golden Wing Striker|Mighty Shouter|Natural Snare|Pangaea's Song|Poisonous Dahlia|Poisonous Mushroom|Red-Eye Scorpion|Stampeding Longhorn|Steel Smasher|Storm Shell|Thorny Mandra|Tower Shell|Tri-horn Shepherd|Ultimate Force",
};
const cardNamesByRarity = {
  C: "Aqua Hulcus|Aqua Vehicle|Artisan Picora|Black Feather, Shadow of Rage|Bloody Squito|Bone Assassin, the Ripper|Brawler Zyler|Bronze-Arm Tribe|Burning Mane|Burning Power|Candy Drop|Crimson Hammer|Deadly Fighter Braid Claw|Death Smoke|Dimension Gate|Emerald Grass|Fatal Attacker Horvath|Fear Fang|Fire Sweeper Burning Hellion|Ghost Touch|Golden Wing Striker|Hunter Fish|Iere, Vizier of Bullets|Immortal Baron, Vorg|La Ura Giga, Sky Guardian|Marine Flower|Miele, Vizier of Lightning|Mighty Shouter|Phantom Fish|Reusol, the Oracle|Senatine Jade Tree|Skeleton Soldier, the Defiled|Solar Ray|Sonic Wing|Spiral Gate|Steel Smasher|Ultimate Force|Virtual Tripwire|Wandering Braineater|Writhing Bone Ghoul",
  U: "Aqua Soldier|Armored Walker Urherion|Bone Spider|Brain Serum|Coiling Vines|Dark Raven, Shadow of Grief|Dark Reversal|Dome Shell|Faerie Child|Forest Hornet|Frei, Vizier of Air|Illusionary Merfolk|Iocant, the Oracle|King Coral|Lok, Vizier of Hunting|Masked Horror, Shadow of Scorn|Meteosaur|Moonlight Flash|Onslaughter Triceps|Pangaea's Song|Poisonous Dahlia|Poisonous Mushroom|Revolver Fish|Ruby Grass|Stinger Worm|Stonesaur|Super Explosive Volcanodon|Swamp Worm|Toel, Vizier of Hope|Tornado Flame",
  R: "Aqua Knight|Aura Blast|Bombersaur|Chaos Strike|Chilias, the Oracle|Creeping Plague|Crystal Memory|Dark Clown|Dia Nork, Moonlight Guardian|Dogarn, the Marauder|Draglide|Explosive Fighter Ucarn|Gigaberos|Gigagiele|Holy Awe|Lah, Purification Enforcer|Laser Wing|Magma Gazer|Natural Snare|Night Master, Shadow of Decay|Nomad Hero Gigio|Red-Eye Scorpion|Rothus, the Traveler|Saucer-Head Shark|Stampeding Longhorn|Storm Shell|Szubs Kin, Twilight Guardian|Teleportation|Terror Pit|Tri-horn Shepherd|Tropico|Unicorn Fish",
  VR: "Bolshack Dragon|Gatling Skyterror|Gigargon|Gran Gure, Space Guardian|King Ripped-Hide|Rayla, Truth Enforcer|Seamine|Thorny Mandra|Tower Shell|Vampire Silphy",
  SR: "Aqua Sniper|Astrocomet Dragon|Deathblade Beetle|Deathliger, Lion of Chaos|Hanusa, Radiance Elemental|King Depthcon|Roaring Great-Horn|Scarlet Skyterror|Urth, Purifying Elemental|Zagaan, Knight of Darkness",
};
const rarityByName = new Map(Object.entries(cardNamesByRarity).flatMap(([rarity, names]) => names.split("|").map((name) => [name, rarity])));
const superRareNamesByCiv = {
  Light: ["Hanusa, Radiance Elemental", "Urth, Purifying Elemental"],
  Water: ["Aqua Sniper", "King Depthcon"],
  Darkness: ["Deathliger, Lion of Chaos", "Zagaan, Knight of Darkness"],
  Fire: ["Astrocomet Dragon", "Scarlet Skyterror"],
  Nature: ["Deathblade Beetle", "Roaring Great-Horn"],
};
const imageNameOverrides = { "Pangaea's Song": "Pangaea_s Song" };
const cardPool = [
  ...Object.entries(cardNamesByCiv).flatMap(([civ, names]) => names.split("|").map((name) => ({
    name,
    civ,
    rarity: rarityByName.get(name),
    image: `DM-01/${imageNameOverrides[name] || name}.jpg`,
  }))),
  ...Object.entries(superRareNamesByCiv).flatMap(([civ, names]) => names.map((name) => ({
    name,
    civ,
    rarity: "SR",
    image: `DM-01/${imageNameOverrides[name] || name}.jpg`,
  }))),
];
const cardPools = Object.fromEntries(Object.keys(cardNamesByRarity).map((rarity) => [
  rarity,
  cardPool.filter((card) => card.rarity === rarity),
]));
const bots = ["Mina", "Rook", "Jax", "Sora", "Vale", "Kite", "Ash"].map((name, index) => ({
  name,
  preference: Object.keys(civilizations)[index % 5],
  picks: [],
}));
const totalPacks = 5;
const picksPerPack = 10;
const seatCount = 8;
let packNumber = 0;
let pickNumber = 0;
let seatPacks = [];
let playerPicks = [];
let selectedCardId = null;
let cardId = 0;
let isDraftComplete = false;
let boosterRunQueue = createDraftRunSchedule();

const cardGrid = document.querySelector("#card-grid");
const pickButton = document.querySelector("#pick-button");
const logMessage = document.querySelector("#log-message");
const summaryModal = document.querySelector("#summary-modal");
const draftLayout = document.querySelector("#draft-layout");
const deckBuilder = document.querySelector("#deck-builder");
let selectedDeckCardIds = new Set();
let deckSaved = false;

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

function createDraftRunSchedule() {
  const makeBox = () => shuffled([
    ...Array(18).fill("common"),
    ...Array(8).fill("VR"),
    ...Array(4).fill("SR"),
  ]);
  return [...makeBox(), ...makeBox()];
}

function randomCard(rarity, usedNames) {
  const available = cardPools[rarity].filter((card) => !usedNames.has(card.name));
  const card = available[Math.floor(Math.random() * available.length)];
  usedNames.add(card.name);
  return card;
}

function makePack() {
  const run = boosterRunQueue.shift() || "common";
  const extraRarity = run === "common" ? null : run;
  const usedNames = new Set();
  const draw = (rarity) => makeCard(randomCard(rarity, usedNames));
  const pack = [
    draw("R"),
    ...(extraRarity ? [draw(extraRarity)] : []),
    ...Array.from({ length: 3 }, () => draw("U")),
    ...Array.from({ length: extraRarity ? 5 : 6 }, () => draw("C")),
  ];
  const dealtPack = shuffled(pack);
  dealtPack.runType = run;
  return dealtPack;
}

function startPack() {
  seatPacks = Array.from({ length: seatCount }, () => makePack());
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
  const rarityScore = { C: 0, U: 0.4, R: 1, VR: 2.5, SR: 3.5 }[card.rarity] || 0;
  const preferenceScore = card.civ === bot.preference ? 2 : 0;
  return rarityScore + preferenceScore + draftedCount * 0.4 + Math.random();
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
      document.querySelector("#build-deck-open").hidden = false;
      logMessage.textContent = "All five packs are drafted. Nice work at the table.";
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
    const rarityClass = { C: "common", U: "uncommon", R: "rare", VR: "very-rare", SR: "super-rare" }[card.rarity];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `draft-card${card.id === selectedCardId ? " selected" : ""}`;
    button.style.setProperty("--civ", civ.color);
    button.style.animationDelay = `${Math.min(index * 14, 180)}ms`;
    button.setAttribute("aria-pressed", String(card.id === selectedCardId));
    button.setAttribute("aria-label", `${card.name}, ${card.civ}, ${card.rarity}`);
    button.innerHTML = `<img class="card-image" src="${card.image}" alt="${card.name}" loading="lazy"><span class="card-info"><strong class="card-name">${card.name}</strong><span class="card-meta"><span>${card.civ}</span><b class="rarity-badge rarity-${rarityClass}">${card.rarity}</b></span></span>`;
    button.addEventListener("click", () => {
      selectedCardId = card.id;
      document.querySelector("#selection-note").innerHTML = `<span class="keycap">${card.civ.toUpperCase()}</span> ${card.name}`;
      pickButton.disabled = false;
      renderCards();
    });
    cardGrid.append(button);
  });
}

function groupCards(cards) {
  const groups = new Map();
  cards.forEach((card) => {
    if (!groups.has(card.name)) groups.set(card.name, { card, copies: [] });
    groups.get(card.name).copies.push(card);
  });
  return [...groups.values()].sort((first, second) => (
    first.card.name.localeCompare(second.card.name, "en", { sensitivity: "base" })
  ));
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
    pickedList.innerHTML = groupCards([...playerPicks].reverse()).map(({ card, copies }) => `<div class="picked-row"><span>${card.name}</span><small>${civilizations[card.civ].short} / ${card.rarity} <b class="copy-count">×${copies.length}</b></small></div>`).join("");
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
  document.querySelector("#pack-label").textContent = `PACK ${String(packNumber).padStart(2, "0")} / ${String(totalPacks).padStart(2, "0")}`;
  document.querySelector("#pick-label").innerHTML = `PICK ${String(Math.min(pickNumber + 1, picksPerPack)).padStart(2, "0")} <i>/ ${picksPerPack}</i>`;
  document.querySelector("#pack-progress-fill").style.width = `${Math.max(6.67, (pickNumber / picksPerPack) * 100)}%`;
  const runLabels = { common: "common", VR: "very-rare", SR: "super-rare" };
  document.querySelector("#table-subtitle").textContent = isDraftComplete
    ? "Draft complete."
    : `${seatPacks[0]?.length || 0} cards / ${runLabels[seatPacks[0]?.runType] || "common"} run`;
  document.querySelector("#selection-note").innerHTML = '<span class="keycap">CLICK</span> a card to inspect it';
  pickButton.disabled = selectedCardId === null || isDraftComplete;
}

function renderDeckCard(card, copies, isSelected) {
  const row = document.createElement("div");
  row.className = `deck-card-row${isSelected ? " selected" : ""}`;

  const image = document.createElement("img");
  image.className = "deck-row-image";
  image.src = card.image;
  image.alt = "";
  image.loading = "lazy";

  const details = document.createElement("div");
  details.className = "deck-row-details";
  details.innerHTML = `<strong>${card.name}</strong><small>${card.civ} / ${card.rarity} <b class="copy-count">×${copies.length}</b></small>`;

  const action = document.createElement("button");
  action.type = "button";
  action.className = `deck-row-action${isSelected ? " remove" : " add"}`;
  action.textContent = isSelected ? "−" : "+";
  action.setAttribute("aria-label", `${isSelected ? "Remove one" : "Add one"} ${card.name} ${isSelected ? "copy from" : "copy to"} deck`);
  action.title = `${isSelected ? "Remove one" : "Add one"} copy (${copies.length} ${isSelected ? "selected" : "available"})`;
  action.disabled = !isSelected && selectedDeckCardIds.size >= 40;
  action.addEventListener("click", () => {
    if (isSelected) {
      selectedDeckCardIds.delete(copies[copies.length - 1].id);
      deckSaved = false;
    } else if (selectedDeckCardIds.size < 40) {
      selectedDeckCardIds.add(copies[0].id);
    }
    renderDeckBuilder();
  });

  row.append(image, details, action);
  return row;
}

function renderDeckBuilder() {
  const filter = document.querySelector("#deck-civ-filter").value;
  const selectedCopies = playerPicks.filter((card) => selectedDeckCardIds.has(card.id));
  const availableCopies = playerPicks.filter((card) => (
    !selectedDeckCardIds.has(card.id) && (filter === "all" || card.civ === filter)
  ));
  const selectedCards = groupCards(selectedCopies);
  const availableCards = groupCards(availableCopies);
  const availableList = document.querySelector("#available-cards");
  const selectedList = document.querySelector("#selected-cards");

  availableList.replaceChildren();
  selectedList.replaceChildren();
  availableCards.forEach(({ card, copies }) => availableList.append(renderDeckCard(card, copies, false)));
  selectedCards.forEach(({ card, copies }) => selectedList.append(renderDeckCard(card, copies, true)));

  if (!selectedCards.length) {
    selectedList.innerHTML = '<p class="empty-state">Add cards from your pool to build your deck.</p>';
  }

  const count = selectedCopies.length;
  document.querySelector("#deck-count").textContent = String(count).padStart(2, "0");
  document.querySelector("#selected-count").textContent = String(count).padStart(2, "0");
  document.querySelector("#available-count").textContent = String(availableCopies.length).padStart(2, "0");
  document.querySelector("#deck-build-meter-fill").style.width = `${(count / 40) * 100}%`;
  document.querySelector("#deck-status-message").textContent = deckSaved
    ? "Your 40-card deck is ready."
    : count === 40
      ? "40 of 40 selected. Complete your deck."
      : `${count} of 40 selected. Choose ${40 - count} more.`;
  const completeButton = document.querySelector("#complete-deck");
  completeButton.disabled = count !== 40 || deckSaved;
  completeButton.querySelector("span").textContent = deckSaved ? "DECK READY" : "COMPLETE DECK";
}

function openDeckBuilder() {
  if (!isDraftComplete) return;
  summaryModal.classList.add("hidden");
  draftLayout.hidden = true;
  deckBuilder.hidden = false;
  renderDeckBuilder();
  document.querySelector("#deck-civ-filter").focus();
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
  selectedDeckCardIds = new Set();
  deckSaved = false;
  cardId = 0;
  boosterRunQueue = createDraftRunSchedule();
  isDraftComplete = false;
  document.querySelector("#build-deck-open").hidden = true;
  draftLayout.hidden = false;
  deckBuilder.hidden = true;
  bots.forEach((bot) => { bot.picks = []; });
  summaryModal.classList.add("hidden");
  startPack();
}

pickButton.addEventListener("click", draftSelectedCard);
document.querySelector("#build-deck").addEventListener("click", openDeckBuilder);
document.querySelector("#build-deck-open").addEventListener("click", openDeckBuilder);
document.querySelector("#back-to-results").addEventListener("click", () => {
  deckBuilder.hidden = true;
  draftLayout.hidden = false;
  showSummary();
});
document.querySelector("#deck-civ-filter").addEventListener("change", renderDeckBuilder);
document.querySelector("#complete-deck").addEventListener("click", () => {
  if (selectedDeckCardIds.size !== 40) return;
  deckSaved = true;
  renderDeckBuilder();
});
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