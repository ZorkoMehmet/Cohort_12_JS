console.log("******CONDITIONS******");


/* const sayi = prompt("Bir sayi giriniz: ");

if(sayi > 0 ) {
    console.log(`${sayi} pozitiftir.`);
} else if(sayi == 0) {
    console.log(`${sayi} 0'a eşittir.`);
} else {
    console.log(`${sayi} negatiftir.`)}

console.log(sayi, typeof sayi); */

// const n1 = +prompt("Sayi1:")
// const n2 = +prompt("Sayi2:")
// const n3 = +prompt("Sayi3:")

// if(n1 >= n2 && n1 >= n3){
//     console.log(`${n1} en buyuktur.`);
// } else if(n2 >= n1 && n2 >= n3){
//     console.log(`${n2} en buyuktur.`);
// } else if(n3 >= n1 && n3 >= n2){
//     console.log(`${n3} en buyuktur.`);

// }

// const n1 = +prompt("Sayi1: ")
// const ifade = prompt("Yapmak istediğiniz her işlem için hazalı opunuz: ")
// const n2 = +prompt("Sayi2: ")


// if (ifade == "+"){
//     console.log(n1+n2)
// } else if(ifade == "-"){
//     console.log(n1-n2)
// } else if(ifade == "*"){
//     console.log(n1*n2)
// } else if(ifade == "/"){
//     console.log(n1/n2)
// } 


//! const maas = +prompt("Maasinizi Giriniz: ")

// const yeniMaas = maas >= 5500 
// ? console.log(`Zamlı maasiniz ${maas*1.1} TL'dir.`) 
// : console.log(`Zamlı maasiniz ${maas*1.5} TL'dir.`)

const gelir = +prompt("Lütfen Kanada'da Kazanacağiniz Gelirinizi Giriniz: ")
const gider = +prompt("Lütfen Kanada'da Yapacağiniz Giderinizi Giriniz: ")

const sonuc = gelir - gider

if (sonuc <= 0) {
    console.log("😰😰😓😓 Ac Kaldiniz. Turkiyede'yken daha cok yazilim calismaliydiniz.!!")
} else if (sonuc < 2000) {
    console.log("😵‍💫😵‍💫🫤🫤Kit kanaat geciniyorsunuz. Turkiyeye zorunlu geri donus ufukta gorunuyor.")
} else {console.log("😍😍🤑🤑Kanada'da mureffeh bir hayat sizleri bekliyor. Istediginiz zaman aileleriniz getirebilir kendiniz de istediginiz zaman gidip gelebilirsiniz.")}

