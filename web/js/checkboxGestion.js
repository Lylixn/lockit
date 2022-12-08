number.addEventListener("change", function() {
    checkboxGestion();
});
letter.addEventListener("change", function() {
    checkboxGestion();
});
special.addEventListener("change", function() {
    checkboxGestion();
});

function checkboxGestion() {
    // Number
    if (!(letter.checked || special.checked)) {
        number.disabled = true;
    } else {
        number.disabled = false;
    }
    // Letter
    if (!(number.checked || special.checked)) {
        letter.disabled = true;
    } else {
        letter.disabled = false;
    }
    // Special
    if (!(letter.checked || number.checked)) {
        special.disabled = true;
    } else {
        special.disabled = false;
    }
}