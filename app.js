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
const spellNames = new Set("Aura Blast|Brain Serum|Burning Power|Chaos Strike|Creeping Plague|Crimson Hammer|Crystal Memory|Dark Reversal|Death Smoke|Dimension Gate|Ghost Touch|Holy Awe|Laser Wing|Magma Gazer|Moonlight Flash|Natural Snare|Pangaea's Song|Solar Ray|Sonic Wing|Spiral Gate|Teleportation|Terror Pit|Tornado Flame|Ultimate Force|Virtual Tripwire".split("|"));
const shieldTriggerNames = new Set("Brain Serum|Crystal Memory|Dark Reversal|Dimension Gate|Holy Awe|Natural Snare|Solar Ray|Spiral Gate|Terror Pit|Tornado Flame".split("|"));
const doubleBreakerNames = new Set("Astrocomet Dragon|Bolshack Dragon|Deathblade Beetle|Deathliger, Lion of Chaos|Hanusa, Radiance Elemental|King Depthcon|Roaring Great-Horn|Urth, Purifying Elemental|Zagaan, Knight of Darkness".split("|"));
const blockerNames = new Set("Bloody Squito|Dark Clown|Dark Raven, Shadow of Grief|Dia Nork, Moonlight Guardian|Emerald Grass|Gran Gure, Space Guardian|Hunter Fish|Iocant, the Oracle|King Coral|La Ura Giga, Sky Guardian|Night Master, Shadow of Decay|Phantom Fish|Revolver Fish|Ruby Grass|Seamine|Senatine Jade Tree|Szubs Kin, Twilight Guardian".split("|"));
const cannotAttackNames = new Set("Bloody Squito|Dark Clown|Hunter Fish|Marine Flower|Phantom Fish|Revolver Fish".split("|"));
const cannotAttackPlayersNames = new Set("Dia Nork, Moonlight Guardian|Emerald Grass|Gran Gure, Space Guardian|Iocant, the Oracle|La Ura Giga, Sky Guardian|Ruby Grass|Senatine Jade Tree|Szubs Kin, Twilight Guardian".split("|"));
const slayerNames = new Set("Bone Assassin, the Ripper|Gigagiele".split("|"));
const selfDestructOnWinNames = new Set("Bloody Squito|Dark Clown".split("|"));
const canAttackUntappedNames = new Set(["Gatling Skyterror"]);
const powerAttackerBonusByName = new Map([
  ["Astrocomet Dragon", 4000], ["Brawler Zyler", 2000], ["Deathblade Beetle", 4000],
  ["Dome Shell", 2000], ["Fire Sweeper Burning Hellion", 2000], ["Golden Wing Striker", 2000],
  ["Roaring Great-Horn", 2000], ["Stonesaur", 2000], ["Super Explosive Volcanodon", 4000],
]);
const duelStatsByName = new Map(`
Aqua Hulcus|3|2000
Aqua Knight|5|4000
Aqua Sniper|8|5000
Aqua Soldier|3|1000
Aqua Vehicle|2|1000
Armored Walker Urherion|4|3000
Artisan Picora|1|2000
Astrocomet Dragon|7|6000
Aura Blast|4|0
Black Feather, Shadow of Rage|1|3000
Bloody Squito|2|4000
Bolshack Dragon|6|6000
Bombersaur|5|5000
Bone Assassin, the Ripper|4|2000
Bone Spider|3|5000
Brain Serum|4|0
Brawler Zyler|2|1000
Bronze-Arm Tribe|3|1000
Burning Mane|2|2000
Burning Power|1|0
Candy Drop|3|1000
Chaos Strike|2|0
Chilias, the Oracle|4|2500
Coiling Vines|4|3000
Creeping Plague|1|0
Crimson Hammer|2|0
Crystal Memory|4|0
Dark Clown|4|6000
Dark Raven, Shadow of Grief|4|1000
Dark Reversal|2|0
Deadly Fighter Braid Claw|1|1000
Death Smoke|4|0
Deathblade Beetle|5|3000
Deathliger, Lion of Chaos|7|9000
Dia Nork, Moonlight Guardian|4|5000
Dimension Gate|3|0
Dogarn, the Marauder|3|2000
Dome Shell|4|3000
Draglide|5|5000
Emerald Grass|2|3000
Explosive Fighter Ucarn|5|9000
Faerie Child|4|2000
Fatal Attacker Horvath|3|2000
Fear Fang|3|3000
Fire Sweeper Burning Hellion|4|3000
Forest Hornet|4|4000
Frei, Vizier of Air|4|3000
Gatling Skyterror|7|7000
Ghost Touch|2|0
Gigaberos|5|8000
Gigagiele|5|3000
Gigargon|8|3000
Golden Wing Striker|3|2000
Gran Gure, Space Guardian|6|9000
Hanusa, Radiance Elemental|7|9500
Holy Awe|6|0
Hunter Fish|2|3000
Iere, Vizier of Bullets|3|3000
Illusionary Merfolk|5|4000
Immortal Baron, Vorg|2|2000
Iocant, the Oracle|2|2000
King Coral|3|1000
King Depthcon|7|6000
King Ripped-Hide|7|5000
La Ura Giga, Sky Guardian|1|2000
Lah, Purification Enforcer|5|5500
Laser Wing|5|0
Lok, Vizier of Hunting|4|4000
Magma Gazer|3|0
Marine Flower|1|2000
Masked Horror, Shadow of Scorn|5|1000
Meteosaur|5|2000
Miele, Vizier of Lightning|3|1000
Mighty Shouter|3|2000
Moonlight Flash|4|0
Natural Snare|6|0
Night Master, Shadow of Decay|6|3000
Nomad Hero Gigio|5|3000
Onslaughter Triceps|3|5000
Pangaea's Song|1|0
Phantom Fish|3|4000
Poisonous Dahlia|4|5000
Poisonous Mushroom|2|1000
Rayla, Truth Enforcer|6|3000
Red-Eye Scorpion|5|4000
Reusol, the Oracle|2|2000
Revolver Fish|4|5000
Roaring Great-Horn|7|8000
Rothus, the Traveler|4|4000
Ruby Grass|3|3000
Saucer-Head Shark|5|3000
Scarlet Skyterror|8|3000
Seamine|6|4000
Senatine Jade Tree|3|4000
Skeleton Soldier, the Defiled|4|3000
Solar Ray|2|0
Sonic Wing|3|0
Spiral Gate|2|0
Stampeding Longhorn|5|4000
Steel Smasher|2|3000
Stinger Worm|3|5000
Stonesaur|5|4000
Storm Shell|7|2000
Super Explosive Volcanodon|4|2000
Swamp Worm|7|2000
Szubs Kin, Twilight Guardian|5|6000
Teleportation|5|0
Terror Pit|6|0
Thorny Mandra|5|4000
Toel, Vizier of Hope|5|2000
Tornado Flame|5|0
Tower Shell|6|5000
Tri-horn Shepherd|5|5000
Tropico|5|3000
Ultimate Force|5|0
Unicorn Fish|4|1000
Urth, Purifying Elemental|6|6000
Vampire Silphy|8|4000
Virtual Tripwire|3|0
Wandering Braineater|2|2000
Writhing Bone Ghoul|2|2000
Zagaan, Knight of Darkness|6|7000
`.trim().split("\n").map((row) => {
  const [name, cost, power] = row.split("|");
  return [name, { cost: Number(cost), power: Number(power) }];
}));
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
cardPool.forEach((card) => {
  Object.assign(card, duelStatsByName.get(card.name), {
    type: spellNames.has(card.name) ? "spell" : "creature",
    doubleBreaker: doubleBreakerNames.has(card.name),
    shieldTrigger: shieldTriggerNames.has(card.name),
    blocker: blockerNames.has(card.name),
    cannotAttack: cannotAttackNames.has(card.name),
    cannotAttackPlayers: cannotAttackPlayersNames.has(card.name),
    slayer: slayerNames.has(card.name),
    selfDestructOnWin: selfDestructOnWinNames.has(card.name),
    canAttackUntapped: canAttackUntappedNames.has(card.name),
    powerAttackerBonus: powerAttackerBonusByName.get(card.name) || 0,
  });
});
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
const duelScreen = document.querySelector("#duel-screen");
let selectedDeckCardIds = new Set();
let deckSaved = false;
let currentDuel = null;

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
    ? "Your deck is ready to duel."
    : count === 40
      ? "40 of 40 selected. Start the duel."
      : `${count} of 40 selected. Choose ${40 - count} more.`;
  const completeButton = document.querySelector("#complete-deck");
  completeButton.disabled = count !== 40;
  completeButton.querySelector("span").textContent = "START DUEL";
}

