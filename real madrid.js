var entry = document.getElementById("enter");
enter.addEventListener("click",displaydetails);
var row=1;

function displaydetails(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var sex = document.getElementById("sex").value;
    var phone number = document.getElementById("phone number").value;
    var check = document.getElementById("check").checked;

    if(!fname || !lname || !email || !sex || !phone number){
        alert("please enter values");
        return;
    }
    if(check!=true){
        alert("I Agree to The Terms and Conditions");
        return;
    }
    console.log(sex)
    var display = document.getElementById("display");

    var newrow = display.insertRow(row);

    var cell1 = newrow.insertCell(0);

    var cell2 = newrow.insertCell(1);

    var cell3 = newrow.insertCell(2);

    var cell4 = newrow.insertCell(3);

    var cell5 = newrow.insertCell(4);



    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = email;
    cell4.innerHTML = sex;
    cell5.innerHTML = phone number;
    

    row++;
}