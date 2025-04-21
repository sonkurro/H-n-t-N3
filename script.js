const flashcards = [
    { vietnamese: "Tự do", kanji: "自由", hiragana: "じゆう", example: "自由な時間が必要です。" },
    { vietnamese: "Kinh nghiệm", kanji: "経験", hiragana: "けいけん", example: "彼は経験が豊富です。" },
    { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
    { vietnamese: "Kiên nhẫn", kanji: "我慢", hiragana: "がまん", example: "我慢することが大切です。" },
    { vietnamese: "Trách nhiệm", kanji: "責任", hiragana: "せきにん", example: "責任を持って仕事をします。" },
    { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" },
    { vietnamese: "Sức khỏe", kanji: "健康", hiragana: "けんこう", example: "健康が一番大事です。" },
    { vietnamese: "Thành công", kanji: "成功", hiragana: "せいこう", example: "努力すれば成功します。" },
    { vietnamese: "Nỗ lực", kanji: "努力", hiragana: "どりょく", example: "毎日努力しています。" },
    { vietnamese: "Tự tin", kanji: "自信", hiragana: "じしん", example: "自信を持って話してください。" },
    { vietnamese: "Công bằng", kanji: "公平", hiragana: "こうへい", example: "公平な判断が必要です。" },
    { vietnamese: "Hy vọng", kanji: "希望", hiragana: "きぼう", example: "希望を捨てないでください。" },
    { vietnamese: "Tôn trọng", kanji: "尊敬", hiragana: "そんけい", example: "先生を尊敬しています。" },
    { vietnamese: "Hòa bình", kanji: "平和", hiragana: "へいわ", example: "世界平和を願います。" },
    { vietnamese: "Trí tuệ", kanji: "知恵", hiragana: "ちえ", example: "知恵を活かして問題を解決します。" },
    { vietnamese: "Tình yêu", kanji: "愛情", hiragana: "あいじょう", example: "愛情を込めて育てます。" },
    { vietnamese: "Thử thách", kanji: "挑戦", hiragana: "ちょうせん", example: "新しい挑戦を始めます。" },
    { vietnamese: "Cơ hội", kanji: "機会", hiragana: "きかい", example: "この機会を逃さないでください。" },
    { vietnamese: "Đồng cảm", kanji: "共感", hiragana: "きょうかん", example: "彼の気持ちに共感します。" },
    { vietnamese: "Chăm chỉ", kanji: "勤勉", hiragana: "きんべん", example: "勤勉な学生が好きです。" },
    { vietnamese: "Tò mò", kanji: "好奇", hiragana: "こうき", example: "好奇心が強い子供です。" },
    { vietnamese: "Truyền thống", kanji: "伝統", hiragana: "でんとう", example: "伝統を守ることは大切です。" },
    { vietnamese: "Sáng tạo", kanji: "創造", hiragana: "そうぞう", example: "創造的なアイデアを考えます。" },
    { vietnamese: "Độc lập", kanji: "独立", hiragana: "どくりつ", example: "独立した生活を始めます。" },
    { vietnamese: "An toàn", kanji: "安全", hiragana: "あんぜん", example: "安全第一で行動します。" },
    { vietnamese: "Tự hào", kanji: "誇り", hiragana: "ほこり", example: "自分の国を誇りに思います。" },
    { vietnamese: "Thành thật", kanji: "正直", hiragana: "しょうじき", example: "正直に話してください。" },
    { vietnamese: "Hiểu biết", kanji: "理解", hiragana: "りかい", example: "相手の立場を理解します。" },
    { vietnamese: "Đoàn kết", kanji: "団結", hiragana: "だんけつ", example: "団結して目標を達成します。" },
    { vietnamese: "Cảm hứng", kanji: "感動", hiragana: "かんどう", example: "その話に感動しました。" }
];

let currentCard = 0;

function populateLessonSelect() {
    const select = document.getElementById('lesson-select');
    for (let i = 1; i <= flashcards.length; i++) {
        const option = document.createElement('option');
        option.value = i - 1;
        option.textContent = `Bài ${i}`;
        select.appendChild(option);
    }
}

function displayCard() {
    const card = flashcards[currentCard];
    document.getElementById('front-text').textContent = card.vietnamese;
    document.getElementById('kanji').textContent = card.kanji;
    document.getElementById('hiragana').textContent = card.hiragana;
    document.getElementById('example').textContent = card.example;
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('lesson-select').value = currentCard;
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

function goToLesson() {
    currentCard = parseInt(document.getElementById('lesson-select').value);
    displayCard();
}

// Initialize
populateLessonSelect();
displayCard();
