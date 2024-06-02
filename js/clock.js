const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");     // date.getHours() 사용해서 시간을 가져온 후 
    const minutes = String(date.getMinutes()).padStart(2,"0"); // 타입을 string으로 변경
    const seconds = String(date.getSeconds()).padStart(2,"0"); // padstart로 string 앞쪽에 "0" 추가 
    clock.innerText = `${hours}:${minutes}:${seconds}`; // 시간:분:초 출력
}

getClock();
setInterval(getClock, 1000); // 매 1000ms 마다 getClock함수 실행