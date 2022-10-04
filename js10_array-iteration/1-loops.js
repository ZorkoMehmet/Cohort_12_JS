//* ====================================
//*             FOR LOOP
//* ====================================
console.log("***** LOOPS IN ARRAYS *****")
const dizi = [11, 33, 35, -4, -32, 66, -70]

const result = (n) => {
    let totalNegatives = 0
    let totalPositives = 0

    for(let i = 0; i < n.length; i++)
    if(n[i] < 0) { 
        totalNegatives += n[i]
    } else {
        totalPositives =+ n[i]
    }
    console.log(`Negatif sayilar toplami ${totalNegatives}'dir`)
    console.log(`Pozitif sayilar toplami ${totalPositives}'dir`)
    
    
}
result(dizi)

//* ====================================
//*             FOR-IN LOOP
//* ====================================
//? for (degisken in diziAdi) {
//?    //dongu ici
//?  }

//! Iki ayri dizideki eslesen indis elemanlari birlstirerek ayri bir diziye saklayan uygulamayi FOR IN ile yaziniz.
const adlar = ["Ahmet", "Can", "Mustafa"]
const soyadlar = ["Ozturk", "Yilmaz", "Ari"]
const birlestir = (x,y) => {
    const adSoyadBirlisik = []
    for (let i in x ){
        adSoyadBirlisik[i] = `${x[i]} ${y[i]}}`
    }
    return adSoyadBirlisik
}
console.log(birlestir(adlar, soyadlar))

//! Ogrenciler dizisinde ogrenci isimleri saklanmaktadir. Ogrencileri aramamizi saglayacak ve aranilan ogrenciden ne kadar sayida bulundugunu ana programa dondurecek bir fonksiyonu yaziniz. Eger aranilan isimlde bir ogrenci yok ise fonksiyon ogrenci bulunamadi dondurulmalidir.

const ogrenciler = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"]

// const sonuc = (arr, search) => {
//     let count = 0

//     for(let i in ogrenciler){
//         if(search === arr[i]){
//         count++
//         }
//     }
//     if (count === 0) {
//         return `${search} can not be found`
//     } else {
//         return `${search} is found ${count} times.`
//     }
//     return count
// }
// console.log(sonuc(ogrenciler, "ali"))




//* ====================================
//*             FOR-OF LOOP
//* ====================================

//* FOR OF dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icerisindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const sonucOf = (arr, search) => {
    let count = 0

    for(let item of ogrenciler){
        //! 1. Yontem
        //if(search === item){
        //count++
        //}

        //! 2. Yontem ternary
        //search === item ? count++ : null

        //! 3. Yontem Short-Circuit: && => kosul dogru (true) ise ifadeyi calistir
        search === item && count++

        //! Short-Circuit: || ile yapilirsa => kosul yanlis (false) ise ifadeyi calistir
        //! search === item || count--

    }

    if (count === 0) { 
        // count === 0 (count sifirsa) ifadesi yerine !count(count yoksa) ifadesini de kullanabilirdik

        return `${search} can not be found`
    } else {
        return `${search} is found ${count} times.`
    }
    return count
}
console.log(sonucOf(ogrenciler, "cem"))


