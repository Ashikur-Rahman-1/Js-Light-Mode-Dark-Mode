const body = document.body;

const div = document.createElement("div");
const img = document.createElement("img");
const h1 = document.createElement("h1");
const button = document.createElement("button");
const span = document.createElement("span");
const button2 = document.createElement("button");
const button3 = document.createElement("button");

//adding attribute to img

img.setAttribute("src", "./images/one..jpg");
img.setAttribute("alt", "this is one..jpg");
img.style.width = "100%";
img.style.objectFit = "cover";

//insert text in h1

h1.innerHTML = "this is";

h1.style.textAlign = "center";
h1.style.textTransform = "upperCase";

//span tag
span.innerHTML = " One.";
span.style.color = "green";

//button tag
button.innerHTML = "Click";
button.style.display = "block";
button.style.margin = "auto";
button.style.cursor = "pointer";

//button2 tag

button2.innerHTML = "Dark mode";
button2.style.display = "flex";
button2.style.margin = "auto";
button2.style.marginTop = "20px";
button2.style.cursor = "pointer";

// buttton3 tag
button3.innerHTML = "Light mode";
button3.style.display = "flex";
button3.style.margin = "auto";
button3.style.marginTop = "20px";
button3.style.cursor = "pointer";

//append whole tag
body.appendChild(div);
div.appendChild(img);
div.appendChild(h1);
h1.appendChild(span);
h1.innerHTML += " jpg";
div.appendChild(button);
div.appendChild(button2);
div.appendChild(button3);

button.addEventListener("click", function () {
  const customSpan = h1.children[0];
  customSpan.style.color = "purple";
  img.style.display = "block";
  img.style.margin = "auto";
  img.style.width = "50%";
  img.style.transition = "ease-in-out .3s";
});

button2.addEventListener("click", function () {
  body.style.background = "rgb(76, 79, 79)";
});

button3.addEventListener("click", function () {
  body.style.background = "none";
});
