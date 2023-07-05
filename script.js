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

      data.forEach((element,index) => {
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
                <h5 class="font-semibold text-lg">${element.price}€</h5>
                <div>
                <button class="card-btn bg-[rgb(95,63,77)] py-2 px-4 rounded-lg text-lg hover:bg-[rgb(77,37,54)]">Scarta</button>
                <button class="buy-button bg-[rgb(95,63,77)] py-2 px-4 rounded-lg text-lg hover:bg-[rgb(77,37,54)]">Compra</button>
                </div>
            </div> 
     
            `;
        rowDiv.appendChild(newCard);

        const button = document.querySelectorAll('.card-btn')
      //elimino la card cliccata  
        button.forEach((btn)=>{
            btn.addEventListener('click',function(e){
                e.target.parentElement.parentElement.parentElement.remove()
            })
        })




        const buttonBuy = document.querySelectorAll('.boy-button')
      
        buttonBuy.forEach((btn)=>{
            btn.addEventListener('click',function(e){
                
            })
        })


       
      });
    })
    .catch((err) => {
      console.log("Errore");
    });
};

getBooksData();





