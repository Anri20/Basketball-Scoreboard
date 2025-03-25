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

const btnStart = document.querySelector("button#start")
const btnNewGame = document.querySelector("button#new-game")

const time1 = document.querySelector("input#time1")
const time2 = document.querySelector("input#time2")
let countdown

period.addEventListener("click", function () {
    const currentPeriod = parseInt(period.textContent)
    period.textContent = currentPeriod + 1
})

btnStart.addEventListener("click", function () {
    let time = (time1.value * 60) + (time2.value * 1)
    console.log(time)

    countdown = setInterval(() => {
        time--

        const minutes = Math.floor(time / 60)
        const seconds = time % 60

        time1.value = minutes <= 9 ? "0" + minutes : minutes
        time2.value = seconds <= 9 ? "0" + seconds : seconds

        if (time <= 0) {
            clearInterval(countdown)
            time1.value = "00"
            time2.value = "00"

            setTimeout(() => {
                alert("GAME FINISHED!!!");
            }, 50);
        }
    }, 1000)
})

btnNewGame.addEventListener("click", function () {
    clearInterval(countdown)
    time1.value = "00"
    time2.value = "00"

    const homeScore = document.getElementById("home").querySelector("span.score")
    const guestScore = document.getElementById("guest").querySelector("span.score")
    homeScore.textContent = 0
    guestScore.textContent = 0

    document.getElementById("home").querySelector("h3").classList.remove("highlight")
    document.getElementById("guest").querySelector("h3").classList.remove("highlight")

    period.textContent = 0
})