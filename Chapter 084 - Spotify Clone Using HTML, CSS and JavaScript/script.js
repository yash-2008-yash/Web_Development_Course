let currentSong = new Audio()
let currentFolder;
let songs;

console.log("SPOTIFY CLONE by Yashwanth M")

function SecondsToMinutes(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00"
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}

async function FetchSongs(folder) {
    currentFolder = folder
    let directory = await fetch(`http://127.0.0.1:5500/${folder}/`)
    let response = await directory.text()

    let div = document.createElement("div")
    div.innerHTML = response

    let a_tags = div.getElementsByTagName("a")

    songs = []

    for (let index = 0; index < a_tags.length; index++) {
        const element = a_tags[index]
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    // Display the songs in 'Playlist' section
    let songList = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songList.innerHTML = "" // To prevent appending the new songs into the old ones
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
            PlayMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
}

const PlayMusic = (track, pause = false) => {
    currentSong.src = `/${currentFolder}/` + track

    if (!pause) {
        currentSong.play()
        play.src = "SVG/Pause Song.svg"
    }

    document.querySelector(".songInfo").innerHTML = decodeURI(track)
    document.querySelector(".songDuration").innerHTML = "00:00 / 00:00"
}

// async function FetchAlbums() {
//     let directory = await fetch(`http://127.0.0.1:5500/Songs/`)
//     let response = await directory.text()

//     let div = document.createElement("div")
//     div.innerHTML = response

//     let anchors = div.getElementsByTagName("a")

//     Array.from(anchors).forEach(async e => {
//         if (e.href.includes("/Songs")) {
//             let folderName = e.href.split("/").slice(-2)[0]

// Fetching the metadata of the folder
//             let directory = await fetch(`http://127.0.0.1:5500/Songs/${folderName}/info.json`)
//             let response = await directory.json()

//             let cardContainer = document.querySelector(".card_container")

//             cardContainer.innerHTML = cardContainer.innerHTML +
//                 `<div data-folder="${folderName}" class="card">
//                     <div class="play">
//                         <img src="SVG/Green Play Button.svg" width="16px" alt="Play Button">
//                     </div>
//                     <img src="/Songs/${folderName}/cover.jpg" alt="Card">
//                     <h2>${response.title}</h2>
//                     <p class="font">${response.description}</p>
//                 </div>`
//         }
//     })

//     // Event listener for the card to load the playlist
//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         e.addEventListener("click", async item => {
//             songs = await FetchSongs(`Songs/${item.currentTarget.dataset.folder}`)
//         })
//     })
// }

async function FetchAlbums() {
    let res = await fetch("/Songs/albums.json")
    let folders = await res.json()

    let cardContainer = document.querySelector(".card_container")
    cardContainer.innerHTML = ""

    // Fetching the metadata of the folder
    for (let folder of folders) {
        let metaRes = await fetch(`/Songs/${folder}/info.json`)
        let meta = await metaRes.json()

        cardContainer.innerHTML += `
            <div data-folder="${folder}" class="card">
                <div class="play">
                    <img src="SVG/Green Play Button.svg" width="16px">
                </div>
                <img src="/Songs/${folder}/cover.jpg">
                <h2>${meta.title}</h2>
                <p class="font">${meta.description}</p>
            </div>`
    }

    // Event listener for the card to load the playlist
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", async () => {
            await FetchSongs(`Songs/${card.dataset.folder}`)
        })
    })
}

async function main() {
    // Get the list of all the songs
    await FetchSongs("Songs/new")
    PlayMusic(songs[0], true)

    // Displaying all the albums
    FetchAlbums()

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

    // Event listener for the Next icon
    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

        if ((index - 1) >= 0) {
            PlayMusic(songs[index - 1])
        }
    })

    // Event listener for the Previous icon
    next.addEventListener("click", () => {
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

        if ((index + 1) < songs.length) {
            PlayMusic(songs[index + 1])
        }
    })

    // Event listener for the Volume icon
    document.querySelector(".volumeRange").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100
    })

    // Event listener for the Volume icon to become mute
    document.querySelector(".volumeBar > img").addEventListener("click", e => {
        if (e.target.src.includes("SVG/Volume.svg")) {
            e.target.src = e.target.src.replace("SVG/Volume.svg", "SVG/Mute.svg")
            currentSong.volume = 0
            document.querySelector(".volumeRange").getElementsByTagName("input")[0].value = 0
        } else {
            e.target.src = e.target.src.replace("SVG/Mute.svg", "SVG/Volume.svg")
            currentSong.volume = 0.1
            document.querySelector(".volumeRange").getElementsByTagName("input")[0].value = 10
        }
    })
}

main()