console.log("****** FUNCTION DECLARATION ******")


function yazdir () {
    console.log("Merhaba");
}

yazdir()

function selamla(ad , soyad){
    console.log(`merhaba benim adim ${ad}, soyadim ise ${soyad}'dur`)
}
selamla("Mehmet", "Sorkulu");

function yasHesapla (isim, dogumTarihi) {
    const sonuc = `${isim} in yasi ${new Date().getFullYear()  - dogumTarihi}`
    return sonuc;
}

mesaj1 = yasHesapla("Hazal", 1994);
console.log(mesaj1)

function tekCift (sayi) {
    if (sayi % 2 === 0) {
        return "SAYİ CİFTTİR"
    } else if (sayi === 0){
        return "SAYİ CİFTTİR"
    } else { return "SAYİ TEKTİR"}
}

const n = prompt("Lütfen bir sayi giriniz: ")
console.log(tekCift(n));

