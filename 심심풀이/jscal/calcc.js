
var method = ""; //부호 변수 선언
var p; //이벤트 리스너에 들어갈 변수 선언

/* 여기서 부터 이벤트 리스너 파티 */
var q = document.getElementById('p'); //plus
q.addEventListener('click', () => {
    document.getElementById('a-2').disabled = false;
    p = true;
    //클릭시에 a-2의 disabled를 풀어준다.
});
var q = document.getElementById('m'); //minus
q.addEventListener('click', () => {
    document.getElementById('a-2').disabled = false;
    p = true;
    //클릭시에 a-2의 disabled를 풀어준다.
});
var q = document.getElementById('t'); //multiply
q.addEventListener('click', () => {
    document.getElementById('a-2').disabled = false;
    p = true;
    //클릭시에 a-2의 disabled를 풀어준다.
});
var q = document.getElementById('s'); //divide
q.addEventListener('click', () => {
    document.getElementById('a-2').disabled = false;
    p = true;
    //클릭시에 a-2의 disabled를 풀어준다.
});
/* 여기까지가 이벤트 리스너 파티 */

/* 여기서 부터는 함수 파티이다. */
function sik() { //함수 명 그대로 식 정리해주는 함수이다.
    var a, b; //a, b라는 변수 선언
    a = document.getElementById('a-1').value; //a-1에 값을 불러온다.
    b = document.getElementById('a-2').value; //a-2에 값을 불러온다.
    document.getElementsByClassName('sik')[0].innerText = `${a} ${method} ${b}`;
    /* sik이라는 클래스에 있는 값을 
    첫번째숫자와 부호 그리고 두번째숫자로 바꾸었다. */
}

function check() {
    if(document.getElementById('a-1').value != "" && p == true) {
        document.getElementById('a-2').disabled = false;
    }
    //이벤트 리스너에서 받아온 값을 체크해줘서  disabled를 풀어주는 작업을 한다.
}
/* 여기선 부호를 바꿔주는 작업을 한다. */
function plus() {
    method = '+';
}

function minus() {
    method = '-';
}

function times() {
    method = '*';
}

function slash() {
    method = '/';
}
/*여기까지가 부호 작업이다 */

/* 결과값 산출과정이다. */
function res() {
    var a, b, result; //a, b, result라는 변수 선언
    a = document.getElementById('a-1').value; //a-1에 값을 불러온다.
    b = document.getElementById('a-2').value; //a-2에 값을 불러온다.
    a = parseFloat(a);
    b = parseFloat(b);
    if(method == '+') {
        result = a + b; //플러스 일때 값이다.
        document.getElementsByClassName('result')[0].innerText = `결과는 : ${result} 입니다.`;
    } else if(method == '-') {
        result = a - b; //마이너스 일때 값이다.
        document.getElementsByClassName('result')[0].innerText = `결과는 : ${result} 입니다.`;
    } else if(method == '*') {
        result = a * b; //멀티플라이 일때 값이다.
        document.getElementsByClassName('result')[0].innerText = `결과는 : ${result} 입니다.`;
    } else if(method == '/') {
        result = a / b; //디바이드 일때 값이다.
        document.getElementsByClassName('result')[0].innerText = `결과는 : ${result} 입니다.`;
    }
}
/* 여기까지가 결과값 산출 과정이다. */

function ref() {
    for (var gg = 1000; gg > 900; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`탈출일까? 과연?`);
    for (var gg = 900; gg > 800; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`ㅋㅋㅋㅋ 어디 한번 발악해봐 ㅋㅋㅋ`);
    for (var gg = 800; gg > 700; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`이것은 광기로다.`);
    for (var gg = 700; gg > 600; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`ㅃㄹㅃㄹㅃㄹㅃㄹ 시간 없어`);
    for (var gg = 600; gg > 500; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`절반 왔네 ㅎㅇㅌ`);
    for (var gg = 500; gg > 400; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ`);
    for (var gg = 400; gg > 300; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`멍청하구나 닝겐`);
    for (var gg = 300; gg > 200; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`멍청해.`);
    for (var gg = 200; gg > 100; gg--) {
        alert(`님아 근데 곰곰히 생각해보셈.. 새로고침을 왜 함?ㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`이쯤 되면 좀 알때 되지 않았냐..`);
    for (var gg = 100; gg >= 0; gg--) {
        alert(`근데 이거 Ctrl+W하고 Ctrl+Shift+T 하면 꺼진다?ㅋㅋㅋ 남은 횟수 : ${gg}번`);
    }
    alert(`수고했다 닝겐.`);
}

check();
sik();