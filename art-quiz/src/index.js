"use strict";

import "./styles/style.scss";

import { Home } from "./pages/Home/index.js";
import { Categories } from "./pages/Categories/index.js";
import { Settings } from "./pages/Settings/index.js";
import { Questions } from "./pages/Questions/index.js";
import { Error404 } from "./pages/Error404/index.js";

import { Utils } from "./utils/Utils.js";

const homeInstance = new Home();
const settingsSettings = new Settings();
const categoriesInstance = new Categories();
const questionsInstance = new Questions();
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
const portraitA = [];
const landscapeA = [];
const stillLifeA = [];
const impressionismA = [];
const expressionismA = [];
const avantGardeA = [];
const renaissanceA = [];
const surrealismA = [];
const kitschA = [];
const minimalismA = [];
const interiorA = [];
const nudeA = [];

let currentArr;

let n = 0;

let trueAns;

async function pushInArr() {
  //разделение большого массива на 24 маленьких
  let pic = "data.json";
  const res = await fetch(pic);
  const data = await res.json();

  data.map((item) => {
    if (item.imageNum < 10) {
      portrait.push(item);
    } else if (item.imageNum >= 10 && item.imageNum < 20) {
      landscape.push(item);
    } else if (item.imageNum >= 20 && item.imageNum < 30) {
      stillLife.push(item);
    } else if (item.imageNum >= 30 && item.imageNum < 40) {
      impressionism.push(item);
    } else if (item.imageNum >= 40 && item.imageNum < 50) {
      expressionism.push(item);
    } else if (item.imageNum >= 50 && item.imageNum < 60) {
      avantGarde.push(item);
    } else if (item.imageNum >= 60 && item.imageNum < 70) {
      renaissance.push(item);
    } else if (item.imageNum >= 70 && item.imageNum < 80) {
      surrealism.push(item);
    } else if (item.imageNum >= 80 && item.imageNum < 90) {
      kitsch.push(item);
    } else if (item.imageNum >= 90 && item.imageNum < 100) {
      minimalism.push(item);
    } else if (item.imageNum >= 100 && item.imageNum < 110) {
      interior.push(item);
    } else if (item.imageNum >= 110 && item.imageNum < 120) {
      nude.push(item);
    } else if (item.imageNum >= 120 && item.imageNum < 130) {
      portraitA.push(item);
    } else if (item.imageNum >= 130 && item.imageNum < 140) {
      landscapeA.push(item);
    } else if (item.imageNum >= 140 && item.imageNum < 150) {
      stillLifeA.push(item);
    } else if (item.imageNum >= 150 && item.imageNum < 160) {
      impressionismA.push(item);
    } else if (item.imageNum >= 160 && item.imageNum < 170) {
      expressionismA.push(item);
    } else if (item.imageNum >= 170 && item.imageNum < 180) {
      avantGardeA.push(item);
    } else if (item.imageNum >= 180 && item.imageNum < 190) {
      renaissanceA.push(item);
    } else if (item.imageNum >= 190 && item.imageNum < 200) {
      surrealismA.push(item);
    } else if (item.imageNum >= 200 && item.imageNum < 210) {
      kitschA.push(item);
    } else if (item.imageNum >= 210 && item.imageNum < 220) {
      minimalismA.push(item);
    } else if (item.imageNum >= 220 && item.imageNum < 230) {
      interiorA.push(item);
    } else {
      nudeA.push(item);
    }
  });
}

const routes = {
  "/": homeInstance,
  "/settings": settingsSettings,
  "/categories": categoriesInstance,
  "/questions": questionsInstance,
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
  if (page === questionsInstance) {
    const ansOpt = document.querySelectorAll(".answer-option");
    const nextButton = document.querySelectorAll(".continue");

    await page.wrap(currentArr, n);

    ansOpt.forEach(
      (
        item //вызов конкретного модального окна
      ) =>
        item.addEventListener("click", (e) => {
          const modalTrue = document.querySelector(".fixed-overlay-true");
          const modalFalls = document.querySelector(".fixed-overlay-falls");
          const modalResult = document.querySelector(".fixed-overlay-result");
          trueAns = currentArr[n].author;
          n++;
          if (e.target.textContent == trueAns && n != 10) {
            modalTrue.classList.add("fixed-overlay-active");
          } else if (e.target.textContent != trueAns && n != 10) {
            modalFalls.classList.add("fixed-overlay-active");
          } else {
            modalResult.classList.add("fixed-overlay-active");
            n = 0;
          }
        })
    );
    nextButton.forEach((item) =>
      item.addEventListener("click", function () {
        const modalTrue = document.querySelector(".fixed-overlay-true");
        const modalFalls = document.querySelector(".fixed-overlay-falls");
        modalTrue.classList.remove("fixed-overlay-active");
        modalFalls.classList.remove("fixed-overlay-active");
        page.wrap(currentArr, n);
      })
    );
  } else if (page === categoriesInstance) {
    const categories = document.querySelectorAll(".categori-card");
    categories.forEach((item) =>
      item.addEventListener("click", (e) => {
        //запуск вопроса с конкретным массивом
        if (e.target.classList.contains("portrait")) {
          currentArr = portrait;
        } else if (e.target.classList.contains("landscape")) {
          currentArr = landscape;
        } else if (e.target.classList.contains("stillLife")) {
          currentArr = stillLife;
        } else if (e.target.classList.contains("impressionism")) {
          currentArr = impressionism;
        } else if (e.target.classList.contains("expressionism")) {
          currentArr = expressionism;
        } else if (e.target.classList.contains("avantGarde")) {
          currentArr = avantGarde;
        } else if (e.target.classList.contains("renaissance")) {
          currentArr = renaissance;
        } else if (e.target.classList.contains("surrealism")) {
          currentArr = surrealism;
        } else if (e.target.classList.contains("kitsch")) {
          currentArr = kitsch;
        } else if (e.target.classList.contains("minimalism")) {
          currentArr = minimalism;
        } else if (e.target.classList.contains("interior")) {
          currentArr = interior;
        } else if (e.target.classList.contains("nude")) {
          currentArr = nude;
        }
      })
    );
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
