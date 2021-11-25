"use strict";

import "./styles/style.scss";

import { Home } from "./pages/Home/indexH.js";
import { Categories } from "./pages/Categories/indexC.js";
import { CategoriesP } from "./pages/CategoriesP/indexC.js";
import { Settings } from "./pages/Settings/indexS.js";
import { Questions } from "./pages/Questions/indexQ.js";
import { QuestionsP } from "./pages/QuestionsP/indexQ.js";
import { Result } from "./pages/Result/indexR.js";
import { Error404 } from "./pages/Error404/indexE.js";

import { Utils } from "./utils/Utils.js";

const homeInstance = new Home();
const settingsSettings = new Settings();
const categoriesAInstance = new Categories();
const categoriesPInstance = new CategoriesP();
const questionsInstance = new Questions();
const questionsPInstance = new QuestionsP();
const resultInstance = new Result();
const error404Instance = new Error404();

const portrait = [];
const landscape = [];
const stillLife = [];
const impressionism = [];
const expressionism = [];
const avantGarde = [];
const renaissance = [];
const surrealism = [];
const kitsch = [];
const minimalism = [];
const interior = [];
const nude = [];
const portraitP = [];
const landscapeP = [];
const stillLifeP = [];
const impressionismP = [];
const expressionismP = [];
const avantGardeP = [];
const renaissanceP = [];
const surrealismP = [];
const kitschP = [];
const minimalismP = [];
const interiorP = [];
const nudeP = [];

let resultsObj = {
  portrait: [],
  landscape: [],
  stillLife: [],
  impressionism: [],
  expressionism: [],
  avantGarde: [],
  renaissance: [],
  surrealism: [],
  kitsch: [],
  minimalism: [],
  interior: [],
  nude: [],
  portraitP: [],
  landscapeP: [],
  stillLifeP: [],
  impressionismP: [],
  expressionismP: [],
  avantGardeP: [],
  renaissanceP: [],
  surrealismP: [],
  kitschP: [],
  minimalismP: [],
  interiorP: [],
  nudeP: [],
};

let categoriResult = {};

let currentArr = [];
let currentArrStr;
let volumeValue;
let muted = false;
let time;
let n = 0;
let numberOfTrueAnswers = 0;
let timerOption = true;
let trueAns;
let pictureQuiz = false;
let currentResultArr1 = [];
let currentResultArr2 = [];

function playTrueSound() {
  const trueAudio = new Audio();
  trueAudio.src = "./assets/sound/true.mp3";
  trueAudio.volume = volumeValue / 100;
  if (muted) {
    trueAudio.muted = true;
  } else {
    trueAudio.muted = false;
  }
  trueAudio.play();
}

async function playFallseSound() {
  const fallsAudio = new Audio();
  fallsAudio.src = "./assets/sound/false.mp3";
  fallsAudio.volume = volumeValue / 100;
  if (muted) {
    fallsAudio.muted = true;
  } else {
    fallsAudio.muted = false;
  }
  fallsAudio.play();
}

async function playResultSound() {
  const resultAudio = new Audio();
  resultAudio.src = "./assets/sound/result.mp3";
  resultAudio.volume = volumeValue / 100;
  if (muted) {
    resultAudio.muted = true;
  } else {
    resultAudio.muted = false;
  }
  resultAudio.play();
}

