//console.log("******FUNCTION EXPRESSION******")

// const sayi = prompt("Lütfen bir sayi giriniz: ")


// const express = function (sayi) {
//     return sayi % 2 ? `GİRDİĞİNİZ ${sayi} SAYISI TEKTİR.` : `GİRDİĞİNİZ ${sayi} SAYISI ÇİFTTİR.`
// }

// console.log(express(sayi))

const x = prompt("Please enter the first number: ")
const y = prompt("Please enter the second number: ")
const z = prompt("Please enter the third number: ")
 

const buyukBul = function (x, y, z) {
    let enBuyuk;
    if (x > y && x > z) {
        enBuyuk = x
    } else if (y > x && y > z) {
        enBuyuk = y
    } else if (z > x && z > y) {
        enBuyuk = z
    }
    return enBuyuk
}
console.log(buyukBul(x, y, z))

