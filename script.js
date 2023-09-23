let sidebarItems = document.querySelectorAll('.sidebar-item');
let acrobatSentence = document.querySelector('.acrobat-sentence');
let searchIcon = document.querySelector('.search-icon-word');
let acrobatBtn = document.querySelector('.try-acrobat');
let bottomNav = document.querySelector('.bottom-nav');
let inputElem = document.createElement('input');
let closeInpBtn = document.createElement('button');
let sidebarContentElems = document.querySelectorAll('.sidebar-content')

function sidebarClickHandle() {
    sidebarItems.forEach((sidebarItem) =>{
        sidebarItems.forEach((item) => {
            item.classList.remove('sidebar-styles');
        })
        sidebarItem.addEventListener('click', function(){
            sidebarItem.classList.add('sidebar-styles')
        })
    })
}

sidebarItems.forEach((item) => {
    item.addEventListener('click', sidebarClickHandle)
})

let handleSearch = () => {
    acrobatSentence.style.display = 'none';
    searchIcon.style.display = 'none';
    acrobatBtn.style.display = 'none';
    inputElem.classList.add('search-inp')
    closeInpBtn.innerText = 'close search';
    closeInpBtn.classList.add('close-inp-btn');
    bottomNav.append(inputElem, closeInpBtn);
}

 function closeSearch(){
    inputElem.style.display ='none';
    closeInpBtn.style.display = 'none';
    acrobatSentence.style.display = 'block';
    searchIcon.style.display = 'block';
    acrobatBtn.style.display = 'block';

}
closeInpBtn.addEventListener('click', closeSearch);

let sidebarRecent = document.querySelector('.s-recent');
sidebarRecent.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('recent')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarStarred = document.querySelector('.s-starred');
sidebarStarred.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('starred')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarFiles = document.querySelector('.s-files');
sidebarFiles.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('your-files')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarScans = document.querySelector('.s-scans');
sidebarScans.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('scans')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarSharedYou = document.querySelector('.s-shared-you');
sidebarSharedYou.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('shared-by-you')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarSharedOthers = document.querySelector('.s-shared-others');
sidebarSharedOthers.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('shared-by-others')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarAgreements = document.querySelector('.s-agreements');
sidebarAgreements.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('all-agreements')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
let sidebarComputer = document.querySelector('.s-computer');
sidebarComputer.addEventListener('click', function() {
    sidebarContentElems.forEach((item) => {
        if(item.classList.contains('your-computer')){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
})
