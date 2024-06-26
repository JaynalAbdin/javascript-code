
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter Your Name: ");
    localStorage.setItem("Name", myName);
    myHeading.textContent = `Mozila is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozila is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};