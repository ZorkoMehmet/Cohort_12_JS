console.log("****** OBJECTS ******")

//* ===========================================================
//*                     OBJECT LITERAL YONTEMI
//* ===========================================================

const worker = {
    name: "Mehmet",
    job: "Developer",
    age: 28,
    male: true,
    salary: 15000,
    languages: ["HTML", "CSS", "JS", "SOLIDITY", "REACT"]
}

console.log(worker)
console.log(worker.salary)
console.log(worker["salary"])


// OBJECT COPY

const person = worker
console.log(person)

person.age = 30
console.log(person)

console.log(worker)
//! bu sekilde kopyalamaya sığ kopyalama denir. worker ve person heap'te ayni yeri gosterdigi icin yapilan degisiklik her ikisi icin de gecerli olur

//? Deep copy
// tek bir sekilde yapilir:
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker))
console.log(deepCopyOfWorker)
// JSON.stringify(worker) ==> objeyi tamamen stringe cevirir
// JSON.parse ==> tamamen stringe cevrilen objeyi yeniden ve baslangictakinden tamamen farkli bir objeye cevirir

//* ===========================================================
//*                    Object Metotlari
//* ===========================================================

const personel = {
    name: "Mehmet",
    job: "Developer",
    male: true,
    salary: 15000,
    languages: ["HTML", "CSS", "JS", "SOLIDITY", "REACT"],
    dob: 1994,
    calculateAge: function(){
        return new Date().getFullYear() - this.dob
    },
    summary: () => {
        return `${this.name} is ${this.calculateAge()} years old!`
    }
}
console.log(personel.calculateAge())
console.log(personel.summary)

//! NOT: Arrow function ozellikle callback function olarak kullanilmak ve bu fonctionlarda this keyword kullanimini kaldirmak icin gelistirilmistir. Global scope'ta gecerlidir. Yani arrow function nerde olursa olsun icine this yazarsak window objesi ile veri dondurur. Dolayisiyla object icine function tanimladigimizda expression veya decleration yontemleriyle tanimlamak gerekir.


//* ===========================================================
//*                    OBJECT ITERATION
//* ===========================================================

//! Nested
const people = {
    person1: {
        name: "Mehmet",
        job: "Developer",
        male: true,
        salary: 15000,
        languages: ["HTML", "CSS", "JS", "SOLIDITY", "REACT"],
        dob: 1994,
        },

    person2: {
        name: "Steve",
        job: "Tester",
        male: false,
        salary: 110000,
        languages: ["HTML", "CSS", "JS", "SOLIDITY", "REACT"],
        dob: 1990,
        },

    person3: {
        name: "John",
        job: "CEO",
        male: true,
        salary: 1100000,
        languages: ["HTML", "CSS", "JS", "SOLIDITY", "REACT"],
        dob: 1991,
        }
}
console.log(people)
console.log(people.person2.job);

//! NOT: js'de objeler default olarak iterable degildir. Ama for-in ve for-of donguleri ile itere edilebilirler.

//? FOR IN
// for (key in object) {
//    code block to be executed
//  }

for (let person in people) {
    console.log(people[person])
}


//? FOR OF (iterable yapilarla calisir)

// for (x of iterable) {
//     code block to be executed   
// }


//! NOT: Objectlerin key ve valuelerini okumak icin built-in metotlar vardir. Bu metotlar aslinda objectlerin key ve valuelerini bir dizi olarak dondurur.
//! Object.keys() metodu obje icindeki yalnizca keyleri dondurur. Yani dizilestirir.
//! Object.values() metodu ise obje icindeki valueleri dizi olarak dondurur.
//! Object.entries() metodu ise hem key hem de valueleri dizi olarak dondurur.


for (let key of Object.keys(people)) {
    console.log(key)
}
    

for (let v of Object.values(people)) {
    console.log(v)
}

//? people objesindeki tum salaryleri yazdir
for (let v of Object.values(people)) {
    console.log(v.salary)
}

for (let [k, v] of Object.entries(people)) {
    console.log(`${k} - ${v.salary}`)
}


//? WITH ARRAY METHODS
Object.keys(people).forEach((p) => console.log(p))

Object.values(people).forEach((f) => console.log(f.name))

Object.values(people).filter((d) => d.job === "Developer").forEach((p) => console.log(p.dob))


//* ===========================================================
//*             JSON ==> Javascript Object Notation
//* ===========================================================
//? It's basicly objects in arrays.

const team = [
    {
        name: "Josh",
        surname: "Adams",
        job: "developer",
        age: 30
    },

    {
        name: "Mary",
        surname: "Bary",
        job: "tester",
        age: 22
    },

    {
        name: "Hazel",
        surname: "Nuts",
        job: "developer",
        age: 20
    },
]

//? team dizisindaki joblari tek tek yazdiriniz
team.forEach((item) => console.log(item.job))

//? team dizisindeki age leri bir artirarak yeni bir diziye yazdiriniz
const newAges = team.map((p) => p.age +1)
console.log(newAges)

//? name ve surname leri birlestirip buyuk harfe ceviren ve bunu fullName key'i olark saklayan, ayni zamanda age degerlerini 5 artirarak age key'ine saklayan ve olusan diziyi donduren kodu yaziniz.

const teamFullName = team.map((p) => ({ // *NOT1*
    fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
    age: p.age + 5
})) 

// NOT1: Burada arrow function dan sonra suslu parantez actigimiz icin js'in bunu arrow function'un suslusu olup olmadigini karistirmasi soz konusu. O yuzden de olusturdugumuz yeni nesnenin obje oldugunu belirtmek icin actigimiz suslu parantezi parantez icinde yaziyoruz !!!
console.log(teamFullName)


//? name ve surname leri birlestirip buyuk harfe ceviren ve bunu fullName key'i olark saklayan, ayni zamanda age degerlerini 5 artirarak age key'ine saklayan ve olusan diziyi donduren kodu yaziniz. (ALTERNATIF YONTEM)

const teamFullNameAlternative = team.map((p) => {
    return { // *NOT2*
        fullName: p.name.toUpperCase() + " " + p.surname.toUpperCase(),
        age: p.age + 5
    }
})
// NOT2: return yazip actigin suslu, bir obje return edecegini gosterir.

console.log(teamFullNameAlternative)

//? yasi 22den kucuk ve esit olanlarin adlarini dondurunuz
const teamUnder22 = team.filter((p) => p.age <= 22).forEach((p) => console.log(p.name))

//? 22 yasindan kucuk ve esit olanlarin isimlerini diziye saklayiniz
const names = team.filter((p) => p.age <= 22).map((x) => x.name)
console.log(names)


//? ortalama yasi hesaplayiniz
const avgAges = team.reduce((acc, value) => acc += value.age, 0) / team.length
console.log(avgAges)