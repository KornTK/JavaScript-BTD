let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ :")
let soc_number = 0
for(var i = 0; i < round; i++){
    var answer = prompt("หัว หรือ ก้อย : ")
    var random_answer = ""
    
    if(Math.floor(Math.random() *10) <= 4){
        //หัว
       random_answer = "หัว"
       console.log("หัว")
    }
    else{
        //ก้อย2/
        random_answer = "ก้อย"
        console.log("ก้อย")
    }

    // check answer

    if(answer == random_answer){
        alert("คุณตอบถูก")
        soc_number =soc_number+1
    }else{
        alert("คุณตอบผิด")
    }
    document.getElementById("game-list").innerHTML += "<b> ครั้งที่ "+(i+1)+"</b> : ตอบ "+answer+" คำตอบที่ถูกคือ "+random_answer+"<br>"
    document.getElementById("round_cout").innerHTML = "<b>คุณได้คะแนนทั้งหมด : "+soc_number+" คะแนน</b>"
}