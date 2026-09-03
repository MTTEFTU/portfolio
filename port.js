let themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

    }
    else {

        themeBtn.innerHTML = "🌙";

    }

}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();
        alert("Send Successfully");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

});


document.getElementById("footer").innerText = new Date().getFullYear();