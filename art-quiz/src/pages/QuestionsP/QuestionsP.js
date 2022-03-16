import QuestionsElement from "./QuestionsP.html";

export class QuestionsP {
  constructor() {}

  async render() {
    return QuestionsElement;
  }

  async after_render() {}

  async wrap(currentArr, n) {
    /* let n = 0; */ // индекс текущей карточки с вопросами

    function shuffle(array) {
      //перемешиваем варианты ответов
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function switchImg() {
      let imgNum = currentArr[n].imageNum;
      const test = document.querySelector(".painting-img");
      const img = new Image();
      img.src = `https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${imgNum}.webp`;
      img.onload = () => {
        test.style.backgroundImage = `url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${imgNum}.webp')`;
      };
    }

    async function getQuestions() {
      let anwerOptions = new Set();

      switchImg();

      console.log(n);

      /* trueAns = currentArr[n].author; */
      anwerOptions.add(currentArr[n].author);

      for (let i = 0; anwerOptions.size < 4; i++) {
        let item = Math.round(Math.random() * 9);
        anwerOptions.add(currentArr[item].author);
      }

      let shufflingAnswears = [...anwerOptions];

      shuffle(shufflingAnswears);

      let answerOption;

      if (document.querySelectorAll(".answer-option")[0] !== undefined) {
        answerOption = document.querySelectorAll(".answer-option");
      }

      for (let j = 0; j < shufflingAnswears.length; j++) {
        answerOption[j].innerHTML = shufflingAnswears[j];
      }
    }

    getQuestions();
  }
}
