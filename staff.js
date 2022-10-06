//Addind form when click on contact on mobile version

function addForm(event, personToContact, actualContact, nextStaffPerson, buttonClicked, fullName, lastButton) {
    event.preventDefault();
    const receiver = document.querySelector("#directReceiver");
    if (window.matchMedia("screen and (max-width: 1023px)").matches) {
        if (buttonClicked.innerHTML.search('CONTACT') != -1) {
            if (nextStaffPerson)
            {
                nextStaffPerson.style.boxShadow = "0 .4em .4em -.3em #CFCFCF, 0 -.4em .4em -.3em #CFCFCF";
            }
            buttonClicked.innerHTML = 'CLOSE<img src="./assets/Icon/white_cross128px.png" alt="Speech Bubble" class="speechBubble">';
            actualContact.style.marginBottom = "0";
            personToContact.style.display = "flex";
        }
        else if (buttonClicked.innerHTML.search('CLOSE') != -1) {
            if (nextStaffPerson)
            {
                nextStaffPerson.style.boxShadow = "0 .4em .4em -.3em #CFCFCF";
                actualContact.style.marginBottom = ".7em";
            }
            else {
                actualContact.style.marginBottom = "0";
            }
            buttonClicked.innerHTML = 'CONTACT<img src="./assets/Icon/white_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
            personToContact.style.display = "none";
        }
    }
    else {
        receiver.placeholder = fullName.innerHTML;
        const allButon = document.querySelectorAll(".contactBtn")
        allButon.forEach(element => {
            element.classList.remove("activeButton");
            element.innerHTML = 'CONTACT<img src="./assets/Icon/black_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
        })
        buttonClicked.classList.add("activeButton");
        buttonClicked.innerHTML = 'CONTACT<img src="./assets/Icon/white_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
    }   
}


function hover(buttonClicked) {
    if (!(buttonClicked.classList.contains("activeButton"))) {
        if (buttonClicked.innerHTML.search('CONTACT') != -1) {
            buttonClicked.innerHTML = 'CONTACT<img src="./assets/Icon/white_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
        }
        else if (buttonClicked.innerHTML.search('CLOSE') != -1) {
            buttonClicked.innerHTML = 'CLOSE<img src="./assets/Icon/white_cross128px.png" alt="Speech Bubble" class="speechBubble">';
        }
    }
}


function unhover(buttonClicked) {
    if (!(buttonClicked.classList.contains("activeButton"))) {
        if (buttonClicked.innerHTML.search('CONTACT') != -1) {
            buttonClicked.innerHTML = 'CONTACT<img src="./assets/Icon/black_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
        }
        else if (buttonClicked.innerHTML.search('CLOSE') != -1) {
            buttonClicked.innerHTML = 'CLOSE<img src="./assets/Icon/black_cross128px.png" alt="Speech Bubble" class="speechBubble">';
        }
    }
}


addEventListener('resize', (event) => {
    event.preventDefault();
    if (window.matchMedia("screen and (max-width: 1023px)").matches) {
        const allButon = document.querySelectorAll(".contactBtn")
        allButon.forEach(element => {
            element.classList.remove("activeButton");
            element.innerHTML = 'CONTACT<img src="./assets/Icon/black_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
        })
    }
})

const allSendBtn = document.querySelectorAll(".emailSend");
const emailAnim = document.querySelector(".emailAnim");
const directSendBtn = document.querySelector(".directSendBtn");
const receiver = document.querySelector("#directReceiver");
const allInput = document.querySelectorAll(".directFormInput");
const contactBtn = document.querySelectorAll(".contactBtn");

directSendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    receiver.placeholder = "RECEIVER";
    allInput.forEach(input => {
        input.value = "";
    })
    contactBtn.forEach(button => {
        button.classList.remove("activeButton");
        button.innerHTML = 'CONTACT<img src="./assets/Icon/black_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
    })
})

function emailSend(event, actualForm) {
    event.preventDefault();
    emailAnim.style.display = "block";
    const delayInMilliseconds = 2000;
    const contactBtn = document.querySelectorAll(".contactBtn");
    const allInput = document.querySelectorAll(".formInput");
    contactBtn.forEach(button => {
        if (button.innerHTML.search('CLOSE') != -1) {
            button.innerHTML = 'CONTACT<img src="./assets/Icon/black_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
        }
    })
    allInput.forEach(input => {
        input.value = "";
    })
    if (actualForm) {
        actualForm.style.display = "none";
    }
    setTimeout(function() {
        emailAnim.style.display = "none";
    }, delayInMilliseconds);
}


