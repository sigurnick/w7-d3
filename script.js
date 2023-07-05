

const getBooksData = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new error("Errore nel then");
      }
    })
    .then((data) => {
      console.log(data);
      let rowDiv = document.getElementById("row");

      data.forEach((element, index) => {
        let newCard = document.createElement("div");
        newCard.classList.add(
          "bg-[rgb(200,196,183)]",
          "rounded-lg",
          "shadow-xl",
          "hover:scale-105",
          "flex",
          "flex-col",
          "justify-between"
        );

        newCard.innerHTML = `
          
            <div><img class="rounded-t-lg" src="${element.img}" alt=""></div>
   
            <div class="h-full flex flex-col justify-between p-3">
                <h3 class="text-xl font-bold mb-2">${element.title}</h3>
                <h5 class="font-light text-lg">${element.price}€</h5>
                <div>
                <button class="card-btn bg-[rgb(95,63,77)] py-2 px-4 rounded-lg text-lg hover:bg-[rgb(77,37,54)]">Scarta</button>
                <button class="buy-button bg-[rgb(95,63,77)] py-2 px-4 rounded-lg text-lg hover:bg-[rgb(77,37,54)]">Compra</button>
                </div>
            </div> 
     
            `;
        rowDiv.appendChild(newCard);
      });

      //   -----|Delete card|-----
      const button = document.querySelectorAll(".card-btn");
      button.forEach((btn) => {
        btn.addEventListener("click", function (e) {
          e.target.parentElement.parentElement.parentElement.remove();
        });
      });



      //-----|Add book to chart|-----
      const buttonBuy = document.querySelectorAll(".buy-button");
      const ulChart = document.querySelector("ul");
      const existingLocalChart = localStorage.getItem("chart")
        const existingLocalChartArr = JSON.parse(existingLocalChart)



const createList = function (){
    //ciclo tutto l'array local storage e creo gli li
    if(existingLocalChart)
    {

        ulChart.innerText = ''
        existingLocalChartArr.forEach((e)=>{
            //new li
        let newLi = document.createElement("li");
        newLi.classList.add("p-1");
        newLi.innerHTML = `
        ${e.title} - ${e.price}
        `;
        ulChart.appendChild(newLi);
        
        })
    }

}
createList()





      //ciclo bottoni compra
      buttonBuy.forEach((btn, index) => {
        btn.addEventListener("click", function (e) {
          console.log(index);
          console.log(data[index]);

          const localChart = localStorage.getItem("chart"); //stringa
          if (localChart) {
            const localChartArr = JSON.parse(localChart); //array (contiene tutto quello che ho nel local storage)
            localChartArr.push(data[index]);
            localStorage.setItem("chart", JSON.stringify(localChartArr));
            console.log(localChartArr);



            //ciclo tutto l'array local storage e creo gli li
            ulChart.innerText = ''
            localChartArr.forEach((e)=>{
                //new li
            let newLi = document.createElement("li");
            newLi.classList.add("p-1");
            newLi.innerHTML = `
            ${e.title} - ${e.price}
            `;
            ulChart.appendChild(newLi);

            })
          
          } else {
            const chart = []
            chart.push(data[index]);
            localStorage.setItem("chart", JSON.stringify(chart));
           
            //new li
            let newLi = document.createElement("li");
            newLi.classList.add("p-1");
            newLi.innerHTML = `
            ${data[index].title} - ${data[index].price}
            `;
            ulChart.appendChild(newLi);
          }

          
        });
      });
    })
    .catch((err) => {
      console.log("Errore");
    });
};

getBooksData();
