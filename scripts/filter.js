
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
// objects

let elden = document.getElementById("elden-ring")
let sh2 = document.getElementById("sh2-remake")
let alan2 = document.getElementById("alan2")
let nier = document.getElementById("nier-automata")
let re4 = document.getElementById("re4-remake")
let ds1 = document.getElementById("dark-souls")
let halo3 = document.getElementById("halo3")
let bloodborne = document.getElementById("t-bloodborne")
let ittakestwo = document.getElementById("t-ittakestwo")
let ps5 = document.getElementById("ps5")
let xbox_x = document.getElementById("series-x")
let xbox_s = document.getElementById("series-s")
let switch_og = document.getElementById("switch-og")
let switch_oled = document.getElementById("switch-oled")
let pc_blackice = document.getElementById("black-ice-pc")

let items = [
    {contenedor: elden, stock: false, price: 69.95, orden: 0, nombre: "elden ring", new_order: 0},
    {contenedor: sh2, stock: true, price: 50.52, orden: 1, nombre: "silent hill 2", new_order: 0},
    {contenedor: alan2, stock: false, price: 45.95, orden: 2, nombre: "alan wake 2", new_order: 0},
    {contenedor: nier, stock: true, price: 32.43, orden: 3, nombre: "nier automata", new_order: 0},
    {contenedor: re4, stock: true, price: 43.25, orden: 4, nombre: "resident evil 4", new_order: 0},
    {contenedor: ds1, stock: true, price: 29.33, orden: 5, nombre: "dark souls", new_order: 0},
    {contenedor: halo3, stock: false, price: 15.16, orden: 6, nombre: "halo 3", new_order: 0},
    {contenedor: bloodborne, stock: true, price: 23.77, orden: 7, nombre: "bloodborne", new_order: 0},
    {contenedor: ittakestwo, stock: true, price: 18.99, orden: 8, nombre: "it takes two", new_order: 0},
    {contenedor: ps5, stock: false, price: 499.95, orden: 9, nombre: "ps5", new_order: 0},
    {contenedor: xbox_x, stock: true, price: 480.66, orden: 10, nombre: "xbox series x", new_order: 0},
    {contenedor: xbox_s, stock: true, price: 267.34, orden: 11, nombre: "xbox series s", new_order: 0},
    {contenedor: switch_og, stock: false, price: 279.69, orden: 12, nombre: "switch", new_order: 0},
    {contenedor: switch_oled, stock: true, price: 350.45, orden: 13, nombre: "switch oled", new_order: 0},
    {contenedor: pc_blackice, stock: false, price: 2450.98, orden: 14, nombre: "desktop pc black ice", new_order: 0}
]

for (let i of items){
    // set default order
    i.contenedor.style.order = i.orden
    
    // set prices
    let newText = document.getElementById(i.contenedor.id.toString() + "-price")
    newText.textContent = i.price.toString() + "€"
}


// sort functions
sortTest()
function sortTest(){
    items.sort(function(a,b){
        if (a.nombre < b.nombre){
            return -1
        }
        else if (a.nombre > b.nombre){
            return 1
        }
        else {
            return 0
        }
    })

    alert(items[0].nombre)
}

applyNewOrder()

function applyNewOrder(){
    let x = 0
    for (i of items){
        i.new_order = x

        x ++
    }

    for (let i of items){
        i.contenedor.style.order = i.new_order
    }
}

function reorderItems(){
    for (let i of items){
        // set default order
        i.contenedor.style.order = i.orden
    }
}

////////////////////////////////

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
    
    applyStoreChanges()
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
    let newRule 
    
    if (rule == "Survival Horror") rule = "survival-horror"
    if (rule != "stock") newRule = rule.toLowerCase()
    
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
        case "stock":
            // it's fine
        break;
        default:
            console.log("alterStoreContents ref invalid");
    }

    

    applyStoreChanges()

    //console.log("plat: " + rulePlat + " sis: " + ruleSis + " gen: " + ruleGen)
}

function applyStoreChanges(){
    let x = 0
    for (let i of contents){
        if (stockCheck && items[x] != null){
            if (items[x].stock && i.classList.contains(rulePlat) && i.classList.contains(ruleSis) && i.classList.contains(ruleGen) && items[x].price >= minPrice && items[x].price <= maxPrice) i.style.display = "block"
            else i.style.display = "none"
        }
        else{
            if (i.classList.contains(rulePlat) && i.classList.contains(ruleSis) && i.classList.contains(ruleGen) && items[x].price >= minPrice && items[x].price <= maxPrice) i.style.display = "block"
            else i.style.display = "none"
        }
        x ++
    }
}


// price stuff
let expNumber = /^\d+$/

let minPriceInput = document.getElementById("min-price")
let maxPriceInput = document.getElementById("max-price")

minPriceInput.addEventListener("keydown", function(e){
    let value = e.target.value
    if ((e.keyCode < 48 && keyCode != 8) || e.keyCode > 57){
        e.preventDefault()
    }
    
})

minPriceInput.addEventListener("keyup", function(e){
    minPriceInput.value = minPriceInput.value.replace(/^\s*|\s*$/g,'')
    minPrice = minPriceInput.value
    if (minPriceInput.value == "") minPrice = default_minPrice

    applyStoreChanges()
})

maxPriceInput.addEventListener("keydown", function(e){
    let value = e.target.value
    
    if ((e.keyCode < 48 && keyCode != 8) || e.keyCode > 57){
        e.preventDefault()
    }
})

maxPriceInput.addEventListener("keyup", function(e){
    maxPriceInput.value = maxPriceInput.value.replace(/^\s*|\s*$/g,'')
    maxPrice = maxPriceInput.value
    if (maxPriceInput.value == "") maxPrice = default_maxPrice

    applyStoreChanges()
})