console.log("***** ARRAYS *****")


// 1. yontem Array Literal

const isimler = ["ahmet", "ismet", "can", "canan"]

console.log(isimler);
console.log(typeof isimler)
console.log(isimler.length)

// 2. Yontem Object Constructor

const diller = new Array ("C++", "JS", "Assembly", "Go")
console.log(diller)

const numbers = new Array(3, 2, 1)
console.log(numbers)

//Constructor yonteminde 10 elementlik bos bir array olusturdu
const numbers1 = new Array(10)
console.log(numbers1)


// 3. Yontem: Array.of()
const veriler = Array.of(1, 2, 3)
console.log(veriler)

//! Diziden Veri Okuma/Yazma(indisleme)

//! Okuma
console.log(diller[1])

const go = diller[0]
console.log(go)

console.log(isimler[isimler.length - 1])

console.log(isimler.at(-1)) // - ile baslarsak sondan saymaya baslar

//! Yazma

isimler[1] = "saffet"
console.log(isimler) // const sabit olmasina ragmen non-promotivelerin (arrayin) icindeki degeri degistirmesine izin verir

//isimler = ["Ali", "Veli"] //? herhangi bir veriyi degistirmemize izin verdi ama komple degistirseydik hata verir

//? Numbers dizisinin son elementini 1 artiriniz
console.log(numbers);
numbers[numbers.length - 1]++
console.log(numbers)


const yaslar = [22, 44, 55]
const kisiler = ["Ahmet", "Can", 2022, 2022 - 1990, true, yaslar]

console.log(kisiler)

//kisiler dizisi icerisindeki yaslar dizisindeki 55i bastiriniz
console.log(kisiler[5][2])

//kisiler icerisindeki yaslar dizisinin ikinci elemanini 1 eksiltiniz
kisiler[5][1]--
console.log(kisiler)
console.log(yaslar) // yaslar dizisini kisiler dizisi icerisinden degistirdigimiz icin sonuc olarak yaslar dizisi de degisir.

//! DIZIYI DEGISTIREN (MUTATOR) METOTLAR

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadol"]
 
//* pop() - dizinin son elemanini siler
const silinen = arabalar.pop()
console.log(arabalar, silinen)

//* push() - dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur
const n = arabalar.push("Citroen")
console.log(arabalar, n)

//* unshift() - dizinin 0. indeksine eleman ekler ve dizinin son eleman sayisini dondurur
const n1 = arabalar.unshift("Audi")
console.log(arabalar, n1)

//* shift() - dizinin . indeksini siler ve silinen elemani dondurur
const audi = arabalar.shift()
console.log(arabalar, audi)

//* splice() - dizinin ara elemanlarinin arasina elaman ekler
//* splice'in 1. parametresi: eklenecek indis numarasi
//*           2. parametresi 0 ise araya ekleme, 1 ise uzerine yazma
//*           3. parametre: yeni eklenecek veri    
arabalar.splice(1,0, "Passat")
console.log(arabalar)
arabalar.splice(3, 1, "Honda", "Toyota")
console.log(arabalar)

//* reverse() - dizinin tamamini ters siraya cevirir 
arabalar.reverse()
console.log(arabalar)

//* sort() - diziyi alfebetik olarak siralar
const sayilar = [2, 3, 1, 5, 7, 111, 11, 6]
sayilar.sort()
console.log(sayilar)

isimler.sort()
console.log(isimler) // buyuk-kucuk harflari farkli siralar. ASCII siralamasina gore siralanir.
// sort metodu icerisine functiion alabilir ( buna callback function denir.)
sayilar.sort( (a, b) => a - b) // arka planda siralama algoritmasi calistirir. Once 2yi tum sayilarla kiyasliyor, sonra 3u sonra 1i vs vs. gerkirse de yer degistiriyor.
console.log(sayilar)


//* fill() - diziyi verilen degerle doldurur

const array1 = [1, 2, 3, 4]
array1.fill(0)
console.log(array1)

array1.fill(1, 2, 3) // arrya1'e 2. indisten 3. indise kadar 1 bas demektir
console.log(array1)

array1.fill(-1, 1) // 1. eleman ve sonrasini -1 yap demektir.
console.log(array1)


//! DIZI ERISIM METODLARI

const sayilar1 = [3, 5, 2, "2", "uc", 2, "3", "bes", "5"]

//* includes() - aranan deger dizide varsa true yoksa false dondurur
console.log(sayilar1.includes(5))
console.log(sayilar1.includes("5"))


//* indexOf(), lastIndexOf() - ilk eslesen indexi dondurur
console.log(sayilar1.indexOf(2))
console.log(sayilar1.lastIndexOf(2))
console.log(sayilar1.lastIndexOf(4)) // bulamadigi zaman -1 dondurur




//! ODEV: prompt ile consoldan bir sayi istenmeli (string veya number olarak)
//! eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa aranilan
//! bulunamamistir yazdirilmalidir.



//* join() - dizinin elemanlarini birlestirip string haline cevirir
console.log(sayilar1.join(" "))
console.log(sayilar1.join("-"))
console.log(sayilar1.join()) // bir sey belirlenmez ise defoult olarak araya virgul koyar 
console.log(sayilar1) // immutative oldugu icin orjinalini bozmaz


//* toString() - sadece dizinin elemanlarinin aralarina virgul koyarak birlestirir ve string yapar
console.log(sayilar1.toString())
// aslinda join daha fazlasini yapabiliyor ama buyuk ihtimalle oraya benzetmek icin kullanilabilir yapilmis js'de de.



//* slice() - diziyi belirtilen sekilde boler. negatif index kullanilabilir geriden saymaya baslar o durumda
const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadol"]
const yeniArabalar = arabalar1.slice(2)
console.log(yeniArabalar)

const yeniArabalar1 = arabalar1.slice(1, 3)
console.log(yeniArabalar1)


//* concat() - 
const yazilar = ["Bugun", "hava", "cok", "guzel"]
const numberArr = [1, 2, 5, 7]
const combinedArr = yazilar.concat(numberArr)
console.log(combinedArr)


//* every() - tum diziyi itere eder ve aldigi callback fonksiyonuna gore test gercekletirir. Tum elemanlar icin basarili ise true aksi takdirde false dondurur.
const yasArray = [18, 22, 34, 78, 81]
const check = yasArray.every((yas) => yas >= 18)
console.log(check)
check ? console.log("Herkes resit") : console.log("Gurubun icinde bebeler olabilir")


//* some() - aldigi callback fonksiyonuna gore test gerceklestirir. En az bir eleman icin bile test basarili ise true aksi takdirde false deger dondurur.

const buyuk80 = yasArray.some((yas) => yas >= 80)
buyuk80 ? console.log("ihtiyarlar var") : console.log("herkes genc")



//* find () -  aldigi callback fonksiyonuna gore test gerceklestirir. Kosulu saglayan ILK dizi elemanini dondurur. Eger hicbir eleman kosulu saglamazsa undefined dondurur.
//? yasi 30dan buyuk olan ilk elemani yazdirin.
const eleman = yasArray.find((yas) => yas >=30)
console.log(eleman)



//* findIndex() - aldigi callback fonksiyonuna gore test gerceklestirir. Kosulu saglayan ilk dizi elemaninin indexini dondurur. Eger hicbir eleman kosulu saglamazsa -1 dondurur.

//? yasi 30dan buyuk olan ilk elemanin indexini yazdirin.

const foundIndex = yasArray.findIndex((yas) => yas >=30)

console.log(foundIndex)