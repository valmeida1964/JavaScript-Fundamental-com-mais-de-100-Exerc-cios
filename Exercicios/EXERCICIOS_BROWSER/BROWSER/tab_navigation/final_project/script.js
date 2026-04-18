/* 
Tab Navigator
---------------------------------------------------
Criar um sistema de navegação por abas (tabs) em JavaScript.
*/

const tabNavigation = document.querySelectorAll('[id^="btn_"]');
const tabs = document.querySelectorAll('[id^="tab_"]');

showTab('management');

function showTab(name){
    tabs.forEach(tab => {
        if(tab.id === "tab_" + name){
            tab.classList.remove("hidden");
        } else {
            tab.classList.add("hidden");
        }
    });
}

tabNavigation.forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.id.split('_')[1];
        showTab(name);
    });
});
