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

