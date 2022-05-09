function showNum() {
    const userNum = document.getElementById('input-Num').value
    
    const myNumx2 = document.getElementById('my-numx2')
    myNumx2.innerHTML = `El doble de ${userNum} es ${userNum*2}`

    const myNumx3 = document.getElementById('my-numx3')
    myNumx3.innerHTML = `El triple de ${userNum} es ${userNum*3}`
    
}