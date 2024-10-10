document.addEventListener('DOMContentLoaded', () => {
    const profileHello = document.getElementById('profile-hello');
    const greetings = ['안녕하세요. 회원님!', 'Hello, Member!', 'こんにちは、会員さん！', '你好，会员！', 'Bonjour, membre!'];

    let currentGreeting = 0;

    function showGreeting() {
        profileHello.style.opacity = 0; // 처음에 투명하게 만듭니다.
        
        setTimeout(() => {
            profileHello.textContent = greetings[currentGreeting];
            profileHello.style.opacity = 1; // 다시 불투명하게 만듭니다.
            currentGreeting = (currentGreeting + 1) % greetings.length; // 다음 인사로 이동
        }, 500); // 0.5초 후에 텍스트를 변경합니다.

        // 1초 후에 다음 인사로 전환
        setTimeout(showGreeting, 1500); // 1.5초 후에 다시 애니메이션 시작
    }

    showGreeting(); // 함수 호출
});