function startTimer(duration) {
  const modalFalls = document.querySelector(".fixed-overlay-falls");
  const timeLine = document.querySelector(".time-line");
  const ansOpt = document.querySelectorAll(".answer-option");
  const navButtons = document.querySelectorAll(".questions-nav-buttons");
  const answer = document.querySelector(".answer");

  const trueImg = document.querySelectorAll(".true-painting-conteiner");
  const trueAuthor = document.querySelectorAll(".true-author");
  const trueYear = document.querySelectorAll(".true-year");
  const trueName = document.querySelectorAll(".true-name");

  let timer = duration;
  let tiktak = setInterval(function () {
    timeLine.textContent = timer;
    timer--;
    if (timer < 0) {
      modalFalls.classList.add("fixed-overlay-active");

      if (currentArrStr === "portrait") {
        resultsObj.portrait.push(0);
      } else if (currentArrStr === "landscape") {
        resultsObj.landscape.push(0);
      } else if (currentArrStr === "stillLife") {
        resultsObj.stillLife.push(0);
      } else if (currentArrStr === "impressionism") {
        resultsObj.impressionism.push(0);
      } else if (currentArrStr === "expressionism") {
        resultsObj.expressionism.push(0);
      } else if (currentArrStr === "avantGarde") {
        resultsObj.avantGarde.push(0);
      } else if (currentArrStr === "renaissance") {
        resultsObj.renaissance.push(0);
      } else if (currentArrStr === "surrealism") {
        resultsObj.surrealism.push(0);
      } else if (currentArrStr === "kitsch") {
        resultsObj.kitsch.push(0);
      } else if (currentArrStr === "minimalism") {
        resultsObj.minimalism.push(0);
      } else if (currentArrStr === "interior") {
        resultsObj.interior.push(0);
      } else if (currentArrStr === "nude") {
        resultsObj.nude.push(0);
      } else if (currentArrStr === "portraitP") {
        resultsObj.portraitP.push(0);
      } else if (currentArrStr === "landscapeP") {
        resultsObj.landscapeP.push(0);
      } else if (currentArrStr === "stillLifeP") {
        resultsObj.stillLifeP.push(0);
      } else if (currentArrStr === "impressionismP") {
        resultsObj.impressionismP.push(0);
      } else if (currentArrStr === "expressionismP") {
        resultsObj.expressionismP.push(0);
      } else if (currentArrStr === "avantGardeP") {
        resultsObj.avantGardeP.push(0);
      } else if (currentArrStr === "renaissanceP") {
        resultsObj.renaissanceP.push(0);
      } else if (currentArrStr === "surrealismP") {
        resultsObj.surrealismP.push(0);
      } else if (currentArrStr === "kitschP") {
        resultsObj.kitschP.push(0);
      } else if (currentArrStr === "minimalismP") {
        resultsObj.minimalismP.push(0);
      } else if (currentArrStr === "interiorP") {
        resultsObj.interiorP.push(0);
      } else if (currentArrStr === "nudeP") {
        resultsObj.nudeP.push(0);
      }
      answer.classList.remove("answer-active");
      playFallseSound();
      trueAuthor.forEach((item) => {
        item.textContent = currentArr[n].author;
      });
      trueYear.forEach((item) => {
        item.textContent = currentArr[n].year;
      });
      trueName.forEach((item) => {
        item.textContent = currentArr[n].name;
      });
      trueImg.forEach(
        (item) =>
          (item.style.backgroundImage = `url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`)
      );
      clearInterval(tiktak);
    }
  }, 1000);
  ansOpt.forEach((item) =>
    item.addEventListener("click", function () {
      clearInterval(tiktak);
    })
  );
  navButtons.forEach((item) =>
    item.addEventListener("click", function () {
      clearInterval(tiktak);
      n = 0;
    })
  );
}

