const wrapper = document.querySelector("#wrapper");
const pullSlideWrapping = document.querySelector(".slide-pull-wrapping");

let swiper = undefined;
let numIntervalBloo = true;
const resizeFunc = () => {
  const windowWt = window.innerWidth;
  if (windowWt >= 1000 && swiper == undefined) {
    swiper = new Swiper("#slide-section", {
      direction: "vertical",
      mousewheel: {
        releaseOnEdges: true,
      },
      effect: "fade",
    });
    swiper.on("reachEnd", () => {
      wrapper.style.overflow = "auto";
      wrapper.style.height = "auto";
    });
    window.addEventListener("scroll", () => {
      const scr = window.scrollY;
      let slideTop = document.querySelector("#slide-section").offsetTop;
      const slideHt = document.querySelector("#slide-section").offsetHeight;
      if (scr > slideTop + slideHt) {
        swiper.slideTo(0, 0, true);
      }
      if (scr < slideTop - 80) {
        const mainSection = document.querySelector("#main-section").offsetHeight;
        const slideSection = document.querySelector("#slide-section").offsetHeight;
        wrapper.style.height = `${mainSection + slideSection}px`;
        wrapper.style.overflow = "hidden";
        pullSlideWrapping.style.display = "block";
        numIntervalBloo = true;
      } else {
        pullSlideWrapping.style.display = "none";
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
  }

  if (windowWt >= 1000) {
    const mainSection = document.querySelector("#main-section").offsetHeight;
    const slideSection = document.querySelector("#slide-section").offsetHeight;
    wrapper.style.height = `${mainSection + slideSection}px`;
    wrapper.style.overflow = "hidden";
  }
};

const slideSection = document.querySelector("#slide-section").offsetTop;
pullSlideWrapping.style.top = `${slideSection + 100}px`;

resizeFunc();

window.addEventListener("resize", resizeFunc);

//slide - 2 노트북 높이 맞춤
const slide2Hrm = document.querySelectorAll("#slide-section .htm-container > ul .hrm-list");
for (let i = 0; i < slide2Hrm.length; i++) {
  slide2Hrm[i].style.padding = "1% 0";
}

const mainSlide = new Swiper(".main-slide", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  allowTouchMove: false,
});
// mainSlide.allowSlideNext;
