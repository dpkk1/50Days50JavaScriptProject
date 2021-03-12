const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClasses();
        panel.classList.add('active');  //adding class of active 
    })
})

function removeActiveClasses() {
    panels.forEach( panel =>{
        panel.classList.remove('active');  //removing class of active
    })
}