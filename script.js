const month = document.getElementById('month');
const loading = document.getElementById('loading');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const currentYear = new Date().getFullYear(); // current Year
const quitTime = new Date(`August 10 ${currentYear} 00:00:00`);
let muteIcon = document.getElementById('mute-icon');
let mute = document.getElementById('mute');
let audio = document.querySelector('audio'); //audio

let toggle = button => {
    let hidden = audio.getAttribute("hidden");

    if (hidden) {
        audio.removeAttribute("hidden");
        button.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        audio.setAttribute("hidden", "hidden");
        button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}

// Background year refresh
month.textContent = "August 10 ";


function updateCountdown() {
    const currentTime = new Date();
    const diff = quitTime - currentTime

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    // total hours in a year % 24 = hoursleft in day
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;

}


// Remove loading spinner after 1 second and display time

setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

setInterval(updateCountdown, 1000)