async function pushInArr() {
  //разделение большого массива на 24 маленьких
  let pic = "data.json";
  const res = await fetch(pic);
  const data = await res.json();

  data.map((item) => {
    if (item.imageNum < 10 && portrait.length < 10) {
      portrait.push(item);
    } else if (
      item.imageNum >= 10 &&
      item.imageNum < 20 &&
      landscape.length < 10
    ) {
      landscape.push(item);
    } else if (
      item.imageNum >= 20 &&
      item.imageNum < 30 &&
      stillLife.length < 10
    ) {
      stillLife.push(item);
    } else if (
      item.imageNum >= 30 &&
      item.imageNum < 40 &&
      impressionism.length < 10
    ) {
      impressionism.push(item);
    } else if (
      item.imageNum >= 40 &&
      item.imageNum < 50 &&
      expressionism.length < 10
    ) {
      expressionism.push(item);
    } else if (
      item.imageNum >= 50 &&
      item.imageNum < 60 &&
      avantGarde.length < 10
    ) {
      avantGarde.push(item);
    } else if (
      item.imageNum >= 60 &&
      item.imageNum < 70 &&
      renaissance.length < 10
    ) {
      renaissance.push(item);
    } else if (
      item.imageNum >= 70 &&
      item.imageNum < 80 &&
      surrealism.length < 10
    ) {
      surrealism.push(item);
    } else if (
      item.imageNum >= 80 &&
      item.imageNum < 90 &&
      kitsch.length < 10
    ) {
      kitsch.push(item);
    } else if (
      item.imageNum >= 90 &&
      item.imageNum < 100 &&
      minimalism.length < 10
    ) {
      minimalism.push(item);
    } else if (
      item.imageNum >= 100 &&
      item.imageNum < 110 &&
      interior.length < 10
    ) {
      interior.push(item);
    } else if (
      item.imageNum >= 110 &&
      item.imageNum < 120 &&
      nude.length < 10
    ) {
      nude.push(item);
    } else if (
      item.imageNum >= 120 &&
      item.imageNum < 130 &&
      portraitP.length < 10
    ) {
      portraitP.push(item);
    } else if (
      item.imageNum >= 130 &&
      item.imageNum < 140 &&
      landscapeP.length < 10
    ) {
      landscapeP.push(item);
    } else if (
      item.imageNum >= 140 &&
      item.imageNum < 150 &&
      stillLifeP.length < 10
    ) {
      stillLifeP.push(item);
    } else if (
      item.imageNum >= 150 &&
      item.imageNum < 160 &&
      impressionismP.length < 10
    ) {
      impressionismP.push(item);
    } else if (
      item.imageNum >= 160 &&
      item.imageNum < 170 &&
      expressionismP.length < 10
    ) {
      expressionismP.push(item);
    } else if (
      item.imageNum >= 170 &&
      item.imageNum < 180 &&
      avantGardeP.length < 10
    ) {
      avantGardeP.push(item);
    } else if (
      item.imageNum >= 180 &&
      item.imageNum < 190 &&
      renaissanceP.length < 10
    ) {
      renaissanceP.push(item);
    } else if (
      item.imageNum >= 190 &&
      item.imageNum < 200 &&
      surrealismP.length < 10
    ) {
      surrealismP.push(item);
    } else if (
      item.imageNum >= 200 &&
      item.imageNum < 210 &&
      kitschP.length < 10
    ) {
      kitschP.push(item);
    } else if (
      item.imageNum >= 210 &&
      item.imageNum < 220 &&
      minimalismP.length < 10
    ) {
      minimalismP.push(item);
    } else if (
      item.imageNum >= 220 &&
      item.imageNum < 230 &&
      interiorP.length < 10
    ) {
      interiorP.push(item);
    } else if (nudeP.length < 10) {
      nudeP.push(item);
    }
  });
}

const routes = {
  "/": homeInstance,
  "/settings": settingsSettings,
  "/categories_artist": categoriesAInstance,
  "/categories_pictures": categoriesPInstance,
  "/questions": questionsInstance,
  "/questions_pictures": questionsPInstance,
  "/result": resultInstance,
};

