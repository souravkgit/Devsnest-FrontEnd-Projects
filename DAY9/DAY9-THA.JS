sear1 = document.getElementById("booked");
sear2 = document.getElementById("left");

function fnc(box) {
    if (box.classList.contains("box")) {
        box.classList.remove("box");
        box.classList.add("boxclicked");
        sear1.innerHTML = parseInt(sear1.innerHTML) + 1;
        sear2.innerHTML = parseInt(sear2.innerHTML) - 1;
    } else {
        box.classList.remove("boxclicked");
        box.classList.add("box");
        sear2.innerHTML = parseInt(sear2.innerHTML) + 1;
        sear1.innerHTML = parseInt(sear1.innerHTML) - 1;
    }
}