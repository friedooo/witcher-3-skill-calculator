const signs = {
  desc: "These abilities improve the 5 Signs that you can use through out the game. These Skills appear blue when equipped.",
  0: {
    Aard: {
      points: 5,
      desc: "A directed blast of telekinetic energy that staggers opponents, leaving them open for a subsequent attack.",
    },
    Igni: {
      points: 5,
      desc: "A directed fiery blast that damages enemies. Damage scales with Sign intensity.",
    },
    Yrden: {
      points: 5,
      desc: "Magic trap that slows enemies who enter its area of effect.",
    },
    Quen: {
      points: 5,
      desc: "Protective shield that lasts until it has absorbed damage totaling 5% of maximum Vitality.",
    },
    Axii: {
      points: 5,
      desc: "Charms an opponent's mind, temporarily eliminating him from combat.",
    },
  },
  1: {
    "Far-Reaching Aard": {
      points: 0,
      desc: "Effect: Increases Aard range by 1 yard(s) Stamina regeneration in combat: +0.5/s",
    },
    "Melt Armor": {
      points: 0,
      desc: "Effect: Dealing damage with Igni also permanently weakens enemy Armor. Effect scales with Sign intensity up to a maximum of 15%. Stamina regeneration in combat +0.5/s ",
    },
    "Sustained Glyphs": {
      points: 0,
      desc: "Effect: Increases Sign duration by 5 seconds. Number of alternate mode charges: 2. Number of standard mode traps: 1. Stamina regeneration in combat +0.5/s",
    },
    "Exploding Shield": {
      points: 0,
      desc: "Effect: Quen shield pushes opponents back when it breaks. Stamina regeneration in combat +0.5/s",
    },
    Delusion: {
      points: 0,
      desc: "Effect: Target does not move towards Geralt while he is casting Axii. Stamina regeneration in combat +0.5/s",
    },
  },
  2: {
    "Aard Sweep": {
      points: 0,
      desc: "Effect: Alternate Sign Mode: Aard works on every enemy around Geralt. When in this mode, knockdown chance is reduced by 21%. Stamina regeneration in combat +0.5/s",
    },
    Firestream: {
      points: 0,
      desc: "Effect: Alternate sign mode: Emits a continuous stream of fire that damages enemies. Stamina regeneration in combat +0.5/s",
    },
    "Magic Trap": {
      points: 0,
      desc: "Effect: Alternate Sign Mode: Damages and slows all enemies within a 10 yard radius and slows them down. Destroys projectiles passing through this area. Stamina regeneration in combat +0.5/s",
    },
    "Active Shield": {
      points: 0,
      desc: "Effect: Alternate Sign Mode: Creates an active shield. Maintaining it and blocking attacks drains Stamina. Damage absorbed by the shield restores player Vitality. Stamina regeneration in combat +0.5/s",
    },
    Puppet: {
      points: 0,
      desc: "Effect: Alternate Sign Mode: Targeted enemy briefly becomes an ally and deals 20/40/60% (depending on level of development) more damage. Stamina regeneration in combat +0.5/s",
    },
  },
  3: {
    "Aard Intensity": {
      points: 0,
      desc: "Effect: Increases Aard Sign intensity by 5%. Stamina regeneration in combat +0.5/s",
    },
    "Igni Intensity": {
      points: 0,
      desc: "Effect: Increases Igni Sign intensity by 5%. Stamina regeneration in combat +0.5/s",
    },
    "Yrden Intensity": {
      points: 0,
      desc: "Effect: Increases Yrden Sign intensity by 5%. Stamina regeneration in combat +0.5/s",
    },
    "Quen Intensity": {
      points: 0,
      desc: "Effect: Increases Quen Sign intensity by 5%. Stamina regeneration in combat +0.5/s",
    },
    "Axii Intensity": {
      points: 0,
      desc: "Effect: Increases Axii Sign intensity by 5%. Stamina regeneration in combat +0.5/s",
    },
  },
  4: {
    "Shock Wave": {
      points: 0,
      desc: "Effect: Aard deals now 40 damage. Stamina regeneration in combat +0.5/s",
    },
    Pyromaniac: {
      points: 0,
      desc: "Effect: Increases the chance to apply Burning by 20%. Stamina regeneration in combat +0.5",
    },
    "Supercharged Glyphs": {
      points: 0,
      desc: "Effect: Enemies under the influence of Yrden lose 10 points of Vitality or Essence per second. Stamina regeneration in combat +0.5/s",
    },
    "Quen Discharge": {
      points: 0,
      desc: "Effect: Reflects 5% of absorbed damage back to the attacker. Stamina regeneration in combat +0.5/s",
    },
    Domination: {
      points: 0,
      desc: "Two opponents can be influenced by Axii at the same time. The effect is 50% weaker. Stamina regeneration in combat +0.5/s",
    },
  },
};

export default signs;
