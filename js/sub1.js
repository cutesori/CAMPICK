document.addEventListener('DOMContentLoaded', function () {
    const targets = document.querySelectorAll('.textbox');
  
    if (targets.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      }, {
        threshold: 1
      });
  
      targets.forEach(target => observer.observe(target));
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const ul = document.querySelector('.coperul');
    const items = Array.from(ul.children);
    
    // 첫 번째 항목을 복제해서 ul 끝에 추가
    const firstItem = items[0].cloneNode(true);
    ul.appendChild(firstItem);

    // 애니메이션 끝날 때 첫 번째 항목을 마지막으로 보내기
    ul.addEventListener('animationiteration', () => {
        ul.appendChild(ul.querySelector('li:first-child')); // 첫 번째 항목을 마지막으로 이동
    });
});