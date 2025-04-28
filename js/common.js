$(document).ready(function(){

  //슬라이더
  function slide(){
      $('.slide').stop().animate({marginLeft:"-142%"},800,function(){
          $('.slide li:first').appendTo('.slide');
          $('.slide').css("margin-left","-65%");
      });
  }

  setInterval(slide,3000);    

  //02이미지변경
  $(".contentsecond a").mouseover(function(){
    $(".contentsecond a img").attr("src","./img/main/middle3.png");
  });
  $(".contentsecond a").mouseleave(function(){
    $(".contentsecond a img").attr("src","./img/main/middle1.png");
  });
});



document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.likeImage');

    images.forEach((img) => {
      const img1 = './img/main/like1.png';     // 기본
      const img2 = './img/main/like2.png';     // 클릭 후
      const imgHover = './img/main/like2.png'; // 호버용 이미지

      // 상태 저장용 커스텀 속성
      img.dataset.clicked = 'false';

      // 클릭 이벤트
      img.addEventListener('click', () => {
        const isClicked = img.dataset.clicked === 'true';
        img.src = isClicked ? img1 : img2;
        img.dataset.clicked = !isClicked;
      });

      // 마우스 호버
      img.addEventListener('mouseenter', () => {
        img.dataset.original = img.src; // 현재 상태 저장
        img.src = imgHover;
      });

      img.addEventListener('mouseleave', () => {
        img.src = img.dataset.clicked === 'true' ? img2 : img1;
      });
    });
  });
