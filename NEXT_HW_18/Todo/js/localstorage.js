const username = document.querySelector('.username');
const usernameWrapper = document.querySelector('.usernameWrapper');
const header = document.querySelector('#header');

function checkUsername() {
    const checkName = window.localStorage.getItem('username');
    console.log(checkName);
    if (checkName) {
        usernameWrapper.classList.add('hidden');
        header.innerHTML = `<h1>${window.localStorage.getItem(
            'username'
        )} 의 ToDo리스트 <button style="width: 10%" type="button" onclick="resetUsername()">초기화</button>
        </h1>`;
    } else {
        usernameWrapper.classList.remove('hidden');
        header.innerHTML = ``;
    }
}

checkUsername();

/* 입력한 값으로 사용자의 이름을 설정하는 함수 */
// input의 값을 읽어오자!
// 해당값을 로컬 스토리지에 저장해보자 'username'이라는 키값으로 저장해보자
function setUsername() {
    const inputValue = username.value; // input 요소의 값을 읽어옴
    window.localStorage.setItem('username', inputValue); // 로컬 스토리지에 저장
    console.log('Username set to:', inputValue); // 콘솔에 출력 (확인용)
    checkUsername();
}

function resetUsername() {
    window.localStorage.removeItem('username'); // 로컬 스토리지에 저장
    checkUsername();
}
