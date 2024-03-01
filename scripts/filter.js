
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

// x filter marks
let crosses = document.getElementsByClassName("x-container")

///////////////////////////
// objects
/*
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
    {contenedor: elden, stock: false, price: 69.95, orden: 0, nombre: "elden ring", new_order: 0, tags: "content-div playstation xbox pc juegos souls-like aventura cooperativo"},
    {contenedor: sh2, stock: true, price: 50.52, orden: 1, nombre: "silent hill 2", new_order: 0, tags: "content-div playstation pc juegos survival-horror"},
    {contenedor: alan2, stock: false, price: 45.95, orden: 2, nombre: "alan wake 2", new_order: 0, tags: "content-div playstation xbox pc juegos survival-horror aventura"},
    {contenedor: nier, stock: true, price: 32.43, orden: 3, nombre: "nier automata", new_order: 0, tags: "content-div playstation xbox nintendo pc juegos aventura"},
    {contenedor: re4, stock: true, price: 43.25, orden: 4, nombre: "resident evil 4", new_order: 0, tags: "content-div playstation xbox pc juegos survival-horror aventura"},
    {contenedor: ds1, stock: true, price: 29.33, orden: 5, nombre: "dark souls", new_order: 0, tags: "content-div playstation xbox pc nintendo juegos cooperativo souls-like aventura"},
    {contenedor: halo3, stock: false, price: 15.16, orden: 6, nombre: "halo 3", new_order: 0, tags: "content-div xbox pc juegos shooter cooperativo"},
    {contenedor: bloodborne, stock: true, price: 23.77, orden: 7, nombre: "bloodborne", new_order: 0, tags: "content-div playstation pc juegos souls-like cooperativo aventura"},
    {contenedor: ittakestwo, stock: true, price: 18.99, orden: 8, nombre: "it takes two", new_order: 0, tags: "content-div nintendo pc xbox juegos cooperativo aventura"},
    {contenedor: ps5, stock: false, price: 499.95, orden: 9, nombre: "ps5", new_order: 0, tags: "content-div playstation consolas"},
    {contenedor: xbox_x, stock: true, price: 480.66, orden: 10, nombre: "xbox series x", new_order: 0, tags: "content-div xbox consolas"},
    {contenedor: xbox_s, stock: true, price: 267.34, orden: 11, nombre: "xbox series s", new_order: 0, tags: "content-div xbox consolas"},
    {contenedor: switch_og, stock: false, price: 279.69, orden: 12, nombre: "nintendo switch", new_order: 0, tags: "content-div nintendo consolas handheld"},
    {contenedor: switch_oled, stock: true, price: 350.45, orden: 13, nombre: "nintendo switch oled", new_order: 0, tags: "content-div nintendo consolas handheld"},
    {contenedor: pc_blackice, stock: false, price: 2450.98, orden: 14, nombre: "desktop pc black ice", new_order: 0, tags: "content-div pc sobremesa"}
]

for (let i of items){
    // set default order
    i.contenedor.style.order = i.orden
    
    // set prices
    let newText = document.getElementById(i.contenedor.id.toString() + "-price")
    newText.textContent = i.price.toString() + "€"
}
*/
// sort functions

let items = []



// alphabetical sort
function sortItems(){
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
}

// numeric sort
function numericSortItems(){
    items.sort(function(a,b){
        return b.price - a.price
    })
}


function applyNewOrder(){
    let x = 0
    // cambiamos el orden de los objetos del array
    for (i of items){
        i.new_order = x
        x ++
    }

    // sincronizamos su posicion en la tienda con 
    // su nueva posicion en el array
    for (let i of items){
        i.contenedor.style.order = i.new_order
    }
}

function setDefaultOrder(){
    for (let i of items){
        // set default order
        i.contenedor.style.order = i.orden
    }
}

// llamamos a esta funcion al cambiar el filtro de orden
function alterOrder(value){
    switch(value){
        case "Precio Asc.":
            numericSortItems()
            items.reverse()
            applyNewOrder()
        break;
        case "Precio Desc.":
            numericSortItems()
            applyNewOrder()
        break;
        case "A - Z":
            sortItems()
            applyNewOrder()
        break;
        case "Z - A":
            sortItems()
            items.reverse()
            applyNewOrder()
        break;
        default: console.log("alter order value unexpected");
    }
}

////////////////////////////////

let toggleDisplayType = "flex"

function toggleDropdown(target){
    let mytarget = document.getElementById(target)

    if (mytarget.style.display == toggleDisplayType) mytarget.style.display = "none"
    else mytarget.style.display = toggleDisplayType

    hideSlides(target)
}

// array con todos los elementos dropdown
let drops = document.getElementsByClassName("top-filter-item")
let lis = document.getElementsByClassName("li")

let dropLists = []

// add elements to the array
fillDropLists()
function fillDropLists(){
    let x = 0
    for (let i of drops) {
        if (x <= 3)dropLists[x] = document.getElementById("drop-" + i.id)
        x ++
    }
}

