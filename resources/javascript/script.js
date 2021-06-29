let text = ["I'm a Javascript Developr", "I'm a Python Developer", "I'am a PHP Developer", "I'am a React Developer", "I'm a Full Stack Developer"];

let index = 0;
const textElement = document.getElementById("bannerText");

function change() {
   textElement.innerHTML = text[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};

