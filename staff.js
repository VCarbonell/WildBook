//Addind form when click on contact on mobile version

function addForm(event, personToContact, actualContact, nextStaffPerson, buttonClicked) {
    event.preventDefault();
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

function hover(buttonClicked) {
    if (buttonClicked.innerHTML.search('CONTACT') != -1) {
        buttonClicked.innerHTML = 'CONTACT<img src="./assets/Icon/white_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
    }
    else if (buttonClicked.innerHTML.search('CLOSE') != -1) {
        buttonClicked.innerHTML = 'CLOSE<img src="./assets/Icon/white_cross128px.png" alt="Speech Bubble" class="speechBubble">';
    }
}

function unhover(buttonClicked) {
    if (buttonClicked.innerHTML.search('CONTACT') != -1) {
        buttonClicked.innerHTML = 'CONTACT<img src="./assets/Icon/black_speech_bubble128px.png" alt="Speech Bubble" class="speechBubble">';
    }
    else if (buttonClicked.innerHTML.search('CLOSE') != -1) {
        buttonClicked.innerHTML = 'CLOSE<img src="./assets/Icon/black_cross128px.png" alt="Speech Bubble" class="speechBubble">';
    }
}