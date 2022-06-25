// alert("Hello world")
// var x = 20
// {
//     var x = 100
//     let y = 2
//     alert(y)
// }
// alert(x)

//===================================================

// let save = prompt("เอ้ยๆๆ กรอกชื่อมานะ")
// alert("hello " + save)

//===================================================

let lotter_number = prompt("กรอกเลขที่ต้องการซื้อ : ")
console.log(lotter_number)
document.getElementById("buy_num").innerHTML = lotter_number

//random 0-99
let cor_number = Math.floor(Math.random() * 100)
document.getElementById("lot_win").innerHTML = cor_number

if(cor_number == lotter_number){
    document.getElementById("result").innerHTML = "ดีใจด้วย! คุณถูกหวย"
}else{
    document.getElementById("result").innerHTML = "เสียใจด้วย! คุณไม่ถูกหวย"

}

//check no care datatype
console.log(5 == "5")

//check care datatype
console.log(5 === "5")
//===================================================

