let qrt = prompt("ไส่จํานวนสินค้าที่ต้องการ : ")
let sum_p = 0
// Ex. 100+1 = 1001
for(var i = 1; i <= qrt; i++){
    let item_price = prompt("ราคาสินค้าชิ้นที่"+ i)
    sum_p = sum_p+ parseInt(item_price)
    document.getElementById("price-list").innerHTML += 
    "รายการสินค้าชิ้นที่ : "+ i + " ราคา : "+item_price +" บาท <br>"
}
document.getElementById("result").innerHTML = "<b>ราคารวมสินค้าทั้งหมด : " + sum_p +" บาท </b>"