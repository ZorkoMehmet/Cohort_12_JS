console.log("****** NEW OPERATORS ******");

//* ===========================================================
//*                    DESTRUCTURING (OBJECT)
//* ===========================================================

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};
//* 1. YONTEM ( CLASSICAL )
const name1 = car.name;
const model1 = car["model"];

//* 2. YONTEM ( DESTRUCTURING )
const { name, model, engine, colors } = car;
console.log(name, model, engine, colors); // siralamanin onemi yok

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};
const { car1, car2 } = cars;
console.log(car1);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;
console.log(c1Name, c2Name);

//* EXAMPLE

const team = [
  {
    name: "Josh",
    surname: "Adams",
    job: "developer",
    age: 30,
  },

  {
    name: "Mary",
    surname: "Bary",
    job: "tester",
    age: 22,
  },

  {
    name: "Hazel",
    surname: "Nuts",
    job: "developer",
    age: 20,
  },
];
// Classic method
team.forEach((p) => {
  console.log("Name:", p.name);
  console.log("Surname:", p.surname);
  console.log("Job:", p.job);
  console.log("Age:", p.age);
});

// Destructuring method
team.forEach((p) => {
  const { name, surname, job, age } = p;
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

//* FUNCTION
const getInfo = () => {
  return {
    id: 1,
    productName: "Ipone",
    price: 30000,
  };
};
console.log(getInfo());
const { productName, price } = getInfo();
console.log("Product Name:", productName);
console.log("Product Price:", price);

//? fonksiyonlarin parametreleri dogrudan obje olabilir ve bu object parametreler destructure yapilabilir.
const calculate = ({ id, price }) => {
  console.log(price * 1.2);
  console.log(id + 2);
};
calculate({ id: 1, price: 3000 });

//* ===========================================================
//*                    DESTRUCTURING (ARRAY)
//* ===========================================================
const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];

// Classical method
const mehmet = names[1]; // indexing

// Destructuring
const [p1, p2, p4] = names;
console.log(p1, p2, p4); //! verilen degiskenin ismi onemli degildir. array destructuringde SIRA ONEMLIDIR. Degisken verilirken atlama yapilmak isteniyorsa o verinin denk geldigi yere virgul bosluk birakilmalidir.

//* ===========================================================
//*                         REST ( ... )
//* ===========================================================
//? REST operatoru kullancii tarafindan girilen degerleri dizi icerisine konumlandirir. cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'teki bazi degerlerden geri kalanlarini ayri dizi yada objectlere kopyalanmasini saglayabilir.

// REST in ARRAYS
const vehicles = ["bmw", "reno", "mercedes", "ferrari", "anadol"];
const [bmw, reno, ...restAutos] = vehicles;
console.log(bmw, reno);
console.log(restAutos);
//! SIRA ONEMLIDIR VE REST DAIMA SON ELEMANLARI ALMAYA CALISMALIDIR.

// REST in OBJECTS
const personel = {
  pname: "Josh",
  surname: "Adams",
  job: "developer",
  age: 30,
};
const { pname, job, ...ageSurname } = personel;
console.log(ageSurname);
//! OBJECT'TE SIRALAMA ONEMLI OLMADIGI ICIN HER HALUKARDA GERIYE KALANLARI DONDURUR

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilir.

const sum = (x, y) => x + y;
console.log(sum(1, 2, 3, 4, 5, 6)); //? hata vermez, sadece ilk iki parametreyi toplar.

const sumAll = (...numbers) => {
  //! NOT3
  console.log(numbers);
  return numbers.reduce((s, n) => (s += n), 0);
};

//! NOT3: parametrenin basina ... koymak parametreyi diziye cevirir.
console.log(sumAll(1, 2, 3, 4));

//? ilk iki parametreyi oldugu gibi alip sonraki parametrelerin arasina "and" koyarak yazdiran fonksiyonu yaziniz.
const showName = (p1, p2, ...restOfShowName) => {
  const summary = `${p1} ${p2} is a ${restOfShowName.join(" and ")}`;
  console.log(summary);
};

showName("Noah", "Adams", "Developer", "Instr", "Professor", "Dad");

//* ===========================================================
//*                        SPREAD ( ... )
//* ===========================================================

//? Spread operatoru ise iterable olan bir elemani bireysel degerler haline getirir.

//! Array concatination
const flyingVehicles = ["Aircraft", "Helicopter", "Quadcopter"];
const automobiles = ["Truck", "Bus", "Car", "SUV"];

//const allVehicles = [flyingVehicles, automobiles]// nested yapar(icice)
//console.log(allVehicles)

const allVehicles = [...flyingVehicles, ...automobiles]; // acarak siralar, tamamini tek bir dizi haline getirir.
console.log(allVehicles);

//*Example:
const citrus = ["orange", "lime", "lemon"];
const fruits = ["apple", ...citrus, "banana", "cherry", "pear"];

console.log(fruits);

//! String spread
let str = "Hello Mehmet";
console.log(str);
console.log([...str]);
console.log(...str);
const charArray = [...str];
console.log(charArray, str);

charArray[0] = "X";
console.log(charArray);

// Math.max() fonksiyonu (verilen parametrelerin maksimumunu bulup onu dondururnormalde)
console.log(Math.max(1, 3, 5, 3, 2, 10));
const nums = [1, 3, 5, 3, 2, 10];
console.log(Math.max(...nums)); //? dizileri fonksiyonlara acik bir sekilde parametre olarak vermek icin kullanilabilir.

//! Array copy
const myNumbers = [1, 2, 3];
const hisNumbers = [...myNumbers];
const herNumbers = [-1, ...myNumbers, 7];
console.log(hisNumbers);
console.log(herNumbers);

hisNumbers.push(6040);
console.log(myNumbers, hisNumbers);

//! Object Copy
const myObject = { a: 1, b: 2, c: 3 };
const herObject = { a: 2, z: 4, k: 3 };
const copiedObject = { ...myObject };
console.log(copiedObject);

copiedObject.c = "33";
console.log(myObject, copiedObject);

const combinedObject = { ...myObject, ...herObject };
console.log(combinedObject); //! iki tane ayni key'e sahip obje birlestirilirken o key degerinin (bu ornekte a) verdiginiz siraya gore olan key degerini baz alir. yani bu ornekte son a key'i herObject'te oldugu icin herObject objesinin a key degerini aldi.
