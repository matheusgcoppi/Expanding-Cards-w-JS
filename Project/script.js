const panels = document.querySelectorAll('.panel') //All because We have more than 1 panel to select

/*panels.forEach((panel) => {   FUNCTION - SHORT WAY
    panel.addEventListener('click', () => {
        console.log(123)
    })
}*/

panels.forEach(function (panel) {  // FUNCTION - LONG WAY
    panel.addEventListener('click', function() {
        removeActiveClasses()
        panel.classList.add('active')
    }); 
    })

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}