let copy = document.getElementById("copy_password")

copy.addEventListener("click", copyPassword);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function copyPassword() {

    let password = document.getElementById("generated_password");
    navigator.clipboard.writeText(password.innerText)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.log('Error in copying text: ', err);
        });

    copy.innerText = "Copied !";
    sleep(1500).then(r => {
        copy.innerText = "Copy password";
    })
}