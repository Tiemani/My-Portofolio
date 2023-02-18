/*============SHOW SIDEBAR=========*/

/*=====SIDEBAR SHOW====*/
/*Validate If Constant Exists*/

/*=====SIDEBAR HIDDEN====*/
/*Validate If Constant Exists*/


/*========= SKILLS TABS===========*/
const tabs = document.querySelectorAll('[data-target]'),
tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents =>{
            tabContents.classList.remove('skills_active')
        })
        target.classList.add('skills_active')

        tabs.forEach(tab => {
            tab.classList.remove('skills_active')
        })
        tab.classList.add('skills_active')
    })
})

/*=============MIXITUP FILTER PORTFOLIO===========*/
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/*=====Link Active Work=====*/


/*=====Work  Popup =====*/


/*=====SERVICES MODAL====*/


/*=====SWIPER TESTIMONIAL=====*/