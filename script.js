const lessons = [
    [ // Bài 1
        { vietnamese: "Nam giới", kanji: "男性", hiragana: "だんせい", example: "男性用の服を買いました。" },
        { vietnamese: "Nữ giới", kanji: "女性", hiragana: "じょせい", example: "女性が多い職場です。" },
        // ... (giữ nguyên các từ vựng khác như trong file gốc)
    ],
    [ // Bài 2
        { vietnamese: "Phỏng vấn", kanji: "面接", hiragana: "めんせつ", example: "就職の面接を受けました。" },
        // ... (giữ nguyên các từ vựng khác như trong file gốc)
    ],
    [ // Bài 3
        { vietnamese: "Hứa hẹn", kanji: "約束", hiragana: "やくそく", example: "友達と約束をしました。" },
        // ... (giữ nguyên các từ vựng khác như trong file gốc)
    ],
    [ // Bài 4
        { vietnamese: "Tác phẩm", kanji: "作品", hiragana: "さくひん", example: "この作品は有名な画家のものです。" },
        // ... (giữ nguyên các từ vựng khác như trong file gốc)
    ]
];

let currentLesson = 0;
let currentCard = 0;

function populateLessonSelect() {
    const select = document.getElementById('lesson-select');
    select.innerHTML = '';
    for (let i = 0; i < lessons.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Bài ${i + 1}`;
        select.appendChild(option);
    }
}

function displayCard() {
    const card = lessons[currentLesson][currentCard];
    document.getElementById('front-text').textContent = card.vietnamese;
    document.getElementById('kanji').textContent = card.kanji;
    document.getElementById('hiragana').textContent = card.hiragana;
    document.getElementById('example').textContent = card.example;
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('lesson-select').value = currentLesson;
    document.getElementById('card-counter').textContent = `Từ ${currentCard + 1}/${lessons[currentLesson].length}`;
}

function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

// Đảm bảo sự kiện click được gắn đúng cách
document.addEventListener('DOMContentLoaded', () => {
    populateLessonSelect();
    displayCard();
    
    // Gắn sự kiện click trực tiếp cho thẻ bài
    const flashcard = document.getElementById('flashcard');
    flashcard.addEventListener('click', flipCard);
});
}

function nextCard() {
    if (currentCard < lessons[currentLesson].length - 1) {
        currentCard++;
    } else {
        if (currentLesson < lessons.length - 1) {
            currentLesson++;
            currentCard = 0;
        } else {
            currentCard = 0;
        }
    }
    displayCard();
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
    } else {
        if (currentLesson > 0) {
            currentLesson--;
            currentCard = lessons[currentLesson].length - 1;
        } else {
            currentCard = lessons[currentLesson].length - 1;
        }
    }
    displayCard();
}

function goToLesson() {
    currentLesson = parseInt(document.getElementById('lesson-select').value);
    currentCard = 0;
    displayCard();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateLessonSelect();
    displayCard();
});
