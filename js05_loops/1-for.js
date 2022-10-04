//  let x = +prompt("Lütfen bir sayi giriniz: ")

//  let toplam = 0;

//  for (let i = 1; i <= x; i++) {
//     toplam += i
//  }

 //console.log("Sonuc: ", toplam)

//!     1- kullanicidan not girmesi istenecek
//!     2- eger girilen not ise döngü devam edecek
//!     3- 

let sayac = 0
let not;

do {
    sayac += 1
    not = prompt("Lutfen bir not giriniz: ")
    
    let toplam = 0
    toplam += not
    let ortalama = toplam / sayac

    if (not == "q" || not == "Q") {
        console.log(`Not Ortalaniz: ${ortalama}`)
        break;
    } 
    
    if (not < 0){
        console.log("Girilen not 0-100 arasinda olmalidir.")
        break;
    } 

    if (not > 100){
        console.log("Girilen not 0-100 arasinda olmalidir.")
        break;
    } 

    alert = "devam etmek istiyor musunuz?"

    if (alert !== "E" || alert !== "e") {
        break;
    }
   
   
} while (not !== "q" || not !== "Q") 

console.log(do(80));






// let loop = true;
// let grade = 0;
// let numberOfNotes = 0;
// let sum = 0;
// while(loop){
//     loop = prompt("Calculate your grades! Press n to enter your notes or press q to exit.");
//     if(loop == "q" || loop == "Q"){
//         if(numberOfNotes === 0){
//             alert("You haven't entered any notes!");
//             loop = false;
//             break;
//         }
//         else{
//             alert(`Your mean grade is ${grade}`);
//             loop = false;
//             break;
//         }
//     }
//     else if(loop == "n" || loop == "N"){
//         let note = +prompt("Enter your note(0-100): ");
//         if((note < 0) || (note > 100)){
//             alert("Your note should be between 0-100!");
//             loop = true;
//         }
//         else{
//             sum += note;
//             numberOfNotes++;
//             grade = sum / numberOfNotes;
//             loop = true;
//         }
//     }
//     else{
//         alert("You should press n or q!");
//         loop = true;
//     }
// }














//  let not1;

//  do {
//     let not1 = Number(prompt("Lutfen bir not giriniz: "))
//     if (not1 < 0 || not1 >100) {
//         console.log("Girdiginiz not 0-100 arasinda olmalidir.");
//     }  

//  }  while (not1 < 0 || not1 > 100)

//  let toplam = 0;
//  toplam = toplam + not1

//  console.log(toplam)

//  console.log(`Notunuz ${not1}'dir.`)

// let not

// do {
//     not = prompt("Lütfen ortalamasi alinacak notu giriniz: ")
//     if (not < 0 || not > 100) {
//         console.log("Girdiginiz not 0-100 arasinda olmalidir.");
//     }
// } while (not < 0 || not > 100)

// let toplam += not

// console.log(toplam) 

