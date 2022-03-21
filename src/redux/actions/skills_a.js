export const plusSkillPoint = (branch, row, skill) => ({
  type: "PLUS_SKILL_POINT",
  branch,
  row,
  skill,
});

export const minusSkillPoint = (branch, row, skill) => ({
  type: "MINUS_SKILL_POINT",
  branch,
  row,
  skill,
});

export const clearSkill = (branch, row, skill) => ({
  type: "CLEAR_SKILL",
  branch,
  row,
  skill,
});

export const switchBranch = (branch) => ({
  type: "SWITCH_BRANCH",
  branch,
});
