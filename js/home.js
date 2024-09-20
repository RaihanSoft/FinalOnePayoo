document.getElementById('btnAdd').addEventListener('click', function (event) {
    event.preventDefault()

    const inpAmountAdd = inpValues('inpAmountAdd')
    const inpPinAdd = inpValues('inpPinAdd')
    const CurBalance = inpBalance('CurBalance')

    if(isNaN(inpAmountAdd)){
        alert("Invalid money input")
        return

    }
    if(inpAmountAdd < 0){
        alert("Error")
        return
    }


    if (inpPinAdd === 12) {

        NewBalance = CurBalance + inpAmountAdd
        document.getElementById('CurBalance').innerText = NewBalance


        // ! transiton start 

        const mainContainer = document.getElementById('container')
        const div = document.createElement('p')

        div.innerHTML = `
        <h1 class ="font-bold text-start">CashIn</h1>
        
        
        Add: ${inpAmountAdd} Taka, New Balance ${NewBalance} Taka.`
        div.classList.add("border-2")
        div.classList.add("bg-success")
        div.classList.add("pt-2")
        div.classList.add("p-1")
        div.classList.add("text-white")

        mainContainer.appendChild(div)


        // ! transiton end

    }
    else {
        alert('Invalid Pin')
    }
})
