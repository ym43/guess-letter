// html
document.title = "Guess Letter Game"
let body = document.querySelector("body")
let button = document.createElement("button")
document.body.append(button)

// Css
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.flexDirection = "column"
body.style.height = "100vh"

button.style.padding = "20px 30px 20px 30px"
button.style.border = "none"
button.style.borderRadius = "5px"
button.style.backgroundColor = "transparent"
button.style.fontSize = "40px"
button.style.fontWeight = "900"
button.style.fontFamily = "cursive"
button.style.color = "Blue"

// javascript
button.textContent = "Guess"
button.addEventListener("click",() => {
    let attempts = 5;
    while (attempts > 0){
        attempts--;
        let window = prompt("Enter The Guess Number\nMust be Letter")
        let alphapet = "abdefghijklmnopqrstuvwxyz"
        let random = Math.floor(Math.random() * 26) + 1
        let replace = alphapet.charAt(random)
        console.log(replace)
        console.log("-------------------------")
        if (window === replace){
            button.innerHTML = `You Won By Guessing The Letter ${replace}`
            setInterval(() => {location.reload()},2000)
            break
        }
        if (window !== replace && attempts < 1){
            button.innerHTML = `You Lose,The Letter: \n${replace}`
        }
    }
})