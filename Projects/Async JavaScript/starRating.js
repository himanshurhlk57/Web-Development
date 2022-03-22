const stars = document.querySelector(".star-container");

stars.addEventListener("mouseover", (event) => {
  event.target.style.color = "#FFF89A";
});

// stars.addEventListener("mouseout", (event) => {
//     event.target.style.color = "gray";
//   });


  stars.addEventListener("click", (event) => {
    event.target.style.color = "yellow";
  });
  
