const wrapper = document.querySelector("#wrapper");
const pullSlideWrapping = document.querySelector(".slide-pull-wrapping");

let swiper = undefined;
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
      } else {
        pullSlideWrapping.style.display = "none";
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
pullSlideWrapping.style.top = `${slideSection}px`;

resizeFunc();

window.addEventListener("resize", resizeFunc);

//slide - 2 노트북 높이 맞춤
const slide2Hrm = document.querySelectorAll("#slide-section .htm-container > ul .hrm-list");
for (let i = 0; i < slide2Hrm.length; i++) {
  slide2Hrm[i].style.padding = "1% 0";
}
