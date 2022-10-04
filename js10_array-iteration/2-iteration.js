console.log("***** ITERATIONS *****")
//* ====================================
//*             FOREACH METHOD
//* ====================================

//? Dizideki herbir fiyati konsola bastiriniz
const prices = [100, 250, 50, 89]

prices.forEach((price) => console.log(price))

//? dizideki elemanlarin toplamini bularak sonucu konsola foreach ile yazdiriniz
const dizi3 = [65, 44, 12, 4, -20, 19]

let sum = 0;

dizi3.forEach((total) => console.log(sum += total))
//! foreach methodu void fonksiyondur yani bir returnu yoktur bir deger dondurmez. yani sum'i degistirir onu clg yapabiliriz ama foreach i clg yaparsak undefined cikar
console.log(dizi3.forEach((total) => console.log(sum += total)))

//! array.foreach (function(suankiDeger, indis, dizi))
//! foreach metodunda ilk parametre zorundlu indis ve dizi opsiyoneldir. Siralama onemlidir. Ornegin dizi3.forEach((total) => console.log(sum += total)) orneginde total dedigimiz suanki degerdir ve zorunludur. Diger ikisi olmamasina ragmen calisir.

//? Prices dizisindeki her bir ara toplam degerini konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz

let total = 0
prices.forEach((price, index, arr) => {
    total += price
    console.log(`${index+1}. iteration ${total}`)
    arr[index] = Math.trunc(price * 1.1)
})

console.log(prices)
//! foreach return yapmadigi icin bir degiskene aktarilamaz. Aktarilirsa undefined cikar.

//* ====================================
//*              MAP METHOD
//* ====================================

//* Void degildir. Return yapar ve array dondurur. ama kopya dizi dondurur. Elinizdeki diziyi bozmadan bir modifikasyona ugratmak istiyorsaniz map kullanilir.
//! Return ettigi icin bir degiskene aktarilabilir.

//? Dizideki tum isimleri BUYUK harfe donusturunuz. 

let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayse", "canan" ]

const capitalCase = names.map((name) => name.toUpperCase())
console.log(capitalCase, names)
console.log(names.map((name) => name.toUpperCase()))


//? tlFiyatlar dizisindeki rakamlarin Euro ve Dolar karsiliklarini hesaplatarak yeni dizilere kaydediniz.

const euro = 18.23
const dolar = 18.19
const tlFiyatlar = [100, 150, 100, 50, 80]

const yeniFiyatDolar = tlFiyatlar.map((fiyat) => fiyat / dolar)
const yeniFiyatEuro = tlFiyatlar.map((fiyat) => fiyat / euro)
console.log(yeniFiyatDolar, yeniFiyatEuro)






//* ====================================
//*             FILTER METHOD
//* ====================================
//! filter.array dizisi bir fonksiyonu parametre olarak alir ve orjinal dizinin kopyasini bu fonksiyona gore filtreleyerek dondurur. yani dizideki istedigimiz elemanlari secmek icin kullanilir. Orjinal diziyi degistirmez yeni bir dizi olusturarak dondurur.
const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]


//? maasi 10000den buyuk olanlari filtrele

const biggerThan = salaries.filter((s) => s > 10000)
console.log(biggerThan)





//* ====================================
//*          CHAINING (PIPELINE)
//* ====================================

//? maasi 9000'den az olanlara %10 zam yap ve bunu yeni bir dizide sakla

const lessThan9000Increase = salaries.filter((s) => s < 9000).map((s) => s * 1.1)

console.log(lessThan9000Increase)

//!virgulden sonraki kusurati yok etmek icin Math.trunc fonksiyonunu kullan
const lessThan9000IncreaseWithTrunc = salaries.filter((s) => s < 9000).map((s) => Math.trunc(s * 1.1))

console.log(lessThan9000IncreaseWithTrunc)

//! for each de eklersek (degiskene aktarmamiz gerekmez cunku foreach return yapiyor zaten)
salaries.filter((s) => s < 9000).map((s) => Math.trunc(s * 1.1)).forEach((s) => console.log(s))



//* ====================================
//*               REDUCE
//* ====================================

const sumOfSalaries = salaries.reduce((acc, val) => acc + val)
console.log(sumOfSalaries)

//? Bir firma 9000 tlden az olan maaslara %10 yapmak istiyor ve zam yapilan bu kisilere toplam kac tl odenecegini bilmek istiyor.
//const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000]
 const odenecekPara = salaries.filter((f) => f <= 9000).map((m) => m *= 1.1).reduce((r, m) => r + m)

 console.log(odenecekPara)
