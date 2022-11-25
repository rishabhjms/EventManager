let menu = document.getElementById('titleBar').firstElementChild.firstElementChild;
let ac_bar = document.getElementById('activityBar');
let isSideBarHidden = false;
let type_chooser = document.getElementById('type_chooser');

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
let isTypeChooserVisible = false;
let contentofChooser = type_chooser.innerHTML;
ac_bar.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', () => {
    if (!isTypeChooserVisible) {
        type_chooser.style.visibility = 'visible'
        type_chooser.innerHTML = contentofChooser;
        type_chooser.style.height = '20vh';
        isTypeChooserVisible = true;
        type_chooser.firstElementChild.children[0].addEventListener('click', () => {
            ac_bar.firstElementChild.firstElementChild.children['inp_adder_1'].attributes[1].nodeValue = 'Enter day title';
            type_chooser.style.height = '0';
            type_chooser.innerHTML = ' '
            isTypeChooserVisible = false;
        })
        type_chooser.firstElementChild.children[1].addEventListener('click', () => {
            ac_bar.firstElementChild.firstElementChild.children['inp_adder_1'].attributes[1].nodeValue = 'Enter event title';
            type_chooser.style.height = '0';
            type_chooser.innerHTML = ' '
            isTypeChooserVisible = false;
        })
        type_chooser.firstElementChild.children[2].addEventListener('click', () => {
            ac_bar.firstElementChild.firstElementChild.children['inp_adder_1'].attributes[1].nodeValue = 'Enter reminder title';
            type_chooser.style.height = '0';
            type_chooser.innerHTML = ' '
            isTypeChooserVisible = false;
        })
    } else if (isTypeChooserVisible) {
        // type_chooser.style.visibility = 'hidden';
        type_chooser.style.height = '0';
        type_chooser.innerHTML = ' '
        isTypeChooserVisible = false;
    }
})
// let m = ac_bar.firstElementChild.firstElementChild.children[1].attributes[1].nodeValue;
let inp_adder_1 = document.getElementById('inp_adder_1');
let box_classlist_arr = ['grid','grid-flow-col', 'items-center','px-4'];
inp_adder_1.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        if (inp_adder_1.value == '') {
            alert('No title found!')
        } else if (inp_adder_1.value !== '') {
            let box = document.createElement('div');
            for (let i = 0; i < box_classlist_arr.length; i++) {
                box.classList.add(`${box_classlist_arr[i]}`)
            }

            box.setAttribute('style','grid-template-columns:2fr 10fr;')
            box.innerHTML = `<img src="utilities/graphics/assets/sunny.png" alt="" width="24"> <span>${inp_adder_1.value} </span>`;
            ac_bar.firstElementChild.lastElementChild.appendChild(box);
            inp_adder_1.value = '';
        }
    }
})
ac_bar.firstElementChild.firstElementChild.lastElementChild.addEventListener('click', (e) => {
    if (inp_adder_1.value == '') {
        alert('No title found!')
    } else if (inp_adder_1.value !== '') {
        let box = document.createElement('div');
        for (let i = 0; i < box_classlist_arr.length; i++) {
            box.classList.add(`${box_classlist_arr[i]}`)
        }
        box.setAttribute('style','grid-template-columns:2fr 10fr;')
        box.innerHTML = `<img src="utilities/graphics/assets/sunny.png" alt="" width="24"> <span>${inp_adder_1.value} </span>`;
        inp_adder_1.value = '';
    }
});
