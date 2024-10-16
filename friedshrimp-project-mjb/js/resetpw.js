document.addEventListener('DOMContentLoaded', function() {
    // 비밀번호 찾기 Modal 요소
    const passwordFindModal = document.getElementById('passwordFindModal');
    const closePasswordFindModalBtn = document.getElementById('closePasswordFindModal');

    // 비밀번호 변경 Modal 요소
    const passwordChangeModal = document.getElementById('passwordChangeModal');
    const closePasswordChangeModalBtn = document.getElementById('closePasswordChangeModal');
    const confirmPasswordFindBtn = document.querySelector('.confirmPasswordFind');
    const savePasswordChangeBtn = document.getElementById('confirmPasswordChange');

    // 로그인 Modal 요소
    const loginModal = document.querySelector('.modal_log'); // 로그인 모달
    
    // 비밀번호 찾기 Modal 열기
    document.getElementById('openPasswordModal')?.addEventListener('click', function() {
        passwordFindModal.style.display = 'block'; // 비밀번호 찾기 모달 열기
    });

    // 비밀번호 찾기 Modal 닫기
    closePasswordFindModalBtn?.addEventListener('click', function() {
        passwordFindModal.style.display = 'none'; // 비밀번호 찾기 모달 닫기
    });

    // 비밀번호 찾기 확인 버튼 클릭 시
    confirmPasswordFindBtn?.addEventListener('click', function() {
        passwordFindModal.style.display = 'none'; // 비밀번호 찾기 Modal 닫기
        passwordChangeModal.style.display = 'block'; // 비밀번호 변경 Modal 열기
    });

    // 비밀번호 변경 Modal 닫기
    closePasswordChangeModalBtn?.addEventListener('click', function() {
        passwordChangeModal.style.display = 'none'; // 비밀번호 변경 모달 닫기
    });

    // 비밀번호 변경 후 로그인 모달로 리디렉션
    savePasswordChangeBtn?.addEventListener('click', function() {
        alert('비밀번호가 변경되었습니다'); // 변경 확인 알림
        passwordChangeModal.style.display = 'none'; // 비밀번호 변경 모달 닫기
        loginModal.style.display = 'block'; // 로그인 모달 열기
    });
});