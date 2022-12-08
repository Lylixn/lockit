document.getElementById("copy_password").addEventListener("click", copyPassword);

function copyPassword() {

    let password = document.getElementById("generated_password");
    navigator.clipboard.writeText(password.innerText)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.log('Error in copying text: ', err);
        });
    
}