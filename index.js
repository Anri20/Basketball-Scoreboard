function scoreUpdater(containerId) {
    const container = document.getElementById(containerId)
    const btnContainer = container.querySelector(".btn-container")

    btnContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            const value = parseInt(e.target.textContent)
            const scoreBoard = container.querySelector("span.score")
            const currentScore = parseInt(scoreBoard.textContent)
            scoreBoard.textContent = currentScore +  value
        }
    })
}


scoreUpdater("home")
scoreUpdater("guest")