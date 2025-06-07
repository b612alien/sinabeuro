
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('reveal-visible'); // 효과 ON
        obs.unobserve(entry.target);                  // 1번만 애니메이션
      }
    });
  }, { threshold: 0.15 });   // 15% 정도 보이면 실행

  document.querySelectorAll('.reveal')
          .forEach(el => observer.observe(el));
});