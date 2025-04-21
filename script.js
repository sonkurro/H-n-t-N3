const lessons = [
    [ // Bài 1
        { vietnamese: "Tự do", kanji: "自由", hiragana: "じゆう", example: "自由な時間が必要です。" },
        { vietnamese: "Kỷ luật", kanji: "規律", hiragana: "きりつ", example: "規律を守ることは重要です。" }
    ],
    [ // Bài 2
        { vietnamese: "Kinh nghiệm", kanji: "経験", hiragana: "けいけん", example: "彼は経験が豊富です。" },
        { vietnamese: "Khám phá", kanji: "探検", hiragana: "たんけん", example: "新しい世界を探検します。" }
    ],
    [ // Bài 3
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
    [ // Bài 4
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 5
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 6
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 7
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 8
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 9
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 10
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 11
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 12
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
     [ // Bài 13
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
    [ // Bài 30
        { vietnamese: "Cảm hứng", kanji: "感動", hiragana: "かんどう", example: "その話に感動しました。" },
        { vietnamese: "Hiểu biết", kanji: "理解", hiragana: "りかい", example: "相手の立場を理解します。" }
    ]
];

let currentLesson = 0;
let currentCard = 0;

function populateLessonSelect() {
    const select = document.getElementById('lesson-select');
    for (let i = 1; i <= lessons.length; i++) {
        const option = document.createElement('option');
        option.value = i - 1;
        option.textContent = `Bài ${i}`;
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
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    currentCard = (currentCard + 1) % lessons[currentLesson].length;
    if (currentCard === 0 && currentLesson < lessons.length - 1) {
        currentLesson++;
    }
    displayCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + lessons[currentLesson].length) % lessons[currentLesson].length;
    if (currentCard === lessons[currentLesson].length - 1 && currentLesson > 0) {
        currentLesson--;
    }
    displayCard();
}

function goToLesson() {
    currentLesson = parseInt(document.getElementById('lesson-select').value);
    currentCard = 0;
    displayCard();
}

// Initialize
populateLessonSelect();
displayCard();
