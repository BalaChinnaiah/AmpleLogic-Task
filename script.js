const startButton = document.getElementById('startButton');
const offcanvas = document.getElementById('offcanvas');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');
const toggleButton = document.getElementById('toggleButton');
const successPopup = document.getElementById('successPopup');
const popupClose = document.getElementById('popupClose');

let progress = 0;
let interval;
let isHidden = false;

startButton.addEventListener('click', () => {
    offcanvas.style.transform = 'translateY(0%)';
    progress = 0;
    progressBar.style.width = `${progress}%`;
    progressPercent.textContent = `${progress}%`;

    interval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                offcanvas.style.transform = 'translateY(100%)';
                successPopup.classList.add('show');
                setTimeout(() => {
                    successPopup.classList.remove('show');
                }, 5000);
            }, 500);
        }
    }, 100);
});

toggleButton.addEventListener('click', () => {
    if (isHidden) {
        offcanvas.style.transform = 'translateY(0%)';
        toggleButton.textContent = '▼';
    } else {
        offcanvas.style.transform = 'translateY(100%)';
        toggleButton.textContent = '▲';
    }
    isHidden = !isHidden;
});

popupClose.addEventListener('click', () => {
    successPopup.classList.remove('show');
});
