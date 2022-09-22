// <!-- https://jsonplaceholder.typicode.com/posts?&_limit=20 -->
//posts?_page=7
//BUSCA EL LA PAGINA EL POST DE LA PAGINA 7
//posts?_page= 7&_limit=20
//DENTRO DE LA PAGINA 7 ME LIMITAS A LOS 20 POSTS

// funcion para obtener data
// 2.
// funcion para renderizar data dentro del programa -->

// <!-- funcion asincronica  -->
// async function getData() {
//   const urldata = "https://jsonplaceholder.typicode.com/posts";
//   try {
//     let response = await fetch(urldata);
//       return await response.json;
//       console.log (respone);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData(

// )

async function getData() {
  const urldata = ["https://jsonplaceholder.typicode.com/posts?_limit=3"];
  try {
    let response = await fetch(urldata);
    return await response.json();
  } catch (error) {
    //    console.log(error);
  }
}
// getData()

async function renderData() {
  let dataInfo = await getData();
  console.log(dataInfo);
  let boxInfo = "";

  dataInfo.forEach((item) => {
    let box = `
                <div class="project-desc">
                <img class="img-project" src="/projects-section/${
                  item.id
                }.jpg" alt="Project image">
                <h4>${item.title.slice(0, 10)}</h4>
                <p>${item.body}</p>
                <a href="#" class="learn-more">Learn More</a>
            </div>`;
    return (boxInfo += box);
  });

  console.log(boxInfo);
  let projects = (document.querySelector(".projects").innerHTML = boxInfo);
  return projects;
}
renderData();
