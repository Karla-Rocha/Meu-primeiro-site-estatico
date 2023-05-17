function toggleMenu() {
  var menu = document.getElementById('menu')

  if (menu.style.display == 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

function subirScroll(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function aparecerScroll(){
  if(window.scrollY === 0){
    document.querySelector('.buttonScroll').style.display = 'none';
  }else{
    document.querySelector('.buttonScroll').style.display = 'block';
  }
}

window.addEventListener('scroll', aparecerScroll)
