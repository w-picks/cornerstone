const wrapper = document.querySelector("#wrapper");
const pullSlideWrapping = document.querySelector(".slide-pull-wrapping");
const slideSection = document.querySelector("#slide-section");

let numIntervalBloo = true;
let swiper = undefined;
const resizeFunc = () => {
  const windowWt = window.innerWidth;
  if (windowWt >= 1000 && swiper == undefined) {
    const slideTop = document.querySelector("#slide-section").offsetTop;
    swiper = new Swiper("#slide-section", {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    console.log(swiper);

    window.addEventListener("scroll", () => {
      const scr = window.scrollY;
      if (scr < slideTop - 80) {
        numIntervalBloo = true;
      } else {
        //숫자 증가
        if (numIntervalBloo == true) {
          let numIntervalEl = document.querySelector(".number-interval");
          let userValue = document.querySelectorAll(".user-value li");
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          setInterval(() => {
            num += 69;
            if (num <= 4000) {
              numIntervalEl.innerHTML = num.toLocaleString("ko-KR");
            } else {
              numIntervalEl.innerHTML = "4,000";
            }
            num2 += 60;
            if (num2 <= 3600) {
              userValue[0].querySelector("b").innerHTML = num2;
            }
            num3++;
            if (num3 <= 40) {
              userValue[1].querySelector("b").innerHTML = `${num3}M`;
              userValue[3].querySelector("b").innerHTML = num3;
            }
            num4 += 5;
            if (num4 <= 180) {
              userValue[2].querySelector("b").innerHTML = num4;
            }
          }, 20);
          numIntervalBloo = false;
        }
      }
    });
  } else if (windowWt < 1000 && swiper != undefined) {
    swiper.destroy();
    swiper = undefined;
    console.log(swiper);
  }
};

resizeFunc();

window.addEventListener("resize", resizeFunc);

const mainSection = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const scr = window.scrollY;
  const clientRect = mainSection[2].getBoundingClientRect();
  const offTop = clientRect.top;
  const resultTop = scr + offTop;
  const clientRectMax = mainSection[6].getBoundingClientRect();
  const offTopMax = clientRectMax.top;
  const resultTopMax = scr + offTopMax;
  if (scr > resultTop && scr < resultTopMax) {
    for (let i = 0; i < quickLi.length; i++) {
      const clientRect1 = mainSection[i + 3].getBoundingClientRect();
      const offTop1 = clientRect1.top;
      const resultTop1 = scr + offTop1;

      const clientRect2 = mainSection[i + 4].getBoundingClientRect();
      const offTop2 = clientRect2.top;
      const resultTop2 = scr + offTop2;

      if (resultTop1 - 81 < scr && scr < resultTop2 - 81) {
        for (let i = 0; i < quickLi.length; i++) {
          quickLi[i].classList.remove("active");
        }
        quickLi[i + 1].classList.add("active");
      }
    }
  } else if (scr < resultTop) {
    quickLi[1].classList.remove("active");
    quickLi[0].classList.add("active");
  }
});
