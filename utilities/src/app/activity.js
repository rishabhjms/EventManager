let menu = document.getElementById('titleBar').firstElementChild.firstElementChild;
let ac_bar = document.getElementById('activityBar');
let isSideBarHidden = false;
menu.addEventListener('click', function () {
    if (!isSideBarHidden) {
        ac_bar.firstElementChild.setAttribute('style', 'display:none;')
        ac_bar.style.gridTemplateColumns = '1fr';
        isSideBarHidden = true;
    }
    else if (isSideBarHidden) {
        ac_bar.firstElementChild.setAttribute('style', 'display:block;')
        ac_bar.style.gridTemplateColumns = '2fr 7fr';
        isSideBarHidden = false;
    }
})