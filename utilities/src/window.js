let isWindowVisible = false;
toggleWindowVisibility = () => {
    if (!isWindowVisible) {
        type_chooser.style.display = 'grid';
        parent_container.style.filter = 'brightness(40%)'
        isWindowVisible = true;
    } else {
        type_chooser.style.display = 'none'
        parent_container.style.filter = 'brightness(100%)'
        isWindowVisible = false;

    }
    toggleTabActiveness = (i) => {
        switch (i) {
            case 0:
                type_chooser.firstElementChild.children[0].classList.add('active');
                type_chooser.firstElementChild.children[1].classList.remove('active');
                type_chooser.firstElementChild.children[2].classList.remove('active');
                type_chooser.firstElementChild.children[3].classList.remove('active');
                break;
            case 1:
                type_chooser.firstElementChild.children[1].classList.add('active');
                type_chooser.firstElementChild.children[0].classList.remove('active');
                type_chooser.firstElementChild.children[2].classList.remove('active');
                type_chooser.firstElementChild.children[3].classList.remove('active');
                break;
            case 2:
                type_chooser.firstElementChild.children[2].classList.add('active');
                type_chooser.firstElementChild.children[1].classList.remove('active');
                type_chooser.firstElementChild.children[0].classList.remove('active');
                type_chooser.firstElementChild.children[3].classList.remove('active');
                break;
            case 3:
                type_chooser.firstElementChild.children[3].classList.add('active');
                type_chooser.firstElementChild.children[1].classList.remove('active');
                type_chooser.firstElementChild.children[2].classList.remove('active');
                type_chooser.firstElementChild.children[0].classList.remove('active');
                break;
        }
    }
    let numberOfTabs = type_chooser.firstElementChild.childElementCount;
    for (let i = 0; i < numberOfTabs; i++) {
        type_chooser.firstElementChild.children[i].addEventListener('click', (e) => {
            toggleTabActiveness(i);
        });
    }
}
wizard_icn.addEventListener('click', () => {
    toggleWindowVisibility();
    toggleTabActiveness(2);
})
list_icn.addEventListener('click', () => {
    toggleWindowVisibility();
    toggleTabActiveness(1);
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        type_chooser.style.display = 'none'
        parent_container.style.filter = 'brightness(100%)'
        isWindowVisible = false;
    } else if (e.key == 'F4') {
        e.preventDefault();
        type_chooser.style.display = 'grid';
        toggleWindowVisibility();
        parent_container.style.filter = 'brightness(40%)'
        isWindowVisible = true;
        toggleTabActiveness(0)
    } else if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        type_chooser.style.display = 'grid';
        toggleWindowVisibility();
        toggleTabActiveness(3);
        isWindowVisible = true;
    }
})