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
    number.disabled = !(letter.checked || special.checked);
    // Letter
    letter.disabled = !(number.checked || special.checked);
    // Special
    special.disabled = !(letter.checked || number.checked);
}