const router = async () => {
  const content = null || document.getElementById("page_container");

  const request = Utils.parseRequestURL();

  const parsedURL =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const page = routes[parsedURL] ? routes[parsedURL] : error404Instance;

  content.innerHTML = await page.render();
  await page.after_render();

  await pushInArr();

  //карточка с вопросами
  if (page === questionsInstance || page === questionsPInstance) {
    const ansOpt = document.querySelectorAll(".answer-option");
    const nextButton = document.querySelectorAll(".continue");
    const answer = document.querySelector(".answer");
    questionsInstance.wrap(currentArr, n, pictureQuiz);

    if (timerOption) {
      startTimer(time);
    }

    answer.classList.add("answer-active");

    ansOpt.forEach((item) =>
      item.addEventListener("click", (e) => {
        const modalTrue = document.querySelector(".fixed-overlay-true");
        const modalFalls = document.querySelector(".fixed-overlay-falls");

        const trueImg = document.querySelectorAll(".true-painting-conteiner");
        const trueAuthor = document.querySelectorAll(".true-author");
        const trueYear = document.querySelectorAll(".true-year");
        const trueName = document.querySelectorAll(".true-name");

        trueAns = currentArr[n].author;
        answer.classList.remove("answer-active");
        if (pictureQuiz) {
          trueAns = currentArr[n].imageNum;
          if (
            e.target.style.backgroundImage ==
            `url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`
          ) {
            modalTrue.classList.add("fixed-overlay-active");
            if (currentArrStr === "portraitP") {
              resultsObj.portraitP.push(1);
            } else if (currentArrStr === "landscapeP") {
              resultsObj.landscapeP.push(1);
            } else if (currentArrStr === "stillLifeP") {
              resultsObj.stillLifeP.push(1);
            } else if (currentArrStr === "impressionismP") {
              resultsObj.impressionismP.push(1);
            } else if (currentArrStr === "expressionismP") {
              resultsObj.expressionismP.push(1);
            } else if (currentArrStr === "avantGardeP") {
              resultsObj.avantGardeP.push(1);
            } else if (currentArrStr === "renaissanceP") {
              resultsObj.renaissanceP.push(1);
            } else if (currentArrStr === "surrealismP") {
              resultsObj.surrealismP.push(1);
            } else if (currentArrStr === "kitschP") {
              resultsObj.kitschP.push(1);
            } else if (currentArrStr === "minimalismP") {
              resultsObj.minimalismP.push(1);
            } else if (currentArrStr === "interiorP") {
              resultsObj.interiorP.push(1);
            } else if (currentArrStr === "nudeP") {
              resultsObj.nudeP.push(1);
            }
            playTrueSound();
            numberOfTrueAnswers++;
          } else if (
            e.target.style.backgroundImage !=
            `url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`
          ) {
            modalFalls.classList.add("fixed-overlay-active");
            if (currentArrStr === "portraitP") {
              resultsObj.portraitP.push(0);
            } else if (currentArrStr === "landscapeP") {
              resultsObj.landscapeP.push(0);
            } else if (currentArrStr === "stillLifeP") {
              resultsObj.stillLifeP.push(0);
            } else if (currentArrStr === "impressionismP") {
              resultsObj.impressionismP.push(0);
            } else if (currentArrStr === "expressionismP") {
              resultsObj.expressionismP.push(0);
            } else if (currentArrStr === "avantGardeP") {
              resultsObj.avantGardeP.push(0);
            } else if (currentArrStr === "renaissanceP") {
              resultsObj.renaissanceP.push(0);
            } else if (currentArrStr === "surrealismP") {
              resultsObj.surrealismP.push(0);
            } else if (currentArrStr === "kitschP") {
              resultsObj.kitschP.push(0);
            } else if (currentArrStr === "minimalismP") {
              resultsObj.minimalismP.push(0);
            } else if (currentArrStr === "interiorP") {
              resultsObj.interiorP.push(0);
            } else if (currentArrStr === "nudeP") {
              resultsObj.nudeP.push(0);
            }
            playFallseSound();
          }
        } else {
          if (e.target.textContent == trueAns) {
            modalTrue.classList.add("fixed-overlay-active");
            if (currentArrStr === "portrait") {
              resultsObj.portrait.push(1);
            } else if (currentArrStr === "landscape") {
              resultsObj.landscape.push(1);
            } else if (currentArrStr === "stillLife") {
              resultsObj.stillLife.push(1);
            } else if (currentArrStr === "impressionism") {
              resultsObj.impressionism.push(1);
            } else if (currentArrStr === "expressionism") {
              resultsObj.expressionism.push(1);
            } else if (currentArrStr === "avantGarde") {
              resultsObj.avantGarde.push(1);
            } else if (currentArrStr === "renaissance") {
              resultsObj.renaissance.push(1);
            } else if (currentArrStr === "surrealism") {
              resultsObj.surrealism.push(1);
            } else if (currentArrStr === "kitsch") {
              resultsObj.kitsch.push(1);
            } else if (currentArrStr === "minimalism") {
              resultsObj.minimalism.push(1);
            } else if (currentArrStr === "interior") {
              resultsObj.interior.push(1);
            } else if (currentArrStr === "landscape") {
              resultsObj.nude.push(1);
            }
            playTrueSound();
            numberOfTrueAnswers++;
          } else if (e.target.textContent != trueAns) {
            modalFalls.classList.add("fixed-overlay-active");
            if (currentArrStr === "portrait") {
              resultsObj.portrait.push(0);
            } else if (currentArrStr === "landscape") {
              resultsObj.landscape.push(0);
            } else if (currentArrStr === "stillLife") {
              resultsObj.stillLife.push(0);
            } else if (currentArrStr === "impressionism") {
              resultsObj.impressionism.push(0);
            } else if (currentArrStr === "expressionism") {
              resultsObj.expressionism.push(0);
            } else if (currentArrStr === "avantGarde") {
              resultsObj.avantGarde.push(0);
            } else if (currentArrStr === "renaissance") {
              resultsObj.renaissance.push(0);
            } else if (currentArrStr === "surrealism") {
              resultsObj.surrealism.push(0);
            } else if (currentArrStr === "kitsch") {
              resultsObj.kitsch.push(0);
            } else if (currentArrStr === "minimalism") {
              resultsObj.minimalism.push(0);
            } else if (currentArrStr === "interior") {
              resultsObj.interior.push(0);
            } else if (currentArrStr === "landscape") {
              resultsObj.nude.push(0);
            }
            playFallseSound();
          }
        }
        trueAuthor.forEach((item) => {
          item.textContent = currentArr[n].author;
        });
        trueYear.forEach((item) => {
          item.textContent = currentArr[n].year;
        });
        trueName.forEach((item) => {
          item.textContent = currentArr[n].name;
        });
        trueImg.forEach(
          (item) =>
            (item.style.backgroundImage = `url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`)
        );
      })
    );
    nextButton.forEach((item) =>
      item.addEventListener("click", function () {
        const modalTrue = document.querySelector(".fixed-overlay-true");
        const modalFalls = document.querySelector(".fixed-overlay-falls");
        const modalResult = document.querySelector(".fixed-overlay-result");
        const test = document.querySelector(".test");

        if (n != 9) {
          n++;
          modalTrue.classList.remove("fixed-overlay-active");
          modalFalls.classList.remove("fixed-overlay-active");
          answer.classList.add("answer-active");
          questionsInstance.wrap(currentArr, n, pictureQuiz);
          if (timerOption) {
            startTimer(time);
          }
        } else {
          modalTrue.classList.remove("fixed-overlay-active");
          modalFalls.classList.remove("fixed-overlay-active");
          modalResult.classList.add("fixed-overlay-active");
          n = 0;
          playResultSound();
          test.textContent = `Result: ${numberOfTrueAnswers}/10`;
        }
      })
    );
  } else if (page === categoriesAInstance) {
    const categories = document.querySelectorAll(".categori-card");
    const results = document.querySelectorAll(".result-link");
    const scoreSpan = document.querySelectorAll(".score");
    //Вынести в отдельную функцию НАЧАЛО
    const pictLink = document.querySelector(".picture-link");
    const categoriImg = document.querySelectorAll(".categori-img");

    if (currentArrStr !== undefined) {
      categoriResult[currentArrStr] = `${numberOfTrueAnswers}/10`;
    }
    //добавление score к категориям
    for (let key in categoriResult) {
      scoreSpan.forEach((item) => {
        if (item.classList.contains(key)) {
          item.textContent = categoriResult[key];
        }
      });
      categoriImg.forEach((item) => {
        if (item.classList.contains(key)) {
          item.classList.remove("grey");
        }
      });
      results.forEach((item) => {
        if (item.classList.contains(key)) {
          item.classList.add("result-link-active");
        }
      });
    }
    //Вынести в отдельную функцию КОНЕЦ
    categories.forEach((item) =>
      item.addEventListener("click", (e) => {
        //запуск вопроса с конкретным массивом
        if (e.target.classList.contains("portrait")) {
          currentArr = portrait;
          pictureQuiz = false;
          currentArrStr = "portrait";
          resultsObj.portrait = [];
        } else if (e.target.classList.contains("landscape")) {
          currentArr = landscape;
          pictureQuiz = false;
          currentArrStr = "landscape";
          resultsObj.landscape = [];
        } else if (e.target.classList.contains("stillLife")) {
          currentArr = stillLife;
          pictureQuiz = false;
          currentArrStr = "stillLife";
          resultsObj.stillLife = [];
        } else if (e.target.classList.contains("impressionism")) {
          currentArr = impressionism;
          pictureQuiz = false;
          currentArrStr = "impressionism";
          resultsObj.impressionism = [];
        } else if (e.target.classList.contains("expressionism")) {
          currentArr = expressionism;
          pictureQuiz = false;
          currentArrStr = "expressionism";
          resultsObj.expressionism = [];
        } else if (e.target.classList.contains("avantGarde")) {
          currentArr = avantGarde;
          pictureQuiz = false;
          currentArrStr = "avantGarde";
          resultsObj.avantGarde = [];
        } else if (e.target.classList.contains("renaissance")) {
          currentArr = renaissance;
          pictureQuiz = false;
          currentArrStr = "renaissance";
          resultsObj.renaissance = [];
        } else if (e.target.classList.contains("surrealism")) {
          currentArr = surrealism;
          pictureQuiz = false;
          currentArrStr = "surrealism";
          resultsObj.surrealism = [];
        } else if (e.target.classList.contains("kitsch")) {
          currentArr = kitsch;
          pictureQuiz = false;
          currentArrStr = "kitsch";
          resultsObj.kitsch = [];
        } else if (e.target.classList.contains("minimalism")) {
          currentArr = minimalism;
          pictureQuiz = false;
          currentArrStr = "minimalism";
          resultsObj.minimalism = [];
        } else if (e.target.classList.contains("interior")) {
          currentArr = interior;
          pictureQuiz = false;
          currentArrStr = "interior";
          resultsObj.interior = [];
        } else if (e.target.classList.contains("nude")) {
          currentArr = nude;
          pictureQuiz = false;
          currentArrStr = "nude";
          resultsObj.nude = [];
        }
        n = 0;
        numberOfTrueAnswers = 0;
      })
    );
    results.forEach((item) =>
      item.addEventListener("click", (e) => {
        //запуск страницы результатов
        if (e.target.classList.contains("portrait")) {
          currentResultArr1 = portrait;
          currentResultArr2 = resultsObj.portrait;
        } else if (e.target.classList.contains("landscape")) {
          currentResultArr1 = landscape;
          currentResultArr2 = resultsObj.landscape;
        } else if (e.target.classList.contains("stillLife")) {
          currentResultArr1 = stillLife;
          currentResultArr2 = resultsObj.stillLife;
        } else if (e.target.classList.contains("impressionism")) {
          currentResultArr1 = impressionism;
          currentResultArr2 = resultsObj.impressionism;
        } else if (e.target.classList.contains("expressionism")) {
          currentResultArr1 = expressionism;
          currentResultArr2 = resultsObj.expressionism;
        } else if (e.target.classList.contains("avantGarde")) {
          currentResultArr1 = avantGarde;
          currentResultArr2 = resultsObj.avantGarde;
        } else if (e.target.classList.contains("renaissance")) {
          currentResultArr1 = renaissance;
          currentResultArr2 = resultsObj.renaissance;
        } else if (e.target.classList.contains("surrealism")) {
          currentResultArr1 = surrealism;
          currentResultArr2 = resultsObj.surrealism;
        } else if (e.target.classList.contains("kitsch")) {
          currentResultArr1 = kitsch;
          currentResultArr2 = resultsObj.kitsch;
        } else if (e.target.classList.contains("minimalism")) {
          currentResultArr1 = minimalism;
          currentResultArr2 = resultsObj.minimalism;
        } else if (e.target.classList.contains("interior")) {
          currentResultArr1 = interior;
          currentResultArr2 = resultsObj.interior;
        } else if (e.target.classList.contains("nude")) {
          currentResultArr1 = nude;
          currentResultArr2 = resultsObj.nude;
        }
      })
    );
    pictLink.addEventListener("click", function () {
      pictureQuiz = true;
    });
  } else if (page === categoriesPInstance) {
    const categories = document.querySelectorAll(".categori-card");
    const artistLink = document.querySelector(".artist-link");
    const results = document.querySelectorAll(".result-link");
    //вынести в отдельную функцию НАЧАЛО
    const scoreSpan = document.querySelectorAll(".score");
    const categoriImg = document.querySelectorAll(".categori-img");

    if (currentArrStr !== undefined) {
      categoriResult[currentArrStr] = `${numberOfTrueAnswers}/10`;
    }

    //добавление score к категориям
    for (let key in categoriResult) {
      scoreSpan.forEach((item) => {
        if (item.classList.contains(key)) {
          item.textContent = categoriResult[key];
        }
      });
      categoriImg.forEach((item) => {
        if (item.classList.contains(key)) {
          item.classList.remove("grey");
        }
      });
      results.forEach((item) => {
        if (item.classList.contains(key)) {
          item.classList.add("result-link-active");
        }
      });
    }
    //вынести в отдельную функцию КОНЕЦ
    categories.forEach((item) =>
      item.addEventListener("click", (e) => {
        //запуск вопроса с конкретным массивом
        if (e.target.classList.contains("portraitP")) {
          currentArr = portraitP;
          pictureQuiz = true;
          currentArrStr = "portraitP";
        } else if (e.target.classList.contains("landscapeP")) {
          currentArr = landscapeP;
          pictureQuiz = true;
          currentArrStr = "landscapeP";
        } else if (e.target.classList.contains("stillLifeP")) {
          currentArr = stillLifeP;
          pictureQuiz = true;
          currentArrStr = "stillLifeP";
        } else if (e.target.classList.contains("impressionismP")) {
          currentArr = impressionismP;
          pictureQuiz = true;
          currentArrStr = "impressionismP";
        } else if (e.target.classList.contains("expressionismP")) {
          currentArr = expressionismP;
          pictureQuiz = true;
          currentArrStr = "expressionismP";
        } else if (e.target.classList.contains("avantGardeP")) {
          currentArr = avantGardeP;
          pictureQuiz = true;
          currentArrStr = "avantGardeP";
        } else if (e.target.classList.contains("renaissanceP")) {
          currentArr = renaissanceP;
          pictureQuiz = true;
          currentArrStr = "renaissanceP";
        } else if (e.target.classList.contains("surrealismP")) {
          currentArr = surrealismP;
          pictureQuiz = true;
          currentArrStr = "surrealismP";
        } else if (e.target.classList.contains("kitschP")) {
          currentArr = kitschP;
          pictureQuiz = true;
          currentArrStr = "kitschP";
        } else if (e.target.classList.contains("minimalismP")) {
          currentArr = minimalismP;
          pictureQuiz = true;
          currentArrStr = "minimalismP";
        } else if (e.target.classList.contains("interiorP")) {
          currentArr = interiorP;
          pictureQuiz = true;
          currentArrStr = "interiorP";
        } else if (e.target.classList.contains("nudeP")) {
          currentArr = nudeP;
          pictureQuiz = true;
          currentArrStr = "nudeP";
        }
        numberOfTrueAnswers = 0;
        n = 0;
      })
    );
    results.forEach((item) =>
      item.addEventListener("click", (e) => {
        //запуск страницы результатов
        if (e.target.classList.contains("portraitP")) {
          currentResultArr1 = portraitP;
          currentResultArr2 = resultsObj.portraitP;
        } else if (e.target.classList.contains("landscapeP")) {
          currentResultArr1 = landscapeP;
          currentResultArr2 = resultsObj.landscapeP;
        } else if (e.target.classList.contains("stillLifeP")) {
          currentResultArr1 = stillLifeP;
          currentResultArr2 = resultsObj.stillLifeP;
        } else if (e.target.classList.contains("impressionismP")) {
          currentResultArr1 = impressionismP;
          currentResultArr2 = resultsObj.impressionism;
        } else if (e.target.classList.contains("expressionismP")) {
          currentResultArr1 = expressionismP;
          currentResultArr2 = resultsObj.expressionismP;
        } else if (e.target.classList.contains("avantGardeP")) {
          currentResultArr1 = avantGardeP;
          currentResultArr2 = resultsObj.avantGardeP;
        } else if (e.target.classList.contains("renaissanceP")) {
          currentResultArr1 = renaissanceP;
          currentResultArr2 = resultsObj.renaissanceP;
        } else if (e.target.classList.contains("surrealismP")) {
          currentResultArr1 = surrealismP;
          currentResultArr2 = resultsObj.surrealismP;
        } else if (e.target.classList.contains("kitschP")) {
          currentResultArr1 = kitschP;
          currentResultArr2 = resultsObj.kitschP;
        } else if (e.target.classList.contains("minimalismP")) {
          currentResultArr1 = minimalismP;
          currentResultArr2 = resultsObj.minimalismP;
        } else if (e.target.classList.contains("interiorP")) {
          currentResultArr1 = interiorP;
          currentResultArr2 = resultsObj.interiorP;
        } else if (e.target.classList.contains("nudeP")) {
          currentResultArr1 = nudeP;
          currentResultArr2 = resultsObj.nudeP;
        }
      })
    );
    artistLink.addEventListener("click", function () {
      pictureQuiz = false;
    });
  } else if (page === settingsSettings) {
    // настройки
    const volumeSlider = document.querySelector(".slider");
    const mute = document.querySelector(".mute");
    const toggle = document.querySelector(".toggle-button");
    const plus = document.querySelector(".plus");
    const timerLimit = document.querySelector(".time-input");
    const minus = document.querySelector(".minus");
    const settingsNav = document.querySelectorAll(".settings-nav-buttons");
    timerLimit.value = time;
    toggle.checked = timerOption;
    if (muted) {
      mute.classList.remove("mute-off");
    } else {
      mute.classList.add("mute-off");
    }
    function muteVolume() {
      if (!muted) {
        muted = true;
        mute.classList.toggle("mute-off");
      } else {
        muted = false;
        mute.classList.toggle("mute-off");
      }
    }
    mute.addEventListener("click", muteVolume);
    volumeSlider.value = volumeValue;
    volumeSlider.addEventListener("input", (e) => {
      volumeValue = e.target.value;
    });
    volumeSlider.addEventListener("mouseup", playTrueSound);
    toggle.addEventListener("click", function () {
      timerOption = toggle.checked;
    });
    plus.addEventListener("click", function () {
      if (timerLimit.value >= 30) {
        timerLimit.value = 30;
      } else {
        timerLimit.value = +timerLimit.value + 5;
      }
      time = timerLimit.value;
    });
    minus.addEventListener("click", function () {
      if (timerLimit.value <= 5) {
        timerLimit.value = 5;
      } else {
        timerLimit.value = +timerLimit.value - 5;
      }
      time = timerLimit.value;
    });
    settingsNav.forEach((item) =>
      item.addEventListener("click", function () {
        history.back();
      })
    );
  } else if (page === homeInstance) {
    //домашняя
    const pictureButton = document.querySelector(".pictures");
    const artistButton = document.querySelector(".artist");
    pictureButton.addEventListener("click", function () {
      pictureQuiz = true;
    });
    artistButton.addEventListener("click", function () {
      pictureQuiz = false;
    });
  } else if (page === resultInstance) {
    //результаты
    const resultPainting = document.querySelectorAll(".result-painting");
    const mask = document.querySelectorAll(".result-mask");
    const resultName = document.querySelectorAll(".author-name");
    const resultYear = document.querySelectorAll(".painting-year");
    const resultPaintingName = document.querySelectorAll(".painting-name");
    const navButton = document.querySelector(".result-nav");

    navButton.addEventListener("click", function () {
      history.back();
    });

    for (let x = 0; x < currentResultArr1.length; x++) {
      resultPainting[
        x
      ].style.backgroundImage = `url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentResultArr1[x].imageNum}.webp')`;

      resultName[x].textContent = currentResultArr1[x].author;
      resultYear[x].textContent = currentResultArr1[x].year;
      resultPaintingName[x].textContent = currentResultArr1[x].name;
      resultPainting[x].addEventListener("click", function () {
        mask[x].classList.toggle("result-mask-active");
      });
    }
    for (let y = 0; y < currentResultArr2.length; y++) {
      if (currentResultArr2[y] === 1) {
        resultPainting[y].classList.remove("grey");
      }
    }
  }
};

