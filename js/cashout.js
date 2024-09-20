document.getElementById('btnOut').addEventListener('click', function(event){
    event.preventDefault()

   const  inpAmountOut =  inpValues('inpAmountOut')
   const  inpPinOut=  inpValues('inpPinOut')
   const CurBalance = inpBalance ('CurBalance')

   if(isNaN(inpAmountOut)) {
    alert("Provide Valid Amount")
    return
   }
   if(inpAmountOut > CurBalance){
    alert("Don't have efficient Amount")
    return
   }
   if(inpAmountOut <= 0) {
    alert("you have 0 Taka")
    return
   }

   if(inpPinOut === 12){
    const NewBalance = CurBalance - inpAmountOut
    console.log(NewBalance)
    document.getElementById('CurBalance').innerText = NewBalance


        // !Transition 


        const mainContainer = document.getElementById('container')
        const div = document.createElement('div')
        div.innerHTML = `

        <h1 class="text-start font-bold">CashOUt</h1>
        
        CashOut: ${inpAmountOut} Taka, New Balance ${NewBalance} Taka.`
        div.classList.add("border-2")
        div.classList.add("bg-error")
        div.classList.add("p-1")
        div.classList.add("pt-2")
        div.classList.add("text-white")

        mainContainer.appendChild(div)
        
        //!Transition end





   }
   else{
    alert("Invalid")
   }

})
