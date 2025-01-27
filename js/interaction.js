// 상수 선언
const cursor = document.querySelector(".cursor");
const menu = document.querySelector(".menu");

document.addEventListener("DOMContentLoaded", (e) => {

  // 화면 로드 시 메뉴 인터랙션 시작
  menu.classList.add("is-show");

  // About Me 인터랙션
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".submarine", {
    ScrollTrigger: {
      trigger: ".section-about-item1",
      start: "top center",
      end: "top center",
      marker: true,
      scrub: true,
    },
    x: -100,
    y: 300,
    ease: "ease-in",
  });
});

// 마우스가 움직일 때 커스텀커서 요소가 따라다니는 효과
window.addEventListener("mousemove", (e)=>{
  // cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`
  cursor.style.top = `${e.pageY}px`
  cursor.style.left = `${e.pageX}px`
  cursor.setAttribute("data-currentTop", cursor.offsetTop - scrollY);
})
// 스크롤 시 커스텀커서 요소가 붕 떠있는 현상 보정
window.addEventListener("scroll", (e)=>{
  const currentTop = cursor.getAttribute("data-currentTop");
  cursor.style.top = `${scrollY + parseInt(currentTop)}px`
  // console.log(currentTop);
})


