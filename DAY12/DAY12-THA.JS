function addin() {
    var note = prompt("Please Enter Your Note Here", "Demo Note");
    if (note != '') {
        var divi = document.createElement("div");
        var btn1 = document.createElement('div');
        var btn2 = document.createElement('div');
        var para = document.createElement("p");
        var but = document.createElement("button");
        divi.classList.add('note');
        btn2.innerHTML = '&#x2718; Delete';
        btn1.innerHTML = '&#x2714; Done';
        btn1.classList = "btn";
        btn2.classList = "btn";
        btn1.id = "tick";
        btn2.id = "delete";
        btn1.addEventListener('click', () => {
            if (para.hasAttribute('done')) {
                para.classList.toggle('done');
            } else {
                para.classList.toggle('done');
            }
        });
        btn2.addEventListener('click', () => {
            divi.setAttribute('style', 'display:none')
        });
        var node = document.createTextNode(note);
        para.appendChild(node);
        divi.appendChild(para);
        divi.appendChild(btn1);
        divi.appendChild(btn2);
        var ele = document.getElementById("notes");
        ele.appendChild(divi);
    }
}