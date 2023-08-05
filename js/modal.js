const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.button.nav');
const iconClose = document.querySelector('.icon-close');
const overlay = document.querySelector('.modal-container');

    
    buttonNav.addEventListener('click', ()=>{
        overlay.style.display = "block";
        overlay.style.margin = "auto";
    })
    

    registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    });

        

    // iconClose.addEventListener('click', ()=> {
    // wrapper.classList.remove('active-popup');
    // });
        
    iconClose.addEventListener('click', ()=> {
        overlay.style.display = "none";
    });