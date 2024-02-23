const massage = document.querySelector('.header-bot-message')
const modalSub  = document.querySelector('.modal-sub')
const modalSubTwo  = document.querySelector('.modal-sub_two')
const btnBrif  = document.querySelector('.btn-brif')
massage.onclick = () => {
    modalSub.classList.toggle('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
}
btnBrif.onclick = () => {
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.add('modal-sub--active')
}



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