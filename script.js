const lessons = [
    [ // Bài 1
        { vietnamese: "Nam giới", kanji: "男性", hiragana: "だんせい", example: "男性用の服を買いました。" },
        { vietnamese: "Nữ giới", kanji: "女性", hiragana: "じょせい", example: "女性が多い職場です。" },
        { vietnamese: "Cao tuổi", kanji: "高齢", hiragana: "こうれい", example: "高齢の方に席を譲りました。" },
        { vietnamese: "Hơn tuổi", kanji: "年上", hiragana: "としうえ", example: "年上の人に敬意を払います。" },
        { vietnamese: "Cấp trên", kanji: "目上", hiragana: "めうえ", example: "目上の人に丁寧に話します。" },
        { vietnamese: "Tiền bối", kanji: "先輩", hiragana: "せんぱい", example: "先輩に仕事を教わりました。" },
        { vietnamese: "Hậu bối", kanji: "後輩", hiragana: "こうはい", example: "後輩を指導しています。" },
        { vietnamese: "Cấp trên", kanji: "上司", hiragana: "じょうし", example: "上司から指示を受けました。" },
        { vietnamese: "Đối phương", kanji: "相手", hiragana: "あいて", example: "相手の気持ちを考えます。" },
        { vietnamese: "Người quen", kanji: "知り合い", hiragana: "しりあい", example: "知り合いがパーティーに来ました。" },
        { vietnamese: "Bạn hữu", kanji: "友人", hiragana: "ゆうじん", example: "友人と旅行に行きます。" },
        { vietnamese: "Quan hệ", kanji: "仲", hiragana: "なか", example: "仲の良い友達がいます。" },
        { vietnamese: "Ngày tháng năm sinh", kanji: "生年月日", hiragana: "せいねんがっぴ", example: "生年月日を記入してください。" },
        { vietnamese: "Ra đời", kanji: "誕生", hiragana: "たんじょう", example: "誕生を祝いました。" },
        { vietnamese: "Năm, tuổi", kanji: "年", hiragana: "とし", example: "年を取るのが怖いです。" },
        { vietnamese: "Xuất thân", kanji: "出身", hiragana: "しゅっしん", example: "出身はどこですか？" },
        { vietnamese: "Quê hương", kanji: "故郷", hiragana: "ふるさと", example: "故郷に帰りたいです。" },
        { vietnamese: "Trưởng thành", kanji: "成長", hiragana: "せいちょう", example: "子供が成長しました。" },
        { vietnamese: "Người lớn", kanji: "成人", hiragana: "せいじん", example: "成人式に参加しました。" },
        { vietnamese: "Đỗ", kanji: "合格", hiragana: "ごうかく", example: "試験に合格しました。" },
        { vietnamese: "Học lên", kanji: "進学", hiragana: "しんがく", example: "大学に進学します。" },
        { vietnamese: "Bỏ học", kanji: "退学", hiragana: "たいがく", example: "退学を決めました。" },
        { vietnamese: "Tìm việc", kanji: "就職", hiragana: "しゅうしょく", example: "就職活動を始めました。" },
        { vietnamese: "Nghỉ việc", kanji: "退職", hiragana: "たいしょく", example: "会社を退職しました。" },
        { vietnamese: "Thất nghiệp", kanji: "失業", hiragana: "しつぎょう", example: "失業して困っています。" },
        { vietnamese: "Tăng ca", kanji: "残業", hiragana: "ざんぎょう", example: "残業が多いです。" },
        { vietnamese: "Sinh hoạt", kanji: "生活", hiragana: "せいかつ", example: "生活が忙しいです。" },
        { vietnamese: "Đi làm", kanji: "通勤", hiragana: "つうきん", example: "通勤に時間がかかります。" },
        { vietnamese: "Quá trình học", kanji: "学歴", hiragana: "がくれき", example: "学歴を重視する会社です。" },
        { vietnamese: "Lương", kanji: "給料", hiragana: "きゅうりょう", example: "給料が上がりました。" }
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
        { vietnamese: "Kiên nhẫn", kanji: "我慢", hiragana: "がまん", example: "我慢することが大切です。" },
        { vietnamese: "Trách nhiệm", kanji: "責任", hiragana: "せきにん", example: "責任を持って仕事をします。" }
    ],
    [ // Bài 5
        { vietnamese: "Sức khỏe", kanji: "健康", hiragana: "けんこう", example: "健康が一番大事です。" },
        { vietnamese: "Thành công", kanji: "成功", hiragana: "せいこう", example: "努力すれば成功します。" }
    ],
    [ // Bài 6
        { vietnamese: "Nỗ lực", kanji: "努力", hiragana: "どりょく", example: "毎日努力しています。" },
        { vietnamese: "Tự tin", kanji: "自信", hiragana: "じしん", example: "自信を持って話してください。" }
    ],
    [ // Bài 7
        { vietnamese: "Công bằng", kanji: "公平", hiragana: "こうへい", example: "公平な判断が必要です。" },
        { vietnamese: "Hy vọng", kanji: "希望", hiragana: "きぼう", example: "希望を捨てないでください。" }
    ],
    [ // Bài 8
        { vietnamese: "Tôn trọng", kanji: "尊敬", hiragana: "そんけい", example: "先生を尊敬しています。" },
        { vietnamese: "Hòa bình", kanji: "平和", hiragana: "へいわ", example: "世界平和を願います。" }
    ],
    [ // Bài 9
        { vietnamese: "Trí tuệ", kanji: "知恵", hiragana: "ちえ", example: "知恵を活かして問題を解決します。" },
        { vietnamese: "Tình yêu", kanji: "愛情", hiragana: "あいじょう", example: "愛情を込めて育てます。" }
    ],
    [ // Bài 10
        { vietnamese: "Thử thách", kanji: "挑戦", hiragana: "ちょうせん", example: "新しい挑戦を始めます。" },
        { vietnamese: "Cơ hội", kanji: "機会", hiragana: "きかい", example: "この機会を逃さないでください。" }
    ],
    [ // Bài 11
        { vietnamese: "Đồng cảm", kanji: "共感", hiragana: "きょうかん", example: "彼の気持ちに共感します。" },
        { vietnamese: "Chăm chỉ", kanji: "勤勉", hiragana: "きんべん", example: "勤勉な学生が好きです。" }
    ],
    [ // Bài 12
        { vietnamese: "Tò mò", kanji: "好奇", hiragana: "こうき", example: "好奇心が強い子供です。" },
        { vietnamese: "Truyền thống", kanji: "伝統", hiragana: "でんとう", example: "伝統を守ることは大切です。" }
    ],
    [ // Bài 13
        { vietnamese: "Hạnh phúc", kanji: "幸福", hiragana: "こうふく", example: "幸福な生活を送りたい。" },
        { vietnamese: "Tình bạn", kanji: "友情", hiragana: "ゆうじょう", example: "友情は大切なものです。" }
    ],
    [ // Bài 14
        { vietnamese: "Sáng tạo", kanji: "創造", hiragana: "そうぞう", example: "創造的なアイデアを考えます。" },
        { vietnamese: "Độc lập", kanji: "独立", hiragana: "どくりつ", example: "独立した生活を始めます。" }
    ],
    [ // Bài 15
        { vietnamese: "An toàn", kanji: "安全", hiragana: "あんぜん", example: "安全第一で行動します。" },
        { vietnamese: "Tự hào", kanji: "誇り", hiragana: "ほこり", example: "自分の国を誇りに思います。" }
    ],
    [ // Bài 16
        { vietnamese: "Thành thật", kanji: "正直", hiragana: "しょうじき", example: "正直に話してください。" },
        { vietnamese: "Hiểu biết", kanji: "理解", hiragana: "りかい", example: "相手の立場を理解します。" }
    ],
    [ // Bài 17
        { vietnamese: "Đoàn kết", kanji: "団結", hiragana: "だんけつ", example: "団結して目標を達成します。" },
        { vietnamese: "Cảm hứng", kanji: "感動", hiragana: "かんどう", example: "その話に感動しました。" }
    ],
    [ // Bài 18
        { vietnamese: "Tập trung", kanji: "集中", hiragana: "しゅうちゅう", example: "仕事に集中してください。" },
        { vietnamese: "Bền bỉ", kanji: "持続", hiragana: "じぞく", example: "持続可能な開発を目指します。" }
    ],
    [ // Bài 19
        { vietnamese: "Lòng biết ơn", kanji: "感謝", hiragana: "かんしゃ", example: "感謝の気持ちを伝えましょう。" },
        { vietnamese: "Sự tha thứ", kanji: "許し", hiragana: "ゆるし", example: "許し合うことが大切です。" }
    ],
    [ // Bài 20
        { vietnamese: "Tính kiên định", kanji: "固執", hiragana: "こしゅう", example: "目標に固執して努力します。" },
        { vietnamese: "Tính linh hoạt", kanji: "柔軟", hiragana: "じゅうなん", example: "柔軟な対応が必要です。" }
    ],
    [ // Bài 21
        { vietnamese: "Tính khiêm tốn", kanji: "謙虚", hiragana: "けんきょ", example: "謙虚な態度が大切です。" },
        { vietnamese: "Sự hào phóng", kanji: "寛大", hiragana: "かんだい", example: "寛大な心を持ちましょう。" }
    ],
    [ // Bài 22
        { vietnamese: "Sự sáng suốt", kanji: "明快", hiragana: "めいかい", example: "明快な説明が必要です。" },
        { vietnamese: "Tính cẩn thận", kanji: "慎重", hiragana: "しんちょう", example: "慎重に計画を立てます。" }
    ],
    [ // Bài 23
        { vietnamese: "Tính quyết đoán", kanji: "決断", hiragana: "けつだん", example: "決断を下すのは難しいです。" },
        { vietnamese: "Tính sáng tạo", kanji: "創造性", hiragana: "そうぞうせい", example: "創造性を発揮してください。" }
    ],
    [ // Bài 24
        { vietnamese: "Sự kiên cường", kanji: "強靭", hiragana: "きょうじん", example: "強靭な精神が必要です。" },
        { vietnamese: "Tính kỷ luật", kanji: "規律", hiragana: "きりつ", example: "規律を守って生活します。" }
    ],
    [ // Bài 25
        { vietnamese: "Sự đồng cảm", kanji: "共感", hiragana: "きょうかん", example: "共感を示すことが大切です。" },
        { vietnamese: "Tính trung thực", kanji: "誠実", hiragana: "せいじつ", example: "誠実な態度で接します。" }
    ],
    [ // Bài 26
        { vietnamese: "Sự nhiệt tình", kanji: "熱意", hiragana: "ねつい", example: "熱意を持って取り組んでください。" },
        { vietnamese: "Tính kiên trì", kanji: "根気", hiragana: "こんき", example: "根気強く努力します。" }
    ],
    [ // Bài 27
        { vietnamese: "Sự lạc quan", kanji: "楽観", hiragana: "らっかん", example: "楽観的な考え方が大事です。" },
        { vietnamese: "Tính tự giác", kanji: "自覚", hiragana: "じかく", example: "責任の自覚が必要です。" }
    ],
    [ // Bài 28
        { vietnamese: "Sự hào hứng", kanji: "熱狂", hiragana: "ねっきょう", example: "熱狂的に応援します。" },
        { vietnamese: "Tính tự lập", kanji: "自立", hiragana: "じりつ", example: "自立した生活を目指します。" }
    ],
    [ // Bài 29
        { vietnamese: "Sự chân thành", kanji: "真心", hiragana: "まごころ", example: "真心を込めて対応します。" },
        { vietnamese: "Tính bền vững", kanji: "持続性", hiragana: "じぞくせい", example: "持続性のある計画を作ります。" }
    ],
    [ // Bài 30
        { vietnamese: "Sự thông minh", kanji: "聡明", hiragana: "そうめい", example: "聡明な判断が求められます。" },
        { vietnamese: "Tính hòa hợp", kanji: "調和", hiragana: "ちょうわ", example: "調和の取れた生活を送ります。" }
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
