let isWindowVisible = false;
toggleWindowVisibility=()=>{
    if(!isWindowVisible){
        type_chooser.style.display = 'flex';
        parent_container.style.filter = 'brightness(40%)'
        isWindowVisible = true;
    }else{
        type_chooser.style.display = 'none'
        parent_container.style.filter = 'brightness(100%)'
        isWindowVisible = false;

    }
}
wizard_icn.addEventListener('click',()=>{
    toggleWindowVisibility();
})
document.addEventListener('keydown',(e)=>{
    if(e.key=='Escape'){
        type_chooser.style.display = 'none'
        parent_container.style.filter = 'brightness(100%)'
        isWindowVisible = false;
    }else if(e.key == 'F4'){
        e.preventDefault();
        type_chooser.style.display = 'flex';
        parent_container.style.filter = 'brightness(40%)'
        isWindowVisible = true;
    }
})