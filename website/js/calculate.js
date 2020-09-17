
function calculate(){
    var F1 = document.getElementById('FF1').value;
    var F2 = document.getElementById('FF2').value;
    var F3 = document.getElementById('FF3').value;
    var F4 = document.getElementById('FF4').value;
    var F5 = document.getElementById('FF5').value;
    var F6 = document.getElementById('FF6').value;
   
    document.getElementById('totalcalo').innerHTML = (Number(F1)+Number(F2)+Number(F3)+Number(F4)+Number(F5)+Number(F6))+" calo";
  }