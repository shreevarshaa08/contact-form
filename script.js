const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const course = document.querySelector('input[name="course"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById("country").value;

    if (!name || !email || !message || !course || !gender || !country) {
        result.textContent = "Please fill in all fields.";
        return;
    }

    result.textContent = "Form submitted successfully!";
    form.reset();
});
