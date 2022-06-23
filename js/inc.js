//include html
//header, footer, 도입 문의하기
const windowUrl = window.location.href;
const learningUrl = windowUrl.indexOf("learning") > -1;
const careerUrl = windowUrl.indexOf("career") > -1;
const recruitUrl = windowUrl.indexOf("recruit") > -1;
const manageUrl = windowUrl.indexOf("manage") > -1;
const header = document.querySelector("header");
if (header && !learningUrl && !careerUrl && !recruitUrl && !manageUrl) {
  header.innerHTML += `
  <div>
    <h1 class="logo">
      <a href="/">
        <img src="images/cornerstone-logo.png" title="cornerstone" alt="코너스톤 로고" />
      </a>
    </h1>
    <nav>
      <ul>
        <li><a href="/learning">교육</a></li>
        <li><a href="/career">성과&#183;커리어</a></li>
        <li><a href="/recruit">채용&#183;온보딩</a></li>
        <li><a href="/management">인사운영</a></li>
      </ul>
    </nav>
  </div>

`;
} else {
  header.innerHTML += `
    <div>
      <h1 class="logo">
        <a href="/">
          <img src="../images/cornerstone-logo.png" title="cornerstone" alt="코너스톤 로고" />
        </a>
      </h1>
      <nav>
        <ul>
          <li><a href="/learning">교육</a></li>
          <li><a href="/career">성과&#183;커리어</a></li>
          <li><a href="/recruit">채용&#183;온보딩</a></li>
          <li><a href="/management">인사운영</a></li>
        </ul>
      </nav>
    </div>
  
  `;
}

const footer = document.querySelector("footer");
if (footer && !learningUrl && !careerUrl && !recruitUrl && !manageUrl) {
  footer.innerHTML += `
  <div class="site-map">
  <div class="about">
    <b>About</b>
    <ul>
      <li><a href="/">About us</a></li>
      <li><a href="/">PR</a></li>
      <li><a href="/">News & Notice</a></li>
    </ul>
  </div>
  <div class="resources">
    <b>Resources</b>
    <ul>
      <li><a href="/">제품소개서</a></li>
      <li><a href="/">E-books & Whitepapers</a></li>
    </ul>
  </div>
</div>
<div class="company-info">
  <b>Contact</b>
  <div class="contact">
    <ul>
      <li>
        <i class="contact-tit">솔루션 문의</i>
        <em><a href="mailto:csod@i2max.co.kr">csod@i2max.co.kr</a></em>
      </li>
    </ul>
    <div class="office-info">
      <ul class="head-office">
        <li>
          <i class="contact-tit">본사</i>
        </li>
        <li>
          <i>TEL</i>
          <em>02-365-2187</em>
        </li>
        <li>
          <i>FAX</i>
          <em>02-365-2093</em>
        </li>
        <li>
          <i>ADDRESS</i>
          <em
            >서울시 마포구 마포대로 137 KRX빌딩 7층<br />
            (공덕동)</em
          >
        </li>
      </ul>
      <ul class="outstation">
        <li>
          <i class="contact-tit">부산지사</i>
        </li>
        <li>
          <i>TEL</i>
          <em>070-7705-7375</em>
        </li>
        <li>
          <i>ADDRESS</i>
          <em>부산광역시 해운대구 센텀중앙로 97 <br />센텀스카이비즈 A동 1311호</em>
        </li>
      </ul>
    </div>
  </div>
</div>
<ul class="sns">
  <li>
    <a href="/"><img src="images/icons/sns-icon-1.png" /></a>
  </li>
  <li>
    <a href="/"><img src="images/icons/sns-icon-2.png" /></a>
  </li>
  <li>
    <a href="/"><img src="images/icons/sns-icon-3.png" /></a>
  </li>
  <li>
    <a href="/"><img src="images/icons/sns-icon-4.png" /></a>
  </li>
</ul>
    `;
} else {
  footer.innerHTML += `
    <div class="site-map">
    <div class="about">
      <b>About</b>
      <ul>
        <li><a href="/">About us</a></li>
        <li><a href="/">PR</a></li>
        <li><a href="/">News & Notice</a></li>
      </ul>
    </div>
    <div class="resources">
      <b>Resources</b>
      <ul>
        <li><a href="/">제품소개서</a></li>
        <li><a href="/">E-books & Whitepapers</a></li>
      </ul>
    </div>
  </div>
  <div class="company-info">
    <b>Contact</b>
    <div class="contact">
      <ul>
        <li>
          <i class="contact-tit">솔루션 문의</i>
          <em><a href="mailto:csod@i2max.co.kr">csod@i2max.co.kr</a></em>
        </li>
      </ul>
      <div class="office-info">
        <ul class="head-office">
          <li>
            <i class="contact-tit">본사</i>
          </li>
          <li>
            <i>TEL</i>
            <em>02-365-2187</em>
          </li>
          <li>
            <i>FAX</i>
            <em>02-365-2093</em>
          </li>
          <li>
            <i>ADDRESS</i>
            <em
              >서울시 마포구 마포대로 137 KRX빌딩 7층<br />
              (공덕동)</em
            >
          </li>
        </ul>
        <ul class="outstation">
          <li>
            <i class="contact-tit">부산지사</i>
          </li>
          <li>
            <i>TEL</i>
            <em>070-7705-7375</em>
          </li>
          <li>
            <i>ADDRESS</i>
            <em>부산광역시 해운대구 센텀중앙로 97 <br />센텀스카이비즈 A동 1311호</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul class="sns">
    <li>
      <a href="/"><img src="../images/icons/sns-icon-1.png" /></a>
    </li>
    <li>
      <a href="/"><img src="../images/icons/sns-icon-2.png" /></a>
    </li>
    <li>
      <a href="/"><img src="../images/icons/sns-icon-3.png" /></a>
    </li>
    <li>
      <a href="/"><img src="../images/icons/sns-icon-4.png" /></a>
    </li>
  </ul>
      `;
}

