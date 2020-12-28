const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.navLinks')
const links = document.querySelectorAll('li a')
burger.addEventListener('click',()=>{
    navLinks.classList.toggle('show')
})


links.forEach(element => {
    element.addEventListener('click',()=>{
        navLinks.classList.remove('show')
    })
});

