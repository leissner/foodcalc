

let foodcost
let calories
let newCal
let calorieLevel = 2200
let proteinLevel = 100


function customize(){
 
   newCal = prompt("How many calories do you eat per day ?")
   
   if (isNaN(newCal) || newCal == "" || newCal == null) {
     
    customize()

     
   } else {
  
   calorieLevel = newCal
   document.getElementById('calnum').innerHTML = ` <i class="far fa-edit"></i> ${calorieLevel} Calories</span>`
   
   }
}

function customize2(){
 
   newPro = prompt("Enter Daily Grams of Protein")
   
   if (isNaN(newPro) || newPro == "" || newPro == null) {
     
    customize()

     
   } else {
  
   proteinLevel = newPro
   document.getElementById('calnumProtein').innerHTML = ` <i class="far fa-edit"></i> ${proteinLevel}g Protein </span>`
   
   }
}


function findCPD() {
  
    foodcost = document.getElementById('cost').value
    calories = document.getElementById('calories').value
    protein  = document.getElementById('protein').value

    
    
    
    let cpd = (foodcost / calories) * calorieLevel
    let cpw = cpd * 7
    let cpy = cpw * 52
    let cpm = cpy / 12
    
    let cpp = foodcost / protein
        console.log(cpp)
    
    let cppDay = cpp * proteinLevel
        console.log(cppDay)
    
    let cppWeek = cppDay * 7
        console.log(cppWeek)
    
    let cppYear = cppWeek * 52
        console.log(cppYear)
    
    let cppMonth = cppYear / 12
        console.log(cppMonth)
    
    
    
 
    
     if (foodcost != '' && calories != '') {
            
            document.getElementById('cpd').innerHTML = `$${cpd.toFixed(2)}`
            document.getElementById('cpw').innerHTML = `$${cpw.toFixed(2)}`
            document.getElementById('cpm').innerHTML = `$${cpm.toFixed(2)}`
            document.getElementById('cpy').innerHTML = `$${cpy.toFixed(2)}`
                    
            document.getElementById('cppDay').innerHTML = `$${cppDay.toFixed(2)}`
            document.getElementById('cppWeek').innerHTML = `$${cppWeek.toFixed(2)}`
            document.getElementById('cppMonth').innerHTML = `$${cppMonth.toFixed(2)}`
            document.getElementById('cppYear').innerHTML = `$${cppYear.toFixed(2)}`
                    
            document.getElementById('proteinCost').innerHTML = `${proteinLevel}g protein`
            document.getElementById('calorieCost').innerHTML = `${calorieLevel} calories`
    
    
                    
            document.getElementById('answer').style.display = 'block'
            document.getElementById('help').style.display = 'none'

    
          }
           
           else {
             
             alert('Error: You MUST enter Unit Price and Number of Calories')
             
           }
    
    document.getElementById('cost').value = ""
    document.getElementById('calories').value = ""
    document.getElementById('protein').value = ""
    window.scrollTop=0
    scroll(0,0)

}






function mcdoublePopulate() {
  
  if (selected.value == '1') {
  
    document.getElementById('cost').value = 1.59
    document.getElementById('calories').value = 375
    document.getElementById('protein').value = 22
    document.getElementById('selectedValue').innerHTML = "McDouble"

  
  selected.value = "0"

  } else if (selected.value == '2') {
  
    document.getElementById('cost').value = 1.45
    document.getElementById('calories').value = 3200
    document.getElementById('protein').value = 60
    document.getElementById('selectedValue').innerHTML = "Jasmine Rice"


  selected.value = '0'

  } else if (selected.value == '3') {
    
    document.getElementById('cost').value = 5
    document.getElementById('calories').value = 1134
    document.getElementById('protein').value = 121
    document.getElementById('selectedValue').innerHTML = "Ribeye Steak"

  
    selected.value = '0'
    
  

  } else if (selected.value == '4') {
    
    document.getElementById('cost').value = 2.50
    document.getElementById('calories').value = 2712
    document.getElementById('protein').value = 100.7
    document.getElementById('selectedValue').innerHTML = "Peanut Butter"

    
    selected.value = '0'
    
  } else if (selected.value == '6') {
    
    
    document.getElementById('cost').value = 2.50
    document.getElementById('calories').value = 2360
    document.getElementById('protein').value = 118
    document.getElementById('selectedValue').innerHTML = "Reduced Fat Peanut Butter"
    
    selected.value = '0'

    
    
  } else if (selected.value == '5') {
    
    document.getElementById('cost').value = 1.29
    document.getElementById('calories').value = 354
    document.getElementById('protein').value = 14.6
    document.getElementById('selectedValue').innerHTML = "McChicken"
        
    selected.value = '0'

  }
  
  
}



    
    
    var inputs = document.getElementById("calories")
    
    inputs.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();

      
      }
    })
    

