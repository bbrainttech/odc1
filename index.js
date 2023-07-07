const allLnks = q('.links>ul>li', true), 
allFaq = q('#faq ul li .que', true);

listen('mousedown', allFaq, function () {
    this.classList.contains('act') ? cls(this, 'act', 'r') :
        (() => {
            allFaq.forEach(faq => { cls(faq, 'act', 'r') });
            cls(this, 'act', 'a')
        })()
}, true)

listen('mousedown', allLnks, function () {
    allLnks.forEach(a => { cls(a, 'act', 'r') })
    cls(this, 'act', 'a')
}, true)

listen('scroll', window, function () {
    (this.scrollY > 20) ? cls(q('.to_top'), 'show', 'a') : cls(q('.to_top'), 'show', 'r')
})
