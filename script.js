document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById(id='registration-form');
    const feedbackDiv = document.getElementById(id='form-feedback')
    feedbackDiv.style.display="block"
        if(isValid=true){
            feedbackDiv.textContent="Registration successful!"
            feedbackDiv.style.color="#28a745"
        }else{
           feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    // form submission event listener
    form.addEventListener('submit', function(event){
        event.preventDefault();
     })
            // validate username
    const username = document.getElementById('username').value.trim();
    document.getElementById('usernameError');
    if (username.length < 3){
        isValid=false
        messages='Username too short'
        print(messages)
    }
    const email = document.getElementById("email").value.trim()
        if (!email.includes('@') || !email.includes('.')){
            isValid=false;
            messages.push("Email must contain both '@' and '.' characters.")
        }
    const password = document.getElementById("password").value.trim();
        if (password.length <= 8){
            isValid=false
            messages.push("Pasword must be atleast 8 characters")
        }
    let isValid = true;
    let messages = []
})
