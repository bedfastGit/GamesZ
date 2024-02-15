
// variables globales para gestionar el filtro
// importante

let plataforma = "all", default_plataforma = "all"
let plataformaTextContent = document.getElementById("plat-text")

let sistema = "all", default_sistema = "all"
let sistemaTextContent = document.getElementById("sist-text")

let genero = "all", default_genero = "all"
let generoTextContent = document.getElementById("gen-text")

let ordenar = "default", default_ordenar = "default"
let ordenarTextContent = document.getElementById("sort-text")

// price bracket
let minPrice = 0.00, default_minPrice = 0.00
let maxPrice = 10000.00, default_maxPrice = 10000.00
let minPriceTextArea = document.getElementById("min-price")
let maxPriceTextArea = document.getElementById("max-price")

// stock
let stockCheck = false, default_stockCheck = false
let tick = document.getElementById("tick")

// contenidos de la tienda
let contents = document.getElementsByClassName("content-div")

///////////////////////////


let toggleDisplayType = "flex"

function toggleDropdown(target){
    let mytarget = document.getElementById(target)

    if (mytarget.style.display == toggleDisplayType) mytarget.style.display = "none"
    else mytarget.style.display = toggleDisplayType
}

// array con todos los elementos dropdown
let drops = document.getElementsByClassName("top-filter-item")
let lis = document.getElementsByClassName("li")

window.addEventListener("mousedown", function(e){
    if (checkId(e.target.id, drops)){
        let clicked = e.target.id
        for (let i of drops){
            let target = this.document.getElementById("drop-" + i.id)
            //console.log(target + " id: " + target.id + " dis: " + target.style.display)
            if (target != null && i.id != clicked && target.style.display == toggleDisplayType) toggleDropdown(target.id) 
        }
    }
})

function checkId(input, array){
    let resolution = false
    for (let i of array){
        if (i.id == input) resolution = true
    }

    return resolution
}

function resetFilters(){
    // restore initial values
    plataforma = default_plataforma
    sistema = default_sistema
    genero = default_genero
    ordenar = default_ordenar
    minPrice = default_minPrice
    maxPrice = default_maxPrice
    stockCheck = default_stockCheck

    // restore visual elements
    
    // plataforma
    plataformaTextContent.textContent = "Plataforma"

    // sistema
    sistemaTextContent.textContent = "Sistema"

    // genero
    generoTextContent.textContent = "Género"

    // ordenar
    ordenarTextContent.textContent = "Ordenar"

    // price brackets
    minPriceTextArea.value = ""
    maxPriceTextArea.value = ""

    // stock
    tick.style.display = "none"

    // store contents
    alterStoreContents("content-div", "all")
}

function stockCheckBox(){
    stockCheck = !stockCheck
    toggleDropdown("tick")
}

function liPressed(parentId, contentDiv, value){
    toggleDropdown(parentId)
    document.getElementById(contentDiv).textContent = value

    // llamamos a la funcion que se encargara de actualizar 
    // los contenidos de la tienda en base al cambio
    // en los filtros
    if (parentId != "drop-sort") alterStoreContents(value, parentId)

    switch(parentId){
        case "drop-plat":
            plataforma = value
        break;
        case "drop-sist":
            sistema = value
        break;
        case "drop-gen":
            genero = value
        break;
        case "drop-sort":
            ordenar = value
        break;
        default:
            console.log("parentId undefined or null");
    }
}

/*
let test = document.getElementById("t-bloodborne")
let test2 = document.getElementById("t-ittakestwo")
test.style.order = 1
test2.style.order = 0
*/


let rulePlat = "content-div"
let ruleSis = "content-div"
let ruleGen = "content-div"

function alterStoreContents(rule, ref){
    if (rule == "Survival Horror") rule = "survival-horror"
    let newRule = rule.toLowerCase()
    
    switch (ref){
        case "all":
            rulePlat = "content-div"
            ruleSis = "content-div"
            ruleGen = "content-div"
        break;
        case "drop-plat":
            rulePlat = newRule
        break;
        case "drop-sist":
            ruleSis = newRule
        break;
        case "drop-gen":
            ruleGen = newRule
        break;
        default:
            console.log("alterStoreContents ref invalid");
    }

    for (let i of contents){
        if (i.classList.contains(rulePlat) && i.classList.contains(ruleSis) && i.classList.contains(ruleGen)) i.style.display = "block"
        else i.style.display = "none"
    }
    console.log("plat: " + rulePlat + " sis: " + ruleSis + " gen: " + ruleGen)
}