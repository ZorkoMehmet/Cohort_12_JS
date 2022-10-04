//! ODEV: prompt ile consoldan bir sayi istenmeli (string veya number olarak)
//! eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa aranilan
//! bulunamamistir yazdirilmalidir.

const numbers = ["1", 1, "2", 2, "3", 3, "4", 4, "5", 5]

let number = prompt("Please enter a number: ")

for(let i = 0; i < numbers.length; i++) { 
    if (numbers[i] === Number(number)){
        console.log(` girdiginiz sayinin number indisi ${numbers.indexOf(number)}` )
    } 
    if (numbers[i] == number){
        console.log(`girdiginiz sayinin number indisi ${numbers.indexOf(number)}`)
    }
}

// const index = numbers.findIndex((numbers) => numbers > 3)

// console.log(index)

// const sayilar = ["1", 1, "2", 2, "3", 3, "4", 4, "5", 5]
//     let girilen_deger = prompt(); 
//     if (sayilar.includes(girilen_deger)) {
//       console.log("Girilen Sayı: ", girilen_deger, " Girilen Sayının String İndex'i: ", sayilar.indexOf(girilen_deger)," Girilen Sayının Number İndex'i: ", sayilar.indexOf(Number(girilen_deger)));  
//     }else {
//     console.log("Aranılan Bulunamamıştır!")
//     }