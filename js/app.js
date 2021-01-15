/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navbarMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// build the nav

sections.forEach(section => {
    
    const fragment = document.createDocumentFragment();

    const secName = section.getAttribute('data-nav');
    const creatList = document.createElement('li');
    const creatLink = document.createElement('a');
    let textNode = document.createTextNode('secName')
    creatLink.className = 'menu__link';
    creatLink.textContent = secName;
    
    creatList.appendChild(creatLink);
    fragment.appendChild(creatList);
    navbarMenu.appendChild(fragment);
   
// Scroll to section on link click
    
    creatLink.addEventListener("click", function(scroll){
       section.scrollIntoView({'behavior':'smooth'});
       });


});





// Start Event

window.addEventListener("scroll", function(scroll) {
    

sections.forEach(section => {
        const activeSec = section.getBoundingClientRect();
        const secName = section.getAttribute("data-nav");
        section.classList.remove("your-active-class");

// Add class 'active' to section when near top of viewport

        if (
            activeSec.top < 100 &&
            activeSec.left >= 0 &&
            activeSec.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                section.classList.add("your-active-class");
                const selectList = document.querySelectorAll("li");
                selectList.forEach(item => {
                    let itemText = item.textContent;
                    item.classList.remove("active_sec")
                    
                    // Set sections as active

                    if (secName == itemText) {

                        item.classList.add("active_sec")
                    }
                    
                });
                
                
            }
            

       
    
    })
})

