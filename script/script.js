var indent = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-line');

function next() {
    indent = indent + 450;
    sliderLine.style.left = -indent + "px";
    if (indent > 1350) {
        indent = -450;
        indent = indent + 450;
        sliderLine.style.left = -indent + "px";
    }
};

function prew() {
    indent = indent - 450;
    sliderLine.style.left = -indent + "px";
    if (indent < 0) {
        indent = 900;
        indent = indent + 450;
        sliderLine.style.left = -indent + "px";
    }
};

function go() {
    setInterval(prew, 2000)
};
go();
//ju