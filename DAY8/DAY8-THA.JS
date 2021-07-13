function fnc(box) {
    if (box.classList.contains("box")) {
        box.classList.remove("box");
        box.classList.add("boxclicked");
    } else {
        box.classList.remove("boxclicked");
        box.classList.add("box");
    }
}