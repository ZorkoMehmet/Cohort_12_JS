console.log("*****STRING METHODS*****")

//* ---------------------------------------------------
//! concat() ----------
//* ---------------------------------------------------

const str1 = "Hello"
const str2 = "Hazal"
const str3 = "Naber Canim"

console.log(str1.concat(str2 , str3))

//* ---------------------------------------------------
//! toUpperCase , toLowerCase ---------
//* ---------------------------------------------------
let myName = "Hazal Nigar";

console.log(myName.toLowerCase());

console.log(myName.toUpperCase());


myName = myName.toUpperCase('tr')

console.log(myName)

console.log(`TR: ${myName.toLocaleUpperCase('tr')}`)

//! Iki stringi esit olup olmadigini kiyaslayip 
//!sonucu donduren fonksiyonu yaziniz.

const esitMi = (str1, str2) => {
    return str1.toLowerCase() === str2.toLowerCase() 
    ? `${str1} ile ${str2} Esittir.` 
    : `${str1} ile ${str2} Esit Degildir.`
}
esitMi("MerHaba", "MERHABA");
console.log(esitMi("MerHaba", "MERHABA")) 

//* ---------------------------------------------------
//* localeCompare()
//* ---------------------------------------------------


//* ---------------------------------------------------
//* charAt()
//* ---------------------------------------------------
const str6 = "BlockChain 1"
console.log(str6.charAt(5))

console.log(str6.length)


//? String'in son karakterini ogrenmek istersek:
console.log(str6.charAt(str6.length-1)) //length property'si karakter sayisini verdigi ve karakter sayisi da 0 dan basladigi icin length'ten bir cikarmamiz lazim


//* ---------------------------------------------------
//* includes() - case sensitive
//* includes case sensitive olarak bir string icinde sizin verdiginiz degeri ariyor. eger bulursa true bulamazsa false donduruyor
//* ---------------------------------------------------

const word = "To be or not to be, that is the question"

console.log(word.includes("to be"));
console.log(word.includes("That"));
console.log(word.includes(""));
console.log(word.includes("to be", 14)); // indis numarasi belirterek bu ornekte oldugu gibi 14. karakterden sonra bu ifade var mi yok mu arama yatirilabilir.
console.log(word.includes("to be", 13));


//* ---------------------------------------------------
//* indexOf() , lastIndexOf() - case sensitive
//* ---------------------------------------------------
const toBe = word.indexOf("or")
console.log(toBe)
console.log(word.indexOf("be"))
console.log(word.lastIndexOf("be"))
console.log(word.lastIndexOf("BE"))//! Bir stringin indis numarasi negatif olamaz. o yuzden bulamadigini gostermek icin en basit negatif sayiyi (-1) donduruyor.


//* ---------------------------------------------------
//* search()
//* ---------------------------------------------------
//* indexof'dan farkli olarak REGEX



//* ---------------------------------------------------
//* startsWith() , endsWith() - case sensitive
//* ---------------------------------------------------

let word2 = "Sen gulunce guller acar gul pembe!"

console.log(new String(word2)) //! primitive olarak belirledigin degiskeni object (non-primitive) haline getirir.
console.log(word2.startsWith("Sen"))
console.log(word2.startsWith("gulunce"))
console.log(word2.startsWith("gulunce", 4))
console.log(word2.endsWith("!"))


//* ---------------------------------------------------
//* replace(searchFor, replaceWith) - immutable
//* ---------------------------------------------------

let oku = "Oku Baban gibi, saf olma";
console.log(oku.replace("saf olma", "basarili ol"));
console.log(oku) //! yeniden yazirdigimizda degismedi cunku immutable. degistirmek istiyorsak assigning yontemi ile stringi degistirmemiz gerekirdi.
oku = oku.replace("saf olma", "basarili ol")
console.log(oku)
oku = oku.replace(/BASARILI/i, "Zengin")
console.log(oku);

//! NOT: Replace metodu eger Regex ile aksi belirtilmiyorsa yani (g) global belirtilmiyorsa sadecce ilk buldugunu degistirir.

let degistir = "daglar daglar yol ver gecem"
degistir = degistir.replaceAll("daglar", "Daglar")
console.log(degistir)

