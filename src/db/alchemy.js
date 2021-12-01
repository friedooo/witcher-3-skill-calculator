const alchemy = {
  desc: "These abilities improve Potions, Bombs, Mutagens, Decoctions and Oils. These Skill appear Green when equipped.",
  0: {
    Brewing: {
      points: 5,
      desc: "Enables the brewing and drinking of witcher Potions",
    },
    "Oil Preparation": {
      points: 5,
      desc: "Enables the creation of Oils that can be applied to swords.",
    },
    "Bomb Creation": {
      points: 5,
      desc: "Enables the creation of handheld Bombs that can be thrown at enemies.",
    },
    Mutation: {
      points: 5,
      desc: "Enables the extraction of Mutagens from the corpses of powerful Monsters. Witchers use these to grant their bodies new abilities.",
    },
    "Trial of the Grasses": {
      points: 5,
      desc: "Mutation that lets witchers withstand the Toxicity of Potions that would kill normal people.",
    },
  },
  1: {
    "Heightened Tolerance": {
      points: 0,
      desc: "Effect: Increases Potion overdose threshold by 5%. Potion duration time: +5%",
    },
    "Poisoned Blades": {
      points: 0,
      desc: "Effect: Oil applied to the blades gives a 3% chance of poisoning the target on each hit. The chance is greater the higher the level of Oil used. Potion duration time: +5%",
    },
    "Steady Aim": {
      points: 0,
      desc: "Effect: Time is slowed a further 15% while aiming Bombs. Potion duration +5%",
    },
    "Acquired Tolerance": {
      points: 0,
      desc: "Effect: Every known level 1 alchemical recipe, increases maximum Toxicity by 1. Potion duration time: +5%",
    },
    Frenzy: {
      points: 0,
      desc: "Effect: If Potion Toxicity is above 0, time automatically slows when an enemy is about to perform a counterattack. Potion duration time: +5%",
    },
  },
  2: {
    Refreshment: {
      points: 0,
      desc: "Effect: Each Potion does imbibed heals 5% of maximum Vitality. Potion duration time: +5%",
    },
    "Protective Coating": {
      points: 0,
      desc: "Effect: Adds +5% protection against attacks from the monster type the Oil targets. Potion duration time: +5%",
    },
    Pyrotechnics: {
      points: 0,
      desc: "Effect: Bombs that do not usually inflict damage now deal 30 damage in addition to their normal effects. Potion duration time: +5%",
    },
    "Tissue Transmutation": {
      points: 0,
      desc: "Effect: When consumed, Mutagen Decoction increases maximum Vitality by 200 for Decoction's effective duration. Potion duration time: +5%",
    },
    "Endure Pain": {
      points: 0,
      desc: "Effect: Increases maximum Vitality by 10% if toxicity exceeds the safe threshold. Potion duration time: +5%",
    },
  },
  3: {
    "Delayed Recovery": {
      points: 0,
      desc: "Effect: Potion effects don't wear off until potion Toxicity falls to 90% of the maximum level. Potion duration time: +5%",
    },
    Fixative: {
      points: 0,
      desc: "Effect: Blade Oils now have 33% more charges Potion duration time: +5%",
    },
    Efficiency: {
      points: 0,
      desc: "Effect: Increases maximum number of Bombs in each slot by 1. Potion duration time: +5%",
    },
    Synergy: {
      points: 0,
      desc: "Effect: Increases bonus for Mutagen in Mutagen slots by 10%. Potion duration time: +5%",
    },
    "Fast Metabolism": {
      points: 0,
      desc: "Effect: Toxicity drops 1 point(s) per second faster. Potion duration time: +5%",
    },
  },
  4: {
    "Side Effects": {
      points: 0,
      desc: "Effect: Imbibing a Potion gives 20% chance of activating the effects of another randomly-selected Potion, without additional toxicity cost. Potion duration time: +5%",
    },
    "Hunter Instinct": {
      points: 0,
      desc: "Effect: When Adrenaline Points are at their maximum, critical hit damage against the targeted enemy type is increased by 20%. Potion duration time: +5%",
    },
    "Cluster Bombs": {
      points: 0,
      desc: "Effect:Upon detonation Bombs separate into explosive fragments. Number of fragments: 2. Potion duration time: +5%",
    },
    Adaption: {
      points: 0,
      desc: "Effect: Extends effective duration of all mutagen Decoctions by 10%. Potion duration time: +5%",
    },
    "Killing Spree": {
      points: 0,
      desc: "Effect: If potion Toxicity is above 0, each opponent killed increases the chance for a critical hit by 10%. Potion duration time: +5%",
    },
  },
};

export default alchemy;
