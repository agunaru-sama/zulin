const openingScreen = document.getElementById('openingScreen');
const mainContent = document.getElementById('mainContent');
const crushNameInput = document.getElementById('crushName');
const startButton = document.getElementById('startButton');
const displayName = document.getElementById('displayName');
const messageContainer = document.getElementById('messageContainer');
const nextPageButton = document.getElementById('nextPageButton');
const giftButton = document.getElementById('giftButton');

const messages = [
    "a little story about valentine💖",
    "valentine itu sebenernya nggak langsung soal cokelat, bunga, atau “will you be my valentine”.",
    "dulu banget, di zaman romawi kuno, ada perayaan namanya lupercalia. isinya ritual yang berkaitan sama kesuburan dan harapan biar hidup penuh cinta. jauh sih dari valentine yang kita kenal sekarang.",
    "terus muncul sosok santo valentinus, seorang pendeta kristen, yang dikenal karena sering nikahin pasangan muda secara diam-diam, padahal saat itu dilarang. karena itulah dia dipenjara dan akhirnya meninggal di tanggal 14 februari.",
    "dari situ, tanggal ini lama-lama dikenal sebagai simbol cinta. tradisinya berubah, maknanya juga bergeser, sampai akhirnya jadi hari bagi-bagi cokelat dan kartu ucapan.",
    "karena itu aku nggak mau ngerayain valentine sebagai hari valentine, karena ada kaitannya dengan penghormatan terhadap pendeta kristen. jadi aku milih nganggep ini sebagai hari kasih sayang aja.",
];

let currentMessageIndex = 0;
let isSkipping = false;
let typingInterval;

function showMessageWithTypingAnimation() {
    if (currentMessageIndex < messages.length) {

        const text = messages[currentMessageIndex];
        const messageElement = document.createElement('p');
        messageElement.classList.add('message');
        messageContainer.appendChild(messageElement);

        let charIndex = 0;

        typingInterval = setInterval(() => {
            if (charIndex < text.length && !isSkipping) {
                messageElement.textContent += text.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typingInterval);

                if (isSkipping) {
                    messageElement.textContent = text;
                }

                currentMessageIndex++;

                if (currentMessageIndex < messages.length && !isSkipping) {
                    setTimeout(showMessageWithTypingAnimation, 700);
                } else if (currentMessageIndex >= messages.length) {
                    showGiftButton();
                }
            }
        }, 50);
    }
}

function showGiftButton() {
    nextPageButton.textContent = "Already Read";
    nextPageButton.disabled = true;
    nextPageButton.style.opacity = "0.6";
    giftButton.style.display = "inline-block";
}

startButton.addEventListener('click', () => {
    const name = crushNameInput.value.trim();
    if (name) {
        displayName.textContent = name;
        openingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        currentMessageIndex = 0;
        messageContainer.innerHTML = '';
        showMessageWithTypingAnimation();
    } else {
        alert("Enter your name first 💗");
    }
});

nextPageButton.addEventListener('click', () => {
    if (!isSkipping) {
        isSkipping = true;
        clearInterval(typingInterval);

        messageContainer.innerHTML = '';

        messages.forEach(text => {
            const messageElement = document.createElement('p');
            messageElement.classList.add('message');
            messageElement.textContent = text;
            messageContainer.appendChild(messageElement);
        });

        currentMessageIndex = messages.length;
        showGiftButton();
    }
});

giftButton.addEventListener('click', () => {
    window.location.href = 'envelope.html';
});