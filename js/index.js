document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault()

   const inpNumber =  inpValues ('inpNumber')
   const inpPin =  inpValues ('inpPin')
   
   if(inpPin === 12 && inpNumber === 12){
    window.location.href = 'home.html'



   }
   else{
    alert('Invalid Number or Pin')
    
}


})