const zxcvbn = require('zxcvbn')

function checkStrength(password) {
    let strength = zxcvbn(password)

    if (strength.score === 0) {
        document.body.style.backgroundColor = "#cc1e1e";
    }
    if (strength.score === 1) {
        document.body.style.backgroundColor = "#d0374e";
    }
    if (strength.score === 2) {
        document.body.style.backgroundColor = "#bf4f3a";
    }
    if (strength.score === 3) {
        document.body.style.backgroundColor = "#bf903a";
    }
    if (strength.score === 4) {
        document.body.style.backgroundColor = "#1D815BFF";
    }
}