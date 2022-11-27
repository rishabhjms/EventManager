document.onreadystatechange = () => {
    let bro = activityBar.firstElementChild.lastElementChild;
    if (document.readyState === "interactive") {
        console.log("Number of boxes stored in storage:", Number(localStorage.getItem('iterator')))
        let iteratorN = localStorage.getItem('iterator');
        for (let j = 0; j < iteratorN; j++) {
            let box = document.createElement('div');
            for (let i = 0; i < box_classlist_arr.length; i++) {
                box.classList.add(`${box_classlist_arr[i]}`)
            } box.setAttribute('style', 'grid-template-columns:2fr 10fr;')
            box.innerHTML = `<img src="utilities/graphics/assets/sunny.png" alt="" width="24" class="invert"> <span>${localStorage.getItem(`box_${j}_text`)} </span>`;
            activityBar.firstElementChild.lastElementChild.appendChild(box);
            sideMenuInputField.value = '';

        }
    }
};