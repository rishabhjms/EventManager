let isWindowVisible = false;
toggleWindowVisibility = (bool) => {
    if (bool) {
        dialogWindow.style.display = 'grid';
        parent_container.style.filter = 'brightness(40%)'
        isWindowVisible = true;
    } else {
        dialogWindow.style.display = 'none'
        parent_container.style.filter = 'brightness(100%)'
        isWindowVisible = false;

    }
}
toggleTabActiveness = (i) => {
    switch (i) {
        case 0:
            dialogWindow.firstElementChild.children[0].classList.add('active');
            dialogWindow.firstElementChild.children[1].classList.remove('active');
            dialogWindow.firstElementChild.children[2].classList.remove('active');
            dialogWindow.firstElementChild.children[3].classList.remove('active');
            break;
        case 1:
            dialogWindow.firstElementChild.children[1].classList.add('active');
            dialogWindow.firstElementChild.children[0].classList.remove('active');
            dialogWindow.firstElementChild.children[2].classList.remove('active');
            dialogWindow.firstElementChild.children[3].classList.remove('active');
            break;
        case 2:
            dialogWindow.firstElementChild.children[2].classList.add('active');
            dialogWindow.firstElementChild.children[1].classList.remove('active');
            dialogWindow.firstElementChild.children[0].classList.remove('active');
            dialogWindow.firstElementChild.children[3].classList.remove('active');
            break;
        case 3:
            dialogWindow.firstElementChild.children[3].classList.add('active');
            dialogWindow.firstElementChild.children[1].classList.remove('active');
            dialogWindow.firstElementChild.children[2].classList.remove('active');
            dialogWindow.firstElementChild.children[0].classList.remove('active');
            break;
    }
    let numberOfTabs = dialogWindow.firstElementChild.childElementCount;
    for (let i = 0; i < numberOfTabs; i++) {
        dialogWindow.firstElementChild.children[i].addEventListener('click', (e) => {
            toggleTabActiveness(i);
        });
    }
}
wizard_icn.addEventListener('click', () => {
    toggleWindowVisibility(true);
    toggleTabActiveness(2);
})
list_icn.addEventListener('click', () => {
    toggleWindowVisibility(true);
    toggleTabActiveness(1);
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        toggleWindowVisibility(false)
        isWindowVisible = false;
    } else if (e.key == 'F4') {
        e.preventDefault();
        toggleWindowVisibility(true);
        isWindowVisible = true;
        toggleTabActiveness(0)
    } else if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        toggleWindowVisibility(true);
        toggleTabActiveness(3);
        isWindowVisible = true;
    }
})
dialogWindow.lastElementChild.children[1].firstElementChild.firstElementChild.addEventListener('click', () => {
    toggleWindowVisibility(false)
    activityBar.firstElementChild.lastElementChild.innerHTML = ' ';
    let temp = localStorage.getItem('iterator')
    for (let i = 0; i <= temp; i++) {
        localStorage.removeItem(`box_${i}_text`)
    }
    localStorage.setItem('iterator', '0')
})
tabRenderer = (val) => {
    switch (val) {
        case 0:
            tab_content[0].classList.remove('hidden')
            tab_content[1].classList.add('hidden')
            tab_content[2].classList.add('hidden')
            tab_content[3].classList.add('hidden')
            tab_content[0].classList.add('visible')
            break;
        case 1:
            tab_content[1].classList.remove('hidden')
            tab_content[0].classList.add('hidden')
            tab_content[2].classList.add('hidden')
            tab_content[3].classList.add('hidden')
            tab_content[1].classList.add('visible')
            break;
        case 2:
            tab_content[2].classList.remove('hidden')
            tab_content[0].classList.add('hidden')
            tab_content[1].classList.add('hidden')
            tab_content[3].classList.add('hidden')
            tab_content[2].classList.add('visible')
            break;
        case 3:
            tab_content[3].classList.remove('hidden')
            tab_content[0].classList.add('hidden')
            tab_content[1].classList.add('hidden')
            tab_content[2].classList.add('hidden')
            tab_content[3].classList.add('visible')
            break;
    } 
}
let tab_content = document.querySelectorAll('.tab_content');
dialogWindow.firstElementChild.children[0].addEventListener('click', () => {
    tabRenderer(0)
})
dialogWindow.firstElementChild.children[1].addEventListener('click', () => {
    tabRenderer(1)
})
dialogWindow.firstElementChild.children[2].addEventListener('click', () => {
    tabRenderer(2)
})
dialogWindow.firstElementChild.children[3].addEventListener('click', () => {
    tabRenderer(3)
})