//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

let isError = false;

const getNews = async function () {
  const API_KEY = "55e3f1fdc1c94581b6b11537c9b8f8bf";
  const url =
    "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong: ${res.status} `);
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) => {
  const newsList = document.getElementById("news-list");
  if (isError) {
    newsList.innerHTML += `
      <h2>News Can not be fetched</h2>
      <img src="./img/404.png" alt="" />
    `;
    return;
  }

};

window.addEventListener("load", getNews);
