console.log("Merhaba Furkan")

let dolarDun = 9.20
dolarDun = 9.10
let dolarBugun = 9.30

console.log(dolarDun)

//Const'a başka değer atanamaz
const euroDun = 11.2
//euroDun = 11
console.log(euroDun)
//array=dizi
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredis","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log("<ul>")
for(let i = 0 ; i < konutKredileri.length ; i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
console.log(konutKredileri)