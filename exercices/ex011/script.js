function calc() {
    var name = prompt('Whats is the student name?')
    var n1 = Number(prompt(`What was ${name} first note?`))
    var n2 = Number(prompt(`Beside ${n1}, what was ${name} second note?`))
    var res = document.querySelector('#res')

    var media = (n1+n2)/2
    var msg 
    if(media >= 6) {
        msg ='Congratulations!!!!'
    } else {
        msg = 'Study more...'
    }

    res.innerHTML = `<p>Calculating the <strong>${name}</strong> final average</p>` 
    res.innerHTML += `<p>The notes were <strong>${n1}</strong> and <strong>${n2}</strong></p>`
    res.innerHTML += `<p>The final media will be <strong>${media}</strong></p>`
    res.innerHTML += `<p>The message we have is: <strong><mark>${msg}</mark></strong></p>`
}