function openDeckBuilder() {
  if (!isDraftComplete) return;
  summaryModal.classList.add("hidden");
  draftLayout.hidden = true;
  deckBuilder.hidden = false;
  renderDeckBuilder();
  document.querySelector("#deck-civ-filter").focus();
}

function createDuelSide(name, deck, role) {
  const shuffledDeck = shuffled([...deck]);
  return {
    name,
    role,
    deck: shuffledDeck.slice(10),
    hand: shuffledDeck.slice(5, 10),
    shields: shuffledDeck.slice(0, 5),
    mana: [],
    battlefield: [],
    graveyard: [],
    turnNumber: 0,
    chargedThisTurn: false,
  };
}

function makeBotDuelDeck(bot) {
  return [...bot.picks]
    .map((card) => ({
      card,
      score: (card.type === "creature" ? 3 : 0)
        + card.power / 3000
        - card.cost * 0.3
        + ({ C: 0, U: 0.4, R: 0.8, VR: 1.4, SR: 1.8 }[card.rarity] || 0)
        + Math.random(),
    }))
    .sort((first, second) => second.score - first.score)
    .slice(0, 40)
    .map(({ card }) => card);
}

function startDuel() {
  if (selectedDeckCardIds.size !== 40) return;
  const opponent = bots[Math.floor(Math.random() * bots.length)];
  const playerDeck = playerPicks.filter((card) => selectedDeckCardIds.has(card.id));
  currentDuel = {
    player: createDuelSide("You", playerDeck, "player"),
    opponent: createDuelSide(opponent.name, makeBotDuelDeck(opponent), "opponent"),
    active: "player",
    turn: 0,
    message: `${opponent.name} is ready. Your turn.`,
    feed: [`You sit down across from ${opponent.name}.`],
    selectedHandId: null,
    selectedAttackerId: null,
    pendingSpell: null,
    winner: null,
  };
  deckSaved = true;
  deckBuilder.hidden = true;
  draftLayout.hidden = true;
  duelScreen.hidden = false;
  beginDuelTurn("player");
}

function duelSide(role) {
  return currentDuel[role];
}

function otherDuelSide(role) {
  return currentDuel[role === "player" ? "opponent" : "player"];
}

function logDuel(message) {
  currentDuel.message = message;
  currentDuel.feed.unshift(message);
  currentDuel.feed = currentDuel.feed.slice(0, 6);
}

function finishDuel(winnerRole, message) {
  if (!currentDuel || currentDuel.winner) return;
  currentDuel.winner = winnerRole;
  logDuel(message);
  renderDuel();
  document.querySelector("#duel-result-title").textContent = winnerRole === "player" ? "Victory." : "Defeat.";
  document.querySelector("#duel-result-copy").textContent = message;
  document.querySelector("#duel-result-modal").classList.remove("hidden");
}

function drawDuelCard(side) {
  if (!side.deck.length) {
    finishDuel(side.role === "player" ? "opponent" : "player", `${side.name} ran out of cards to draw.`);
    return false;
  }
  side.hand.push(side.deck.pop());
  return true;
}

function beginDuelTurn(role) {
  if (!currentDuel || currentDuel.winner) return;
  const side = duelSide(role);
  currentDuel.active = role;
  currentDuel.turn += 1;
  side.turnNumber += 1;
  side.chargedThisTurn = false;
  side.mana.forEach((card) => { card.tapped = false; });
  side.battlefield.forEach((creature) => {
    creature.tapped = false;
    if (creature.expiresOnTurn < side.turnNumber) {
      creature.attackBoost = 0;
      creature.doubleBreakerUntil = 0;
      creature.unblockableUntil = 0;
      creature.canAttackUntappedUntil = 0;
    }
  });
  currentDuel.selectedHandId = null;
  currentDuel.selectedAttackerId = null;
  currentDuel.pendingSpell = null;
  if (!(role === "player" && side.turnNumber === 1) && !drawDuelCard(side)) return;
  logDuel(role === "player" ? "Your turn. Charge mana, then play a card." : `${side.name}'s turn.`);
  renderDuel();
  if (role === "opponent") window.setTimeout(startBotTurn, 450);
}

