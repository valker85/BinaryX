const tabsWrap = document.querySelector('.all_tabs_ul')
const tabsLis = Array.from(document.querySelector('.all_tabs_ul').children)
const tabsContent = Array.from(document.querySelector('.tab-content').children)
const subTabs = Array.from(document.querySelectorAll('.subtab'))
const my_hero_btns = Array.from(document.querySelector('.my_hero .buttons-wrapper').children)
const myHeroSelect = document.querySelector('.select_content')

let pxScroled = 0


$('.all_tabs_ul').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
    {
        breakpoint: 1230,
        settings: {
            slidesToShow: 8,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});


function openSelect() {
    myHeroSelect.classList.toggle('active')
}


function changeMyHeroBtn(idx, event) {
    my_hero_btns.map( btn => {
        btn.classList.remove('active')
    } )
    my_hero_btns[idx].classList.add('active')
}

function changeTab(index, event) {
    tabsLis.map( li => li.classList.remove('active') )
    tabsContent.map( tab => tab.classList.remove('active') )

    if(event.target.tagName === 'LI'){
        event.target.classList.add('active')
        tabsContent[index].classList.add('active')
        subTabs.map( subtab => subtab.classList.remove('active') )
        
    } else {
        event.target.parentNode.parentNode.classList.add('active')
        tabsContent[index].classList.add('active')
        subTabs.map( subtab => subtab.classList.remove('active') )

    }
}

function subtabVisible(event) {
    if(event.target.querySelector('.subtab')){
        event.target.querySelector('.subtab').classList.toggle('active')
    }
}

function closeSubtabs() {
    subTabs.map( subtab => subtab.classList.remove('active') )
}

// Tab Scroll
function scrolFn(params) {

    // if(params === 'right'){
    //     pxScroled += (aaa.scrollWidth/4)
    //     tabsWrap.scrollTo(pxScroled, 0)
    // } else {
    //     pxScroled -= (tabsWrap.scrollWidth/4)
    //     tabsWrap.scrollTo(pxScroled, 0)
    // }
    // if(pxScroled > tabsWrap.scrollWidth){
    //     pxScroled = tabsWrap.scrollWidth
    // } else if(pxScroled < 0){
    //     pxScroled = 0
    // } 
    

}