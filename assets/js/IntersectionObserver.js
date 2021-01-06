// IntersectionObserver (permet d'afficher ou non une classe si l'ement est visible à l'écran)

var options = {
  root: null,
  rootMargin: '0px',
  threshold: [.9, .5]
}
var body = document.querySelector('body')
var observer = new IntersectionObserver(callback, options);
var targets = document.querySelectorAll('article');
targets.forEach((article, i) => {
  observer.observe(article);
});
function callback(entries, observer){
  entries.forEach((entry,i) => {
    let target = entry.target
    if(entry.intersectionRatio > .5){
      target.classList.add('visible')
      body.classList.add(target.parentNode.id)
    }else{
      target.classList.remove('visible')
      body.classList.remove(target.parentNode.id)
    }
  });
}


document.querySelectorAll('.cta-blanc').forEach((item, i) => {
  item.addEventListener('click', (elem) => {
    let targetSelector = elem.target.attributes['href'].value
    document.querySelector(targetSelector).classList.add('open')
  })
});


document.querySelectorAll('.back-to-top').forEach((item, i) => {
  item.addEventListener('click', (elem) => {
    let targetSelector = elem.target.attributes['href'].value
    document.querySelector(targetSelector).scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    setTimeout(
      function(){
        document.querySelector(targetSelector + ' article.open').classList.remove('open')
      }, 400
    )
  })
});

var main = document.querySelector('main')


document.querySelector('.ul-nav').addEventListener('mouseover', (elem) => {
  main.classList.add('smooth')
})

document.querySelectorAll('.horizontal-scroll > div > .blocs-horizontaux').forEach((item, i) => {
  item.addEventListener('wheel', (event, delta) => {
    event.preventDefault()
    console.log(event.deltaY)
    /*
    main.scrollBy({
      top: 0,
      left: event.deltaY * 30,
      behavior: 'smooth'
    })
    */
    main.classList.remove('smooth')
    if(event.deltaY > 0){
      main.scrollBy({
        top: 0,
        left: 50,
        behavior: 'auto'
      })
    }else{
      main.scrollBy({
        top: 0,
        left: -50,
        behavior: 'auto'
      })

    }
  })
});
//On lick ulnav
$('a').on('click', function(){
    $('a').removeClass('selected');
    $(this).addClass('selected');
});
