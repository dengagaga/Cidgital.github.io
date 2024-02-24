
const massage = document.querySelector('.header-bot-message')
const modalSub  = document.querySelector('.modal-sub')
const left  = document.querySelector('.left')
const modalSubTwo  = document.querySelector('.modal-sub_two')
const modalSubThree  = document.querySelector('.modal-sub_three')
const modalThreeBtns  = document.querySelectorAll('.modal-three-btn')
const btnBrif  = document.querySelector('.btn-brif')
const modalSubBtnOne  = document.querySelector('.modal-sub_btn-one')

massage.onclick = () => {
    modalSub.classList.toggle('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
}


btnBrif.onclick = () => {
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.add('modal-sub--active')
}


left.onclick = () => {
  modalSubTwo.classList.add('modal-sub--active')
  modalSubThree.classList.remove('modal-sub--active')
}


modalSubBtnOne.onclick = () => {
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
    modalSubThree.classList.add('modal-sub--active')
}


modalThreeBtns.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('modal-three-btn--active')
  })
})



// SCROLL
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }