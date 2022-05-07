const bar = document.getElementById('Bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (Bar) {
    Bar.addEventListener('click',()=> {
        nav.classList.add('active');
    })
}
if (Close) {
    Close.addEventListener('click',()=> {
        nav.classList.remove('active');
    })
}