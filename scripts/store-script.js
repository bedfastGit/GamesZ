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
let positionBg = bg.style.backgroundPosition
let mult = 0.001
bg.style.backgroundPositionY = "-20em"
let curpos = -20
window.addEventListener("scroll", function(){
    //this.alert(this.window.scrollY) 
    let newpos = curpos + this.window.scrollY * mult
    //this.alert(newpos)
    
    if (newpos < -20) newpos = -20
    else if (newpos > 0) newpos = 0

    curpos = newpos
    bg.style.backgroundPositionY = newpos + "em"
})

// end of parallax