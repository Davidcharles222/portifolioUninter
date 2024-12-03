/* Efeito apresentação dinamica e efeito balanço de foto */
const textDinamic = document.querySelector(".text-dinamic h1")
const textDinamicP = document.querySelector(".text-dinamic p")

window.addEventListener("load", () => {
  const text = "OLÁ, SOU DAVID! VENHA CONHECER MINHA HISTÓRIA E APROVEITAR O MELHOR DE MIM!";
  const letters = text.split("");

  let i = 0;

  setInterval(() => {
    if (i == letters.length) {
        textDinamicP.classList.add("show")
      return;
    } else {
      textDinamic.innerHTML += letters[i];
      i++;
    }
  }, 30);

});

/* Efeito vir da esquerda e aparecer quando estiver na section */
const elements = document.querySelectorAll(".hidden")

const myObserver = new IntersectionObserver((entries) => { // observar elementos

    entries.forEach((entry) => {
        if(entry.isIntersecting){ //se estiver parecendo na tela no momento

            entry.target.classList.add('show') // adiciona a classe

            // pegando elemento específico da classe pelo target
            const progressBar = entry.target.querySelector(".progress-bar")

            if(progressBar){
                progressBar.style.width = "0%" // esvazia o progressBar
            }
            
        }else{
            entry.target.classList.remove('show')

            // Reseta a barra de progresso para 100% quando o elemento sair da tela
            const progressBar = entry.target.querySelector(".progress-bar");
            if (progressBar) {
                progressBar.style.width = "100%"; // enche o progressBar
            }
        }
    })

})

elements.forEach((element) => {
    myObserver.observe(element)
})

/* Efeito botão do menu hamburguer */
const btnMenu = document.querySelector(".menu")
const navSecondari = document.querySelector(".nav-secondari")

btnMenu.addEventListener("click", (event) => {
  navSecondari.classList.add("show")
} )

navSecondari.addEventListener("click", () => {
  navSecondari.classList.remove("show")
})

document.addEventListener('click', (event) => {
  // Verifica se o clique ocorreu fora do menu e do botão de abrir
  if (!navSecondari.contains(event.target) && !menu.contains(event.target)) {
      navSecondari.classList.remove("show");
  }
});