let currentSong = new Audio()

function SecondsToMinutes(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invlaid duration"
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}

async function FetchSongs() {
    let directory = await fetch("http://127.0.0.1:5500/Songs/")
    let response = await directory.text()

    console.log(response)

    let div = document.createElement("div")
    div.innerHTML = response

    let a_tags = div.getElementsByTagName("a")

    let songs = []

    for (let index = 0; index < a_tags.length; index++) {
        const element = a_tags[index]
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/Songs/")[1])
        }
    }

    return songs
}

const PlayMusic = (track, pause = false) => {
    currentSong.src = "/Songs/" + track

    if (!pause) {
        currentSong.play()
        play.src = "SVG/Pause Song.svg"
    }

    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songDuration").innerHTML = "00:00 / 00:00"
}

async function main() {
    // Get the list of all the songs
    let songs = await FetchSongs()
    PlayMusic(songs[0], true)

    // Display the songs in 'Playlist' section
    let songList = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songList.innerHTML = songList.innerHTML + `<li> <img src="SVG/Music.svg" class="invert" alt="Music Icon">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>The Weeknd</div>
                            </div>
                            <div class="playNow">
                                <img src="SVG/Play Song.svg" class="invert" alt="Play Icon">
                            </div>
                        </li>`
    }

    // Event listener for each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            PlayMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    // Event listener for play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "SVG/Pause Song.svg"
        } else {
            currentSong.pause()
            play.src = "SVG/Play Song.svg"
        }
    })

    // 'timeupdate' event
    currentSong.addEventListener("timeupdate", () => {
        console.log(currentSong.currentTime, currentSong.duration)
        document.querySelector(".songDuration").innerHTML = `${SecondsToMinutes(currentSong.currentTime)} / ${SecondsToMinutes(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%"
    })

    // Event listener for the circle of seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percentage = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".circle").style.left = percentage + "%"
        currentSong.currentTime = ((currentSong.duration) * percentage) / 100
    })

    // Event listener for the Hamburger icon
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Event listener for the Close icon
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

}

main()