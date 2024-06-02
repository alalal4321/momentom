const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNMAE_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME); // hidden 클래스 추가
    localStorage.setItem(USERNMAE_KEY, loginInput.value);  // key와 username 밸류값 넣고 저장
    paintGreeting(); // paintGreeting 함수 실행
}

function paintGreeting() {
    const username = localStorage.getItem(USERNMAE_KEY); // username에 key값 대입
    greeting.innerText = `Hello ${username}`; // h1에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 클래스 제거
}

const savedUsername = localStorage.getItem(USERNMAE_KEY); 

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 만약 localstorage가 null 이라면 hidden 클래스 제거
    loginForm.addEventListener("submit",onLoginSubmit); // 그리고 submit를 누르면 이벤트 발생
} else {
    paintGreeting(); // null이 아니라면 paintGreeting 함수 실행
}