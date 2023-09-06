import Swiper from 'swiper/bundle';

const privacy = document.getElementById('privacy');
const modal = document.getElementById('modal');
const doc = document.getElementById('doc');
const trigger = document.querySelectorAll('[data-card]');
const btnModal = document.querySelectorAll('[data-modal]');
const btnClose = document.getElementById('close-modal');
const body = document.body;
let scrollwindow = calcScroll();

function scrollMenu (e) {

  let $this = e.currentTarget;
  let scrollId = $this.getAttribute('data-modal');
  let scrollItem = document.getElementById(scrollId);
  scrollItem.scrollIntoView({behavior: 'smooth'});

}

function calcScroll () {
  let div = document.createElement('div')
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.overflowY = 'scroll'
  div.style.visibility = 'hidden'
  document.body.appendChild(div)
  let scrollWidth = div.offsetWidth - div.clientWidth
  div.remove()
  return scrollWidth

}

trigger.forEach(card => {

  card.onclick = function (e) {

    e.stopPropagation() 
    
    let cardCurrent = e.currentTarget
    let currentIdElement = cardCurrent.getAttribute('data-card')
    let modalBox = document.getElementById(currentIdElement)
    let getAttr = modalBox.getAttribute('id')
    let current = getAttr.split('-')
    let number = current[0]

    const card = new Swiper('.swiper--card', {
        initialSlide: `${number}`,
        speed: 1000,
        effect: "fade",
        fade: { crossFade: true },
        navigation: {
            nextEl: ".modal__pagination-arrow-click--right",
            prevEl: ".modal__pagination-arrow-click--left",
            clickable: true,
        },
    });

    modal.classList.add('is-active')
    body.classList.add('no-scroll');
    body.style.marginRight = `${scrollwindow}px`

  }

    btnClose.onclick = function () {
      modal.classList.remove('is-active')
      body.classList.remove('no-scroll');
      body.style.marginRight = `0px`
    }
})

for (let i = 0; i < btnModal.length; i++) {
  const btnModalId = btnModal[i];
  btnModalId.addEventListener('click', (e)=>{
      if (e.target) {
          e.preventDefault();
      }
      scrollMenu (e)

      if (body.classList.contains('no-scroll')){
        modal.classList.remove('is-active')
        privacy.classList.remove('is-active')
        doc.classList.remove('is-active')
        body.classList.remove('no-scroll');
        body.classList.remove('show-sidebar');
        try {
          document.querySelector('.page__mask').remove(); 
        } catch{}
        body.style.marginRight = `0px`
      }

  })
}