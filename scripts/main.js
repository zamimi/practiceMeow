//An image changer! It was a simple code apparently so I tried it out myself first before looking at the reference site.
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/zamPic.JPG") {
    myImage.setAttribute("src", "img/zamPic2.JPG");
  } else {
    myImage.setAttribute("src", "img/zamPic.JPG");
  }
});