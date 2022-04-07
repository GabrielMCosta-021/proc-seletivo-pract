const element = document.querySelector("#content-scroll");

element.addEventListener('wheel', (eventScroll) => {
  eventScroll.preventDefault();

  element.scrollBy({
    left: eventScroll.deltaY < 0 ? -30 : 30
  });

});



// HIDDE AND SHOW
let cont = 1

function menuHid() {
  
  
  let menu = document.querySelector('.menu-side')
  
  ++cont;
  
  if (cont % 2 !== 0) {
    
    menu.classList.remove('hide');

  } else {
    
    menu.classList.add('hide');
    cont = 0;

  }

}