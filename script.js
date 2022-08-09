let cardtwo = document.querySelector('.second-card');
let cardone = document.querySelector('.first-card');
let cardno = document.querySelector('.card-number');
let namee = document.querySelector('.name');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let cvv = document.querySelector('.cvv');
let form = document.forms.form;
let iname = form.name;
let icardno =form.number;
let mm = form.mm;
let yy = form.yy;
let cvc = form.cvc;
let state = document.querySelector('.state2')
let btn = document.querySelector('.btn')

let inputs = document.querySelectorAll('input');

let patterns = {
    cardname : /^[a-zA-Z]+[ ][a-zA-Z]+$/,
    cardno : /^[0-9]{16}$/,
    mm : /^[0-9]{2}$/,
    yy : /^[2-9]{2}$/,
    cvc : /^[0-9]{3}$/
}


function validate(field,regex){
  if(regex.test(field.value)){
    field.className = 'valid';
  }else{
    field.className = 'invalid';
  }
}

inputs.forEach(function(each){
    each.addEventListener('keyup',(e)=>{
      validate(each,patterns[each.name]);
      if(each.value === ''){
        each.parentElement.querySelector('.message').textContent = 'Field cant be empty!';

      }else{
        each.parentElement.querySelector('.message').textContent = 'Wrong format!'
      }
     
    })
})

icardno.addEventListener('keyup',function(e){
  
    if(icardno.value === ''){
      
      cardno.textContent= '0000 0000 0000 0000';
    }else{
      cardno.textContent = icardno.value;}
})

iname.addEventListener('keyup',function(e){
  
         if(iname.value === ''){
      
          namee.textContent= 'jane appleseed';
        }else{
          namee.textContent = iname.value;}
})

cvc.addEventListener('keyup',function(e){

  if(cvc.value === ''){
      
    cvv.textContent= '000';
  }else{

    cvv.textContent = cvc.value;}
})
mm.addEventListener('keyup',function(e){
  if(mm.value === ''){
      
    month.textContent = "00";
  }else{
    month.textContent = mm.value;}
})

yy.addEventListener('keyup',function(e){

  if(yy.value === ''){
      
    year.textContent ='00';
  }else{
    year.textContent = yy.value;}
})

form.onsubmit = function(){
    form.style.display = 'none';
    state.style.display = 'flex';
}


btn.onclick = function(){
    form.style.display = 'block';
    state.style.display = 'none';
}




 