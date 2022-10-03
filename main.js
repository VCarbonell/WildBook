//Addind form when click on contact on mobile version

function addForm(buttonClicked, event) {
    event.preventDefault();
    const form = document.createElement("form");
    form.classList.add("contactForm")
    buttonClicked.appendChild(form);
}