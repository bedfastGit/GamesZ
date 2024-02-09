// handeling video playback on 
// item thumbnails


function playvid (pic, vid){
    let mypic = document.getElementById(pic)
    let myvid = document.getElementById(vid)

    mypic.style.display = "none"
    myvid.style.display = "flex"

    myvid.load()
    myvid.play()
    //alert("playing")
}

function pausevid (pic, vid){
    //alert("mouse out")
    let mypic = document.getElementById(pic)
    let myvid = document.getElementById(vid)

    mypic.style.display = "flex"
    myvid.style.display = "none"

    myvid.currentTime = 0
    myvid.pause()
}

// end of thumbnails

// background parallax effect

let bg = document.getElementById("bg")
let bgs = document.getElementsByClassName("banner-store")
let positionBg = bg.style.backgroundPosition
let sumDonw = 0.02
let sumUp = 0.04



bg.style.backgroundPositionY = "-20em"
let curpos = -20

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

// manage parallax
window.addEventListener("scroll", function(){
    //this.alert(this.window.scrollY) 
    let newpos
    if (scrollDir === "Down"){
        newpos = curpos + sumDonw
        console.log("bajamos")
    }
    else if (scrollDir == "Up"){
        newpos = curpos - sumUp
        console.log("subimos")
    }
    //else console.log("-600")
    

    //this.alert(newpos)
    
    if (newpos < -20) newpos = -20
    else if (newpos > -17) newpos = -17

    curpos = newpos
    bg.style.backgroundPositionY = newpos + "em"
})



// end of parallax