play = (e) => {
    console.log(e);
    // Select the audio element corresponding to the pressed key.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Select the corresponding li tag.
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);

    if (audio) {
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        if (key) {
            key.classList.add('play'); // Add 'play' class to the key element
        }
    }
};

pause = (e) => {
    // Select the audio element corresponding to the pressed key.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Select the corresponding li tag.
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);

    if (audio) {
        audio.pause();
        if (key) {
            key.classList.remove('play'); // Remove 'play' class from the key element
        }
    }
};

// Add event listeners for keydown and keyup on the window object.
window.addEventListener('keydown', play);
window.addEventListener('keyup', pause);
