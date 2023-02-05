const changeLang = document.querySelector('.language')
const changed_lang = document.querySelector('.changed_lang')
const allLangs = document.querySelector('.all-langs')
const allLangsLis = Array.from(allLangs.children)
const langsArrow = document.querySelector('.langs-arrow')

changeLang.addEventListener('click', (event)=>{
    allLangs.classList.toggle('active')
    langsArrow.classList.toggle('active')
    if(event.target.innerHTML !== changed_lang.innerHTML){
        changed_lang.innerHTML = event.target.innerHTML
        activeLanguage(changed_lang.innerHTML)
    }
})

function activeLanguage(actual) {
    allLangsLis.map((lang)=>{
        lang.classList.remove('active')
        if(lang.innerHTML === actual){
            lang.classList.add('active')
        }
    })
}

function closeLangsOnBlur() {
    allLangs.classList.remove('active')
    langsArrow.classList.remove('active')
}