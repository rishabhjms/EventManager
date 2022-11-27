let iterator = Number(localStorage.getItem('iterator'));
addBoxtoSideMenu = (e) => {
    if (sideMenuInputField.value == '') {
        alert('No title found!')
    } else if (sideMenuInputField.value !== '') {   
        let box = document.createElement('div');
        for (let i = 0; i < box_classlist_arr.length; i++) {
            box.classList.add(`${box_classlist_arr[i]}`)
        }   
        box.setAttribute('style', 'grid-template-columns:2fr 10fr;')
        box.innerHTML = `<img src="utilities/graphics/assets/sunny.png" alt="" width="24" class="invert"> <span>${sideMenuInputField.value} </span>`;
        activityBar.firstElementChild.lastElementChild.appendChild(box);
        sideMenuInputField.value = '';
        {
            localStorage.setItem(`box_${iterator}_text`, String(activityBar.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML));
            iterator++;
            localStorage.setItem('iterator', String(iterator));
        }
        return (activityBar.firstElementChild.lastElementChild.lastElementChild.outerHTML);
    }
}

sideMenuInputField.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        a = addBoxtoSideMenu(e);
    }
})
activityBar.firstElementChild.firstElementChild.children[2].addEventListener('click', (e) => {
    addBoxtoSideMenu(e);
});