const inquiryContainer = document.querySelector(".inquiry-container");
if (inquiryContainer && !learningUrl && !careerUrl && !recruitUrl && !manageUrl) {
  inquiryContainer.innerHTML += `
<button id="inquiry-btn">도입 문의하기<img src="images/icons/inquiry-button-icon.svg" /></button>
      <div id="inquiry">
        <button class="close"><img src="images/icons/inquiry-button-close.svg" /></button>
        <h3>도입문의</h3>
        <p>궁금하신 사항을 남겨주시면, 빠르게 연락드리겠습니다.</p>
        <form class="inquiry-form">
          <article>
            <div class="name"><span>성함</span><input type="text"/></div>
            <div class="company"><span>회사명</span><input type="text" /></div>
            <div class="part"><span>부서명</span><input type="text" /></div>
            <div class="position"><span>직책</span><input type="text" /></div>
            <div class="phone">
              <span>휴대폰</span>
              <div class="phone-input"><input type="number" />&nbsp;-&nbsp;<input type="number" />&nbsp;-&nbsp;<input type="number" /></div>
            </div>
            <div class="email">
              <span>이메일</span>
              <div class="email-input">
                <input type="text"/>
                &nbsp;@&nbsp;
                <select onChange="directChange()">
                  <option value="empty">선택하세요</option>
                  <option value="direct-input">직접입력</option>
                  <option>naver.com</option>
                  <option>daum.net</option>
                  <option>gmail.com</option>
                  <option>hotmail.com</option>
                  <option>nate.com</option>
                  <option>korea.com</option>
                </select>
                <input type="text" class="direct-input">
              </div>
            </div>
            <div class="etc"><span>문의사항</span><textarea></textarea></div>
          </article>
          <button type="submit">문의보내기<img src="images/icons/inquiry-button-icon.svg" /></button>
        </form>
      </div>
      <div class="dim"></div>
      <div class="inquiry-succes">
        <img src="images/icons/inquiry-succes-icon.png">
        <p>문의를 성공적으로 보냈습니다.</p>
        <button>확인</button>
      </div>
      `;
} else {
  inquiryContainer.innerHTML += `
  <button id="inquiry-btn">도입 문의하기<img src="../images/icons/inquiry-button-icon.svg" /></button>
        <div id="inquiry">
          <button class="close"><img src="../images/icons/inquiry-button-close.svg" /></button>
          <h3>도입문의</h3>
          <p>궁금하신 사항을 남겨주시면, 빠르게 연락드리겠습니다.</p>
          <form class="inquiry-form">
            <article>
              <div class="name"><span>성함</span><input type="text" /></div>
              <div class="company"><span>회사명</span><input type="text" /></div>
              <div class="part"><span>부서명</span><input type="text" /></div>
              <div class="position"><span>직책</span><input type="text" /></div>
              <div class="phone">
                <span>휴대폰</span>
                <div class="phone-input"><input type="number" />&nbsp;-&nbsp;<input type="number" />&nbsp;-&nbsp;<input type="number" /></div>
              </div>
              <div class="email">
                <span>이메일</span>
                <div class="email-input">
                  <input type="text" />
                  &nbsp;@&nbsp;
                  <select onChange="directChange()">
                    <option value="empty">선택하세요</option>
                    <option value="direct-input">직접입력</option>
                    <option>naver.com</option>
                    <option>daum.net</option>
                    <option>gmail.com</option>
                    <option>hotmail.com</option>
                    <option>nate.com</option>
                    <option>korea.com</option>
                  </select>
                  <input type="text" class="direct-input">
                </div>
              </div>
              <div class="etc"><span>문의사항</span><textarea></textarea></div>
            </article>
            <button type="submit">문의보내기<img src="../images/icons/inquiry-button-icon.svg" /></button>
          </form>
        </div>
        <div class="dim"></div>
        <div class="inquiry-succes">
        <img src="images/icons/inquiry-succes-icon.png">
        <p>문의를 성공적으로 보냈습니다.</p>
        <button>확인</button>
      </div>
        `;
}

const quickMenu = document.querySelector("aside#quick-menu");
if (inquiryContainer && !learningUrl && !careerUrl && !recruitUrl && !manageUrl) {
  quickMenu.innerHTML += `
  <div class="active"><span></span>교육</div>
  <div><span></span>성과&#183;커리어</div>
  <div><span></span>채용&#183;온보딩</div>
  <div><span></span>인사운영</div>
  `;
}
