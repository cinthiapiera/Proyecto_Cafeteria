// nav close
const body = document.querySelector('body'),
navMenu = body.querySelector('.menu-content'),
navOpenBtn = body.querySelector('.navOpen-btn'),
navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
  navOpenBtn.addEventListener('click',() => {
    navMenu.classList.add('open');
  })
}

if(navMenu && navCloseBtn){
  navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
    body.style.overflowY = 'scroll';
  })
}