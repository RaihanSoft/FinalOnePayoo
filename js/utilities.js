function inpValues (id){
    const inpNumber = document.getElementById(id).value
    return Number(inpNumber); 
}

// second time for CurBalance

function inpBalance (id){
    const CurBalance =  document.getElementById(id).innerText
    return Number(CurBalance)

}

// for trogel 

function FinalShow(id){
document.getElementById('add').classList.add('hidden')

document.getElementById('out').classList.add('hidden')

document.getElementById('container').classList.add('hidden')

document.getElementById(id).classList.remove('hidden')




}