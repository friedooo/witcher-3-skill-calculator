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

  test("увеличиваем скилл на 1 единицу", () => {
    newState = skills(newState, plusSkillPoint(branch, row, skill));
    expect(newState.combat[row][skill]["points"]).toBe(1);
  });

  test("уменьшаем скилл на 1 единицу", () => {
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
});