function chargeDuelMana(cardIdToCharge) {
  if (!currentDuel || currentDuel.active !== "player" || currentDuel.player.chargedThisTurn) return;
  const player = currentDuel.player;
  const index = player.hand.findIndex((card) => card.id === cardIdToCharge);
  if (index < 0) return;
  const [card] = player.hand.splice(index, 1);
  card.tapped = false;
  player.mana.push(card);
  player.chargedThisTurn = true;
  currentDuel.selectedHandId = null;
  logDuel(`${card.name} added to your mana zone.`);
  renderDuel();
}

function canPayDuelCard(side, card) {
  const readyMana = side.mana.filter((manaCard) => !manaCard.tapped);
  return readyMana.length >= card.cost && readyMana.some((manaCard) => manaCard.civ === card.civ);
}

function payDuelCost(side, card) {
  const readyMana = side.mana.filter((manaCard) => !manaCard.tapped);
  if (readyMana.length < card.cost) return false;
  const matchingIndex = readyMana.findIndex((manaCard) => manaCard.civ === card.civ);
  if (matchingIndex < 0) return false;
  readyMana.splice(matchingIndex, 1)[0].tapped = true;
  readyMana.slice(0, card.cost - 1).forEach((manaCard) => { manaCard.tapped = true; });
  return true;
}

function getSpellTargetInfo(card, caster) {
  const enemy = otherDuelSide(caster.role);
  const add = (owner, predicate = () => true) => owner.battlefield.filter(predicate).map((creature) => ({ owner, creature }));
  switch (card.name) {
    case "Crimson Hammer": return { max: 1, label: "Choose an opposing creature with 2000 power or less.", targets: add(enemy, (creature) => creature.card.power <= 2000) };
    case "Death Smoke": return { max: 1, label: "Choose an untapped opposing creature.", targets: add(enemy, (creature) => !creature.tapped) };
    case "Tornado Flame": return { max: 1, label: "Choose an opposing creature with 4000 power or less.", targets: add(enemy, (creature) => creature.card.power <= 4000) };
    case "Terror Pit": return { max: 1, label: "Choose an opposing creature to destroy.", targets: add(enemy) };
    case "Natural Snare": return { max: 1, label: "Choose an opposing creature to move to mana.", targets: add(enemy) };
    case "Solar Ray": return { max: 1, label: "Choose an opposing creature to tap.", targets: add(enemy) };
    case "Virtual Tripwire": return { max: 1, label: "Choose an opposing creature to tap.", targets: add(enemy) };
    case "Moonlight Flash": return { max: 2, label: "Choose up to two opposing creatures to tap.", targets: add(enemy) };
    case "Spiral Gate": return { max: 1, label: "Choose a creature to return to its owner's hand.", targets: [...add(caster), ...add(enemy)] };
    case "Teleportation": return { max: 2, label: "Choose up to two creatures to return to their owners' hands.", targets: [...add(caster), ...add(enemy)] };
    case "Burning Power": return { max: 1, label: "Choose one of your creatures to boost.", targets: add(caster) };
    case "Magma Gazer": return { max: 1, label: "Choose one of your creatures to boost.", targets: add(caster) };
    case "Pangaea's Song": return { max: 1, label: "Choose one of your creatures to move to mana.", targets: add(caster) };
    case "Laser Wing": return { max: 2, label: "Choose up to two of your creatures to make unblockable.", targets: add(caster) };
    case "Sonic Wing": return { max: 1, label: "Choose one of your creatures to make unblockable.", targets: add(caster) };
    case "Chaos Strike": return { max: 1, label: "Choose an untapped opposing creature your creatures may attack.", targets: add(enemy, (creature) => !creature.tapped) };
    default: return null;
  }
}

function playDuelCard(role, cardIdToPlay) {
  const side = duelSide(role);
  const index = side.hand.findIndex((card) => card.id === cardIdToPlay);
  if (index < 0) return;
  const card = side.hand[index];
  if (!canPayDuelCard(side, card)) return;
  if (card.type === "spell" && role === "player") {
    const targetInfo = getSpellTargetInfo(card, side);
    if (targetInfo) {
      if (!targetInfo.targets.length) {
        logDuel(`${card.name} has no legal targets.`);
        renderDuel();
        return;
      }
      currentDuel.pendingSpell = { cardId: card.id, card, targetInfo, targets: [] };
      renderDuel();
      return;
    }
  }
  if (!payDuelCost(side, card)) return;
  side.hand.splice(index, 1);
  currentDuel.selectedHandId = null;
  if (card.type === "spell") {
    resolveDuelSpell(card, side);
    side.graveyard.push(card);
  } else {
    side.battlefield.push({
      card,
      tapped: false,
      summonedOnTurn: side.turnNumber,
      attackBoost: 0,
      expiresOnTurn: 0,
      doubleBreakerUntil: 0,
      unblockableUntil: 0,
      canAttackUntappedUntil: 0,
    });
    logDuel(`${side.name} summoned ${card.name}.`);
    resolveCreatureEnter(card, side);
  }
  renderDuel();
}

function cancelPendingSpell() {
  if (!currentDuel?.pendingSpell) return;
  currentDuel.pendingSpell = null;
  renderDuel();
}

function resolvePendingSpell() {
  if (!currentDuel?.pendingSpell || !currentDuel.pendingSpell.targets.length) return;
  const side = currentDuel.player;
  const pending = currentDuel.pendingSpell;
  const cardIndex = side.hand.findIndex((card) => card.id === pending.cardId);
  if (cardIndex < 0 || !canPayDuelCard(side, pending.card) || !payDuelCost(side, pending.card)) return;
  const [card] = side.hand.splice(cardIndex, 1);
  currentDuel.pendingSpell = null;
  currentDuel.selectedHandId = null;
  resolveDuelSpell(card, side, pending.targets);
  side.graveyard.push(card);
  renderDuel();
}

function duelAttackPower(creature, side = null, attacking = false) {
  let power = creature.card.power + creature.attackBoost;
  if (attacking) {
    power += creature.card.powerAttackerBonus || 0;
    if (creature.card.name === "Bolshack Dragon" && side) {
      power += side.graveyard.filter((card) => card.civ === "Fire").length * 1000;
    }
  }
  return power;
}

function weakestCreature(creatures, predicate = () => true) {
  return [...creatures].filter(predicate).sort((first, second) => duelAttackPower(first) - duelAttackPower(second))[0] || null;
}

function destroyDuelCreature(owner, creature) {
  const index = owner.battlefield.indexOf(creature);
  if (index < 0) return;
  owner.battlefield.splice(index, 1);
  owner.graveyard.push(creature.card);
}

