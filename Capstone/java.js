function validateForm() { 
  var z = document.forms["myForm"]["phonenumber"].value;
  var a=z.toString().length;
  if (a <10 || a>10) {
    alert("Phonenumber must be of 10 digits");
    return false;
  }

  
  alert("Your Form Was Submitted Successfully");
}