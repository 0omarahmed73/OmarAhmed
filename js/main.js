let iconColor = document.querySelector('.power');

//Save choosen color 
if (localStorage.mainColor) {
  document.querySelectorAll('.chooseColor li').forEach(el => {
    if (localStorage.mainColor === el.dataset.color) {
      el.classList.add('active');
    }
    else
      el.classList.remove('active');
  })
  document.querySelector(':root').style.setProperty('--mainColor', localStorage.mainColor)

}
//Check for mode choice
if (localStorage.colorMode){
  document.body.className = localStorage.colorMode;
}

//Color Menu
iconColor.addEventListener('click', function () {
  document.querySelector('.chooseColor').classList.toggle('left')
  iconColor.classList.toggle('left')
})

//Change main color
document.querySelectorAll('.chooseColor li').forEach(el => {
  el.style.backgroundColor = el.dataset.color
  el.addEventListener('click', function (e) {
    document.querySelectorAll('.chooseColor li').forEach(el => {
      el.classList.remove('active')
    })
    document.querySelector(':root').style.setProperty('--mainColor', e.target.dataset.color);
    e.target.classList.add('active');
    window.localStorage.mainColor = e.target.dataset.color
  })
})

//Auto writing
let texts = ['a Frontend Developer    ', 'an Engineer    ', 'a Muslim    '];
let spanTexts = document.querySelector('.texts h2 span')
console.log(texts[0].split(''));
let i = 0
let j = 0
setInterval(function () {
  if (i < texts.length) {
    if (j < texts[i].length) {
      spanTexts.innerHTML += texts[i][j];
      j++
    }
    else {
      i++;
      j = 0;
      spanTexts.innerText = '';
    }
  }
  else {
    i = 0;
  }
}, 250)

//Show and Hide NavBar

document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.links').classList.toggle('showIt');
  document.querySelector('.overlay').classList.toggle('showIt');
})

//Close Navbar by clicking anywhere

document.querySelector('.navbar').addEventListener('click', function (e) {
  e.stopPropagation();
})
document.addEventListener('click', function (e) {
  if (e.target !== document.querySelector('.navbar')) {
    document.querySelector('.links').classList.remove('showIt');
    document.querySelector('.overlay').classList.remove('showIt');
  }
})

//change width of skills bar

  window.addEventListener('scroll' , function(){
    document.querySelectorAll('.skill').forEach(el => {
  if (this.window.scrollY >= 870){
      el.querySelector('.skill .bar span').style.width = `${el.querySelector('.skill span').className}%`
      el.querySelector('.skill .bar .rating').innerText = el.querySelector('.skill .bar span').style.width
    }
      else {
        el.querySelector('.skill .bar span').style.width = `0%`
        el.querySelector('.skill .bar .rating').innerText = el.querySelector('.skill .bar span').style.width
      
      }
    });
  })

  //show project hover 

  document.querySelectorAll('.project').forEach(el => {
    el.children[1].innerText = el.dataset.project;
    el.onmouseover = function(e){
      el.children[1].classList.add('showIt');
    }
    el.onmouseleave = function(e){
      el.children[1].classList.remove('showIt');
    }
  })

  //Set Year

  document.querySelector('.year').innerText = (new Date()).getFullYear();

  //Scroll when press on every nav link

  document.querySelectorAll('li.link').forEach(el=> {
    el.addEventListener('click' , function(e){
      document.querySelectorAll('.link').forEach(el => {
        el.classList.remove('active');
      })
      e.preventDefault();
      el.classList.add('active');
      document.querySelector('.'+el.dataset.link).scrollIntoView({behavior:"smooth"});
    })
  })

  //Toggle Between Modes
  // document.querySelector('.links i').addEventListener('click' , function(){
  //   if (!document.querySelector('head').innerHTML.includes(`<link rel="stylesheet" href="css/light.css">`)) {
  //     document.querySelector('head').innerHTML += `<link rel="stylesheet" href="css/light.css" />`;
  //     console.log('Hello');
  //   }
  //   else if (document.querySelector('head').innerHTML.includes('<link rel="stylesheet" href="css/light.css">')) {
  //     document.querySelector('head').innerHTML = document.querySelector('head').innerHTML.replace('<link rel="stylesheet" href="css/light.css">' , '');
  //     console.log('Hi');
  //   }
  //   localStorage.colorMode = document.querySelector('head').innerHTML;
    
  // });

    document.querySelector('.links i').addEventListener('click' , function(){
      document.body.classList.toggle('light');
      localStorage.colorMode = document.body.className;
    })
