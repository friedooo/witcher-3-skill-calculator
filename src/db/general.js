const general = {
  desc: "These abilities improve general aspects of your play style, such as armor proficiency, elixir tolerance and amount of health.",
  0: {
    "Sun and Stars": {
      points: 0,
      pointsLimit: 1,
      desc: "During the day, Vitality regenerates by an additional 10 points per second when not in combat. At night, Stamina regenerates by an additional 1 point per second during combat.",
    },
    "Survival Instinct": {
      points: 0,
      pointsLimit: 1,
      desc: "Increases maximum Vitality by 500",
    },
    "Cat School Techniques": {
      points: 0,
      pointsLimit: 1,
      desc: "Each piece Light Armor increases critical hit damage by 25% and fast attack damage by 5%.",
    },
    "Griffin School Techniques": {
      points: 0,
      pointsLimit: 1,
      desc: "Each piece of Medium Armor increases your Sign intensity by 5% and Endurance regeneration by 5%.",
    },
    "Bear School Techniques": {
      points: 0,
      pointsLimit: 1,
      desc: "Each piece of Heavy Armor increases your strong attack 5% and maximum health by 5%.",
    },
  },
  1: {
    "Metabolism Control": {
      points: 0,
      pointsLimit: 1,
      desc: "Increases maximum Toxicity by 30.",
    },
    Focus: {
      points: 0,
      pointsLimit: 1,
      desc: "Adrenaline Points also increase your Sign damage",
    },
    "Steady Shot": {
      points: 0,
      pointsLimit: 1,
      desc: "Crossbow deals 25% more damage.",
    },
    "Adrenaline Burst": {
      points: 0,
      pointsLimit: 1,
      desc: "Increases Adrenaline generation by 5%. Using Signs now generates Adrenaline Points.",
    },
    "Rage Management": {
      points: 0,
      pointsLimit: 1,
      desc: "If your current Stamina level is too low, Signs can be cast using adrenaline points.",
    },
  },
  2: {
    "Metabolism Boosts": {
      points: 0,
      pointsLimit: 1,
      desc: "If available, Adrenaline Points will be consumed to reduce the Toxicity cost of drinking potions by 33% per point. Does not affect decoctions.",
    },
    "Trick Shot": {
      points: 0,
      pointsLimit: 1,
      desc: "You can shoot one additional bolt before you must reload.",
    },
    "Advanced Pyrotechnics": {
      points: 0,
      pointsLimit: 1,
      desc: "Damage dealth by a bomb's explosion generates 0.1 Adrenaline Points.",
    },
    "Battle Frenzy": {
      points: 0,
      pointsLimit: 1,
      desc: "Instead of its previous effect,  Battle Trance now increases critical hit chance by 8% per Adrenaline Point.",
    },
    "Strong Back": {
      points: 0,
      pointsLimit: 1,
      desc: "Maximum inventory weight is increased by 60.",
    },
  },
  3: {
    "Gorged on Power": {
      points: 0,
      pointsLimit: 1,
      desc: "The bonus from a Place of Power lasts indefinitely, but only one such bonus can be active at a given time.",
    },
    Gourmet: {
      points: 0,
      pointsLimit: 1,
      desc: "Eating food regenerates Vitality for 20 minutes.",
    },
    "In Combat's Fires": {
      points: 0,
      pointsLimit: 1,
      desc: "You ignore Bomb and special bolt effects.",
    },
    "Heavy Artillery": {
      points: 0,
      pointsLimit: 1,
      desc: "Bomb damage is increased by 200% -- but the number of bombs in slots is decreased by 50%. Doesn't apply to bombs which deal no damage.",
    },
    "Attack is the Best Defense": {
      points: 0,
      pointsLimit: 1,
      desc: "If your current Stamina level is too low, Signs can be cast using adrenaline points, Parries 0.1 point, Counterattacks 0.4 point. Dodges 0.3 point, Rolls 0.2 point. Cannot be activated more than once every 5 seconds.",
    },
  },
};

export default general;
