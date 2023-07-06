AOS.init({
    easing: 'ease-in-out',
    once: true,
    anchorPlacement: 'center-bottom',
    duration: 600,
    mirror: false
})

const allFaq = q('#faq ul li .que', true)

listen('mousedown', allFaq, function () {
    this.classList.contains('act') ? cls(this, 'act', 'r') :
        (() => {
            allFaq.forEach(faq => { cls(faq, 'act', 'r') });
            cls(this, 'act', 'a')
        })()
}, true)
