const flashcards = [
    {
        vietnamese: "Tự do",
        kanji: "自由",
        hiragana: "じゆう",
        example: "自由な時間が必要です。"
    },
    {
        vietnamese: "Kinh nghiệm",
        kanji: "経験",
        hiragana: "けいけん",
        example: "彼は経験が豊富です。"
    },
    {
        vietnamese: "Hạnh phúc",
        kanji: "幸福",
        hiragana: "こうふく",
        example: "幸福な生活を送りたい。"
    }
];

let currentCard = 0;

function displayCard() {
    const card = flashcards[currentCard];
    document.getElementById('front-text').textContent = card.vietnamese;
    document.getElementById('kanji').textContent = card.kanji;
    document.getElementById('hiragana').textContent = card.hiragana;
    document.getElementById('example').textContent = card.example;
    document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
}

function prevCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    displayCard();
}

// Display the first card on load
displayCard();
