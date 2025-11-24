const nameInput = document.getElementById('name')
const dobInput = document.getElementById('dob')
const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = new Date(dobInput.value);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth;

    // Adjust if birthday hasn't ocurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age >= 18 ) {
        localStorage.setItem("username", nameInput.value);
        localStorage.setItem("dob", dobInput.value);

        alert('You can access adult content');
        window.location.href = "welcome.html";
    } else {
        alert('You are too young for adult content!');
    }
        
});