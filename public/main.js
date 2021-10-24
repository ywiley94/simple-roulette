
let userinput = ''
let pcChoice = ''
document.querySelector('#black').addEventListener('click', black)
document.querySelector('#red').addEventListener('click', red)
document.querySelector('#green').addEventListener('click', green)



function black() {
    userinput = 'black'
    calculateWinner()
    

}
function red() {
    userinput = 'red'
    calculateWinner()
}
function green() {
    userinput = 'green'
    calculateWinner()
}
function calculateWinner() {
    let betAmount = document.querySelector('#betAmount').value
    let result
    let pcChoiceArray = ['black', 'red', 'green']
    const choice = Math.floor(Math.random() * 3)
    pcChoice = pcChoiceArray[choice]

    if (pcChoice === 'black' && userinput === 'black' || pcChoice === 'red' && userinput === 'red' || pcChoice === 'green' && userinput === 'green') {
        document.querySelector('#outcome').innerText = `You Win! You picked ${userinput} and the roulette landed on ${pcChoice}`
        result = true
    } else {
        document.querySelector('#outcome').innerText = `You LOSE. You picked ${userinput} and the roulette landed on ${pcChoice}`
        result = false
    }
    console.log(result)
    console.log(betAmount)
   

    fetch('sendbet', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            'userInput': userinput, 
            'result': result,
            'betAmount': betAmount,
          },
        )
    }).then(response => {
        if (response.ok) 
            return response.json()
        
    }).then(data => {
        console.log(data)
        // window.location.reload(true)
    })
}


