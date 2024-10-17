document.addEventListener('DOMContentLoaded', () => {
    const profileHello = document.getElementById('profile-hello');
    const greetings = ['안녕하세요. 회원님!', 'Hello, Member!', 'こんにちは、会員さん！', '你好，会员！', 'Bonjour, membre!'];

    let currentGreeting = 0;

    function showGreeting() {
        // 텍스트를 위로 살짝 올리고 투명하게 만듭니다.
        profileHello.style.opacity = 0;
        profileHello.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            // 새로운 인사를 설정하고 다시 아래로 내리면서 불투명하게 만듭니다.
            profileHello.textContent = greetings[currentGreeting];
            profileHello.style.opacity = 1;
            profileHello.style.transform = 'translateY(0)';
            currentGreeting = (currentGreeting + 1) % greetings.length;
        }, 500); // 0.5초 후에 텍스트를 변경합니다.

        // 1.5초 후에 다음 인사로 전환
        setTimeout(showGreeting, 2000); // 2초 후에 다시 애니메이션 시작
    }

    showGreeting(); // 함수 호출
});