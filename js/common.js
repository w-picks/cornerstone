const body = document.querySelector("body");

//문의하기 검사
const inquiry = document.querySelector("#inquiry");
const inquiryClose = inquiry.querySelector(".close");
const inquiryForm = document.querySelector(".inquiry-form");
const dim = document.querySelector(".dim");
const inquiryFormInput = inquiryForm.querySelectorAll("input");
const InputError = inquiryForm.querySelectorAll("input.error");
const phoneForm = inquiryForm.querySelector(".phone-input").querySelectorAll("input");
inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < inquiryFormInput.length; i++) {
    if (inquiryFormInput[i].value.length < 1) {
      inquiryFormInput[i].classList.add("error");
      inquiryForm.querySelector("select").classList.add("error");
      inquiryForm.querySelector("textarea").classList.add("error");
    } else {
      inquiryFormInput[i].classList.remove("error");
    }
  }
});

//스크롤시 아이템 올라오는 모션
const scrollTrans = document.querySelectorAll(".scroll-trans");
for (let i = 0; i < scrollTrans.length; i++) {
  const clientRectY = window.pageYOffset + scrollTrans[i].getBoundingClientRect().top;
  const windowHt = window.innerHeight - 50;
  const resultTrans = clientRectY - windowHt;
  window.addEventListener("scroll", () => {
    const scr = window.scrollY;
    if (resultTrans < scr) {
      scrollTrans[i].classList.add("on");
    }
  });
}

//문의하기 플로팅
const inquiryBtn = document.querySelector("#inquiry-btn");

inquiryBtn.addEventListener("click", () => {
  inquiry.classList.add("on");
  dim.classList.add("on");
  inquiryBtn.style.display = "none";
  body.style.overflow = "hidden";
});

//문의하기 닫기
inquiryClose.addEventListener("click", () => {
  inquiry.classList.remove("on");
  dim.classList.remove("on");
  inquiryBtn.style.display = "block";
  body.style.overflow = "auto";
});
