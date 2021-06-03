const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurring, 30);

function blurring () {
  load++;

  if(load > 99) {
    clearInterval(int);
  }

  text.innerText = `${load}%`
  text.style.opacity = 
}

