

const BOT_TOKEN = "7542656098:AAEm6dhsgHZQigUqCtbzkYS9X7tx5xzjVYU"; // Bot tokeningizni kiriting
const CHAT_ID = "5988799383"; // Foydalanuvchi yoki guruh ID'si



// Formani olish
const form = document.getElementById('userForm');

// Formaning submit hodisasi
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Formaning qayta yuklanishining oldini olish

    // Inputlarni olish
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const website = document.getElementById('websiteInput').value;
    const info = document.getElementById('textInput').value;

    // Foydalanuvchi ma'lumotlarini botga yuborish
    sendToTelegramBot(name, email, website, info);
});

// Telegram botga yuborish funksiyasi
function sendToTelegramBot(name, email, website, info) {
    const message = `Ism: ${name}\nEmail: ${email}\nWebsite: ${website}\nText:${info}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const data = {
        chat_id: CHAT_ID,
        text: message
    };

    // Fetch orqali Telegram botga ma'lumot yuborish
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.ok) {
                alert("Ma'lumot yuborildi!");
            } else {
                alert("Xatolik yuz berdi.");
            }
        })
        .catch(error => {
            console.error("Xatolik:", error);
            alert("Xatolik yuz berdi.");
        });
}
