const questions2 = document.querySelectorAll(".question-toggle");

questions2.forEach((question) => {
    question.addEventListener("click", () => {
        if( !question.parentNode.classList.contains("active")) {
            question.parentNode.classList.add("active")
        } else {
            question.parentNode.classList.remove("active")
        }
    })
})





