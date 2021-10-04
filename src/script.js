"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const dropDownBtn = document.querySelectorAll('.menu-item__title-btn')
    const content = document.querySelectorAll('.menu-item__list-ul')
    const menuTitle = document.querySelectorAll('.menu-item__title span')
    const phone = document.getElementById('phone');
    const skip = document.querySelector('.fill-pofile__skip')
    const fillingProf = document.querySelector('.filling-profile')

    const menuHide = document.querySelector('.menu-btn__btn')
    const menu = document.querySelector('.menu')
    const mediaQuery = window.matchMedia('(max-width: 800px)')


    const phoneMaskOptions = {
        mask: '+375(00)000-00-00',
        lazy: false
    }
    const phoneMask = new IMask(phone, phoneMaskOptions)


    skip.addEventListener('click', () => {
        fillingProf.style.display = 'none';
    })

    menuHide.addEventListener('click', () => {
        //menuHide.classList === "open-menu"
        if (menuHide.classList.toggle("open")) {
            menuHide.innerHTML = '<img src="./img/drop_down_open.png">'
            menu.style.display = 'block'
            menu.classList.add('open-menu')
        }
        else {
            menuHide.innerHTML = '<img src="./img/drop_down_btn.png">'
            menu.style.display = 'none'
            menu.classList.remove('open-menu')
        }

    })

    function menuDisplay(e) {
        if (e.matches) {
            menu.style.display = 'none'
        } else {
            menu.style.display = 'block'
            menu.classList.remove('open-menu')
            menuHide.classList.remove("open")
            menuHide.innerHTML = '<img src="./img/drop_down_btn.png">'
        }

    }
    menuDisplay(mediaQuery)
    mediaQuery.addListener(menuDisplay)



    for (let i = 0; i < dropDownBtn.length; i++) {
        dropDownBtn[i].addEventListener("click", () => {

            if (dropDownBtn[i].classList.toggle("dropdown-deactivate")) {
                menuTitle[i].style.color = '#343434'
                content[i].style.display = 'none'
                dropDownBtn[i].innerHTML = '<img src="./img/drop_down_btn.png">'
            } else {
                menuTitle[i].style.color = '#236EFF'
                content[i].style.display = 'block'
                dropDownBtn[i].innerHTML = '<img src="./img/drop_down_open.png">'
            }

        });
    }
});