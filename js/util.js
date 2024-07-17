
function validate(nameInput, timeInput){

    if(nameInput.value.length<3){
        alert('todo kamida 3 tadan kop bolishi kerak')
        nameInput.focus()
    }
    if(!timeInput.value.length){
        alert('todo time is not defined')
        nameInput.focus()
        return false
    }
    
    
    return true
    }




function getDate(){
    let date=[];
    if(localStorage.getItem('todos')){
        date=JSON.parse(localStorage.getItem('todos'))
    }
    return date
}









    


    

export{validate,getDate,createItem}