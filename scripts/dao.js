const btnsWrap = Array.from(document.querySelector('.btns-wrapper').children)

function changeActive(idx) {
    btnsWrap.map( btn => btn.classList.remove('active') )
    btnsWrap[idx].classList.add('active')
}