window.addEventListener("mousedown", function(e){
    
    switch(e.target.id){
        case "plat":
            hideSlides("drop-plat")
        break;
        case "sist":
            hideSlides("drop-sist")
        break;
        case "gen":
            hideSlides("drop-gen")
        break;
        case "sort":
            hideSlides("drop-sort")
        break;
        case "":
            hideSlides("")
        break;
    }
    //if (e.target.id == "plat" || e.target.id == "sist" || e.target.id == "gen" || e.target.id == "sort"){
        //let clicked = e.target.id
        /*
        for (let i of drops){
            let target = this.document.getElementById("drop-" + i.id)
            //console.log(target + " id: " + target.id + " dis: " + target.style.display)
            //if (target != null && i.id != clicked && target.style.display == toggleDisplayType) toggleDropdown(target.id) 
            target.style.display = "none"

            //checkId(e.target.id, drops)
        }
        */  
    //}
})

function hideSlides(exception){
    for (let i of dropLists){
        if (i.id != exception) i.style.display = "none"
    }
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

    for (let i of crosses){
        i.style.display = "none"
    }

    // price brackets
    minPriceTextArea.value = ""
    maxPriceTextArea.value = ""

    // stock
    tick.style.display = "none"

    // store contents
    alterStoreContents("content-div", "all")
    setDefaultOrder()
}

function stockCheckBox(){
    stockCheck = !stockCheck
    toggleDropdown("tick")
    
    applyStoreChanges()
}

function liPressed(parentId, contentDiv, value){
    toggleDropdown(parentId)
    document.getElementById(contentDiv).textContent = value

    switch(parentId){
        case "drop-plat":
            plataforma = value
            // show cross mark
            showCross("cross-plat", "block")
        break;
        case "drop-sist":
            sistema = value
            // show cross mark
            showCross("cross-sist", "block")
        break;
        case "drop-gen":
            genero = value
            // show cross mark
            showCross("cross-gen", "block")
        break;
        case "drop-sort":
            ordenar = value
            // show cross mark
            showCross("cross-sort", "block")
        break;
        default:
            console.log("parentId undefined or null");
    }

    // llamamos a la funcion que se encargara de actualizar 
    // los contenidos de la tienda en base al cambio
    // en los filtros
    if (parentId != "drop-sort") alterStoreContents(value, parentId)
    else if (parentId == "drop-sort") alterOrder(value)
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

/*
for (let i of items){
    alert("nombre: " + i.nombre + ", precio: " + i.price)
}
*/

function applyStoreChanges(){
    for (let i of items){
        if (stockCheck){
            if (i.stock && i.tags.includes(rulePlat) && i.tags.includes(ruleSis) && i.tags.includes(ruleGen) && i.price >= minPrice && i.price <= maxPrice) i.contenedor.style.display = "block"
            else i.contenedor.style.display = "none"
        }
        else{
            if (i.tags.includes(rulePlat) && i.tags.includes(ruleSis) && i.tags.includes(ruleGen) && i.price >= minPrice && i.price <= maxPrice) i.contenedor.style.display = "block"
            else i.contenedor.style.display = "none"
        }
    }
}

// backup for original applystorechanges
function applyStoreChangesBak(){
    let x = 0
    for (let i of contents){
        if (stockCheck){
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

if (minPriceInput != null){
    minPriceInput.addEventListener("keydown", function(e){
        let value = e.target.value
        if ((e.keyCode < 48 && keyCode != 8) || e.keyCode > 57){
            e.preventDefault()
        }
        
    })
}

if (minPriceInput != null){
    minPriceInput.addEventListener("keyup", function(e){
        minPriceInput.value = minPriceInput.value.replace(/^\s*|\s*$/g,'')
        minPrice = minPriceInput.value
        if (minPriceInput.value == "") minPrice = default_minPrice

        applyStoreChanges()
    })
}

if (maxPriceInput != null){
    maxPriceInput.addEventListener("keydown", function(e){
        let value = e.target.value
        
        if ((e.keyCode < 48 && keyCode != 8) || e.keyCode > 57){
            e.preventDefault()
        }
    })
}

if (maxPriceInput != null){
    maxPriceInput.addEventListener("keyup", function(e){
        maxPriceInput.value = maxPriceInput.value.replace(/^\s*|\s*$/g,'')
        maxPrice = maxPriceInput.value
        if (maxPriceInput.value == "") maxPrice = default_maxPrice

        applyStoreChanges()
    })
}
// crosses management
function xtreme(in_id){
    switch (in_id){
        case "drop-plat":
            plataforma = default_plataforma
            plataformaTextContent.textContent = "Plataforma"
            alterStoreContents("content-div", in_id)
            // hide cross mark
            showCross("cross-plat", "none")
        break;
        case "drop-sist":
            sistema = default_sistema
            sistemaTextContent.textContent = "Sistema"
            alterStoreContents("content-div", in_id)
            // hide cross mark
            showCross("cross-sist", "none")
        break;
        case "drop-gen":
            genero = default_genero
            generoTextContent.textContent = "Género"
            alterStoreContents("content-div", in_id)
            // hide cross mark
            showCross("cross-gen", "none")
        break;
        case "drop-sort":
            setDefaultOrder()
            applyStoreChanges()
            ordenarTextContent.textContent = "Ordenar"
            // hide cross mark
            showCross("cross-sort", "none")
        break;
    }
}

function showCross(id_in, action){
    for (let i of crosses){
        if (i.id == id_in) i.style.display = action
    }
}

//

