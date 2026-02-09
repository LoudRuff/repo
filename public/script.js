let btn = document.querySelector(".btn1");
let form = document.querySelector("#appointment-form");
btn.addEventListener("click", () => {
    form.classList.toggle("show")
})
let animation = gsap.from(".h", {
    y: 100,
    opacity: 0,
    duration: 1,
    repeat: 0
})
let animation2 = gsap.from("l", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 1.5,
    stagger: 0.2,
    repeat: 0
})
let animation3 = gsap.from(".btnprt",{
    x: 100,
    opacity: 0,
    duration: 1.9,
    delay:1.2,
    repeat: 0,

})