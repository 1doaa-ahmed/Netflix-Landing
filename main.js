let icons = document.querySelectorAll(".tab-item");
let content = document.querySelectorAll(".tab-content-item");

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add("tab-border");
    let tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add("show");
}

function removeBorder(e){
    icons.forEach(item => item.classList.remove("tab-border"));    
}

function removeShow(e){
    content.forEach(item => item.classList.remove("show"));
}

icons.forEach(item => item.addEventListener('click' , selectItem))