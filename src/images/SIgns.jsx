import React from "react";

function Aard() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 32V64H32H64V32V0H32H0V32ZM37 29C40.086 34.107 43 40 43 40C43 40 38.221 40 31.5 40C23.606 40 20.5 40 20.5 40L23.5 34.5L25.5 31H32L34 34C34 34 35.25 34 30 34C26.5233 33.8729 27 34 27 34L26 36C27.8814 36 31 36 31 36H37.5L34 30.5L31 26L29.5 29H26.5C26.5 29 31.4092 19.2031 31.61 19.304C32 19.5 33.914 23.893 37 29Z"
        fill="black"
      />
    </svg>
  );
}

function Igni() {
  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.824966 32V64H32.825H64.825V32V0H32.825H0.824966V32ZM33.5 22L30.4491 27.5397L27 34.5H32.5H38.825L36 29.5L34 26.5L35.325 24L37.5 27.5397L40 31.5L42 34.5L43.8171 37H33H22L32 19L33.5 22Z"
        fill="black"
      />
    </svg>
  );
}
function Yrden() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 32V64H32H64V32V0H32H0V32ZM42 20L38 25L35 28.5L33 26.5L35.59 23.637H29C29 23.637 31.965 27.587 35.59 31.637L42.18 39H31.355H20.529L24.656 34.874C27.104 32.425 28.5 31 28.5 31L30.5 33L28 36H35.437L29.931 30.25C26.903 27.088 23.602 23.507 22.596 22.293L20.768 20.086H30.5L42 20Z"
        fill="black"
      />
    </svg>
  );
}

function Qven() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M64 32V0H32H0V32V64H32H64V32ZM27 35C23.914 29.893 21 24 21 24C21 24 25.779 24 32.5 24C40.394 24 43.5 24 43.5 24L40.5 29.5L38.5 33H32L30 30C30 30 28.75 30 34 30C37.4767 30.1271 37 30 37 30L38 28C36.1186 28 33 28 33 28H26.5L30 33.5L33 38L34.5 35H37.5C37.5 35 32.5908 44.7969 32.39 44.696C32 44.5 30.086 40.107 27 35Z"
        fill="black"
      />
    </svg>
  );
}

function Axii() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 32V64H32H64V32V0H32H0V32ZM41 26C41 26 38.657 26 32.855 26H24.954L28 31.5L31 37L36.5 29H39.5L35.762 34.933L31 42L20 23H43L41 26Z"
        fill="black"
      />
    </svg>
  );
}

const SignsArr = [<Aard />, <Igni />, <Yrden />, <Qven />, <Axii />];

export default SignsArr;