function resolveDuelBattle(attackingSide, attacker, defendingSide, defender) {
  const attackPower = duelAttackPower(attacker, attackingSide, true);
  const defensePower = duelAttackPower(defender);
  const attackerWins = attackPower > defensePower;
  const defenderWins = defensePower > attackPower;
  if (!attackerWins) destroyDuelCreature(attackingSide, attacker);
  if (!defenderWins) destroyDuelCreature(defendingSide, defender);
  if (attacker.card.slayer || attacker.slayerUntil >= attackingSide.turnNumber) {
    destroyDuelCreature(defendingSide, defender);
  }
  if (defender.card.slayer || defender.slayerUntil >= defendingSide.turnNumber) {
    destroyDuelCreature(attackingSide, attacker);
  }
  if (attackerWins && attacker.card.selfDestructOnWin) destroyDuelCreature(attackingSide, attacker);
  if (defenderWins && defender.card.selfDestructOnWin) destroyDuelCreature(defendingSide, defender);
}

function bounceDuelCreature(owner, creature) {
  const index = owner.battlefield.indexOf(creature);
  if (index < 0) return;
  owner.battlefield.splice(index, 1);
  owner.hand.push(creature.card);
}

function resolveDuelSpell(card, caster, selectedTargets = []) {
  const enemy = otherDuelSide(caster.role);
  const enemyCreature = (predicate) => weakestCreature(enemy.battlefield, predicate);
  const ownCreature = weakestCreature(caster.battlefield);
  const selectedFrom = (owner) => selectedTargets.filter((target) => target.owner === owner).map((target) => target.creature);
  const selectedEnemy = (predicate = () => true) => selectedFrom(enemy).find(predicate) || enemyCreature(predicate);
  const selectedOwn = (predicate = () => true) => selectedFrom(caster).find(predicate) || weakestCreature(caster.battlefield, predicate);
  const markBoost = (creature, power, doubleBreaker = false, unblockable = false) => {
    if (!creature) return;
    creature.attackBoost += power;
    creature.expiresOnTurn = caster.turnNumber;
    if (doubleBreaker) creature.doubleBreakerUntil = caster.turnNumber;
    if (unblockable) creature.unblockableUntil = caster.turnNumber;
  };
  let result = `${card.name} was cast.`;

  switch (card.name) {
    case "Aura Blast":
      caster.battlefield.forEach((creature) => markBoost(creature, 2000));
      result = `${card.name} gave your creatures +2000 power while attacking this turn.`;
      break;
    case "Brain Serum":
      drawDuelCard(caster);
      drawDuelCard(caster);
      result = `${card.name}: you drew up to two cards.`;
      break;
    case "Burning Power":
      {
        const target = selectedOwn();
        markBoost(target, 2000);
        result = target ? `${target.card.name} gets +2000 power while attacking.` : `${card.name} had no creature to boost.`;
      }
      break;
    case "Chaos Strike":
      {
        const target = selectedEnemy((creature) => !creature.tapped);
        if (target) {
          caster.battlefield.forEach((creature) => {
            creature.canAttackUntappedUntil = caster.turnNumber;
            creature.canAttackUntappedTargetId = target.card.id;
          });
          result = `${card.name}: your creatures may attack ${target.card.name} this turn.`;
        }
      }
      break;
    case "Creeping Plague":
      caster.battlefield.forEach((creature) => { creature.slayerUntil = caster.turnNumber; });
      result = `${card.name}: your creatures gain Slayer for this turn.`;
      break;
    case "Crimson Hammer":
    case "Tornado Flame": {
      const limit = card.name === "Crimson Hammer" ? 2000 : 4000;
      const target = selectedEnemy((creature) => creature.card.power <= limit);
      if (target) {
        destroyDuelCreature(enemy, target);
        result = `${card.name} destroyed ${target.card.name}.`;
      } else result = `${card.name} found no legal target.`;
      break;
    }
    case "Crystal Memory":
    case "Dimension Gate": {
      const targetIndex = caster.deck.findIndex((candidate) => card.name !== "Dimension Gate" || candidate.type === "creature");
      if (targetIndex >= 0) {
        const [found] = caster.deck.splice(targetIndex, 1);
        caster.hand.push(found);
        result = `${card.name} found ${found.name}.`;
      }
      break;
    }
    case "Dark Reversal": {
      const targetIndex = caster.graveyard.map((candidate) => candidate.civ === "Darkness").lastIndexOf(true);
      if (targetIndex >= 0) {
        const [returned] = caster.graveyard.splice(targetIndex, 1);
        caster.hand.push(returned);
        result = `${card.name} returned ${returned.name} to your hand.`;
      }
      break;
    }
    case "Death Smoke": {
      const target = selectedEnemy((creature) => !creature.tapped);
      if (target) {
        destroyDuelCreature(enemy, target);
        result = `${card.name} destroyed untapped ${target.card.name}.`;
      } else result = `${card.name} found no legal target.`;
      break;
    }
    case "Ghost Touch":
      if (enemy.hand.length) {
        const discarded = enemy.hand.splice(Math.floor(Math.random() * enemy.hand.length), 1)[0];
        enemy.graveyard.push(discarded);
        result = `${card.name} made ${enemy.name} discard a card.`;
      }
      break;
    case "Holy Awe":
      enemy.battlefield.forEach((creature) => { creature.tapped = true; });
      result = `${card.name} tapped all opposing creatures.`;
      break;
    case "Laser Wing":
    case "Sonic Wing":
      {
        const targets = selectedFrom(caster).length
          ? selectedFrom(caster)
          : caster.battlefield.slice(0, card.name === "Laser Wing" ? 2 : 1);
        targets.forEach((creature) => { creature.unblockableUntil = caster.turnNumber; });
        result = `${card.name}: ${targets.map((creature) => creature.card.name).join(" and ")} cannot be blocked this turn.`;
      }
      break;
    case "Magma Gazer":
      {
        const target = selectedOwn();
        markBoost(target, 4000, true);
        result = target ? `${target.card.name} gets +4000 power and Double Breaker this turn.` : `${card.name} had no creature to boost.`;
      }
      break;
    case "Moonlight Flash":
      {
        const targets = selectedFrom(enemy).length ? selectedFrom(enemy) : enemy.battlefield.slice(0, 2);
        targets.forEach((creature) => { creature.tapped = true; });
        result = `${card.name} tapped ${targets.map((creature) => creature.card.name).join(" and ")}.`;
      }
      break;
    case "Natural Snare": {
      const target = selectedEnemy();
      if (target) {
        destroyDuelCreature(enemy, target);
        enemy.mana.push(target.card);
        result = `${card.name} moved ${target.card.name} to ${enemy.name}'s mana.`;
      }
      break;
    }
    case "Pangaea's Song":
      {
        const target = selectedOwn();
        if (target) {
          destroyDuelCreature(caster, target);
          caster.mana.push(target.card);
          result = `${card.name} moved ${target.card.name} to your mana.`;
        }
      }
      break;
    case "Solar Ray":
    case "Virtual Tripwire": {
      const target = selectedEnemy((creature) => !creature.tapped) || selectedEnemy();
      if (target) {
        target.tapped = true;
        result = `${card.name} tapped ${target.card.name}.`;
      }
      break;
    }
    case "Spiral Gate":
    case "Teleportation": {
      const targets = selectedTargets.length
        ? selectedTargets
        : [...enemy.battlefield].sort((first, second) => duelAttackPower(first) - duelAttackPower(second)).slice(0, card.name === "Teleportation" ? 2 : 1).map((creature) => ({ owner: enemy, creature }));
      targets.forEach(({ owner, creature }) => bounceDuelCreature(owner, creature));
      result = targets.length ? `${card.name} returned ${targets.map(({ creature }) => creature.card.name).join(" and ")} to hand.` : `${card.name} found no legal target.`;
      break;
    }
    case "Terror Pit": {
      const target = selectedEnemy();
      if (target) {
        destroyDuelCreature(enemy, target);
        result = `${card.name} destroyed ${target.card.name}.`;
      }
      break;
    }
    case "Ultimate Force":
      for (let index = 0; index < 2 && caster.deck.length; index += 1) caster.mana.push(caster.deck.pop());
      result = `${card.name} added up to two cards to your mana.`;
      break;
    default:
      break;
  }
  logDuel(result);
}

