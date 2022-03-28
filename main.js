let form = document.forms;
let receive = document.querySelector(".put");
let para = document.querySelector(".divition");
const bold = document.querySelector(".bold");
const meeil = document.querySelector(".italic");
WebFont.load({
    google: {
        families: [
            "Arial:300,400,900",
            "Courier New:300,400,900",
            "Helvetica:300,400,900",
        ],
    },
});

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
    "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;800&family=Cairo:wght@300;400;800;900&family=Open+Sans:wght@400;800&family=Red+Hat+Mono:wght@400;700&family=Roboto+Condensed:wght@400;700&family=Roboto:wght@300;400;500;900&family=Tajawal:wght@400;800&display=swap";
document.getElementsByTagName("head")[0].appendChild(link);
para.style.fontWeight = "400";
document.body.appendChild(para);

if (window.localStorage.getItem("bold")) {
    para.style.fontWeight = window.localStorage.getItem("bold");
}
if (window.localStorage.getItem("italic")) {
    para.style.fontStyle = window.localStorage.getItem("italic");
}

function people() {
    if (para.style.fontStyle === "normal") {
        para.style.fontStyle = "italic";
    } else if (para.style.fontStyle === "italic") {
        para.style.fontStyle = "normal";
    }
    window.localStorage.setItem("italic", "italic");
}
meeil.addEventListener("click", people);

function bolid() {
    if (para.style.fontWeight === "400") {
        para.style.fontWeight = "900";
    } else if (para.style.fontWeight === "900") {
        para.style.fontWeight = "400";
    } else {
        para.style.fontWeight = "400";
    }
    window.localStorage.setItem("bold", "900");
}
bold.addEventListener("click", bolid);

if (window.localStorage.getItem("text")) {
    para.textContent = window.localStorage.getItem("text");
}

form[0].onsubmit = function(e) {
    e.preventDefault();
    para.textContent = receive.value;
    window.localStorage.setItem("text", receive.value);
};

let type = document.getElementById("typeOfFont");

function showFamily() {
    para.style.fontFamily = type.options[type.selectedIndex].value;
    window.localStorage.setItem("type", type.options[type.selectedIndex].value);
}
type.onchange = showFamily;

let color = document.getElementById("colorOfFont");

function showColor() {
    window.localStorage.setItem(
        "color",
        color.options[color.selectedIndex].value
    );
    para.style.color = color.options[color.selectedIndex].value;
}
color.onchange = showColor;

let size = document.getElementById("sizeOfFont");

function showSize() {
    para.style.fontSize = `${size.options[size.selectedIndex].value}`;
    window.localStorage.setItem(
        "size",
        `${size.options[size.selectedIndex].value}`
    );
}
size.onchange = showSize;

if (window.localStorage.getItem("color")) {
    para.style.color = window.localStorage.getItem("color");
    document
        .querySelector(`[value="${window.localStorage.getItem("color")}"]`)
        .setAttribute("selected", "selected");
}
if (window.localStorage.getItem("type")) {
    para.style.fontFamily = window.localStorage.getItem("type");
    document
        .querySelector(`[value="${window.localStorage.getItem("type")}"]`)
        .setAttribute("selected", "selected");
}
if (window.localStorage.getItem("size")) {
    para.style.fontSize = window.localStorage.getItem("size");
    document
        .querySelector(`[value="${window.localStorage.getItem("size")}"]`)
        .setAttribute("selected", "selected");
}