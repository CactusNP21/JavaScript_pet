document.addEventListener("keydown", function main(e){
    if (e.code === "KeyA"){
        let audio = new Audio('A.mp3')
        audio.play()
    }
    else if (e.code === "KeyS") {
        let audio = new Audio('S.mp3')
        audio.play()
    }
    else if (e.code === "KeyD") {
        let audio = new Audio('D.mp3')
        audio.play()
    }
    else if (e.code === "KeyF") {
        let audio = new Audio('F.mp3')
        audio.play()
    }
    else if (e.code === "KeyG") {
        let audio = new Audio('G.mp3')
        audio.play()
    }
    else if (e.code === "KeyH"){
        let audio = new Audio('H.mp3')
        audio.play()
    }
    else if (e.code === "KeyJ") {
        let audio = new Audio('J.mp3')
        audio.play()
    }


    else if (e.code === "KeyW") {
        let audio = new Audio('W.mp3')
        audio.play()
    }
    else if (e.code === "KeyE") {
        let audio = new Audio('E.mp3')
        audio.play()
    }
    else if (e.code === "KeyT") {
        let audio = new Audio('T.mp3')
        audio.play()
    }
    else if (e.code === "KeyY") {
        let audio = new Audio('Y.mp3')
        audio.play()
    }
    else if (e.code === "KeyU") {
        let audio = new Audio('U.mp3')
        audio.play()
    }


    else {
        console.warn("NO BUTTON")
    }
})