var ques = ['Q1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis unde optio tempora esse commodi! Beatae quas eum dicta', 'Q2. velit dolores ipsa libero? Ab accusantium labore, voluptate quam, beatae cum laudantium asperiores omnis ipsam facere voluptates', 'Q3. atque reprehenderit tenetur impedit, voluptatem quisquam illum sapiente! Nulla minus obcaecati quo', 'Q4. reiciendis sapiente tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi accusamus inventore repellendus blanditiis fugiat minima cupiditate voluptatum doloremque voluptatibus ipsa quis, illum rerum explicabo', 'Q5. ex dolor ea velit commodi ab officia alias vero saepe, laborum expedita? Harum, odit sunt. Recusandae enim doloribus nemo nihil officia modi voluptates debitis sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veritatis nam corrupti repellendus hic laborum dolorum, delectus facilis deleniti architecto, labore quibusdam', 'Q6.provident quam odio, consequuntur omnis. Quibusdam mollitia ipsa distinctio numquam consequuntur nobis accusantium', 'Q7. sint, excepturi, cupiditate sit officia, natus magnam qui rerum sunt quaerat error tempora architecto. Dignissimos perspiciatis voluptates numquam consectetur ipsa minima beatae asperiores harum cupiditate facilis velit quia quam earum dolorem maxime reiciendis, nesciunt alias accusamus laudantium atque est, adipisci aliquam. Blanditiis, deserunt dolorum? Esse impedit fugit nihil quae sunt vitae porro voluptatibus perspiciatis inventore modi error ex ea', 'Q8. magnam excepturi tempora numquam, possimus ab at beatae? Tempore natus fugit quam exercitationem adipisci voluptatem. Vel officia deserunt voluptatum eveniet corrupti unde minima eligendi magnam. Perferendis cumque, molestias beatae inventore rerum tempora dignissimos provident assumenda officiis officia consectetur, eius adipisci', 'Q9. ullam quaerat eum! Ut, et cumque! Molestias quis odio voluptates dicta quod mollitia dolor, nihil rem, maxime, voluptate nemo! Magnam ullam quidem doloremque, recusandae rerum id in reiciendis voluptas natus veritatis tempore hic suscipit commodi architecto obcaecati. Reprehenderit error corporis nesciunt eligendi iusto, natus earum. Vitae alias dolor earum quos illum, blanditiis sed eaque placeat soluta aliquid mollitia architecto reiciendis', 'Q10. sapiente? Doloremque praesentium magnam quis a magni nostrum corrupti consectetur aperiam doloribus neque explicabo quam, placeat maiores tenetur voluptatibus vel mollitia vero facere nam quae reprehenderit. Atque nisi sapiente eius animi tempora non sint adipisci pariatur? Saepe quisquam quas eos esse facere eligendi at corporis error magni cupiditate, eius sed corrupti amet provident. Perferendis, id nesciunt.'];
var opt = [
    ["Q1. option1", "Q1. option2", "Q1. option3", "Q1. option4"],
    ["Q2. option1", "Q2. option2", "Q2. option3", "Q2. option4"],
    ["Q3. option1", "Q3. option2", "Q3. option3", "Q3. option4"],
    ["Q4. option1", "Q4. option2", "Q4. option3", "Q4. option4"],
    ["Q5. option1", "Q5. option2", "Q5. option3", "Q5. option4"],
    ["Q6. option1", "Q6. option2", "Q6. option3", "Q6. option4"],
    ["Q7. option1", "Q7. option2", "Q7. option3", "Q7. option4"],
    ["Q8. option1", "Q8. option2", "Q8. option3", "Q8. option4"],
    ["Q9. option1", "Q9. option2", "Q9. option3", "Q9. option4"],
    ["Q10. option1", "Q10. option2", "Q10. option3", "Q10. option4"],
]
var i = 0;
var saved = ['', '', '', '', '', '', '', '', '', '']
var next = document.querySelectorAll('.next');
var pre = document.querySelectorAll('.previous');
var options = document.querySelectorAll(".option");
document.querySelector(".question").innerHTML = ques[i];
document.querySelector("#opt-1").innerHTML = opt[i][0];
document.querySelector("#opt-2").innerHTML = opt[i][1];
document.querySelector("#opt-3").innerHTML = opt[i][2];
document.querySelector("#opt-4").innerHTML = opt[i][3];

next.forEach(click => {
    click.addEventListener('click', () => {
        if (i < ques.length - 1) {
            if (saved[i] != '') {
                document.getElementById(saved[i]).classList.toggle('chck');
            }
            i += 1;
            if (saved[i] != '') {
                document.getElementById(saved[i]).classList.toggle('chck');
            }
            document.querySelector(".question").innerHTML = ques[i];
            document.querySelector("#opt-1").innerHTML = opt[i][0];
            document.querySelector("#opt-2").innerHTML = opt[i][1];
            document.querySelector("#opt-3").innerHTML = opt[i][2];
            document.querySelector("#opt-4").innerHTML = opt[i][3];
            if (i == ques.length - 1) {
                document.querySelector('.next').innerHTML = "Submit";
            }
        } else {
            alert("your responses are successfully submitted");
            window.location.reload();
        }
    })
});
pre.forEach(click => {
    click.addEventListener('click', () => {
        if (i > 0) {
            if (saved[i] != '') {
                document.getElementById(saved[i]).classList.toggle('chck');
            }
            i -= 1;
            if (saved[i] != '') {
                document.getElementById(saved[i]).classList.toggle('chck');
            }
            document.querySelector(".question").innerHTML = ques[i];
            document.querySelector("#opt-1").innerHTML = opt[i][0];
            document.querySelector("#opt-2").innerHTML = opt[i][1];
            document.querySelector("#opt-3").innerHTML = opt[i][2];
            document.querySelector("#opt-4").innerHTML = opt[i][3];
        }
    })
});
options.forEach(option => {
    option.addEventListener('click', () => {
        if (option.querySelector('.circle').id != saved[i]) {
            if (saved[i] != '') {
                document.getElementById(saved[i]).classList.toggle('chck');
                option.querySelector('.circle').classList.toggle('chck');
            } else {
                option.querySelector('.circle').classList.toggle('chck');
            }
            saved[i] = option.querySelector('.circle').id;
            console.log(saved)
        } else {
            saved[i] = '';
            option.querySelector('.circle').classList.toggle('chck');
        }
    })
});