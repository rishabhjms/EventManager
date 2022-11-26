setDocumentTitle = async (e_id) => {
    let x = await document.getElementById(e_id).innerText;
    document.title = x;
    return x;
}
setDocumentTitle('eventHeading');
toggleSideBarVisibility = async () => {
    if (!isSideMenuVisible) {
        activityBar.firstElementChild.innerHTML = content;
        activityBar.firstElementChild.setAttribute('style', 'display:block;')
        activityBar.style.gridTemplateColumns = '3fr 9fr';
        activityBar.firstElementChild.setAttribute('style', 'grid-template-rows: 2fr 10fr');
        titleBar.firstElementChild.firstElementChild.classList.remove('fa-ellipsis')
        titleBar.firstElementChild.firstElementChild.classList.add('fa-ellipsis-vertical')
        isSideMenuVisible = await true;
    }
    else if (isSideMenuVisible) {
        titleBar.firstElementChild.firstElementChild.classList.add('fa-ellipsis')
        activityBar.firstElementChild.firstElementChild.classList.remove('fa-ellipsis-vertical')
        activityBar.firstElementChild.innerHTML = ' ';
        activityBar.firstElementChild.setAttribute('style', 'display:none;')
        activityBar.style.gridTemplateColumns = '1fr';
       
        isSideMenuVisible = await false;
    }
}
mainMenuIcon.addEventListener('click', () => {
    toggleSideBarVisibility();
});
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleSideBarVisibility();
    }
});