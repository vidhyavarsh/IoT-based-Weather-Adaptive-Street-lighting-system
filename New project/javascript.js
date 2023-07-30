function vfun(){
  var uname=document.forms["myform"]["uname"].value;
  var upswd=document.forms["myform"]["upswd"].value;  
  if (uname.trim() === '' ||upswd.trim() === '') {
    errorBox.textContent = 'Please fill in both fields.';
    return false;
  }
   else {
    errorBox.textContent = '';
    window.location.href = 'topics.html';
    return false; 
  }
}
  function vfun1(){
    var uname1=document.forms["myform2"]["uname1"].value;
    var upswd1=document.forms["myform2"]["upswd1"].value;
    var upswd2=document.forms["myform2"]["upswd2"].value;
if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the user name";
         return false;
}
if(upswd1==null || upswd1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}
if(upswd2==null || upswd2==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;}
if(upswd1 != upswd2){
          document.getElementById("errorBox").innerHTML =
           "password dont match";
         return false;}
         else {
          errorBox.textContent = '';
          window.location.href = 'index.html';
          return false; 
        }
}
function registerUser(){
  var fName=document.getElementById('fname').value;
  localStorage.setItem('FirstName',fName);
  var lName=document.getElementById('lname').value;
  localStorage.setItem('LastName',lName);
  var age=document.getElementById('age').value;
  localStorage.setItem('Age',age);
  var phoneNo=document.getElementById('phno').value;
  localStorage.setItem('Phone Number',phoneNo);
  var email=document.getElementById('email').value;
  localStorage.setItem('Email',email);
  if (fName.trim() === '' && lName.trim() === ''&& age.trim()===''&& phoneNo.trim()===''&&Email.trim()==='') {
    errorBox.textContent = 'Please fill in all fields.';
    return false;
  }
   else {
    errorBox.textContent = '';
    window.location.href = 'register.html';
    return false;
            }
        }   
function refreshPage() {
  window.location.reload();
}
    


    