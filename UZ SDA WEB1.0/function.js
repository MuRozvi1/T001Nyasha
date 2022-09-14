function togglePopup(){
    document.getelementsById(popup-1).classlist .toggle('active');
}
let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) =>{
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active')
        tabs[index].classList.add('is-active')
    });
});


var tabButtons=document.querySelectorAll('.tabContainer .buttonContainer button');
var tabPanels=document.querySelectorAll('.tabContainer .tabPanel')

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor='';
        node.style.color='';
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color='rgb(10, 10, 10, 0.3)';
    tabPanels.forEach(function(node) {
        node.style.display='none';
    });
    tabPanels[panelIndex].style.display='block';
    tabPanels[panelIndex].style.backgroundColor='colorCode';
}
showPanel(0, 'rgb(10, 10, 10, 0.3)')