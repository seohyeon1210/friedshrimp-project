document.addEventListener('DOMContentLoaded', function() {
    // 비밀번호 찾기 Modal 요소
    const passwordFindModal = document.getElementById('passwordFindModal');
    const closePasswordFindModalBtn = document.getElementById('closePasswordFindModal');

    // 비밀번호 변경 Modal 요소
    const passwordChangeModal = document.getElementById('passwordChangeModal');
    const closePasswordChangeModalBtn = document.getElementById('closePasswordChangeModal');
    const confirmPasswordFindBtn = document.getElementById('confirmPasswordFind');
    const savePasswordChangeBtn = document.getElementById('confirmPasswordChange');

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
        // 비밀번호 찾기 Modal 닫기
        passwordFindModal.style.display = 'none'; 
        // 비밀번호 변경 Modal 열기
        passwordChangeModal.style.display = 'block'; 
    });

    // 비밀번호 변경 Modal 닫기
    closePasswordChangeModalBtn?.addEventListener('click', function() {
        passwordChangeModal.style.display = 'none'; // 비밀번호 변경 모달 닫기
    });

    // 새로운 비밀번호 저장 및 로그인 페이지로 리디렉션
    savePasswordChangeBtn?.addEventListener('click', function() {
        // 여기에서 비밀번호 확인 및 유효성 검사 추가 가능
        alert('비밀번호가 변경되었습니다'); // 변경 확인 알림
        location.href = 'login.html'; // 로그인 페이지로 리디렉션
    });
});
