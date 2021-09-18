const information = document.querySelector('.top__infomation');
const headerMain = document.querySelector('.header__container--fixed');
const searchCenter = document.querySelector('.header__navbar--search--center');
const searchCenter_sm = document.querySelector('.search__nav--sm');

const headerObserver = new IntersectionObserver(function(entries, headerObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            headerMain.classList.add('action--fixed');
            searchCenter.classList.add('unhide--block');
            searchCenter_sm.classList.add('pos--fixed');
        }
        else{
            headerMain.classList.remove('action--fixed');
            searchCenter.classList.remove('unhide--block');
            searchCenter_sm.classList.remove('pos--fixed');
        }
    })
},)
headerObserver.observe(information);