function resolveCreatureEnter(card, side) {
  const enemy = otherDuelSide(side.role);
  const ownCreature = weakestCreature(side.battlefield);
  const enemyCreature = (predicate = () => true) => weakestCreature(enemy.battlefield, predicate);
  const removeOwnCreature = (creature) => {
    if (creature) destroyDuelCreature(side, creature);
    return creature;
  };
  const drawUpTo = (count) => {
    let drawn = 0;
    while (drawn < count && drawDuelCard(side)) drawn += 1;
    return drawn;
  };
  let message = "";

  switch (card.name) {
    case "Aqua Hulcus":
      drawUpTo(1);
      message = "Aqua Hulcus drew a card.";
      break;
    case "Aqua Sniper": {
      const targets = [
        ...side.battlefield.map((creature) => ({ owner: side, creature })),
        ...enemy.battlefield.map((creature) => ({ owner: enemy, creature })),
      ].sort((first, second) => duelAttackPower(first.creature) - duelAttackPower(second.creature)).slice(0, 2);
      targets.forEach(({ owner, creature }) => bounceDuelCreature(owner, creature));
      message = targets.length ? `Aqua Sniper returned ${targets.map(({ creature }) => creature.card.name).join(" and ")} to hand.` : "Aqua Sniper had no creatures to return.";
      break;
    }
    case "Artisan Picora":
    case "Onslaughter Triceps": {
      const lostMana = side.mana.pop();
      if (lostMana) side.graveyard.push(lostMana);
      message = `${card.name} sent ${lostMana ? lostMana.name : "no card"} from mana to the graveyard.`;
      break;
    }
    case "Black Feather, Shadow of Rage": {
      const target = weakestCreature(side.battlefield, (creature) => creature.card.id !== card.id) || ownCreature;
      removeOwnCreature(target);
      message = target ? `Black Feather destroyed your ${target.card.name}.` : "Black Feather had no creature to destroy.";
      break;
    }
    case "Bronze-Arm Tribe": {
      const topCard = side.deck.pop();
      if (topCard) side.mana.push(topCard);
      else finishDuel(enemy.role, `${side.name} ran out of cards.`);
      message = topCard ? "Bronze-Arm Tribe added the top card of your deck to mana." : "Bronze-Arm Tribe found an empty deck.";
      break;
    }
    case "Explosive Fighter Ucarn":
      for (let index = 0; index < 2 && side.mana.length; index += 1) side.graveyard.push(side.mana.pop());
      message = "Explosive Fighter Ucarn sent two mana cards to your graveyard.";
      break;
    case "Gigaberos": {
      const others = [...side.battlefield].filter((creature) => creature.card.id !== card.id).sort((first, second) => duelAttackPower(first) - duelAttackPower(second));
      if (others.length >= 2) {
        others.slice(0, 2).forEach((creature) => destroyDuelCreature(side, creature));
        message = `Gigaberos destroyed your ${others[0].card.name} and ${others[1].card.name}.`;
      } else {
        removeOwnCreature(side.battlefield.find((creature) => creature.card.id === card.id));
        message = "Gigaberos destroyed itself because you had fewer than two other creatures.";
      }
      break;
    }
    case "Gigargon": {
      const returned = side.graveyard.filter((candidate) => candidate.type === "creature").sort((first, second) => second.cost - first.cost).slice(0, 2);
      returned.forEach((creature) => {
        side.graveyard.splice(side.graveyard.indexOf(creature), 1);
        side.hand.push(creature);
      });
      message = returned.length ? `Gigargon returned ${returned.map((creature) => creature.name).join(" and ")} to hand.` : "Gigargon had no creatures to return.";
      break;
    }
    case "Illusionary Merfolk":
      if (side.battlefield.some((creature) => creature.card.name === "Tropico")) {
        drawUpTo(3);
        message = "Illusionary Merfolk drew up to three cards.";
      } else message = "Illusionary Merfolk found no Cyber Lord, so it drew no cards.";
      break;
    case "King Ripped-Hide":
      drawUpTo(2);
      message = "King Ripped-Hide drew up to two cards.";
      break;
    case "Masked Horror, Shadow of Scorn":
      if (enemy.hand.length) {
        const discarded = enemy.hand.splice(Math.floor(Math.random() * enemy.hand.length), 1)[0];
        enemy.graveyard.push(discarded);
        message = `${enemy.name} discarded a card to Masked Horror.`;
      }
      break;
    case "Meteosaur": {
      const target = enemyCreature((creature) => creature.card.power <= 2000);
      if (target) {
        destroyDuelCreature(enemy, target);
        message = `Meteosaur destroyed ${target.card.name}.`;
      } else message = "Meteosaur found no creature with 2000 power or less.";
      break;
    }
    case "Miele, Vizier of Lightning": {
      const target = enemyCreature((creature) => !creature.tapped) || enemyCreature();
      if (target) target.tapped = true;
      message = target ? `Miele tapped ${target.card.name}.` : "Miele found no creature to tap.";
      break;
    }
    case "Poisonous Mushroom": {
      const discardIndex = side.hand.reduce((lowest, candidate, index, hand) => candidate.cost < hand[lowest].cost ? index : lowest, 0);
      const manaCard = side.hand.splice(discardIndex, 1)[0];
      if (manaCard) side.mana.push(manaCard);
      message = manaCard ? `Poisonous Mushroom added ${manaCard.name} from hand to mana.` : "Poisonous Mushroom had no card to move to mana.";
      break;
    }
    case "Rayla, Truth Enforcer": {
      const spellIndex = side.deck.findIndex((candidate) => candidate.type === "spell");
      if (spellIndex >= 0) {
        const [spell] = side.deck.splice(spellIndex, 1);
        side.hand.push(spell);
        message = `Rayla found ${spell.name}.`;
      } else message = "Rayla found no spell in the deck.";
      break;
    }
    case "Rothus, the Traveler": {
      const ownTarget = weakestCreature(side.battlefield, (creature) => creature.card.id !== card.id) || ownCreature;
      const enemyTarget = enemyCreature();
      if (ownTarget) destroyDuelCreature(side, ownTarget);
      if (enemyTarget) destroyDuelCreature(enemy, enemyTarget);
      message = `Rothus destroyed ${ownTarget?.card.name || "no friendly creature"} and ${enemyTarget?.card.name || "no opposing creature"}.`;
      break;
    }
    case "Saucer-Head Shark":
      [...side.battlefield, ...enemy.battlefield].filter((creature) => creature.card.power <= 2000).forEach((creature) => {
        const owner = side.battlefield.includes(creature) ? side : enemy;
        bounceDuelCreature(owner, creature);
      });
      message = "Saucer-Head Shark returned creatures with 2000 power or less to hand.";
      break;
    case "Scarlet Skyterror":
      [...side.battlefield, ...enemy.battlefield].filter((creature) => creature.card.blocker).forEach((creature) => {
        const owner = side.battlefield.includes(creature) ? side : enemy;
        destroyDuelCreature(owner, creature);
      });
      message = "Scarlet Skyterror destroyed all Blockers.";
      break;
    case "Stinger Worm":
    case "Swamp Worm": {
      const target = card.name === "Stinger Worm" ? ownCreature : enemyCreature();
      if (target) destroyDuelCreature(card.name === "Stinger Worm" ? side : enemy, target);
      message = target ? `${card.name} destroyed ${target.card.name}.` : `${card.name} had no creature to destroy.`;
      break;
    }
    case "Storm Shell": {
      const target = enemyCreature();
      if (target) {
        destroyDuelCreature(enemy, target);
        enemy.mana.push(target.card);
        message = `${enemy.name} moved ${target.card.name} to mana.`;
      } else message = "Storm Shell found no creature to move.";
      break;
    }
    case "Thorny Mandra": {
      const target = side.graveyard.filter((candidate) => candidate.type === "creature").sort((first, second) => second.cost - first.cost)[0];
      if (target) {
        side.graveyard.splice(side.graveyard.indexOf(target), 1);
        side.mana.push(target);
      }
      message = target ? `Thorny Mandra moved ${target.name} from graveyard to mana.` : "Thorny Mandra had no creature to move.";
      break;
    }
    case "Unicorn Fish": {
      const target = enemyCreature();
      if (target) bounceDuelCreature(enemy, target);
      message = target ? `Unicorn Fish returned ${target.card.name} to hand.` : "Unicorn Fish found no creature to return.";
      break;
    }
    case "Vampire Silphy": {
      [...side.battlefield, ...enemy.battlefield].filter((creature) => creature.card.power <= 3000).forEach((creature) => {
        const owner = side.battlefield.includes(creature) ? side : enemy;
        destroyDuelCreature(owner, creature);
      });
      message = "Vampire Silphy destroyed all creatures with 3000 power or less.";
      break;
    }
    default:
      return;
  }
  logDuel(message);
}

