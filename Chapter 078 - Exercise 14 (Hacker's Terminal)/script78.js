async function hackingSimulation() {
    try {
        const delay1 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
        const delay2 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
        const delay3 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
        const delay4 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000
        const delay5 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000

        const blinkIntervals = {}

        function startBlinkingDots(elementID, baseText, speed = 350) {
            const element = document.getElementById(elementID)

            if (blinkIntervals[elementID]) {
                clearInterval(blinkIntervals[elementID])
            }

            let dotCount = 0
            element.textContent = baseText
            const id = setInterval(() => {
                dotCount = (dotCount + 1) % 4
                element.textContent = baseText + ".".repeat(dotCount)
            }, speed)

            blinkIntervals[elementID] = id
            return id
        }

        function stopBlinking(elementID, finalText) {
            const element = document.getElementById(elementID)
            if (blinkIntervals[elementID]) {
                clearInterval(blinkIntervals[elementID])
                delete blinkIntervals[elementID]
            }
            if (element)
                element.textContent = finalText
        }

        function msg1() {
            return new Promise((resolve) => {
                startBlinkingDots("message1", "Initializing Hacking");
                setTimeout(() => {
                    stopBlinking("message1", "Initializing Hacking...");
                    resolve();
                }, delay1);
            });
        }

        function msg2() {
            return new Promise((resolve) => {
                startBlinkingDots("message2", "Reading all the files");
                setTimeout(() => {
                    stopBlinking("message2", "Reading all the files...");
                    resolve();
                }, delay2);
            });
        }

        function msg3() {
            return new Promise((resolve) => {
                startBlinkingDots("message3", "Password encryption cracked");
                setTimeout(() => {
                    stopBlinking("message3", "Password encryption cracked...");
                    resolve();
                }, delay3);
            });
        }

        function msg4() {
            return new Promise((resolve) => {
                startBlinkingDots("message4", "Sending all your files to the server");
                setTimeout(() => {
                    stopBlinking("message4", "Sending all your files to the server...");
                    resolve();
                }, delay4);
            });
        }

        function msg5() {
            return new Promise((resolve) => {
                startBlinkingDots("message5", "Cleaning up");
                setTimeout(() => {
                    stopBlinking("message5", "Cleaning up...");
                    resolve();
                }, delay5);
            });
        }

        function result() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    document.getElementById("result").innerHTML = "Hacking Complete."
                    resolve()
                }, 2000)
            })
        }

        await msg1()
        await msg2()
        await msg3()
        await msg4()
        await msg5()
        await result()
    }

    catch (error) {
        console.error("Error: ", error)
    }
}

hackingSimulation()