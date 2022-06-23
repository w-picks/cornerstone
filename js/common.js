const body = document.querySelector("body");

//도입문의 직접입력
// const directOption = document.querySelector(".inquiry-form");
const emailInput = document.querySelector(".email-input select");
const directInput = document.querySelector(".email-input .direct-input");
directInput.style.display = "none";
const directChange = (e) => {
  if (emailInput.options[emailInput.selectedIndex].value == "direct-input") {
    emailInput.style.display = "none";
    directInput.style.display = "block";
  }
};

const inquirySucces = document.querySelector(".inquiry-succes");

//문의하기 검사
const inquiry = document.querySelector("#inquiry");
const inquiryClose = inquiry.querySelector(".close");
const inquiryForm = document.querySelector(".inquiry-form");
const dim = document.querySelector(".dim");
const inquiryFormInput = inquiryForm.querySelectorAll("input");
const inquiryFormSelect = inquiryForm.querySelector("select");
const inquiryFormTextarea = inquiryForm.querySelector(".etc textarea");
const InputError = inquiryForm.querySelectorAll("input.error");
const phoneForm = inquiryForm.querySelector(".phone-input").querySelectorAll("input");
inquiryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let check = false;
  for (let i = 0; i < inquiryFormInput.length; i++) {
    if (inquiryFormInput[i].value.length < 1 || emailInput.options[emailInput.selectedIndex].value == "empty" || inquiryFormTextarea.value.length < 1) {
      inquiryFormInput[i].classList.add("error");
      inquiryForm.querySelector("select").classList.add("error");
      inquiryForm.querySelector("textarea").classList.add("error");
      let inquiryEmail2 = "";
      if (emailInput.options[emailInput.selectedIndex].value == "direct-input") {
        inquiryEmail2 = inquiryForm.querySelectorAll(".email input")[1].classList.add("error");
      } else {
        inquiryEmail2 = emailInput.options[emailInput.selectedIndex].classList.add("error");
      }
      // console.log(inquiryFormTextarea.value.length < 1);
      if (inquiryFormInput[i].value.length > 0) {
        inquiryFormInput[i].classList.remove("error");
      }
      if (emailInput.options[emailInput.selectedIndex].value != "empty") {
        inquiryForm.querySelector("select").classList.remove("error");
      }
      if (inquiryFormTextarea.value.length > 0) {
        inquiryForm.querySelector("textarea").classList.remove("error");
      }
    } else {
      console.log("succ");
      check = true;
    }
  }
  if (check) {
    //데이터 전부 입력했을 때
    inquiry.classList.remove("on");
    inquirySucces.style.display = "block";
    console.log(1);
    for (let i = 0; i < inquiryFormInput.length; i++) {
      inquiryFormInput[i].classList.remove("error");
    }
    inquiryForm.querySelectorAll(".email input")[1].classList.remove("error");
    inquiryForm.querySelector("select").classList.remove("error");
    inquiryForm.querySelector("textarea").classList.remove("error");
    const inquiryName = inquiryForm.querySelector(".name input").value;
    const inquiryCompany = inquiryForm.querySelector(".company input").value;
    const inquiryPart = inquiryForm.querySelector(".part input").value;
    const inquiryPosition = inquiryForm.querySelector(".position input").value;
    const inquiryPhone1 = inquiryForm.querySelectorAll(".phone input")[0].value;
    const inquiryPhone2 = inquiryForm.querySelectorAll(".phone input")[1].value;
    const inquiryPhone3 = inquiryForm.querySelectorAll(".phone input")[2].value;
    const inquiryEmail = inquiryForm.querySelectorAll(".email input")[0].value;
    let inquiryEmail2 = "";
    // const inquiryDirectInput = emailInput.options[emailInput.selectedIndex].value;
    if (emailInput.options[emailInput.selectedIndex].value == "direct-input") {
      inquiryEmail2 = inquiryForm.querySelectorAll(".email input")[1].value;
    } else {
      inquiryEmail2 = emailInput.options[emailInput.selectedIndex].value;
    }
    const inquiryEtc = inquiryForm.querySelector(".etc textarea").value;
    const pardotData = {
      name: inquiryName,
      company: inquiryCompany,
      part: inquiryPart,
      position: inquiryPosition,
      phone: inquiryPhone1 + inquiryPhone2 + inquiryPhone3,
      email: inquiryEmail + "@" + inquiryEmail2,
      etc: inquiryEtc,
    };
    $.ajax({
      url: "https://mkt.i2max.co.kr/l/636401/2021-03-11/29fk47 ",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      type: "post",
      data: JSON.stringify(pardotData),
      success: function (res) {
        console.log(res);
      },
      error: function (request, status, error) {
        console.log(request, status, error);
      },
    });
    //*
  }
});

//문의하기 성공 닫기
if (inquirySucces) {
  inquirySucces.querySelector("button").addEventListener("click", () => {
    inquirySucces.style.display = "none";
    dim.classList.remove("on");
  });
}

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
  inquiryBtn.style.display = "block";
  body.style.overflow = "auto";
});

//aside 섹션이동
const quickLi = quickMenu.querySelectorAll("div");
quickLi.forEach((item, ind) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < quickLi.length; i++) {
      quickLi[i].classList.remove("active");
    }
    item.classList.add("active");
    const mainSection = document.querySelectorAll("section")[ind + 2];
    const clientRect = mainSection.getBoundingClientRect();
    const offTop = clientRect.top;
    const windowScrY = window.pageYOffset;
    const resultTop = windowScrY + offTop;
    console.log(resultTop);
    scrollTo({ top: resultTop - 81, behavior: "smooth" });
  });
});
