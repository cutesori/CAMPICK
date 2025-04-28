document.addEventListener('DOMContentLoaded', () => {
    // 버튼과 이미지 변수 선언
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');

    // 클릭 시 이미지 변경
    prevButton.addEventListener('click', () => {
      // 이미지를 바꿔
      const currentSrc = prevImage.src;
      const newSrc = currentSrc.includes('pre.png') ? './img/sub02_blog/pre2.png' : './img/sub02_blog/pre.png';
      prevImage.src = newSrc;

      // 페이지 이동 (원하는 페이지로 이동)
      setTimeout(() => {
        window.location.href = './sub2_blog.html';
      }, 300); // 300ms 후에 이동
    });

    nextButton.addEventListener('click', () => {
      // 이미지를 바꿔
      const currentSrc = nextImage.src;
      const newSrc = currentSrc.includes('next.png') ? './img/sub02_blog/next2.png' : './img/sub02_blog/next.png';
      nextImage.src = newSrc;

      // 페이지 이동 (원하는 페이지로 이동)
      setTimeout(() => {
        window.location.href = './sub2_blog.html';
      }, 300); // 300ms 후에 이동
    });

    // 마우스 호버 시 이미지 변경
    prevButton.addEventListener('mouseenter', () => {
      prevImage.src = './img/sub02_blog/pre2.png';
    });

    prevButton.addEventListener('mouseleave', () => {
      const currentSrc = prevImage.src;
      prevImage.src = currentSrc.includes('pre2.png') ? './img/sub02_blog/pre.png' : './img/sub02_blog/pre2.png';
    });

    nextButton.addEventListener('mouseenter', () => {
      nextImage.src = './img/sub02_blog/next2.png';
    });

    nextButton.addEventListener('mouseleave', () => {
      const currentSrc = nextImage.src;
      nextImage.src = currentSrc.includes('next2.png') ? './img/sub02_blog/next.png' : './img/sub02_blog/next2.png';
    });
  });