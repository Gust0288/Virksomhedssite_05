const vin = document.querySelector("#vinKnap");
const cocktails = document.querySelector("#cocktailsKnap");
const snacks = document.querySelector("#snacksKnap");

const vinPdf = document.querySelector("#vinPdf");
const cocktailsPdf = document.querySelector("#cocktailsPdf");
const snacksPdf = document.querySelector("#snacksPdf");

    console.log("vis at du virker");
    hideAll();

    vin.addEventListener("click", vinMenu);
    cocktails.addEventListener("click", cocktailsMenu);
    snacks.addEventListener("click", snacksMenu);

function vinMenu(){
    console.log("Lad os være dumme på vin");
    hideAll();

    vin.removeEventListener("click", vinMenu);

    vinPdf.classList.remove("hide");

    cocktails.addEventListener("click", cocktailsMenu);
    snacks.addEventListener("click", snacksMenu);
}

function cocktailsMenu(){
    console.log("nu skal vi være rigtig fulde");
    hideAll();

    cocktails.removeEventListener("click", cocktailsMenu);

    cocktailsPdf.classList.remove("hide");

    vin.addEventListener("click", vinMenu);
    snacks.addEventListener("click", snacksMenu);
}

function snacksMenu(){
    console.log("var der nogen, der sagde mad");
    hideAll();

    snacks.removeEventListener("click", snacksMenu)

    snacksPdf.classList.remove("hide");

    vin.addEventListener("click", vinMenu);
    cocktails.addEventListener("click", cocktailsMenu);
}

function hideAll(){
    vinPdf.classList.add("hide");
    cocktailsPdf.classList.add("hide");
    snacksPdf.classList.add("hide");
}