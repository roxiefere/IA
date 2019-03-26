function addShirt(){
    var shirts = document.getElementById("shirts").cloneNode(true);
    document.getElementById("newShirts").appendChild(shirts);
}
function addPant(){
    var pants = document.getElementById("pants").cloneNode(true);
    document.getElementById("newPants").appendChild(pants);
}
function addOther(){
    var others = document.getElementById("others").cloneNode(true);
    document.getElementById("newOthers").appendChild(others);
}
function makeOutfits() {
    var shirtT = parseInt(document.getElementById("ShirtType").value);
    var shirtC = parseInt(document.getElementById("ShirtColor").value);
    var shirtP = parseInt(document.getElementById("ShirtPattern").value);
    var pantT = parseInt(document.getElementById("PantType").value);
    var pantC = parseInt(document.getElementById("PantColor").value);
    var pantP = parseInt(document.getElementById("PantPattern").value);
    var otherT = parseInt(document.getElementById("OtherType").value);
    var otherC = parseInt(document.getElementById("OtherColor").value);
    var otherP = parseInt(document.getElementById("OtherPattern").value);
   //similar shirt types
    if(shirtT == 1 || 5 || 6){
        shirtT == 1000;
    }
    if(shirtT == 3 || 9 || 10){
        shirtT == 2000;
    }
    if(shirtT == 2 || 4){
        shirtT == 3000;
    }
    if(shirtT == 11 || 12){
        shirtT == 4000;
    }
    //similar pant types
    if(pantT == 1 || 7){
        pantT == 1000;
    }
    if(pantT == 4 || 5){
        pantT == 2000;
    }
    if(pantT == 8 || 10){
        pantT == 3000;
    }
    //similar other types
    if(otherT == 5 || 6){
        otherT == 5000;
    }
    if(otherT == 7 || 8){
        otherT == 6000;
    }
    //colors that go together
    if(shirtC == 1 || 2 || 8){
        shirtC == 100;
    }
    if(pantC == 1 || 2 || 8){
        pantC == 100;
    }
    if(otherC == 1 || 2 || 8){
        otherC == 100;
    }
    if(shirtC == 3 || 4){
        shirtC == 200;
    }
    if(pantC == 3 || 4){
        pantC == 200;
    }
    if(otherC == 3 || 4){
        otherC == 200;
    }
    if(shirtC == 5 || 6 || 7){
        shirtC == 300;
    }
    if(pantC == 5 || 6 || 7){
        pantC == 300;
    }
    if(otherC == 5 || 6 || 7){
        otherC == 300;
    }
    if(shirtC == 9 || 10 || 11 || 12){
        shirtC == 400;
    }
    if(pantC == 9 || 10 || 11 || 12){
        pantC == 400;
    }
    if(otherC == 9 || 10 || 11 || 12){
        otherC == 400;
    }
    //patterns that go together
    if(shirtP == 1 || 6){
        shirtP == 10;
    }
    if(pantP == 1 || 6){
        pantP == 10;
    }
    if(otherP == 1 || 6){
        otherP == 10;
    }
    if(shirtP == 2 || 3 || 4 || 5 || 10){
        shirtP == 20;
    }
    if(pantP == 2 || 3 || 4 || 5 || 10){
        pantP == 20;
    }
    if(otherP == 2 || 3 || 4 || 5 || 10){
        otherP == 20;
    }
    if(shirtP == 8 || 9 || 11){
        shirtP == 30;
    }
    if(pantP == 8 || 9 || 11){
        pantP == 30;
    }
    if(otherP == 8 || 9 || 11){
        otherP == 30;
    }
    if (1110 <= (shirtT + shirtC + shirtP) <= 1450) {
        document.getElementById("result").innerHTML = "You should wear skinny jeans, jean shorts, or ripped jeans with this/these shirt(s).";
    }
    if (10301 <= (shirtT + shirtC + shirtP) == 10411) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
    if (10501 <= (shirtT + shirtC + shirtP) == 10711) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
    if (10801 <= (shirtT + shirtC + shirtP) == 1211) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
    if (10901 <= (shirtT + shirtC + shirtP) == 11111) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
}