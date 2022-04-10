/* The code for this website is a variety of individual design and an online template from W3Schools
W3schools.com. 2022. W3Schools online HTML editor. [online]
Available at: <https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_parallax&stacked=h> [Accessed 5 March 2022]. */
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Display and Hide About Text Box on Click
function displayBox(element) {
    if(document.getElementById('textBox').className == "hide") {
        document.getElementById('textBox').className="show";
        document.getElementById('text').className="show";
    }
    else if(document.getElementById('textBox').className == "show") {
        document.getElementById('textBox').className="hide";
        document.getElementById('text').className="hide";
    }
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    }
    else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
