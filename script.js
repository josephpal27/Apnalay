document.getElementById('mySelect').addEventListener('change', function() {
    if (this.value) {
        this.style.color = '#000';  // Change color after selecting an option
    } else {
        this.style.color = '#bab9b9';  // Retain red color if no option is selected
    }
});
