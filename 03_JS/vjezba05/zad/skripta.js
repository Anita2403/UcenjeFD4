const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('clik',()=>{
    rezultat.innerHTML=''
    
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak'), value

    if (zadatak === '1'){
        // počinje 1- zadatak

        if (!aString){
            rezultat.innerHTML='Unesite vrijednost A'
            rezultat.style.color='red' 
            return
        }

        const a = Number(aString)

        if(!a){
            rezultat.innerHTML='A moje broj'
            rezultat.style.color='red'
            return
        }

        if(!bString){
            rezultat.innerHTML='Unesite vrijednost B'
            rezultat.style.color='red'
            return
        }

        const b = Number(bString)

        if(!bString){
            rezultat.innerHTML='B nije broj'
            rezultat.style.color='red'
            return
        }



        // završava 1. zadatak
    }

   //rezultat.innerHTML = a > b ? a : b
   if(a===n){
    rezultat.innerHTML='Jednaki su'
   }else if (a>b){
    rezultat.innerHTML = a
   } else{
    rezultat.innerHTML = b
   }
    rezultat.style.color='green'
})

