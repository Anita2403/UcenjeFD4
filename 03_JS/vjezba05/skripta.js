const uvjet = false

if(uvjet){
    console.log('uvjet je true')
}

if(uvjet===true){
    console.log('ne, ne i ne')
}

if(uvjet)
    console.log('uvjet je true')
//console.log('i ovo želim ispisati kada je uvjet je true')

if(uvjet){
    console.log('dobro je')
    
}else{
    console.log('nije dobro')
}

const ocjena = 3

if(ocjena===1){
    console.log('Nedovoljan')
}else if(ocjena===2){
    console.log('Dovoljan')
}else if(ocjena===3){
    console.log('Dobar')
}else if(ocjena===4){
    console.log('Vrlo dobar')
}else if(ocjena===5){
    console.log('Odličan')
}

else{
    console.log('Broj nije ocjena')
}
   if(ocjena>=1 && ocjena<5){
    console.log('Ocjena je valjana')
   } 

   if(ocjena<1 || ocjena>5){
    console.log('Ocjena nije valjana')
   }

    if(!(ocjena<1 || ocjena>5)){
    console.log('Ocjena je valjana na drugi način')
   }

    if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
   }else{
    console.log('Nije ocjena')
   }

   console.log(ocjena>=1 && ocjena<=5 ? 'ocjena je valjana inline' : 'nije ocjena inline')

const ime=''

if(!ime){//if(ime===''){
    console.log('Ime nema vrijednost')
}

const b = Number('aaaa')
console.log(b)
if(!b){
    console.log('Niste unijeli broj')
}
 const x = 12

 if(x){
    console.log('Punoljetan je')
 }