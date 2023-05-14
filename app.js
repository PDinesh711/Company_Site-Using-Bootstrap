// function lngin(){
//     let  username = document.getElementById('user_name').value;
//  let  pwd = document.getElementById('pass_word').value;
//  if(username==="Dinesh711" && pwd==="2019Pitme116@"){
      
//  }
//  else if(username==="" && pwd===""){
//     document.getElementById('text').style.color="red"
//     document.getElementById('text').innerHTML="Empty Input !.. Check it"
//  }
//  else{
//     document.getElementById('text').style.color="red"
//     document.getElementById('text').innerHTML="S0me Went Wr0ng !.."
//  }
// }

function e1delete(){
   document.getElementById('e1sn').innerHTML=''
   document.getElementById('e1id').innerHTML=''
   document.getElementById('e1name').innerHTML=''
   document.getElementById('e1emailid').innerHTML=''
}
function e2delete(){
   document.getElementById('e2sn').innerHTML=''
   document.getElementById('e2id').innerHTML=''
   document.getElementById('e2name').innerHTML=''
   document.getElementById('e2emailid').innerHTML=''
}
function e3delete(){
   document.getElementById('e3sn').innerHTML=''
   document.getElementById('e3id').innerHTML=''
   document.getElementById('e3name').innerHTML=''
   document.getElementById('e3emailid').innerHTML=''
}
function j1delete(){
   document.getElementById('j1name').innerHTML=''
}
function j2delete(){
   document.getElementById('j2name').innerHTML=''
}
function j3delete(){
   document.getElementById('j3name').innerHTML=''
}
document.getElementById('lbtn').style.display='none'
document.getElementById('user_name').value;

function enter(){
   let username =document.getElementById('user_name').value;
   localStorage.setItem('username',username);
   let password = document.getElementById('pass_word').value;
   if(username==="Dinesh711" && password==="2019Pitme116@"){
      document.getElementById('lbtn').style.display='block'
      document.getElementById('invalid').style.display='none'
   }
   else{
      document.getElementById('lbtn').style.display='none'
      document.getElementById('invalid').innerHTML="Invalid Inputs"
      document.getElementById('invalid').style.color='red'
   }
  
}
// function dk(){
//    // let uin=document.getElementById('input').value;
// document.getElementById('user').innerHTML=
// }
document.getElementById('user').innerHTML=localStorage.getItem('username')