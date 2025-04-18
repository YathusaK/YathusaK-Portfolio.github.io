//Learning how to implement fade-in sections while scrolling
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

document.addEventListener("DOMContentLoaded", () => {
    // Fade-in sections when they scroll into view
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Scatter images randomly my fav so far everytime I reload its something different
    const images = document.querySelectorAll(".scattered-img");
  
    images.forEach(img => {
      const top = Math.random() * 60 + 10;  // 10% to 70%
      const left = Math.random() * 80 + 5;  // 5% to 85%
  
      img.style.setProperty('--top', `${top}%`);
      img.style.setProperty('--left', `${left}%`);
    });
  });

//learned you cannot use the same 'function' separately but must be added together to avoid errors
  