function attackDuelShield(attackerId) {
  if (!currentDuel || currentDuel.active !== "player") return;
  const attacker = currentDuel.player.battlefield.find((creature) => creature.card.id === attackerId);
  if (!attacker || attacker.tapped || attacker.card.cannotAttackPlayers || attacker.card.cannotAttack) return;
  attacker.tapped = true;
  currentDuel.selectedAttackerId = null;
  const opponent = currentDuel.opponent;
  const isUnblockable = attacker.unblockableUntil === currentDuel.player.turnNumber;
  const blocker = isUnblockable ? null : weakestCreature(opponent.battlefield, (creature) => creature.card.blocker && !creature.tapped);
  if (blocker) {
    blocker.tapped = true;
    resolveDuelBattle(currentDuel.player, attacker, opponent, blocker);
    logDuel(`${blocker.card.name} blocked ${attacker.card.name}.`);
    renderDuel();
    return;
  }
  if (!opponent.shields.length) {
    finishDuel("player", "Your attack reached the opponent directly.");
    return;
  }
  const breaks = attacker.card.doubleBreaker || attacker.doubleBreakerUntil === currentDuel.player.turnNumber ? 2 : 1;
  const brokenShields = Math.min(breaks, opponent.shields.length);
  for (let index = 0; index < brokenShields; index += 1) {
    const shield = opponent.shields.pop();
    if (shield.shieldTrigger && shield.type === "spell") {
      resolveDuelSpell(shield, opponent);
      opponent.graveyard.push(shield);
    } else opponent.hand.push(shield);
  }
  logDuel(`${attacker.card.name} broke ${brokenShields} shield${brokenShields > 1 ? "s" : ""}.`);
  renderDuel();
}

function attackDuelCreature(attackerId, targetId) {
  if (!currentDuel || currentDuel.active !== "player") return;
  const attacker = currentDuel.player.battlefield.find((creature) => creature.card.id === attackerId);
  const target = currentDuel.opponent.battlefield.find((creature) => creature.card.id === targetId);
  if (!attacker || !target || attacker.tapped) return;
  if (!target.tapped && attacker.canAttackUntappedUntil !== currentDuel.player.turnNumber && !attacker.card.canAttackUntapped) return;
  attacker.tapped = true;
  resolveDuelBattle(currentDuel.player, attacker, currentDuel.opponent, target);
  currentDuel.selectedAttackerId = null;
  logDuel(`${attacker.card.name} battled ${target.card.name}.`);
  renderDuel();
}

function renderDuelShields(side, container) {
  container.replaceChildren();
  side.shields.forEach(() => {
    const shield = document.createElement("span");
    shield.className = "shield-back";
    shield.setAttribute("aria-label", "Face-down shield");
    container.append(shield);
  });
}

