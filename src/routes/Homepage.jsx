import { Outlet, Link, Routes, Route } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage">
      <h1>Добро пожаловать на страницу по бичеру 3</h1>
      <div>Выбери себе скилпоинты</div>
      <Link to="/calculator">Калькулируй!</Link>
    </div>
  );
}
