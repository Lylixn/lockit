const zxcvbn = require('zxcvbn')

function checkStrength(password) {
    let strength = zxcvbn(password)

    if (strength.crack_times_seconds.offline_fast_hashing_1e10_per_second > 0) {
        document.body.style.backgroundColor = "#cc1e1e";
    }
    if (strength.crack_times_seconds.offline_fast_hashing_1e10_per_second > 0.2) {
        document.body.style.backgroundColor = "#d0374e";
    }
    if (strength.crack_times_seconds.offline_fast_hashing_1e10_per_second > 100 ) {
        document.body.style.backgroundColor = "#bf4f3a";
    }
    if (strength.crack_times_seconds.offline_fast_hashing_1e10_per_second > 30000 ) {
        document.body.style.backgroundColor = "#bf903a";
    }
    if (strength.crack_times_seconds.offline_fast_hashing_1e10_per_second > 1000000) {
        document.body.style.backgroundColor = "#1D815BFF";
    }
}