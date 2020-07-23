const selectElement = (element) => document.querySelector(element);
selectElement('.mobile-menu').addEvenetListener('click',()=>{
    selectElement('header').classList.toggle('active');
});