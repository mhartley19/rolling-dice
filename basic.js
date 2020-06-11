let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]




function rollingdice(rolls){
    
    for (i=1; i<=rolls; i++){
        let x = Math.floor(Math.random()*6 + 1) + 
        Math.floor(Math.random()*6 + 1);
        count[x] = count[x] + 1
        
    }
    return count
}

y = rollingdice(100)



let two = document.getElementById('two')
let three = document.getElementById('three')
let four= document.getElementById('four')
let five= document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let ten = document.getElementById('ten')
let eleven = document.getElementById('eleven')
let twelve = document.getElementById('twelve')
let resultof2 = document.createTextNode(" " + count[2])
let resultof3 = document.createTextNode(" " + count[3])
let resultof4 = document.createTextNode(" " + count[4])
let resultof5 = document.createTextNode(" " + count[5])
let resultof6 = document.createTextNode(" " + count[6])
let resultof7 = document.createTextNode(" " + count[7])
let resultof8 = document.createTextNode(" " + count[8])
let resultof9 = document.createTextNode(" " + count[9])
let resultof10 = document.createTextNode(" " + count[10])
let resultof11 = document.createTextNode(" " + count[11])
let resultof12 = document.createTextNode(" " + count[12])


two.appendChild(resultof2)
three.appendChild(resultof3)
four.appendChild(resultof4)
five.appendChild(resultof5)
six.appendChild(resultof6)
seven.appendChild(resultof7)
eight.appendChild(resultof8)
nine.appendChild(resultof9)
ten.appendChild(resultof10)
eleven.appendChild(resultof11)
twelve.appendChild(resultof12)


