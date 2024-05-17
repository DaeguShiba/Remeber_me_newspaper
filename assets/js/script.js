document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
});
// 스크롤 이벤트 추가
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about');
    const memoriesSection = document.querySelector('.memories');

    const scrollToSection = (section) => {
        window.scrollTo({
            top: section.offsetTop - 50, // 섹션 위쪽으로 50px 여백을 둠
            behavior: 'smooth' // 부드러운 스크롤
        });
    };

    document.querySelector('.menu li:nth-child(3) a').addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(aboutSection);
    });

    document.querySelector('.menu li:nth-child(2) a').addEventListener('click', function(event) {
        event.preventDefault();
        scrollToSection(memoriesSection);
    });
});

