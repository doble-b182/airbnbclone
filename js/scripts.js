document.addEventListener("DOMContentLoaded", () => {
  //efecto deimagenes
  const imageHero = document.querySelector(".hero");
  //iniciar las variabls
  let i = 0;
  let tiempo = 0;

  //arreglo de imagenes
  const imagenes = ["arriba2.jpg", "arriba.jpg"];

  setInterval(() => {
    imageHero.style.backgroundPositionY = "-" + tiempo + "px";
    if (tiempo > 40) {
      tiempo = 0;
      imageHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";

      if (i === imagenes.length - 1) {
        i = 0;
      } else {
        i++;
        // console.log(i);
      }
    } else {
      tiempo += 1;
    }
    // console.log(tiempo);
  }, 100);

  //boton flotante en el footer
  const btnFlotante = document.querySelector(".btn-flotante");

  btnFlotante.addEventListener("click", (e) => {
    e.preventDefault();
    //prevenir el defoult y ejecuta el siguiente codigo
    const footer = document.querySelector(".footer");
    if (footer.classList.contains("activo")) {
      //si lo contiene ejecuta esto
      footer.classList.remove("activo");
      btnFlotante.classList.remove("activo");
      btnFlotante.innerText = "Idioma y Moneda";
    } else {
      // si no lo tiene
      footer.classList.add("activo");
      btnFlotante.classList.add("activo");
      btnFlotante.innerText = "X Cerrar";
    }
  });
});
