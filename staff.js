//Addind form when click on contact on mobile version

/*function createForm() {7
    const form = document.createElement("form");
    const receiver = document.createElement("input");
    const email = document.createElement("input");
    const object = document.createElement("input");
    const message = document.createElement("input");
    form.classList.add("contactForm");
    receiver.classList.add("receiverInput");
    email.classList.add("emailInput");
    object.classList.add("objectInput");
    message.classList.add("messageInput");
}
*/
function addForm(event, personToContact) {
    event.preventDefault();
    personToContact.style.display = "flex";
}


