//An image changer! It was a simple code apparently so I tried it out myself first before looking at the reference site.
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/zamPic.JPG") {
    myImage.setAttribute("src", "img/zamPic2.JPG");
  } else {
    myImage.setAttribute("src", "img/zamPic3.JPG");
  }
});
// A button was added in the HTML to change the user name, so I— with a help of a guide, did some interactive JS!
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// This is where we call the function to set the user name
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome ${myName} to my page! You can inspect the page to learn about the progress I've made so far.`;
}
// and this is where we initialize the heading based on whether a name is already stored
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome ${storedName} to my page! You can inspect the page to learn about the progress I've made so far.`;
}
// This event listener is for the button so that the user can change the user name
myButton.addEventListener("click", () => {
    setUserName();
});

document.querySelector('#open-react-btn').addEventListener('click', function () {
  window.location.href = 'learningReact/react.html';
});