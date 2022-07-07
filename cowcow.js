"use strict";

/*  new item 넘기기 */
const new_box = document.querySelector("#new_box > ul");
const new_item = document.querySelectorAll(".new_item");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const size = new_item[0].clientWidth + 30;

let counter = 0;

nextBtn.addEventListener("click", () => {
  if (counter < new_item.length - 2) {
    counter++;
    new_box.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter == new_item.length - 2) {
    counter = 0;
    new_box.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    new_box.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    counter = new_item.length - 2;
    new_box.style.transform = "translateX(" + -size * counter + "px)";
  }
});

let banner = setInterval(() => {
  if (counter < new_item.length - 2) {
    counter++;
    new_box.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter == new_item.length - 2) {
    counter = 0;
    new_box.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 4000);

nextBtn.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (counter < new_item.length - 2) {
      counter++;
      new_box.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter == new_item.length - 2) {
      counter = 0;
      new_box.style.transform = "translateX(" + -size * counter + "px)";
    }
  }, 4000);
});

prevBtn.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (counter < new_item.length - 2) {
      counter++;
      new_box.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter == new_item.length - 2) {
      counter = 0;
      new_box.style.transform = "translateX(" + -size * counter + "px)";
    }
  }, 4000);
});

/* 광고 자동 넘기기 */
const left_box = document.querySelector("#advBox > ul");
const adv_item = document.querySelectorAll(".adv");

const sizeA = adv_item[0].clientWidth;

let counterA = 0;

let adv = setInterval(() => {
  if (counterA < adv_item.length - 1) {
    counterA++;
    left_box.style.transform = "translateX(" + -sizeA * counterA + "px)";
  } else if (counterA == adv_item.length - 1) {
    counterA = 0;
    left_box.style.transform = "translateX(" + -sizeA * counterA + "px)";
  }
}, 3000);

/* 마우스 올렸을 때 메뉴바뜨기 */
const menubar = document.querySelector(".menubar");
const hiddenbar = document.querySelector(".hiddenbar");

menubar.addEventListener("mouseover", () => {
  if (hiddenbar.classList.contains("on")) {
  } else {
    hiddenbar.classList.add("on");
  }
});

menubar.addEventListener("mouseleave", () => {
  if (hiddenbar.classList.contains("on")) {
    // 클래스 중에 on 삭제
    hiddenbar.classList.remove("on");
  }
});

hiddenbar.addEventListener("mouseover", () => {
  if (hiddenbar.classList.contains("on")) {
  } else {
    hiddenbar.classList.add("on");
  }
});

hiddenbar.addEventListener("mouseleave", () => {
  if (hiddenbar.classList.contains("on")) {
    hiddenbar.classList.remove("on");
  }
});

const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");

const head = document.querySelector("header");
const bottom = document.getElementById("second");

const topposition = head.offsetTop;
const bottomP = bottom.offsetTop;

cursor1.addEventListener("click", () => {
  window.scroll({ top: head, behavior: "smooth" });
});

cursor2.addEventListener("click", () => {
  window.scroll({ top: bottomP, behavior: "smooth" });
});

// window.onscroll = function () {
//   if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
//     document.getElementsByClassName("fixed").style.position = "fixed";
//   }
// };

let fixed = document.querySelector(".fixed");

let headlength = head.clientHeight;
console.log(headlength);

// 실현이 안됨  addEvent는 한번만 실행이 되는 경우
// window.addEventListener =
//   ("scroll",
//   () => {
//     console.log("test");
//     let windowlength = document.documentElement.scrollTop;
//     let fixedlength = fixed.getBoundingClientRect().top;
//     console.log(fixedlength);
//     console.log(windowlength);
//     if (fixedlength <= 0) {
//       fixed.classList.add("Topfixed");
//     } else {
//       fixed.classList.remove("Topfixed");
//     }
//   });

// 실현되지만 모양이 변함 .onscroll은 게속 실행이 됨
window.onscroll = function () {
  let fixedlength = fixed.getBoundingClientRect().top;
  if (fixedlength <= 0) {
    fixed.classList.add("Topfixed");
  } else {
    fixed.classList.remove("Topfixed");
  }
};
