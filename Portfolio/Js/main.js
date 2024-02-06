
// show menu 
const showMenu = (toggleId,navId) => {
    // now we have to fetch the toggleId and navId
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    // if the toggle and nav is not empty      
    if (toggle && nav){
        // below code is to display the menu option when the menu icon is clicked
        // this SHOW class will be triggered when the icon is pressed
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        });
    }
}
// call the function showMenu
showMenu('nav_toggle','nav_menu');


// below code is to display the active section in the menu
const navLink = document.querySelectorAll('.nav_link');

// below code is used when the webpage is refreshed the menu options will be cleared or else the section will be different and the underline effect will be different
navLink.forEach(n => n.classList.remove('active'));

// below function is display the menu options which is active 
function linkAction(){
    // below code is to remove the underline effect from other menu options
    navLink.forEach(n => n.classList.remove('active'))

    // below code is add the underline effect to the specific menu option which is clicked
    // this will point to the current instance like home,about,work
    this.classList.add('active')

    // below code is make disappear the menu bar option, once the menu option is clicked like home or about etc
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

// whenever the menu Selection(home or about etc) is clicked then call the linkAction fucntion
navLink.forEach(n => n.addEventListener('click',linkAction));


// below code is to reset the values in the contact form
function clearContent(){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('message').value='';
};