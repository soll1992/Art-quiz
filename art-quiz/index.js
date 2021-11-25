"use strict";import"./styles/style.scss";import{Home}from"./pages/Home/indexH.js";import{Categories}from"./pages/Categories/indexC.js";import{CategoriesP}from"./pages/CategoriesP/indexC.js";import{Settings}from"./pages/Settings/indexS.js";import{Questions}from"./pages/Questions/indexQ.js";import{QuestionsP}from"./pages/QuestionsP/indexQ.js";import{Result}from"./pages/Result/indexR.js";import{Error404}from"./pages/Error404/indexE.js";import{Utils}from"./utils/Utils.js";const homeInstance=new Home,settingsSettings=new Settings,categoriesAInstance=new Categories,categoriesPInstance=new CategoriesP,questionsInstance=new Questions,questionsPInstance=new QuestionsP,resultInstance=new Result,error404Instance=new Error404,portrait=[],landscape=[],stillLife=[],impressionism=[],expressionism=[],avantGarde=[],renaissance=[],surrealism=[],kitsch=[],minimalism=[],interior=[],nude=[],portraitP=[],landscapeP=[],stillLifeP=[],impressionismP=[],expressionismP=[],avantGardeP=[],renaissanceP=[],surrealismP=[],kitschP=[],minimalismP=[],interiorP=[],nudeP=[];let currentArrStr,volumeValue,time,trueAns,resultsObj={portrait:[],landscape:[],stillLife:[],impressionism:[],expressionism:[],avantGarde:[],renaissance:[],surrealism:[],kitsch:[],minimalism:[],interior:[],nude:[],portraitP:[],landscapeP:[],stillLifeP:[],impressionismP:[],expressionismP:[],avantGardeP:[],renaissanceP:[],surrealismP:[],kitschP:[],minimalismP:[],interiorP:[],nudeP:[]},categoriResult={},currentArr=[],muted=!1,n=0,numberOfTrueAnswers=0,timerOption=!0,pictureQuiz=!1,currentResultArr1=[],currentResultArr2=[];function playTrueSound(){const r=new Audio;r.src="./assets/sound/true.mp3",r.volume=volumeValue/100,r.muted=!!muted,r.play()}async function playFallseSound(){const r=new Audio;r.src="./assets/sound/false.mp3",r.volume=volumeValue/100,r.muted=!!muted,r.play()}async function playResultSound(){const r=new Audio;r.src="./assets/sound/result.mp3",r.volume=volumeValue/100,r.muted=!!muted,r.play()}function startTimer(r){const e=document.querySelector(".fixed-overlay-falls"),t=document.querySelector(".time-line"),s=document.querySelectorAll(".answer-option"),i=document.querySelectorAll(".questions-nav-buttons"),u=document.querySelector(".answer"),a=document.querySelectorAll(".true-painting-conteiner"),c=document.querySelectorAll(".true-author"),l=document.querySelectorAll(".true-year"),o=document.querySelectorAll(".true-name");let m=r,p=setInterval((function(){t.textContent=m,m--,m<0&&(e.classList.add("fixed-overlay-active"),"portrait"===currentArrStr?resultsObj.portrait.push(0):"landscape"===currentArrStr?resultsObj.landscape.push(0):"stillLife"===currentArrStr?resultsObj.stillLife.push(0):"impressionism"===currentArrStr?resultsObj.impressionism.push(0):"expressionism"===currentArrStr?resultsObj.expressionism.push(0):"avantGarde"===currentArrStr?resultsObj.avantGarde.push(0):"renaissance"===currentArrStr?resultsObj.renaissance.push(0):"surrealism"===currentArrStr?resultsObj.surrealism.push(0):"kitsch"===currentArrStr?resultsObj.kitsch.push(0):"minimalism"===currentArrStr?resultsObj.minimalism.push(0):"interior"===currentArrStr?resultsObj.interior.push(0):"nude"===currentArrStr?resultsObj.nude.push(0):"portraitP"===currentArrStr?resultsObj.portraitP.push(0):"landscapeP"===currentArrStr?resultsObj.landscapeP.push(0):"stillLifeP"===currentArrStr?resultsObj.stillLifeP.push(0):"impressionismP"===currentArrStr?resultsObj.impressionismP.push(0):"expressionismP"===currentArrStr?resultsObj.expressionismP.push(0):"avantGardeP"===currentArrStr?resultsObj.avantGardeP.push(0):"renaissanceP"===currentArrStr?resultsObj.renaissanceP.push(0):"surrealismP"===currentArrStr?resultsObj.surrealismP.push(0):"kitschP"===currentArrStr?resultsObj.kitschP.push(0):"minimalismP"===currentArrStr?resultsObj.minimalismP.push(0):"interiorP"===currentArrStr?resultsObj.interiorP.push(0):"nudeP"===currentArrStr&&resultsObj.nudeP.push(0),u.classList.remove("answer-active"),playFallseSound(),c.forEach((r=>{r.textContent=currentArr[n].author})),l.forEach((r=>{r.textContent=currentArr[n].year})),o.forEach((r=>{r.textContent=currentArr[n].name})),a.forEach((r=>r.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`)),clearInterval(p))}),1e3);s.forEach((r=>r.addEventListener("click",(function(){clearInterval(p)})))),i.forEach((r=>r.addEventListener("click",(function(){clearInterval(p),n=0}))))}async function pushInArr(){const r=await fetch("data.json");(await r.json()).map((r=>{r.imageNum<10&&portrait.length<10?portrait.push(r):r.imageNum>=10&&r.imageNum<20&&landscape.length<10?landscape.push(r):r.imageNum>=20&&r.imageNum<30&&stillLife.length<10?stillLife.push(r):r.imageNum>=30&&r.imageNum<40&&impressionism.length<10?impressionism.push(r):r.imageNum>=40&&r.imageNum<50&&expressionism.length<10?expressionism.push(r):r.imageNum>=50&&r.imageNum<60&&avantGarde.length<10?avantGarde.push(r):r.imageNum>=60&&r.imageNum<70&&renaissance.length<10?renaissance.push(r):r.imageNum>=70&&r.imageNum<80&&surrealism.length<10?surrealism.push(r):r.imageNum>=80&&r.imageNum<90&&kitsch.length<10?kitsch.push(r):r.imageNum>=90&&r.imageNum<100&&minimalism.length<10?minimalism.push(r):r.imageNum>=100&&r.imageNum<110&&interior.length<10?interior.push(r):r.imageNum>=110&&r.imageNum<120&&nude.length<10?nude.push(r):r.imageNum>=120&&r.imageNum<130&&portraitP.length<10?portraitP.push(r):r.imageNum>=130&&r.imageNum<140&&landscapeP.length<10?landscapeP.push(r):r.imageNum>=140&&r.imageNum<150&&stillLifeP.length<10?stillLifeP.push(r):r.imageNum>=150&&r.imageNum<160&&impressionismP.length<10?impressionismP.push(r):r.imageNum>=160&&r.imageNum<170&&expressionismP.length<10?expressionismP.push(r):r.imageNum>=170&&r.imageNum<180&&avantGardeP.length<10?avantGardeP.push(r):r.imageNum>=180&&r.imageNum<190&&renaissanceP.length<10?renaissanceP.push(r):r.imageNum>=190&&r.imageNum<200&&surrealismP.length<10?surrealismP.push(r):r.imageNum>=200&&r.imageNum<210&&kitschP.length<10?kitschP.push(r):r.imageNum>=210&&r.imageNum<220&&minimalismP.length<10?minimalismP.push(r):r.imageNum>=220&&r.imageNum<230&&interiorP.length<10?interiorP.push(r):nudeP.length<10&&nudeP.push(r)}))}const routes={"/":homeInstance,"/settings":settingsSettings,"/categories_artist":categoriesAInstance,"/categories_pictures":categoriesPInstance,"/questions":questionsInstance,"/questions_pictures":questionsPInstance,"/result":resultInstance},router=async()=>{const r=document.getElementById("page_container"),e=Utils.parseRequestURL(),t=(e.resource?`/${e.resource}`:"/")+(e.id?"/:id":"")+(e.verb?`/${e.verb}`:""),s=routes[t]?routes[t]:error404Instance;if(r.innerHTML=await s.render(),await s.after_render(),await pushInArr(),s===questionsInstance||s===questionsPInstance){const r=document.querySelectorAll(".answer-option"),e=document.querySelectorAll(".continue"),t=document.querySelector(".answer");questionsInstance.wrap(currentArr,n,pictureQuiz),timerOption&&startTimer(time),t.classList.add("answer-active"),r.forEach((r=>r.addEventListener("click",(r=>{const e=document.querySelector(".fixed-overlay-true"),s=document.querySelector(".fixed-overlay-falls"),i=document.querySelectorAll(".true-painting-conteiner"),u=document.querySelectorAll(".true-author"),a=document.querySelectorAll(".true-year"),c=document.querySelectorAll(".true-name");trueAns=currentArr[n].author,t.classList.remove("answer-active"),pictureQuiz?(trueAns=currentArr[n].imageNum,r.target.style.backgroundImage==`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`?(e.classList.add("fixed-overlay-active"),"portraitP"===currentArrStr?resultsObj.portraitP.push(1):"landscapeP"===currentArrStr?resultsObj.landscapeP.push(1):"stillLifeP"===currentArrStr?resultsObj.stillLifeP.push(1):"impressionismP"===currentArrStr?resultsObj.impressionismP.push(1):"expressionismP"===currentArrStr?resultsObj.expressionismP.push(1):"avantGardeP"===currentArrStr?resultsObj.avantGardeP.push(1):"renaissanceP"===currentArrStr?resultsObj.renaissanceP.push(1):"surrealismP"===currentArrStr?resultsObj.surrealismP.push(1):"kitschP"===currentArrStr?resultsObj.kitschP.push(1):"minimalismP"===currentArrStr?resultsObj.minimalismP.push(1):"interiorP"===currentArrStr?resultsObj.interiorP.push(1):"nudeP"===currentArrStr&&resultsObj.nudeP.push(1),playTrueSound(),numberOfTrueAnswers++):r.target.style.backgroundImage!=`url("https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${trueAns}.webp")`&&(s.classList.add("fixed-overlay-active"),"portraitP"===currentArrStr?resultsObj.portraitP.push(0):"landscapeP"===currentArrStr?resultsObj.landscapeP.push(0):"stillLifeP"===currentArrStr?resultsObj.stillLifeP.push(0):"impressionismP"===currentArrStr?resultsObj.impressionismP.push(0):"expressionismP"===currentArrStr?resultsObj.expressionismP.push(0):"avantGardeP"===currentArrStr?resultsObj.avantGardeP.push(0):"renaissanceP"===currentArrStr?resultsObj.renaissanceP.push(0):"surrealismP"===currentArrStr?resultsObj.surrealismP.push(0):"kitschP"===currentArrStr?resultsObj.kitschP.push(0):"minimalismP"===currentArrStr?resultsObj.minimalismP.push(0):"interiorP"===currentArrStr?resultsObj.interiorP.push(0):"nudeP"===currentArrStr&&resultsObj.nudeP.push(0),playFallseSound())):r.target.textContent==trueAns?(e.classList.add("fixed-overlay-active"),"portrait"===currentArrStr?resultsObj.portrait.push(1):"landscape"===currentArrStr?resultsObj.landscape.push(1):"stillLife"===currentArrStr?resultsObj.stillLife.push(1):"impressionism"===currentArrStr?resultsObj.impressionism.push(1):"expressionism"===currentArrStr?resultsObj.expressionism.push(1):"avantGarde"===currentArrStr?resultsObj.avantGarde.push(1):"renaissance"===currentArrStr?resultsObj.renaissance.push(1):"surrealism"===currentArrStr?resultsObj.surrealism.push(1):"kitsch"===currentArrStr?resultsObj.kitsch.push(1):"minimalism"===currentArrStr?resultsObj.minimalism.push(1):"interior"===currentArrStr?resultsObj.interior.push(1):"landscape"===currentArrStr&&resultsObj.nude.push(1),playTrueSound(),numberOfTrueAnswers++):r.target.textContent!=trueAns&&(s.classList.add("fixed-overlay-active"),"portrait"===currentArrStr?resultsObj.portrait.push(0):"landscape"===currentArrStr?resultsObj.landscape.push(0):"stillLife"===currentArrStr?resultsObj.stillLife.push(0):"impressionism"===currentArrStr?resultsObj.impressionism.push(0):"expressionism"===currentArrStr?resultsObj.expressionism.push(0):"avantGarde"===currentArrStr?resultsObj.avantGarde.push(0):"renaissance"===currentArrStr?resultsObj.renaissance.push(0):"surrealism"===currentArrStr?resultsObj.surrealism.push(0):"kitsch"===currentArrStr?resultsObj.kitsch.push(0):"minimalism"===currentArrStr?resultsObj.minimalism.push(0):"interior"===currentArrStr?resultsObj.interior.push(0):"landscape"===currentArrStr&&resultsObj.nude.push(0),playFallseSound()),u.forEach((r=>{r.textContent=currentArr[n].author})),a.forEach((r=>{r.textContent=currentArr[n].year})),c.forEach((r=>{r.textContent=currentArr[n].name})),i.forEach((r=>r.style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentArr[n].imageNum}.webp')`))})))),e.forEach((r=>r.addEventListener("click",(function(){const r=document.querySelector(".fixed-overlay-true"),e=document.querySelector(".fixed-overlay-falls"),s=document.querySelector(".fixed-overlay-result"),i=document.querySelector(".test");9!=n?(n++,r.classList.remove("fixed-overlay-active"),e.classList.remove("fixed-overlay-active"),t.classList.add("answer-active"),questionsInstance.wrap(currentArr,n,pictureQuiz),timerOption&&startTimer(time)):(r.classList.remove("fixed-overlay-active"),e.classList.remove("fixed-overlay-active"),s.classList.add("fixed-overlay-active"),n=0,playResultSound(),i.textContent=`Result: ${numberOfTrueAnswers}/10`)}))))}else if(s===categoriesAInstance){const r=document.querySelectorAll(".categori-card"),e=document.querySelectorAll(".result-link"),t=document.querySelectorAll(".score"),s=document.querySelector(".picture-link"),i=document.querySelectorAll(".categori-img");void 0!==currentArrStr&&(categoriResult[currentArrStr]=`${numberOfTrueAnswers}/10`);for(let r in categoriResult)t.forEach((e=>{e.classList.contains(r)&&(e.textContent=categoriResult[r])})),i.forEach((e=>{e.classList.contains(r)&&e.classList.remove("grey")})),e.forEach((e=>{e.classList.contains(r)&&e.classList.add("result-link-active")}));r.forEach((r=>r.addEventListener("click",(r=>{r.target.classList.contains("portrait")?(currentArr=portrait,pictureQuiz=!1,currentArrStr="portrait",resultsObj.portrait=[]):r.target.classList.contains("landscape")?(currentArr=landscape,pictureQuiz=!1,currentArrStr="landscape",resultsObj.landscape=[]):r.target.classList.contains("stillLife")?(currentArr=stillLife,pictureQuiz=!1,currentArrStr="stillLife",resultsObj.stillLife=[]):r.target.classList.contains("impressionism")?(currentArr=impressionism,pictureQuiz=!1,currentArrStr="impressionism",resultsObj.impressionism=[]):r.target.classList.contains("expressionism")?(currentArr=expressionism,pictureQuiz=!1,currentArrStr="expressionism",resultsObj.expressionism=[]):r.target.classList.contains("avantGarde")?(currentArr=avantGarde,pictureQuiz=!1,currentArrStr="avantGarde",resultsObj.avantGarde=[]):r.target.classList.contains("renaissance")?(currentArr=renaissance,pictureQuiz=!1,currentArrStr="renaissance",resultsObj.renaissance=[]):r.target.classList.contains("surrealism")?(currentArr=surrealism,pictureQuiz=!1,currentArrStr="surrealism",resultsObj.surrealism=[]):r.target.classList.contains("kitsch")?(currentArr=kitsch,pictureQuiz=!1,currentArrStr="kitsch",resultsObj.kitsch=[]):r.target.classList.contains("minimalism")?(currentArr=minimalism,pictureQuiz=!1,currentArrStr="minimalism",resultsObj.minimalism=[]):r.target.classList.contains("interior")?(currentArr=interior,pictureQuiz=!1,currentArrStr="interior",resultsObj.interior=[]):r.target.classList.contains("nude")&&(currentArr=nude,pictureQuiz=!1,currentArrStr="nude",resultsObj.nude=[]),n=0,numberOfTrueAnswers=0})))),e.forEach((r=>r.addEventListener("click",(r=>{r.target.classList.contains("portrait")?(currentResultArr1=portrait,currentResultArr2=resultsObj.portrait):r.target.classList.contains("landscape")?(currentResultArr1=landscape,currentResultArr2=resultsObj.landscape):r.target.classList.contains("stillLife")?(currentResultArr1=stillLife,currentResultArr2=resultsObj.stillLife):r.target.classList.contains("impressionism")?(currentResultArr1=impressionism,currentResultArr2=resultsObj.impressionism):r.target.classList.contains("expressionism")?(currentResultArr1=expressionism,currentResultArr2=resultsObj.expressionism):r.target.classList.contains("avantGarde")?(currentResultArr1=avantGarde,currentResultArr2=resultsObj.avantGarde):r.target.classList.contains("renaissance")?(currentResultArr1=renaissance,currentResultArr2=resultsObj.renaissance):r.target.classList.contains("surrealism")?(currentResultArr1=surrealism,currentResultArr2=resultsObj.surrealism):r.target.classList.contains("kitsch")?(currentResultArr1=kitsch,currentResultArr2=resultsObj.kitsch):r.target.classList.contains("minimalism")?(currentResultArr1=minimalism,currentResultArr2=resultsObj.minimalism):r.target.classList.contains("interior")?(currentResultArr1=interior,currentResultArr2=resultsObj.interior):r.target.classList.contains("nude")&&(currentResultArr1=nude,currentResultArr2=resultsObj.nude)})))),s.addEventListener("click",(function(){pictureQuiz=!0}))}else if(s===categoriesPInstance){const r=document.querySelectorAll(".categori-card"),e=document.querySelector(".artist-link"),t=document.querySelectorAll(".result-link"),s=document.querySelectorAll(".score"),i=document.querySelectorAll(".categori-img");void 0!==currentArrStr&&(categoriResult[currentArrStr]=`${numberOfTrueAnswers}/10`);for(let r in categoriResult)s.forEach((e=>{e.classList.contains(r)&&(e.textContent=categoriResult[r])})),i.forEach((e=>{e.classList.contains(r)&&e.classList.remove("grey")})),t.forEach((e=>{e.classList.contains(r)&&e.classList.add("result-link-active")}));r.forEach((r=>r.addEventListener("click",(r=>{r.target.classList.contains("portraitP")?(currentArr=portraitP,pictureQuiz=!0,currentArrStr="portraitP"):r.target.classList.contains("landscapeP")?(currentArr=landscapeP,pictureQuiz=!0,currentArrStr="landscapeP"):r.target.classList.contains("stillLifeP")?(currentArr=stillLifeP,pictureQuiz=!0,currentArrStr="stillLifeP"):r.target.classList.contains("impressionismP")?(currentArr=impressionismP,pictureQuiz=!0,currentArrStr="impressionismP"):r.target.classList.contains("expressionismP")?(currentArr=expressionismP,pictureQuiz=!0,currentArrStr="expressionismP"):r.target.classList.contains("avantGardeP")?(currentArr=avantGardeP,pictureQuiz=!0,currentArrStr="avantGardeP"):r.target.classList.contains("renaissanceP")?(currentArr=renaissanceP,pictureQuiz=!0,currentArrStr="renaissanceP"):r.target.classList.contains("surrealismP")?(currentArr=surrealismP,pictureQuiz=!0,currentArrStr="surrealismP"):r.target.classList.contains("kitschP")?(currentArr=kitschP,pictureQuiz=!0,currentArrStr="kitschP"):r.target.classList.contains("minimalismP")?(currentArr=minimalismP,pictureQuiz=!0,currentArrStr="minimalismP"):r.target.classList.contains("interiorP")?(currentArr=interiorP,pictureQuiz=!0,currentArrStr="interiorP"):r.target.classList.contains("nudeP")&&(currentArr=nudeP,pictureQuiz=!0,currentArrStr="nudeP"),numberOfTrueAnswers=0,n=0})))),t.forEach((r=>r.addEventListener("click",(r=>{r.target.classList.contains("portraitP")?(currentResultArr1=portraitP,currentResultArr2=resultsObj.portraitP):r.target.classList.contains("landscapeP")?(currentResultArr1=landscapeP,currentResultArr2=resultsObj.landscapeP):r.target.classList.contains("stillLifeP")?(currentResultArr1=stillLifeP,currentResultArr2=resultsObj.stillLifeP):r.target.classList.contains("impressionismP")?(currentResultArr1=impressionismP,currentResultArr2=resultsObj.impressionism):r.target.classList.contains("expressionismP")?(currentResultArr1=expressionismP,currentResultArr2=resultsObj.expressionismP):r.target.classList.contains("avantGardeP")?(currentResultArr1=avantGardeP,currentResultArr2=resultsObj.avantGardeP):r.target.classList.contains("renaissanceP")?(currentResultArr1=renaissanceP,currentResultArr2=resultsObj.renaissanceP):r.target.classList.contains("surrealismP")?(currentResultArr1=surrealismP,currentResultArr2=resultsObj.surrealismP):r.target.classList.contains("kitschP")?(currentResultArr1=kitschP,currentResultArr2=resultsObj.kitschP):r.target.classList.contains("minimalismP")?(currentResultArr1=minimalismP,currentResultArr2=resultsObj.minimalismP):r.target.classList.contains("interiorP")?(currentResultArr1=interiorP,currentResultArr2=resultsObj.interiorP):r.target.classList.contains("nudeP")&&(currentResultArr1=nudeP,currentResultArr2=resultsObj.nudeP)})))),e.addEventListener("click",(function(){pictureQuiz=!1}))}else if(s===settingsSettings){const r=document.querySelector(".slider"),e=document.querySelector(".mute"),t=document.querySelector(".toggle-button"),s=document.querySelector(".plus"),i=document.querySelector(".time-input"),n=document.querySelector(".minus"),u=document.querySelectorAll(".settings-nav-buttons");function a(){muted?(muted=!1,e.classList.toggle("mute-off")):(muted=!0,e.classList.toggle("mute-off"))}i.value=time,t.checked=timerOption,muted?e.classList.remove("mute-off"):e.classList.add("mute-off"),e.addEventListener("click",a),r.value=volumeValue,r.addEventListener("input",(r=>{volumeValue=r.target.value})),r.addEventListener("mouseup",playTrueSound),t.addEventListener("click",(function(){timerOption=t.checked})),s.addEventListener("click",(function(){i.value>=30?i.value=30:i.value=+i.value+5,time=i.value})),n.addEventListener("click",(function(){i.value<=5?i.value=5:i.value=+i.value-5,time=i.value})),u.forEach((r=>r.addEventListener("click",(function(){history.back()}))))}else if(s===homeInstance){const r=document.querySelector(".pictures"),e=document.querySelector(".artist");r.addEventListener("click",(function(){pictureQuiz=!0})),e.addEventListener("click",(function(){pictureQuiz=!1}))}else if(s===resultInstance){const r=document.querySelectorAll(".result-painting"),e=document.querySelectorAll(".result-mask"),t=document.querySelectorAll(".author-name"),s=document.querySelectorAll(".painting-year"),i=document.querySelectorAll(".painting-name");document.querySelector(".result-nav").addEventListener("click",(function(){history.back()}));for(let n=0;n<currentResultArr1.length;n++)r[n].style.backgroundImage=`url('https://raw.githubusercontent.com/antoshkoo/image-data/master/img/${currentResultArr1[n].imageNum}.webp')`,t[n].textContent=currentResultArr1[n].author,s[n].textContent=currentResultArr1[n].year,i[n].textContent=currentResultArr1[n].name,r[n].addEventListener("click",(function(){e[n].classList.toggle("result-mask-active")}));for(let e=0;e<currentResultArr2.length;e++)1===currentResultArr2[e]&&r[e].classList.remove("grey")}};function setLocalStorage(){localStorage.setItem("currentArr",JSON.stringify(currentArr)),localStorage.setItem("volumeValue",volumeValue),localStorage.setItem("muted",muted),localStorage.setItem("time",time),localStorage.setItem("timerOption",timerOption),localStorage.setItem("pictureQuiz",pictureQuiz)}function getLocalStorage(){currentArr=JSON.parse(localStorage.getItem("currentArr")),volumeValue=localStorage.getItem("volumeValue"),volumeValue&&"undefined"!==volumeValue||(volumeValue=50),time=localStorage.getItem("time"),time&&"undefined"!==time||(time=20),muted=JSON.parse(localStorage.getItem("muted")),timerOption=JSON.parse(localStorage.getItem("timerOption")),pictureQuiz=JSON.parse(localStorage.getItem("pictureQuiz"))}window.addEventListener("beforeunload",setLocalStorage),window.addEventListener("load",getLocalStorage),window.addEventListener("hashchange",router),window.addEventListener("load",router);