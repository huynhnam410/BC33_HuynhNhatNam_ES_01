
let CalAvr = (...arrDiem) => {
    let number=0
    for (let i=0; i < arrDiem.length; i++){
        number += arrDiem[i];

        // return number/(arrDiem.length)
    }return number/(arrDiem.length)
}

document.querySelector("#btnKhoi1").onclick = () => {
    let Diem =document.querySelectorAll("#khoi1 input");
    document.querySelector("#tbKhoi1").innerHTML=CalAvr(+Diem[0].value,+Diem[1].value,+Diem[2].value);
}

document.querySelector("#btnKhoi2").onclick = () => {
    let Diem =document.querySelectorAll("#khoi2 input");
    document.querySelector("#tbKhoi2").innerHTML=CalAvr(+Diem[0].value,+Diem[1].value,+Diem[2].value,+Diem[3].value);
}