function scoreUpdater(containerId) {
    const container = document.getElementById(containerId)
    const btnContainer = container.querySelector(".btn-container")

    btnContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            const value = parseInt(e.target.textContent)
            const scoreBoard = container.querySelector("span.score")
            const currentScore = parseInt(scoreBoard.textContent)
            scoreBoard.textContent = currentScore + value
        }

        const homeScore = document.getElementById("home").querySelector("span.score")
        const guestScore = document.getElementById("guest").querySelector("span.score")

        if (parseInt(homeScore.textContent) === parseInt(guestScore.textContent)) {
            document.getElementById("home").querySelector("h3").classList.remove("highlight")
            document.getElementById("guest").querySelector("h3").classList.remove("highlight")
        } else if (parseInt(homeScore.textContent) > parseInt(guestScore.textContent)) {
            document.getElementById("guest").querySelector("h3").classList.remove("highlight")
            document.getElementById("home").querySelector("h3").classList.add("highlight")
        } else if (parseInt(homeScore.textContent) < parseInt(guestScore.textContent)) {
            document.getElementById("home").querySelector("h3").classList.remove("highlight")
            document.getElementById("guest").querySelector("h3").classList.add("highlight")
        }
    })
}

scoreUpdater("home")
scoreUpdater("guest")


const period = document.querySelector("button.period")

const btnNewGame = document.querySelector("button#new-game")

btnNewGame.addEventListener("click", function () {
    const homeScore = document.getElementById("home").querySelector("span.score")
    const guestScore = document.getElementById("guest").querySelector("span.score")

    period.textContent = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
    document.getElementById("home").querySelector("h3").classList.remove("highlight")
    document.getElementById("guest").querySelector("h3").classList.remove("highlight")
})

period.addEventListener("click", function() {
    const currentPeriod = parseInt(period.textContent)
    period.textContent = currentPeriod + 1
})