function renderDuelBattlefield(side, container, isPlayer) {
  container.replaceChildren();
  side.battlefield.forEach((creature) => {
    const tile = document.createElement("div");
    tile.className = `battle-creature${creature.tapped ? " tapped" : ""}${currentDuel.selectedAttackerId === creature.card.id ? " selected" : ""}`;
    const image = document.createElement("img");
    image.src = creature.card.image;
    image.alt = "";
    image.loading = "lazy";
    const name = document.createElement("strong");
    name.textContent = creature.card.name;
    const power = document.createElement("small");
    power.textContent = `${duelAttackPower(creature).toLocaleString()} POWER`;
    tile.append(image, name, power);
    if (isPlayer && !currentDuel.pendingSpell && currentDuel.active === "player" && !creature.tapped && !creature.card.cannotAttack && creature.summonedOnTurn < side.turnNumber) {
      const attackButton = document.createElement("button");
      attackButton.type = "button";
      attackButton.className = "battle-action";
      attackButton.textContent = currentDuel.selectedAttackerId === creature.card.id ? "CANCEL ATTACK" : "ATTACK";
      attackButton.addEventListener("click", () => {
        currentDuel.selectedAttackerId = currentDuel.selectedAttackerId === creature.card.id ? null : creature.card.id;
        renderDuel();
      });
      tile.append(attackButton);
    }
    if (!currentDuel.pendingSpell && !isPlayer && currentDuel.active === "player" && currentDuel.selectedAttackerId !== null && (creature.tapped || currentDuel.player.battlefield.find((item) => item.card.id === currentDuel.selectedAttackerId)?.canAttackUntappedUntil === currentDuel.player.turnNumber || currentDuel.player.battlefield.find((item) => item.card.id === currentDuel.selectedAttackerId)?.card.canAttackUntapped)) {
      const targetButton = document.createElement("button");
      targetButton.type = "button";
      targetButton.className = "battle-action target-action";
      targetButton.textContent = "BATTLE";
      targetButton.addEventListener("click", () => attackDuelCreature(currentDuel.selectedAttackerId, creature.card.id));
      tile.append(targetButton);
    }
    if (currentDuel.pendingSpell) {
      const option = currentDuel.pendingSpell.targetInfo.targets.find((target) => target.owner === side && target.creature === creature);
      if (option) {
        const isChosen = currentDuel.pendingSpell.targets.includes(option);
        const targetButton = document.createElement("button");
        targetButton.type = "button";
        targetButton.className = `battle-action target-action${isChosen ? " chosen-target" : ""}`;
        targetButton.textContent = isChosen ? "CHOSEN" : "TARGET";
        targetButton.setAttribute("aria-pressed", String(isChosen));
        targetButton.addEventListener("click", () => {
          const targets = currentDuel.pendingSpell.targets;
          if (isChosen) {
            currentDuel.pendingSpell.targets = targets.filter((target) => target !== option);
          } else if (targets.length < currentDuel.pendingSpell.targetInfo.max) {
            targets.push(option);
          } else if (currentDuel.pendingSpell.targetInfo.max === 1) {
            currentDuel.pendingSpell.targets = [option];
          }
          renderDuel();
        });
        tile.append(targetButton);
      }
    }
    container.append(tile);
  });
}

function renderDuelHand() {
  const player = currentDuel.player;
  const hand = document.querySelector("#player-hand");
  hand.replaceChildren();
  player.hand.forEach((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `duel-hand-card${currentDuel.selectedHandId === card.id ? " selected" : ""}`;
    button.setAttribute("aria-label", `${card.name}, cost ${card.cost}, ${card.type}`);
    button.innerHTML = `<img src="${card.image}" alt="" loading="lazy"><span class="duel-cost">${card.cost}</span><strong>${card.name}</strong><small>${card.type === "spell" ? "SPELL" : `${card.power.toLocaleString()} POWER`}</small>`;
    button.addEventListener("click", () => {
      currentDuel.selectedHandId = currentDuel.selectedHandId === card.id ? null : card.id;
      renderDuel();
    });
    hand.append(button);
  });
  const actions = document.querySelector("#duel-card-actions");
  actions.replaceChildren();
  if (currentDuel.pendingSpell) {
    const pending = currentDuel.pendingSpell;
    const instruction = document.createElement("strong");
    instruction.textContent = `${pending.card.name}: ${pending.targetInfo.label} (${pending.targets.length}/${pending.targetInfo.max})`;
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.className = "small-action";
    cancelButton.textContent = "CANCEL";
    cancelButton.addEventListener("click", cancelPendingSpell);
    const confirmButton = document.createElement("button");
    confirmButton.type = "button";
    confirmButton.className = "small-action primary-action";
    confirmButton.textContent = "CONFIRM TARGETS";
    confirmButton.disabled = pending.targets.length === 0;
    confirmButton.addEventListener("click", resolvePendingSpell);
    actions.append(instruction, cancelButton, confirmButton);
    return;
  }
  const selected = player.hand.find((card) => card.id === currentDuel.selectedHandId);
  if (!selected) {
    actions.textContent = "Select a card from your hand.";
    return;
  }
  const title = document.createElement("strong");
  title.textContent = `${selected.name} / ${selected.cost} MANA`;
  const chargeButton = document.createElement("button");
  chargeButton.type = "button";
  chargeButton.className = "small-action";
  chargeButton.textContent = "ADD TO MANA";
  chargeButton.disabled = currentDuel.active !== "player" || player.chargedThisTurn;
  chargeButton.addEventListener("click", () => chargeDuelMana(selected.id));
  const playButton = document.createElement("button");
  playButton.type = "button";
  playButton.className = "small-action primary-action";
  const targetInfo = selected.type === "spell" ? getSpellTargetInfo(selected, player) : null;
  playButton.textContent = targetInfo ? "CHOOSE TARGETS" : selected.type === "spell" ? "CAST SPELL" : "SUMMON CREATURE";
  playButton.disabled = currentDuel.active !== "player" || !canPayDuelCard(player, selected) || Boolean(targetInfo && !targetInfo.targets.length);
  playButton.addEventListener("click", () => playDuelCard("player", selected.id));
  actions.append(title, chargeButton, playButton);
}

