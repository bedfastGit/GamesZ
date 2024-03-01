// handeling video playback on 
// item thumbnails

let pics = document.getElementsByClassName("play-img")
let vids = document.getElementsByClassName("vid-thumbnail")

for (let i of pics){
    if (!i.classList.contains("no-vid")){
        i.addEventListener("mouseover", function(e){
            let target = i.parentElement
            playvid(target)
        })
    }
}

for (let i of vids){
    if (!i.classList.contains("no-vid")){
        i.addEventListener("mouseout", function(e){
            let target = i.parentElement
            pausevid(target)
        })
    }
}

function playvid(e){
    //let mypic = document.getElementById(pic)
    //let myvid = document.getElementById(vid)
    //alert(e)
    let parent_mypic = e
    let parent_myvid = parent_mypic.nextElementSibling
    
    let mypic = parent_mypic.firstChild
    let myvid = parent_myvid.firstChild
    let discount_pic = mypic.nextElementSibling

    //alert(mypic + myvid)
    if (discount_pic != null) discount_pic.style.display = "none"
    mypic.style.display = "none"
    myvid.style.display = "flex"

    myvid.load()
    myvid.play()
    //alert("playing")
}

function pausevid (e){
    //alert("mouse out")
    //let mypic = document.getElementById(pic)
    //let myvid = document.getElementById(vid)

    let parent_myvid = e
    let parent_mypic = parent_myvid.previousElementSibling

    let myvid = parent_myvid.firstChild
    let mypic = parent_mypic.firstChild
    let discount_pic = mypic.nextElementSibling

    if (discount_pic != null) discount_pic.style.display = "flex"
    mypic.style.display = "flex"
    myvid.style.display = "none"

    myvid.currentTime = 0
    myvid.pause()
}

// end of thumbnails

// background parallax effect

let bg = document.getElementById("bg")
let bg2 = document.getElementById("under-hardware")
let bgs = document.getElementsByClassName("banner-store")
let positionBg
if (bg != null) positionBg = bg.style.backgroundPosition
let sumDonw = 0.02
const initialOffset = -24
const initialOffset2 = -28
const upperLimit = -8
const upperLimit2 = -18

// cambiamos la posicion y de cada banner
if (bg != null) bg.style.backgroundPositionY = initialOffset + "em"
if (bg2 != null) bg2.style.backgroundPositionY = initialOffset2 + "em"

let curpos = initialOffset
let curpos2 = initialOffset2

let prevScroll = window.scrollY
let scrollDir
let allowScrollDown = true

// set scroll direction
window.onscroll = function(){
    if (prevScroll < window.scrollY) scrollDir = "Down"
    else if (prevScroll > window.scrollY) scrollDir = "Up"
    else console.log("something wrong with scrolly dir")

    prevScroll = window.scrollY
    if (prevScroll > 600) allowScrollDown = false
    else allowScrollDown = true

    //alert(prevScroll + " // " + allowScrollDown)
}

let newpos = curpos
let newpos2 = curpos2
// manage parallax
window.addEventListener("scroll", function(){
    //this.alert(this.window.scrollY) 
    if (scrollDir === "Down"){
        newpos = curpos + sumDonw
        newpos2 = curpos2 + sumDonw
        console.log("bajamos")
    }
    else if (scrollDir == "Up"){
        newpos = curpos - sumDonw
        newpos2 = curpos2 - sumDonw
        console.log("subimos")
    }
    //else console.log("-600")
    

    //this.alert(newpos)
    
    // limit banner1 Ypos
    if (newpos < initialOffset) newpos = initialOffset
    else if (newpos > upperLimit) newpos = upperLimit

    // limit banner2 Ypos
    if (newpos2 < initialOffset2) newpos2 = initialOffset2
    else if (newpos2 > upperLimit2) newpos2 = upperLimit2

    // update curpos
    curpos = newpos
    curpos2 = newpos2

    // set new positions

    console.log(newpos2, newpos)
    if (bg != null) bg.style.backgroundPositionY = newpos + "em"
    if (bg2 != null) bg2.style.backgroundPositionY = newpos2 + "em"
})



// end of parallax

