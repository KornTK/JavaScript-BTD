function calculateAge(value){
    const Age_Array = value.split("-");
    let day = Age_Array[0]-today.getDate();
    let month = Age_Array[1]-(today.getMonth()+1);
    let year = Age_Array[2]-(today.getFullYear()+543);
    alert(today.getDate()+' - '+(today.getMonth()+1)+' - '+(today.getFullYear()+543))
    document.getElementById('show_age').innerHTML = year+" ปี "+month+" เดือน "+day+" วัน";
}