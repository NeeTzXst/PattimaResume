// validate + send
function validateForm() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = document.getElementById("subject").value;

    if (name === "" || phone === "" || email === "" || message === "" || subject == "") {
        alert("Please fill in all the blanks.");
        console.log("if validate");
        return false;
    }
    else{
        console.log("else validate");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send');
    // const responseMessage = document.getElementById('responseMessage');
    const emailForm = document.getElementById('contactForm');

    sendButton.addEventListener('click', async function () {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = document.getElementById('subject').value;
        const phone = document.getElementById('phone').value;

        if (name === "" || phone === ""  || email === "" || subject === "" || message === ""){
            console.log("if validate have empty input");
        }
        else{
            console.log("send");
            try {
                const response = await fetch('/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message, subject, phone }),
                });
    
                if (response.ok) {
                    // responseMessage.textContent = 'Email sent successfully!';
                    console.log("Email sent successfully!");
                } else {
                    // responseMessage.textContent = 'An error occurred. Please try again later.';
                    console.log("An error occurred. Please try again later.");
                }
            } catch (error) {
                // responseMessage.textContent = 'An error occurred. Please try again later.';
                console.log("An error occurred. Please try again later.");
            }
        }
    });
});

// smooth scroll
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute("href"); // Get the href attribute, which includes the #
        const targetElement = document.querySelector(targetId); // Find the element with the corresponding ID

        

        if (targetElement) { // Check if the element exists
            const targetPosition = targetElement.offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    }
});



// map
// 13.661797624606331, 100.60735623653427
function initMap() {
    const myLatLng = {
        lat: 13.661733627319336,
        lng: 100.60734558105469
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 20,
        center: myLatLng,
        fullscreenControl: false,
        zoomControl: true,
        streetViewControl: false
    });
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "My location"
    });
}

// mode

const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');
const body = document.body;

// let isDarkMode = false;

var navBGColor = "#2892D7";
var navBGButton = "#2892D7"
var progressBGColor = "#222A68";
const currentMode = 'light';

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('mode', currentMode);

    var elementNav = document.getElementById("navBG");
    var elementNavButton = document.getElementById("navButton");
    var elementProgress = document.getElementById("progressBar");
    var elementProgress2 = document.getElementById("progressBar2");
    var elementProgress3 = document.getElementById("progressBar3");
    var elementProgress4 = document.getElementById("progressBar4");
    var elementProgress5 = document.getElementById("progressBar5");
    var elementProgress6 = document.getElementById("progressBar6");
    var elementProgress7 = document.getElementById("progressBar7");
    var elementProgress8 = document.getElementById("progressBar8");
    var elementProgress9 = document.getElementById("progressBar9");
    var elementProgress10 = document.getElementById("progressBar10");

    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark'){
        body.classList.add('dark-mode'); // Apply dark mode styles
        body.classList.remove('light-mode'); 
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        elementNav.style.backgroundColor  = "#1D70A2";
        navBGColor = "#1D70A2";
        elementNavButton.style.backgroundColor  = "#1D70A2";
        navBGButton = "#1D70A2";
        elementProgress.style.backgroundColor = "#6DAEDB";
        elementProgress2.style.backgroundColor = "#6DAEDB";
        elementProgress3.style.backgroundColor = "#6DAEDB";
        elementProgress4.style.backgroundColor = "#6DAEDB";
        elementProgress5.style.backgroundColor = "#6DAEDB";
        elementProgress6.style.backgroundColor = "#6DAEDB";
        elementProgress7.style.backgroundColor = "#6DAEDB";
        elementProgress8.style.backgroundColor = "#6DAEDB";
        elementProgress9.style.backgroundColor = "#6DAEDB";
        elementProgress10.style.backgroundColor = "#6DAEDB";
        progressBGColor = "#6DAEDB";
    }
    else{
        body.classList.remove('dark-mode'); // Remove dark mode styles
        body.classList.add('light-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        elementNav.style.backgroundColor  = "#2892D7";
        navBGColor = "#2892D7"
        elementNavButton.style.backgroundColor  = "#2892D7";
        navBGButton = "#2892D7"
        elementProgress.style.backgroundColor = "#222A68";
        elementProgress2.style.backgroundColor = "#222A68";
        elementProgress3.style.backgroundColor = "#222A68";
        elementProgress4.style.backgroundColor = "#222A68";
        elementProgress5.style.backgroundColor = "#222A68";
        elementProgress6.style.backgroundColor = "#222A68";
        elementProgress7.style.backgroundColor = "#222A68";
        elementProgress8.style.backgroundColor = "#222A68";
        elementProgress9.style.backgroundColor = "#222A68";
        elementProgress10.style.backgroundColor = "#222A68";
        progressBGColor = "#222A68";
    }
    // isDarkMode = !isDarkMode; // Toggle dark mode status
});
