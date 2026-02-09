(function() {
    emailjs.init("-E_Grtp5OAcV6rgde"); 
})();

const initialBtn = document.getElementById('initial-btn');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const flashOverlay = document.getElementById('flash-overlay');
const body = document.body;
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const successScreen = document.getElementById('success-screen');
const music = document.getElementById('bg-music'); 

let noClicks = 0;
let yesScale = 1;
let noScale = 1;

initialBtn.addEventListener('click', () => {
    initialBtn.style.display = 'none';
    flashOverlay.classList.add('run-flash');
    setTimeout(() => {
        body.classList.add('glow-pink');
        envelopeWrapper.style.display = 'block';
    }, 1500);
    setTimeout(() => {
        envelopeWrapper.classList.add('open');
    }, 3000);
});

(function() {
    emailjs.init("-E_Grtp5OAcV6rgde"); 
})();

initialBtn.addEventListener('click', () => {
    initialBtn.style.display = 'none';
    flashOverlay.classList.add('run-flash');
    
    setTimeout(() => {
        body.classList.add('glow-pink');
        envelopeWrapper.style.display = 'block';
    }, 1500);

    setTimeout(() => {
        envelopeWrapper.classList.add('open');
        music.volume = 0;
        music.play();
    
        let vol = 0;
        let interval = setInterval(() => {
            if (vol < 0.5) { 
                vol += 0.05;
                music.volume = vol;
            } else {
                clearInterval(interval);
            }
        }, 200);

    }, 3000);
});


noBtn.addEventListener('click', () => {
    noClicks++;
    noScale -= 0.15;
    noBtn.style.transform = `scale(${noScale})`;
    yesScale += 0.4;
    yesBtn.style.transform = `scale(${yesScale})`;
    
    if (noClicks >= 5) {
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';
    }
});

yesBtn.addEventListener('click', () => {
    const serviceID = "service_5ipec2l";
    const templateID = "template_apxieuf";

    const templateParams = {
        status: "Accepted",
        message: "They clicked YES on the letter! ❤️"
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            console.log('Confirmation email sent successfully!');
        }, (err) => {
            console.error('Email failed to send...', err);
            alert("I love you my baby :>");
        });
    successScreen.style.display = 'flex';
});