import skills from "../reducers/skills";
import { skillState } from "../reducers/skills";

import {
  plusSkillPoint,
  minusSkillPoint,
  clearSkill,
  switchBranch,
} from "../actions/skills_a";

describe("single skill testing", () => {
  const branch = "combat";
  const row = 1;
  const skill = "Muscle Memory";
  let newState;

  beforeEach(() => {
    newState = skillState;
  });

  test("Увеличиваем скилл на 1 единицу", () => {
    newState = skills(newState, plusSkillPoint(branch, row, skill));
    expect(newState.combat[row][skill]["points"]).toBe(1);
  });

  test("Уменьшаем скилл на 1 единицу", () => {
    newState = skills(newState, plusSkillPoint(branch, row, skill));
    newState = skills(newState, minusSkillPoint(branch, row, skill));
    expect(newState.combat[row][skill]["points"]).toBe(0);
  });

  test("Увеличиваем скилл на 7 единиц - проверяем что он не превышает лимит", () => {
    for (let i = 0; i < 7; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, row, skill));
    }
    expect(newState.combat[row][skill]["points"]).toBe(5);
  });

  test("Уменьшаем скилл на 1, проверяем отсутствие отрицательных значений", () => {
    newState = skills(newState, minusSkillPoint(branch, row, skill));
    expect(newState.combat[row][skill]["points"]).toBe(0);
  });

  test("Проверяем работы clearSkill c 3мя поинтами", () => {
    for (let i = 0; i < 3; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, row, skill));
    }
    expect(newState.combat[row][skill]["points"]).toBe(3);
    newState = skills(newState, clearSkill(branch, row, skill));
    expect(newState.combat[row][skill]["points"]).toBe(0);
  });
});

describe("Row testing", () => {
  const branch = "combat";
  // const row = 1;
  let newState;
  let ponitsToUnlockRow = [8, 20, 30];
  const skillsInRow1 = [
    "Muscle Memory",
    "Strength Training",
    "Arrow Deflection",
    "Lightning Reflexes",
    "Resolve",
  ];

  beforeEach(() => {
    newState = skillState;
  });

  test("Проверим работу аккумулятора и открытие следующего ряда", () => {
    for (let i = 0; i < 5; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[0]));
    }
    for (let i = 0; i < 3; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[1]));
    }
    expect(newState["rowStates"][branch][1]["akku"]).toBe(8);
    expect(newState["rowStates"][branch][2]["mode"]).toBe("editable");
  });

  test("Проверим disabled статус, при откате очков", () => {
    for (let i = 0; i < 5; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[0]));
    }
    for (let i = 0; i < 5; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[1]));
    }
    for (let i = 0; i < 3; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[2]));
    }
    for (let i = 0; i < 3; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[3]));
    }
    for (let i = 0; i < 4; i += 1) {
      newState = skills(newState, plusSkillPoint(branch, 1, skillsInRow1[4]));
    }

    expect(newState["rowStates"][branch][1]["akku"]).toBe(20);
    expect(newState["rowStates"][branch][2]["mode"]).toBe("editable");
    expect(newState["rowStates"][branch][3]["mode"]).toBe("editable");

    newState = skills(newState, minusSkillPoint(branch, 1, skillsInRow1[4]));

    expect(newState["rowStates"][branch][1]["akku"]).toBe(19);
    expect(newState["rowStates"][branch][2]["mode"]).toBe("editable");
    expect(newState["rowStates"][branch][3]["mode"]).toBe("disabled");

    newState = skills(newState, clearSkill(branch, 1, skillsInRow1[0]));
    newState = skills(newState, clearSkill(branch, 1, skillsInRow1[1]));
    newState = skills(newState, clearSkill(branch, 1, skillsInRow1[2]));

    expect(newState["rowStates"][branch][1]["akku"]).toBe(6);
    expect(newState["rowStates"][branch][2]["mode"]).toBe("disabled");
  });
});

describe("Switch branch testing", () => {
  let newState;

  beforeEach(() => {
    newState = skillState;
  });

  test("Проверим смену веток", () => {
    newState = skills(newState, switchBranch("signs"));
    expect(newState["activeBranch"]).toBe("signs");
  });
});

// ПРОБЛЕМОЧКИ
describe("available points testing", () => {
  let newState;
  let startPoints;
  const branch = "combat";
  const row = 1;
  const skill = "Muscle Memory";

  beforeEach(() => {
    newState = skillState;
  });

  test("Проверим уменьшение доступных очков", () => {
    newState = skills(newState, plusSkillPoint(branch, row, skill));
    expect(newState["availablePoints"]).toBe(0);
  });
});
