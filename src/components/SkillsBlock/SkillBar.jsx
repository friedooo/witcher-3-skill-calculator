import React from "react";
import { useSelector, useDispatch } from "react-redux";

import SkillHoc from "../../hoc/SkillHoc";

import {
  CombatSkills,
  Signs,
  AlchemySkills,
  GeneralSkills,
  Mutagens,
} from "../../images/SkillLabels";

import {
  FastAttack,
  StrongAttack,
  Defense,
  Marksmanship,
  BattleTrance,
  MuscleMemory,
  StrengthTraining,
  ArrowDeflection,
  LightningReflexes,
  Resolve,
  PreciseBlows,
  CrushingBlows,
  FleetFooted,
  ColdBlood,
  Undying,
  Whirl,
  Rend,
  Counterattack,
  AnatomicalKnowledge,
  RazorFocus,
  CripplingStrikes,
  SunderArmor,
  DeadlyPrecision,
  CripplingShot,
  FloodOfAnger,
} from "../../images/Combat";

import {
  plusSkillPoint,
  minusSkillPoint,
  clearSkill,
} from "../../redux/actions/skills_a";

function SkillBar() {
  const skills = useSelector(({ skills }) => skills);
  const dispatch = useDispatch();

  const onPlusPoint = () => {
    dispatch(plusSkillPoint("combat", 1, "Muscle Memory"));
  };
  const onMinusPoint = () => {
    dispatch(minusSkillPoint("combat", 1, "Muscle Memory"));
  };
  const onClearSkill = () => {
    dispatch(clearSkill("combat", 1, "Muscle Memory"));
  };

  return (
    <div className="skill-bar">
      {/* <button onClick={onPlusPoint}>+</button>
      <button onClick={onMinusPoint}>-</button>
      <button onClick={onClearSkill}>clear</button> */}
      <div className="content">
        <div className="skill">
          {/* <CombatSkills /> */}
          <SkillHoc>
            <CombatSkills />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <Signs />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <AlchemySkills />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <GeneralSkills />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc>
            <Mutagens />
          </SkillHoc>
        </div>
        <div className="skill-info">
          <span>Умения</span>
          <span>Очков потрачено: 1</span>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <FastAttack />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <StrongAttack />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Defense />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Marksmanship />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <BattleTrance />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <MuscleMemory />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <StrengthTraining />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <ArrowDeflection />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <LightningReflexes />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Resolve />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <PreciseBlows />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <CrushingBlows />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <FleetFooted />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <ColdBlood />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Undying />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Whirl />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Rend />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <Counterattack />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <AnatomicalKnowledge />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <RazorFocus />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <CripplingStrikes />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <SunderArmor />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <DeadlyPrecision />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <CripplingShot />
          </SkillHoc>
        </div>
        <div className="skill">
          <SkillHoc counter points={0}>
            <FloodOfAnger />
          </SkillHoc>
        </div>
      </div>
    </div>
  );
}

export default SkillBar;

// убрать пароль с ссылки в зуме
// но не убирать пароль с id зума
// написать в знаниях F1.1

// принципы работы
// постоянный и вводный урок
// постоянный - клиент > 1 раза
// вводный урок - звездочка
// постоянный - стрелочка

// отдел менеджеров - вводные уроки
// амидны - почтоянные уроки

// ученика нет на уроке
// - звоним 3 раза
// - не росс номер 0 нажимаем на труку - симка 3587
// позвоним через 3-5 минут

// 15 мин прошло - отмена занятия
// пишем сообщение - бизнес процесс - ребенка нет на уроке - заполняем анкету
// пишем в чате - что-то типо
// 1. отменить урок, ученика нет на занятии
// 2. ссылка на контакт
// 3. время урока

// если тех. проблемы - решаем в течение 15 мин, если нет - говорим родителям в тех отдел
// и отменить в чате

// на вводных уроках обязательно камера и звук
// на постоянных можно в середине отключать камеру

// комментарий

// отправка акта -