function renderDuel() {
  if (!currentDuel) return;
  const player = currentDuel.player;
  const opponent = currentDuel.opponent;
  document.querySelector("#duel-turn-label").textContent = currentDuel.active === "player" ? "YOUR TURN" : `${opponent.name.toUpperCase()}'S TURN`;
  document.querySelector("#duel-round-label").textContent = `TURN ${String(currentDuel.turn).padStart(2, "0")}`;
  document.querySelector("#duel-priority").textContent = currentDuel.active === "player" ? "YOUR TURN" : `${opponent.name.toUpperCase()} IS THINKING`;
  document.querySelector("#duel-message").textContent = currentDuel.message;
  document.querySelector("#bot-duel-name").textContent = opponent.name.toUpperCase();
  document.querySelector("#player-shield-count").textContent = String(player.shields.length);
  document.querySelector("#bot-shield-count").textContent = String(opponent.shields.length);
  document.querySelector("#player-deck-count").textContent = String(player.deck.length);
  document.querySelector("#bot-deck-count").textContent = String(opponent.deck.length);
  document.querySelector("#player-grave-count").textContent = String(player.graveyard.length);
  document.querySelector("#player-hand-count").textContent = `${player.hand.length} CARDS`;
  document.querySelector("#bot-hand-count").textContent = String(opponent.hand.length);
  const readyMana = player.mana.filter((card) => !card.tapped).length;
  document.querySelector("#player-mana-count").textContent = `${readyMana} / ${player.mana.length}`;
  document.querySelector("#player-mana").innerHTML = player.mana.map((card) => `<span class="mana-card${card.tapped ? " tapped" : ""}" title="${card.name}">${card.civ[0]}</span>`).join("");
  renderDuelShields(opponent, document.querySelector("#bot-shields"));
  renderDuelShields(player, document.querySelector("#player-shields"));
  renderDuelBattlefield(opponent, document.querySelector("#bot-battlefield"), false);
  renderDuelBattlefield(player, document.querySelector("#player-battlefield"), true);
  renderDuelHand();
  document.querySelector("#duel-feed").innerHTML = currentDuel.feed.map((message) => `<p>${message}</p>`).join("");
  const selectedAttacker = player.battlefield.find((creature) => creature.card.id === currentDuel.selectedAttackerId);
  const attackShieldsButton = document.querySelector("#attack-shields");
  attackShieldsButton.hidden = !selectedAttacker;
  attackShieldsButton.disabled = currentDuel.active !== "player" || !selectedAttacker || selectedAttacker.card.cannotAttack || selectedAttacker.card.cannotAttackPlayers;
  document.querySelector("#end-turn").disabled = currentDuel.active !== "player" || Boolean(currentDuel.winner) || Boolean(currentDuel.pendingSpell);
}

function startBotTurn() {
  if (!currentDuel || currentDuel.winner || currentDuel.active !== "opponent") return;
  const side = currentDuel.opponent;
  if (!side.chargedThisTurn && side.hand.length) {
    side.hand.sort((first, second) => second.cost - first.cost);
    const charged = side.hand.shift();
    charged.tapped = false;
    side.mana.push(charged);
    side.chargedThisTurn = true;
    logDuel(`${side.name} charged a card to mana.`);
  }
  let playable = side.hand.filter((card) => canPayDuelCard(side, card));
  while (playable.length) {
    playable.sort((first, second) => {
      const value = (card) => card.type === "creature" ? card.power - card.cost * 500 : 1000;
      return value(second) - value(first);
    });
    playDuelCard("opponent", playable[0].id);
    if (currentDuel.winner) return;
    playable = side.hand.filter((card) => canPayDuelCard(side, card));
  }
  const player = currentDuel.player;
  side.battlefield.filter((creature) => !creature.tapped && !creature.card.cannotAttack && !creature.card.cannotAttackPlayers && creature.summonedOnTurn < side.turnNumber).forEach((creature) => {
    if (currentDuel.winner) return;
    creature.tapped = true;
    const target = weakestCreature(player.battlefield, (candidate) => candidate.tapped || creature.card.canAttackUntapped);
    if (target && duelAttackPower(target) <= duelAttackPower(creature, side, true)) {
      resolveDuelBattle(side, creature, player, target);
      logDuel(`${side.name}'s ${creature.card.name} attacked ${target.card.name}.`);
    } else {
      const isUnblockable = creature.unblockableUntil === side.turnNumber;
      const blocker = isUnblockable ? null : weakestCreature(player.battlefield, (candidate) => candidate.card.blocker && !candidate.tapped);
      if (blocker) {
        blocker.tapped = true;
        resolveDuelBattle(side, creature, player, blocker);
        logDuel(`${blocker.card.name} blocked ${creature.card.name}.`);
        return;
      }
      if (!player.shields.length) {
        finishDuel("opponent", `${side.name} attacked you directly.`);
        return;
      }
      const breaks = creature.card.doubleBreaker || creature.doubleBreakerUntil === side.turnNumber ? 2 : 1;
      const brokenShields = Math.min(breaks, player.shields.length);
      for (let index = 0; index < brokenShields; index += 1) {
        const shield = player.shields.pop();
        if (shield.shieldTrigger && shield.type === "spell") {
          resolveDuelSpell(shield, player);
          player.graveyard.push(shield);
        } else player.hand.push(shield);
      }
      logDuel(`${side.name}'s ${creature.card.name} broke ${brokenShields} of your shields.`);
    }
  });
  if (currentDuel.winner) return;
  renderDuel();
  window.setTimeout(() => beginDuelTurn("player"), 700);
}

function endPlayerTurn() {
  if (!currentDuel || currentDuel.active !== "player" || currentDuel.winner) return;
  currentDuel.selectedHandId = null;
  currentDuel.selectedAttackerId = null;
  beginDuelTurn("opponent");
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
  duelScreen.hidden = true;
  currentDuel = null;
  document.querySelector("#duel-result-modal").classList.add("hidden");
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
  startDuel();
});
document.querySelector("#end-turn").addEventListener("click", endPlayerTurn);
document.querySelector("#attack-shields").addEventListener("click", () => {
  if (currentDuel?.selectedAttackerId !== null) attackDuelShield(currentDuel.selectedAttackerId);
});
document.querySelector("#return-to-deck").addEventListener("click", () => {
  duelScreen.hidden = true;
  deckBuilder.hidden = false;
  renderDeckBuilder();
});
document.querySelector("#return-to-results").addEventListener("click", () => {
  document.querySelector("#duel-result-modal").classList.add("hidden");
  duelScreen.hidden = true;
  deckBuilder.hidden = false;
  renderDeckBuilder();
});
document.querySelector("#play-again").addEventListener("click", () => {
  document.querySelector("#duel-result-modal").classList.add("hidden");
  startDuel();
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