function setLocalStorage() {
  //тест
  /*   localStorage.setItem("resultsObj", JSON.stringify(resultsObj));
  localStorage.setItem("categoriResult", JSON.stringify(categoriResult));
  localStorage.setItem("currentResultArr1", JSON.stringify(currentResultArr1));
  localStorage.setItem("currentResultArr2", JSON.stringify(currentResultArr2));
  localStorage.setItem("currentArrStr", currentArrStr); */
  //тест
  localStorage.setItem("currentArr", JSON.stringify(currentArr));
  localStorage.setItem("volumeValue", volumeValue);
  localStorage.setItem("muted", muted);
  localStorage.setItem("time", time);
  localStorage.setItem("timerOption", timerOption);
  localStorage.setItem("pictureQuiz", pictureQuiz);
}

function getLocalStorage() {
  //тест
  /*   resultsObj = JSON.parse(localStorage.getItem("resultsObj"));
  categoriResult = JSON.parse(localStorage.getItem("categoriResult"));
  if (currentResultArr1 !== "undefined") {
    currentResultArr1 = JSON.parse(localStorage.getItem("currentResultArr1"));
  }
    if (currentResultArr2 !== "undefined") {
    currentResultArr2 = JSON.parse(localStorage.getItem("currentResultArr2"));
  }
  currentArrStr = localStorage.getItem("currentArrStr"); */
  //тест

  currentArr = JSON.parse(localStorage.getItem("currentArr"));

  volumeValue = localStorage.getItem("volumeValue");
  if (!volumeValue || volumeValue === "undefined") volumeValue = 50;

  time = localStorage.getItem("time");
  if (!time || time === "undefined") {
    time = 20;
  }
  muted = JSON.parse(localStorage.getItem("muted"));
  timerOption = JSON.parse(localStorage.getItem("timerOption"));
  pictureQuiz = JSON.parse(localStorage.getItem("pictureQuiz"));
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocalStorage);

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
