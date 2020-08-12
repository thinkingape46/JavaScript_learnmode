document.addEventListener("click", function(e) {
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("Please enter the new name of the task", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post('/update-item', {text: userInput, id: e.target.getAttribute("data-id")}).then(function() {
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            }).catch(function() {
                console.log("Please try again later.")
            });
        }
    }
})