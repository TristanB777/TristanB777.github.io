// Change Variable
let stylemode = document.cookie;
//Change Variable
let stylelink = document.getElementById('style');

//Conditional Branch with else branch
if (stylemode == 'dark') {
    //Change the href property of the link
    stylelink.href = 'css/dark.css';
} else {
    stylelink.href = 'css/light.css';
    document.cookie = 'light';
    stylemode = 'light'
}

// Common Event
function switchmode() {
    //Conditional statment with else branch
    if (stylemode == 'light') {
        document.cookie = 'dark';
        stylemode = 'dark';
        stylelink.href = 'css/dark.css';
    } else {
        document.cookie = 'light';
        stylemode = 'light';
        stylelink.href = 'css/light.css';
    }
}

function showhide() {
    let toolbarbuttons = document.getElementById('buttons');
    if (toolbarbuttons.style.display == 'block') {
        toolbarbuttons.style.display = 'none';
    } else {
        toolbarbuttons.style.display = 'block';
    }
    }
function drop() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      // Close the dropdown menu if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }