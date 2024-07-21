const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

function startCountdown() {
    // Create a countdown element if it doesn't exist
    let countdownElement = document.querySelector('.countdown');
    if (!countdownElement) {
        countdownElement = document.createElement('div');
        countdownElement.className = 'countdown';
        countdownElement.style.position = 'absolute';
        countdownElement.style.top = '50%';
        countdownElement.style.left = '50%';
        countdownElement.style.transform = 'translate(-50%, -50%)';
        countdownElement.style.fontSize = '2rem';
        countdownElement.style.color = 'black';
        countdownElement.style.background = 'white';
        countdownElement.style.padding = '20px';
        countdownElement.style.borderRadius = '10px';
        countdownElement.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        document.body.appendChild(countdownElement);
    }

    let countdownNumber = 5;
    countdownElement.innerHTML = `<div class="mailbox"></div><div class="message">I have a surprise for you</div><div class="countdown-number">${countdownNumber}</div>`;

    const countdownInterval = setInterval(() => {
        countdownNumber--;
        countdownElement.querySelector('.countdown-number').textContent = countdownNumber;

        if (countdownNumber <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'heart.html'; // Redirect to the second HTML page
        }
    }, 1000); // 1000ms = 1s interval
}       

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Yayyy Mwahhhhh I Love Youuuuuuu";
    gif.src="https://media.tenor.com/Rh2GZjVhteYAAAAi/tonton-friends-tonton.gif"

    setTimeout(() => {
        startCountdown();
    }, 1000);
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})
