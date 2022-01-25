/*=========== MENU__TOGGLER ===========*/
const header = document.getElementById('header'),
    menuToggler = document.querySelector('.menu__toggler');

  menuToggler.addEventListener('click', () => {
    header.classList.toggle('open__menu');
  });

/*=========== SCROLL HEADER ===========*/
window.addEventListener('scroll', () => {
  if(window.scrollY>0){
    header.classList.add('sticky__header');
}else{
    header.classList.remove('sticky__header');
}
});

/*=========== DARK__MODE ===========*/

let darkMode = document.querySelector('.dark__mode'),
    body = document.querySelector('body');

  darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

/*=============== OPEN QCM ===============*/
const qsmCard = document.querySelectorAll('.qsm__card');

qsmCard.forEach(item => {
  const qsmTittle = item.querySelector('.title-qcm');
  qsmTittle.addEventListener('click', ()=>{
    const openItem = document.querySelector('.open__qcm')

    toggleItem(item)

    if(openItem && openItem!== item){
        toggleItem(openItem)
    }
  }) 

});

const toggleItem = (item) =>{
  const qsmContent = item.querySelector('.qsm-descp')

  if(item.classList.contains('open__qcm')){
    item.classList.remove('open__qcm')
  }else{
    item.classList.add('open__qcm')
  }

}
