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
        { vietnamese: "Phỏng vấn", kanji: "面接", hiragana: "めんせつ", example: "明日は面接があります。" },
  { vietnamese: "Giải lao", kanji: "休憩", hiragana: "きゅうけい", example: "15分間休憩しましょう。" },
  { vietnamese: "Tham quan", kanji: "観光", hiragana: "かんこう", example: "京都で観光を楽しんだ。" },
  { vietnamese: "Về nước", kanji: "帰国", hiragana: "きこく", example: "来月帰国します。" },
  { vietnamese: "Về quê", kanji: "帰省", hiragana: "きせい", example: "夏休みに帰省する予定だ。" },
  { vietnamese: "Về nhà", kanji: "帰宅", hiragana: "きたく", example: "夜遅く帰宅した。" },
  { vietnamese: "Tham gia", kanji: "参加", hiragana: "さんか", example: "会議に参加してください。" },
  { vietnamese: "Tham dự", kanji: "出席", hiragana: "しゅっせき", example: "授業に出席する。" },
  { vietnamese: "Vắng mặt", kanji: "欠席", hiragana: "けっせき", example: "病気で欠席します。" },
  { vietnamese: "Đi muộn", kanji: "遅刻", hiragana: "ちこく", example: "電車が遅れて遅刻した。" },
  { vietnamese: "Trang điểm", kanji: "化粧", hiragana: "けしょう", example: "毎朝化粧をする。" },
  { vietnamese: "Tính toán", kanji: "計算", hiragana: "けいさん", example: "費用を計算する。" },
  { vietnamese: "Kế hoạch", kanji: "計画", hiragana: "けいかく", example: "旅行の計画を立てる。" },
  { vietnamese: "Thành công", kanji: "成功", hiragana: "せいこう", example: "プロジェクトが成功した。" },
  { vietnamese: "Thất bại", kanji: "失敗", hiragana: "しっぱい", example: "失敗から学ぶことが多い。" },
  { vietnamese: "Chuẩn bị", kanji: "準備", hiragana: "じゅんび", example: "試験の準備をする。" },
  { vietnamese: "Sắp xếp", kanji: "整理", hiragana: "せいり", example: "部屋を整理する。" },
  { vietnamese: "Gọi món", kanji: "注文", hiragana: "ちゅうもん", example: "料理を注文する。" },
  { vietnamese: "Tiết kiệm", kanji: "貯金", hiragana: "ちょきん", example: "毎月貯金をする。" },
  { vietnamese: "Suốt đêm", kanji: "徹夜", hiragana: "てつや", example: "試験前に徹夜した。" },
  { vietnamese: "Chuyển nhà", kanji: "引越し", hiragana: "ひっこし", example: "来月引越しする。" },
  { vietnamese: "Chiều cao", kanji: "身長", hiragana: "しんちょう", example: "身長を測る。" },
  { vietnamese: "Cân nặng", kanji: "体重", hiragana: "たいじゅう", example: "体重が増えた。" },
  { vietnamese: "Vết thương", kanji: "怪我", hiragana: "けが", example: "足に怪我をした。" },
  { vietnamese: "Hội", kanji: "会", hiragana: "かい", example: "同窓会に出席する。" },
  { vietnamese: "Sở thích", kanji: "趣味", hiragana: "しゅみ", example: "趣味は写真です。" },
  { vietnamese: "Yêu thích", kanji: "興味", hiragana: "きょうみ", example: "日本文化に興味がある。" },
  { vietnamese: "Kỷ niệm", kanji: "思い出", hiragana: "おもいで", example: "いい思い出を作る。" },
  { vietnamese: "Đùa", kanji: "冗談", hiragana: "じょうだん", example: "冗談を言う。" },
  { vietnamese: "Mục đích", kanji: "目的", hiragana: "もくてき", example: "目的を達成する。" }
    ],
    [ // Bài 3
        { vietnamese: "Hứa hẹn", kanji: "約束", hiragana: "やくそく", example: "友達と約束をした。" },
  { vietnamese: "Nói chuyện", kanji: "お喋り", hiragana: "おしゃべり", example: "授業中にお喋りしないでください。" },
  { vietnamese: "Ngại ngùng", kanji: "遠慮", hiragana: "えんりょ", example: "遠慮なく食べてください。" },
  { vietnamese: "Chịu đựng", kanji: "我慢", hiragana: "がまん", example: "痛みを我慢する。" },
  { vietnamese: "Làm phiền", kanji: "迷惑", hiragana: "めいわく", example: "夜遅く電話するのは迷惑だ。" },
  { vietnamese: "Nguyện vọng", kanji: "希望", hiragana: "きぼう", example: "大学に入ることを希望している。" },
  { vietnamese: "Mơ", kanji: "夢", hiragana: "ゆめ", example: "将来の夢は医者になることだ。" },
  { vietnamese: "Tán thành", kanji: "賛成", hiragana: "さんせい", example: "その計画に賛成です。" },
  { vietnamese: "Phản đối", kanji: "反対", hiragana: "はんだい", example: "その意見に反対する。" },
  { vietnamese: "Tưởng tượng", kanji: "想像", hiragana: "そうぞう", example: "未来を想像する。" },
  { vietnamese: "Nỗ lực", kanji: "努力", hiragana: "どりょく", example: "成功するために努力する。" },
  { vietnamese: "Mặt trời", kanji: "太陽", hiragana: "たいよう", example: "太陽が昇る。" },
  { vietnamese: "Trái đất", kanji: "地球", hiragana: "ちきゅう", example: "地球は青く美しい。" },
  { vietnamese: "Nhiệt độ", kanji: "温度", hiragana: "おんど", example: "温度が上がる。" },
  { vietnamese: "Độ ẩm", kanji: "湿度", hiragana: "しつど", example: "湿度が高い日は暑く感じる。" },
  { vietnamese: "Hơi ẩm", kanji: "湿気", hiragana: "しっけ", example: "部屋の湿気を取る。" },
  { vietnamese: "Mùa mưa", kanji: "梅雨", hiragana: "つゆ", example: "梅雨の時期は洗濯物が乾きにくい。" },
  { vietnamese: "Nấm mốc", kanji: "黴", hiragana: "かび", example: "パンに黴が生えた。" },
  { vietnamese: "Điều hòa ấm", kanji: "暖房", hiragana: "だんぼう", example: "冬は暖房をつける。" },
  { vietnamese: "Vỏ", kanji: "皮", hiragana: "かわ", example: "りんごの皮をむく。" },
  { vietnamese: "Lon", kanji: "缶", hiragana: "かん", example: "缶ジュースを買う。" },
  { vietnamese: "Màn hình", kanji: "画面", hiragana: "がめん", example: "画面が暗くなった。" },
  { vietnamese: "Chương trình", kanji: "番組", hiragana: "ばんぐみ", example: "テレビ番組を見る。" },
  { vietnamese: "Kí sự", kanji: "記事", hiragana: "きじ", example: "新聞の記事を読む。" },
  { vietnamese: "Hàng xóm", kanji: "近所", hiragana: "きんじょ", example: "近所の人と挨拶する。" },
  { vietnamese: "Cảnh sát", kanji: "警察", hiragana: "けいさつ", example: "警察に届け出る。" },
  { vietnamese: "Thủ phạm", kanji: "犯人", hiragana: "はんにん", example: "犯人が捕まった。" },
  { vietnamese: "Tiền lẻ", kanji: "小銭", hiragana: "こぜに", example: "小銭がない。" },
  { vietnamese: "Bữa ăn ngon", kanji: "ご馳走", hiragana: "ごちそう", example: "ご馳走様でした。" },
  { vietnamese: "Tác giả", kanji: "作者", hiragana: "さくしゃ", example: "この本の作者は有名だ。" }
    ],
    [ // Bài 4
        { vietnamese: "Tác phẩm", kanji: "作品", hiragana: "さくひん", example: "この作品はとても人気がある。" },
  { vietnamese: "Đồng phục", kanji: "制服", hiragana: "せいふく", example: "学生は制服を着なければならない。" },
  { vietnamese: "Chất tẩy rửa", kanji: "洗剤", hiragana: "せんざい", example: "洗剤で服を洗う。" },
  { vietnamese: "Đáy", kanji: "底", hiragana: "そこ", example: "瓶の底にコインがある。" },
  { vietnamese: "Tầng hầm", kanji: "地下", hiragana: "ちか", example: "地下に駐車場がある。" },
  { vietnamese: "Chùa", kanji: "寺", hiragana: "てら", example: "京都には古い寺が多い。" },
  { vietnamese: "Con đường", kanji: "道路", hiragana: "どうろ", example: "道路を渡る時は気をつけてください。" },
  { vietnamese: "Con dốc", kanji: "坂", hiragana: "さか", example: "この坂はとても急だ。" },
  { vietnamese: "Khói", kanji: "煙", hiragana: "けむり", example: "煙が空に上がっている。" },
  { vietnamese: "Tro", kanji: "灰", hiragana: "はい", example: "灰を灰皿に捨てる。" },
  { vietnamese: "Kích cỡ", kanji: "判", hiragana: "はん", example: "この判の紙をください。" },
  { vietnamese: "Danh thiếp", kanji: "名刺", hiragana: "めいし", example: "名刺を交換する。" },
  { vietnamese: "Giấy phép", kanji: "免許", hiragana: "めんきょ", example: "運転免許を取った。" },
  { vietnamese: "Nhiều", kanji: "多く", hiragana: "おおく", example: "多くの人が集まった。" },
  { vietnamese: "Phần đầu", kanji: "前半", hiragana: "ぜんはん", example: "試合の前半は負けていた。" },
  { vietnamese: "Phần cuối", kanji: "後半", hiragana: "こうはん", example: "後半で逆転した。" },
  { vietnamese: "Tuyệt vời", kanji: "最高", hiragana: "さいこう", example: "今日の天気は最高だ。" },
  { vietnamese: "Tệ hại", kanji: "最低", hiragana: "さいてい", example: "彼の態度は最低だ。" },
  { vietnamese: "Đầu tiên", kanji: "最初", hiragana: "さいしょ", example: "最初からやり直す。" },
  { vietnamese: "Cuối cùng", kanji: "最後", hiragana: "さいご", example: "最後まで諦めない。" },
  { vietnamese: "Tự động", kanji: "自動", hiragana: "じどう", example: "自動ドアが開いた。" },
  { vietnamese: "Chủng loại", kanji: "種類", hiragana: "しゅるい", example: "この店は種類が豊富だ。" },
  { vietnamese: "Tính cách", kanji: "性格", hiragana: "せいかく", example: "彼女は明るい性格だ。" },
  { vietnamese: "Tính chất", kanji: "性質", hiragana: "せいしつ", example: "この薬の性質を調べる。" },
  { vietnamese: "Thứ tự", kanji: "順番", hiragana: "じゅんばん", example: "順番を待つ。" },
  { vietnamese: "Lượt", kanji: "番", hiragana: "ばん", example: "次は私の番だ。" },
  { vietnamese: "Phương pháp", kanji: "方法", hiragana: "ほうほう", example: "新しい方法を試す。" },
  { vietnamese: "Sản phẩm", kanji: "製品", hiragana: "せいひん", example: "この製品は品質が高い。" },
  { vietnamese: "Tăng giá", kanji: "値上がり", hiragana: "ねあがり", example: "ガソリンが値上がりした。" },
  { vietnamese: "Tươi sống", kanji: "生", hiragana: "なま", example: "生の魚を食べる。" }
    ],
    [ // Bài 5
        { vietnamese: "Khát", kanji: "渇く", hiragana: "かわく", example: "水を飲みたい、喉が渇いた。" },
  { vietnamese: "Ngửi", kanji: "嗅ぐ", hiragana: "かぐ", example: "花の香りを嗅ぐ。" },
  { vietnamese: "Đánh, gõ", kanji: "叩く", hiragana: "たたく", example: "ドアを叩いてから入ってください。" },
  { vietnamese: "Đấm", kanji: "殴る", hiragana: "なぐる", example: "怒って壁を殴った。" },
  { vietnamese: "Đá", kanji: "蹴る", hiragana: "ける", example: "ボールを蹴って遊ぶ。" },
  { vietnamese: "Ôm", kanji: "抱く", hiragana: "だく", example: "子供を優しく抱く。" },
  { vietnamese: "Đổ", kanji: "倒れる", hiragana: "たおれる", example: "疲れて倒れそうだ。" },
  { vietnamese: "Làm đổ", kanji: "倒す", hiragana: "たおす", example: "ボウリングのピンを倒す。" },
  { vietnamese: "Thức dậy", kanji: "起きる", hiragana: "おきる", example: "毎朝7時に起きる。" },
  { vietnamese: "Đánh thức", kanji: "起こす", hiragana: "おこす", example: "明日早く起こしてください。" },
  { vietnamese: "Hỏi thăm", kanji: "尋ねる", hiragana: "たずねる", example: "道を尋ねる。" },
  { vietnamese: "Gào", kanji: "叫ぶ", hiragana: "さけぶ", example: "助けてと叫んだ。" },
  { vietnamese: "Giữ yên lặng", kanji: "黙る", hiragana: "だまる", example: "授業中は黙っていてください。" },
  { vietnamese: "Nuôi", kanji: "飼う", hiragana: "かう", example: "犬を飼っている。" },
  { vietnamese: "Đếm", kanji: "数える", hiragana: "かぞえる", example: "お金を数える。" },
  { vietnamese: "Khô", kanji: "乾く", hiragana: "かわく", example: "洗濯物が乾いた。" },
  { vietnamese: "Làm khô", kanji: "乾かす", hiragana: "かわかす", example: "髪を乾かす。" },
  { vietnamese: "Gấp", kanji: "畳む", hiragana: "たたむ", example: "服を畳んで引き出しに入れる。" },
  { vietnamese: "Mời", kanji: "誘う", hiragana: "さそう", example: "友達を食事に誘う。" },
  { vietnamese: "Chiêu đãi", kanji: "奢る", hiragana: "おごる", example: "今日は私が奢るよ。" },
  { vietnamese: "Cất giữ, trông", kanji: "預かる", hiragana: "あずかる", example: "荷物を預かる。" },
  { vietnamese: "Gửi", kanji: "預ける", hiragana: "あずける", example: "銀行にお金を預ける。" },
  { vietnamese: "Được quyết định", kanji: "決まる", hiragana: "きまる", example: "会議の日時が決まった。" },
  { vietnamese: "Quyết định", kanji: "決める", hiragana: "きめる", example: "進路を自分で決める。" },
  { vietnamese: "Được chụp", kanji: "写る", hiragana: "うつる", example: "写真にきれいに写る。" },
  { vietnamese: "Chụp", kanji: "写す", hiragana: "うつす", example: "この景色を写真に写す。" },
  { vietnamese: "Nhớ lại", kanji: "思い出す", hiragana: "おもいだす", example: "昔のことを思い出す。" },
  { vietnamese: "Được dạy", kanji: "教わる", hiragana: "おそわる", example: "先生にピアノを教わる。" },
  { vietnamese: "Đăng ký", kanji: "申し込む", hiragana: "もうしこむ", example: "講座に申し込む。" },
  { vietnamese: "Tắm", kanji: "浴びる", hiragana: "あびる", example: "シャワーを浴びる。" }
    ],
    [ // Bài 6
        { vietnamese: "Từ chối", kanji: "断る", hiragana: "ことわる", example: "無理な頼みを断る。" },
  { vietnamese: "Được tìm thấy", kanji: "見つかる", hiragana: "みつかる", example: "なくした鍵が見つかった。" },
  { vietnamese: "Tìm thấy", kanji: "見つける", hiragana: "みつける", example: "新しいレストランを見つけた。" },
  { vietnamese: "Bị bắt", kanji: "捕まる", hiragana: "つかまる", example: "泥棒が警察に捕まった。" },
  { vietnamese: "Bắt", kanji: "捕まえる", hiragana: "つかまえる", example: "虫を捕まえる。" },
  { vietnamese: "Lên", kanji: "乗る", hiragana: "のる", example: "電車に乗る。" },
  { vietnamese: "Cho lên", kanji: "乗せる", hiragana: "のせる", example: "荷物を車に乗せる。" },
  { vietnamese: "Xuống", kanji: "降りる", hiragana: "おりる", example: "次の駅で降りる。" },
  { vietnamese: "Hạ xuống", kanji: "降ろす", hiragana: "おろす", example: "荷物を降ろす。" },
  { vietnamese: "Khỏi (máy)", kanji: "直る", hiragana: "なおる", example: "パソコンが直った。" },
  { vietnamese: "Sửa", kanji: "直す", hiragana: "なおす", example: "時計を直す。" },
  { vietnamese: "Khỏi bệnh", kanji: "治る", hiragana: "なおる", example: "風邪が治った。" },
  { vietnamese: "Chữa bệnh", kanji: "治す", hiragana: "なおす", example: "医者が病気を治す。" },
  { vietnamese: "Chết", kanji: "亡くなる", hiragana: "なくなる", example: "祖父が亡くなった。" },
  { vietnamese: "Làm mất", kanji: "亡くす", hiragana: "なくす", example: "大切な人を亡くす。" },
  { vietnamese: "Được sinh", kanji: "生まれる", hiragana: "うまれる", example: "赤ちゃんが生まれた。" },
  { vietnamese: "Sinh", kanji: "生む", hiragana: "うむ", example: "母猫が子猫を生んだ。" },
  { vietnamese: "Gặp (tình cờ)", kanji: "出会う", hiragana: "であう", example: "駅で旧友に出会った。" },
  { vietnamese: "Thăm hỏi", kanji: "訪ねる", hiragana: "たずねる", example: "先生の家を訪ねる。" },
  { vietnamese: "Hẹn hò", kanji: "付き合う", hiragana: "つきあう", example: "彼と付き合っている。" },
  { vietnamese: "Hiệu quả", kanji: "効く", hiragana: "きく", example: "この薬はよく効く。" },
  { vietnamese: "Thịnh hành", kanji: "流行る", hiragana: "はやる", example: "この歌が流行っている。" },
  { vietnamese: "Trôi qua", kanji: "経つ", hiragana: "たつ", example: "時間が経つのは早い。" },
  { vietnamese: "Kịp", kanji: "間に合う", hiragana: "まにあう", example: "会議に間に合った。" },
  { vietnamese: "Làm cho kịp", kanji: "間に合わせる", hiragana: "まにあわせる", example: "仕事を締め切りに間に合わせる。" },
  { vietnamese: "Đi lại", kanji: "通う", hiragana: "かよう", example: "学校に毎日通う。" },
  { vietnamese: "Đông", kanji: "込む", hiragana: "こむ", example: "電車が込んでいる。" },
  { vietnamese: "Lướt qua", kanji: "すれ違う", hiragana: "すれちがう", example: "道ですれ違った。" },
  { vietnamese: "Tốn", kanji: "かかる", hiragana: "かかる", example: "時間がかかる作業だ。" },
  { vietnamese: "Treo", kanji: "かける", hiragana: "かける", example: "コートをハンガーにかける。" }
    ],
    [ // Bài 7
        { vietnamese: "Làm chuyển động", kanji: "動かす", hiragana: "うごかす", example: "機械を動かす。" },
  { vietnamese: "Di chuyển", kanji: "動く", hiragana: "うごく", example: "絵が動いているように見える。" },
  { vietnamese: "Tránh xa", kanji: "離れる", hiragana: "はなれる", example: "危ないから離れてください。" },
  { vietnamese: "Rời xa", kanji: "離す", hiragana: "はなす", example: "手を離さないで。" },
  { vietnamese: "Bị va", kanji: "ぶつかる", hiragana: "ぶつかる", example: "自転車が壁にぶつかった。" },
  { vietnamese: "Đâm, va", kanji: "ぶつける", hiragana: "ぶつける", example: "頭をドアにぶつけた。" },
  { vietnamese: "Bị tràn, văng", kanji: "零れる", hiragana: "こぼれる", example: "コップから水が零れた。" },
  { vietnamese: "Làm tràn, văng", kanji: "零す", hiragana: "こぼす", example: "ジュースを零してしまった。" },
  { vietnamese: "Lau, chùi", kanji: "拭く", hiragana: "ふく", example: "テーブルを拭く。" },
  { vietnamese: "Được dọn", kanji: "片付く", hiragana: "かたづく", example: "部屋がきれいに片付いた。" },
  { vietnamese: "Dọn dẹp", kanji: "片付ける", hiragana: "かたづける", example: "机の上を片付ける。" },
  { vietnamese: "Bọc", kanji: "包む", hiragana: "つつむ", example: "プレゼントをきれいに包む。" },
  { vietnamese: "Dán", kanji: "貼る", hiragana: "はる", example: "ポスターを壁に貼る。" },
  { vietnamese: "Làm mất", kanji: "無くす", hiragana: "なくす", example: "鍵を無くしてしまった。" },
  { vietnamese: "Mất, hết", kanji: "無くなる", hiragana: "なくなる", example: "お金が無くなった。" },
  { vietnamese: "Đủ", kanji: "足りる", hiragana: "たりる", example: "お金が足りない。" },
  { vietnamese: "Còn lại", kanji: "残る", hiragana: "のこる", example: "仕事がまだ残っている。" },
  { vietnamese: "Để lại", kanji: "残す", hiragana: "のこす", example: "食べ物を残さないように。" },
  { vietnamese: "Thiu, hỏng", kanji: "腐る", hiragana: "くさる", example: "牛乳が腐っていた。" },
  { vietnamese: "Bong, tróc", kanji: "剥ける", hiragana: "むける", example: "ペンキが剥けてきた。" },
  { vietnamese: "Bóc, gọt", kanji: "剥く", hiragana: "むく", example: "りんごの皮を剥く。" },
  { vietnamese: "Trượt", kanji: "滑る", hiragana: "すべる", example: "氷の上で滑った。" },
  { vietnamese: "Tích tụ", kanji: "積もる", hiragana: "つもる", example: "雪が30cmも積もった。" },
  { vietnamese: "Chất, xếp", kanji: "積む", hiragana: "つむ", example: "荷物をトラックに積む。" },
  { vietnamese: "Trống", kanji: "空く", hiragana: "あく", example: "席が空いている。" },
  { vietnamese: "Làm trống", kanji: "空ける", hiragana: "あける", example: "部屋を空けてください。" },
  { vietnamese: "Giảm", kanji: "下がる", hiragana: "さがる", example: "温度が下がってきた。" },
  { vietnamese: "Làm giảm", kanji: "下げる", hiragana: "さげる", example: "値段を下げる。" },
  { vietnamese: "Lạnh đi", kanji: "冷える", hiragana: "ひえる", example: "ビールがよく冷えている。" },
  { vietnamese: "Làm lạnh", kanji: "冷やす", hiragana: "ひやす", example: "飲み物を冷蔵庫で冷やす。" }
    ],
    [ // Bài 8
        { vietnamese: "Nguội đi", kanji: "冷める", hiragana: "さめる", example: "スープが冷めてしまった。" },
  { vietnamese: "Làm nguội", kanji: "冷ます", hiragana: "さます", example: "お茶を冷まして飲む。" },
  { vietnamese: "Cháy", kanji: "燃える", hiragana: "もえる", example: "家が燃えている！" },
  { vietnamese: "Đốt cháy", kanji: "燃やす", hiragana: "もやす", example: "ゴミを燃やす。" },
  { vietnamese: "Sôi", kanji: "沸く", hiragana: "わく", example: "お湯が沸いた。" },
  { vietnamese: "Đun sôi", kanji: "沸かす", hiragana: "わかす", example: "やかんで水を沸かす。" },
  { vietnamese: "Kêu, reo", kanji: "鳴る", hiragana: "なる", example: "電話が鳴っている。" },
  { vietnamese: "Làm kêu", kanji: "鳴らす", hiragana: "ならす", example: "ベルを鳴らす。" },
  { vietnamese: "Giúp ích", kanji: "役に立つ", hiragana: "やくにたつ", example: "この本は勉強に役に立つ。" },
  { vietnamese: "Làm cho có ích", kanji: "役に立てる", hiragana: "やくにたてる", example: "経験を仕事に役に立てる。" },
  { vietnamese: "Trang trí", kanji: "飾り", hiragana: "かざり", example: "クリスマスツリーの飾りがきれいだ。" },
  { vietnamese: "Chơi", kanji: "遊び", hiragana: "あそび", example: "子供たちが公園で遊んでいる。" },
  { vietnamese: "Tập hợp", kanji: "集まり", hiragana: "あつまり", example: "今日はクラスの集まりがある。" },
  { vietnamese: "Lời dạy", kanji: "教え", hiragana: "おしえ", example: "先生の教えを忘れない。" },
  { vietnamese: "Nhảy", kanji: "踊り", hiragana: "おどり", example: "パーティーで踊りを楽しむ。" },
  { vietnamese: "Ý nghĩ", kanji: "思い", hiragana: "おもい", example: "強い思いを持って頑張る。" },
  { vietnamese: "Suy nghĩ", kanji: "考え", hiragana: "かんがえ", example: "彼の考えは面白い。" },
  { vietnamese: "Việc dọn dẹp", kanji: "片付け", hiragana: "かたづけ", example: "週末に部屋の片付けをする。" },
  { vietnamese: "Sự giúp đỡ", kanji: "手伝い", hiragana: "てつだい", example: "母の手伝いをする。" },
  { vietnamese: "Công việc", kanji: "働き", hiragana: "はたらき", example: "彼の働きは評価されている。" },
  { vietnamese: "Quyết định", kanji: "決まり", hiragana: "きまり", example: "学校の決まりを守る。" },
  { vietnamese: "Ồn ào", kanji: "騒ぎ", hiragana: "さわぎ", example: "外で騒ぎが起きている。" },
  { vietnamese: "Thông báo", kanji: "知らせ", hiragana: "しらせ", example: "重要な知らせが来た。" },
  { vietnamese: "Nhờ", kanji: "頼み", hiragana: "たのみ", example: "友達に頼みごとをする。" },
  { vietnamese: "Mệt", kanji: "疲れ", hiragana: "つかれ", example: "仕事で疲れがたまっている。" },
  { vietnamese: "Sai, khác", kanji: "違い", hiragana: "ちがい", example: "意見の違いがある。" },
  { vietnamese: "Bắt đầu", kanji: "始め", hiragana: "はじめ", example: "会議の始めに挨拶する。" },
  { vietnamese: "Tiếp tục", kanji: "続き", hiragana: "つづき", example: "映画の続きが気になる。" },
  { vietnamese: "Hoàng hôn", kanji: "暮れ", hiragana: "くれ", example: "冬は暮れが早い。" },
  { vietnamese: "Đi, chuyển đi", kanji: "行き", hiragana: "いき", example: "東京行きの電車に乗る。" }
    ],
    [ // Bài 9
        { vietnamese: "Đường về", kanji: "帰り", hiragana: "かえり", example: "帰りの電車は混んでいる。" },
  { vietnamese: "Gấp, vội", kanji: "急ぎ", hiragana: "いそぎ", example: "急ぎの用事ができた。" },
  { vietnamese: "Chậm, muộn", kanji: "遅れ", hiragana: "おくれ", example: "電車が遅れている。" },
  { vietnamese: "Cho vay", kanji: "貸し", hiragana: "かし", example: "お金の貸し借りはしない方がいい。" },
  { vietnamese: "Khoản vay", kanji: "借り", hiragana: "かり", example: "図書館で本を借りる。" },
  { vietnamese: "Thắng", kanji: "勝ち", hiragana: "かち", example: "試合に勝つのは嬉しい。" },
  { vietnamese: "Thua", kanji: "負け", hiragana: "まけ", example: "負けを認める。" },
  { vietnamese: "Đón", kanji: "迎え", hiragana: "むかえ", example: "空港で友達を迎える。" },
  { vietnamese: "Bắt đầu", kanji: "始まり", hiragana: "はじまり", example: "新しい生活の始まりだ。" },
  { vietnamese: "Kết thúc", kanji: "終わり", hiragana: "おわり", example: "映画の終わりが悲しかった。" },
  { vietnamese: "Trở lại", kanji: "戻り", hiragana: "もどり", example: "戻りの切符を買う。" },
  { vietnamese: "Chia ly", kanji: "別れ", hiragana: "わかれ", example: "友達との別れは寂しい。" },
  { vietnamese: "Niềm vui", kanji: "喜び", hiragana: "よろこび", example: "子供の成長が親の喜びだ。" },
  { vietnamese: "Sự thích thú", kanji: "楽しみ", hiragana: "たのしみ", example: "週末の旅行を楽しみにしている。" },
  { vietnamese: "Tiếng cười", kanji: "笑い", hiragana: "わらい", example: "彼の話でみんなが笑いになった。" },
  { vietnamese: "Sự kinh ngạc", kanji: "驚き", hiragana: "おどろき", example: "突然の知らせに驚きを隠せなかった。" },
  { vietnamese: "Sự tức giận", kanji: "怒り", hiragana: "いかり", example: "彼の態度に怒りを感じた。" },
  { vietnamese: "Công việc", kanji: "働き", hiragana: "はたらき", example: "社会での働きが評価された。" },
  { vietnamese: "Kém, không giỏi", kanji: "苦手", hiragana: "にがて", example: "数学は苦手だ。" },
  { vietnamese: "Sự nhàm chán", kanji: "退屈", hiragana: "たいくつ", example: "退屈な会議が続いた。" },
  { vietnamese: "Sức khỏe", kanji: "健康", hiragana: "けんこう", example: "健康に気をつける。" },
  { vietnamese: "Khổ cực", kanji: "苦しい", hiragana: "くるしい", example: "苦しい時期を乗り越えた。" },
  { vietnamese: "Bình tĩnh", kanji: "平気", hiragana: "へいき", example: "彼はどんな時でも平気だ。" },
  { vietnamese: "Ghen tị", kanji: "羨ましい", hiragana: "うらやましい", example: "友達の成功が羨ましい。" },
  { vietnamese: "Ngứa", kanji: "痒い", hiragana: "かゆい", example: "虫に刺されて痒い。" },
  { vietnamese: "Buồn bã", kanji: "悲しい", hiragana: "かなしい", example: "別れが悲しい。" },
  { vietnamese: "Mệt mỏi", kanji: "疲れ", hiragana: "つかれ", example: "仕事の疲れがたまっている。" },
  { vietnamese: "Ngạc nhiên", kanji: "驚く", hiragana: "おどろく", example: "そのニュースに驚いた。" },
  { vietnamese: "Vui vẻ", kanji: "楽しい", hiragana: "たのしい", example: "楽しい時間を過ごした。" },
  { vietnamese: "Cười", kanji: "笑う", hiragana: "わらう", example: "面白い話で笑った。" }
    ],
    [ // Bài 10
        { vietnamese: "Ngoan", kanji: "大人しい", hiragana: "おとなしい", example: "この子はとても大人しい。" },
  { vietnamese: "Chịu đựng tốt", kanji: "我慢強い", hiragana: "がまんづよい", example: "彼は痛みに我慢強い。" },
  { vietnamese: "Chính trực", kanji: "正直", hiragana: "しょうじき", example: "正直に話してください。" },
  { vietnamese: "Keo kiệt", kanji: "けち", hiragana: "けち", example: "彼はけちで有名だ。" },
  { vietnamese: "Bướng bỉnh", kanji: "我儘", hiragana: "わがまま", example: "わがままな子供に困る。" },
  { vietnamese: "Tích cực", kanji: "積極的", hiragana: "せっきょくてき", example: "積極的に発言する。" },
  { vietnamese: "Tiêu cực", kanji: "消極的", hiragana: "しょうきょくてき", example: "消極的な態度を改める。" },
  { vietnamese: "Thỏa mãn", kanji: "満足", hiragana: "まんぞく", example: "結果に満足している。" },
  { vietnamese: "Bất mãn", kanji: "不満", hiragana: "ふまん", example: "不満を上司に伝える。" },
  { vietnamese: "Bất an", kanji: "不安", hiragana: "ふあん", example: "将来に不安を感じる。" },
  { vietnamese: "Vất vả", kanji: "大変", hiragana: "たいへん", example: "大変な仕事を終えた。" },
  { vietnamese: "Không thể", kanji: "無理", hiragana: "むり", example: "一人でやるのは無理だ。" },
  { vietnamese: "Không chú ý", kanji: "不注意", hiragana: "ふちゅうい", example: "不注意なミスをした。" },
  { vietnamese: "Nhàn hạ", kanji: "楽", hiragana: "らく", example: "楽な仕事が欲しい。" },
  { vietnamese: "Phiền phức", kanji: "面倒", hiragana: "めんどう", example: "手続きが面倒だ。" },
  { vietnamese: "Thất lễ", kanji: "失礼", hiragana: "しつれい", example: "失礼なことを言ってしまった。" },
  { vietnamese: "Đương nhiên", kanji: "当然", hiragana: "とうぜん", example: "当然の結果だ。" },
  { vietnamese: "Ngoài dự kiến", kanji: "意外", hiragana: "いがい", example: "意外な展開に驚いた。" },
  { vietnamese: "Khá, đủ", kanji: "結構", hiragana: "けっこう", example: "もう結構です。" },
  { vietnamese: "Sặc sỡ", kanji: "派手", hiragana: "はで", example: "派手な服を着ている。" },
  { vietnamese: "Đơn giản", kanji: "地味", hiragana: "じみ", example: "地味な色を好む。" },
  { vietnamese: "Sang trọng", kanji: "おしゃれ", hiragana: "おしゃれ", example: "おしゃれなカフェに行く。" },
  { vietnamese: "Kỳ lạ", kanji: "変", hiragana: "へん", example: "変な音がする。" },
  { vietnamese: "Kỳ diệu", kanji: "不思議", hiragana: "ふしぎ", example: "不思議な現象が起きた。" },
  { vietnamese: "Tốt hơn", kanji: "まし", hiragana: "まし", example: "ないよりましだ。" },
  { vietnamese: "Lãng phí", kanji: "無駄", hiragana: "むだ", example: "時間を無駄にしたくない。" },
  { vietnamese: "Tự do", kanji: "自由", hiragana: "じゆう", example: "自由な時間が欲しい。" },
  { vietnamese: "Không tự do", kanji: "不自由", hiragana: "ふじゅう", example: "足が不自由な方への配慮が必要だ。" },
  { vietnamese: "Ấm lên", kanji: "温まる", hiragana: "あたたまる", example: "体が温まるスープ。" },
  { vietnamese: "Làm ấm", kanji: "温める", hiragana: "あたためる", example: "ミルクを温める。" }
    ],
    [ // Bài 11
        { vietnamese: "Tăng lên", kanji: "高まる", hiragana: "たかまる", example: "関心が高まっている。" },
  { vietnamese: "Làm tăng", kanji: "高める", hiragana: "たかめる", example: "スキルを高める努力をする。" },
  { vietnamese: "Mạnh lên", kanji: "強まる", hiragana: "つよまる", example: "風が強まってきた。" },
  { vietnamese: "Làm mạnh lên", kanji: "強める", hiragana: "つよめる", example: "チームワークを強める。" },
  { vietnamese: "Yếu đi", kanji: "弱まる", hiragana: "よわまる", example: "痛みが弱まった。" },
  { vietnamese: "Làm yếu đi", kanji: "弱める", hiragana: "よわめる", example: "火の勢いを弱める。" },
  { vietnamese: "Mở rộng", kanji: "広まる", hiragana: "ひろまる", example: "噂が広まっている。" },
  { vietnamese: "Làm lan rộng", kanji: "広める", hiragana: "ひろめる", example: "知識を広める。" },
  { vietnamese: "Sâu sắc", kanji: "深まる", hiragana: "ふかまる", example: "理解が深まった。" },
  { vietnamese: "Làm sâu thêm", kanji: "深める", hiragana: "ふかめる", example: "関係を深める。" },
  { vietnamese: "Chăm sóc", kanji: "世話", hiragana: "せわ", example: "植物の世話をする。" },
  { vietnamese: "Gia đình", kanji: "家庭", hiragana: "かてい", example: "家庭菜園を楽しむ。" },
  { vietnamese: "Hợp tác", kanji: "協力", hiragana: "きょうりょく", example: "プロジェクトに協力する。" },
  { vietnamese: "Cảm ơn", kanji: "感謝", hiragana: "かんしゃ", example: "感謝の気持ちを伝える。" },
  { vietnamese: "Lời cảm ơn", kanji: "お礼", hiragana: "おれい", example: "お礼の手紙を書く。" },
  { vietnamese: "Lời xin lỗi", kanji: "お詫び", hiragana: "おわび", example: "お詫びの言葉を述べる。" },
  { vietnamese: "Cúi chào", kanji: "お辞儀", hiragana: "おじぎ", example: "先生にお辞儀をする。" },
  { vietnamese: "Bắt tay", kanji: "握手", hiragana: "あくしゅ", example: "初対面で握手を交わす。" },
  { vietnamese: "Xấu tính", kanji: "意地悪", hiragana: "いじわる", example: "意地悪をしないで。" },
  { vietnamese: "Nghịch ngợm", kanji: "いたずら", hiragana: "いたずら", example: "子供がいたずらをする。" },
  { vietnamese: "Tiết kiệm", kanji: "節約", hiragana: "せつやく", example: "電気を節約する。" },
  { vietnamese: "Kinh doanh", kanji: "経営", hiragana: "けいえい", example: "会社を経営する。" },
  { vietnamese: "Kiểm điểm", kanji: "反省", hiragana: "はんせい", example: "自分の行動を反省する。" },
  { vietnamese: "Thực hành", kanji: "実行", hiragana: "じっこう", example: "計画を実行に移す。" },
  { vietnamese: "Tiến bộ", kanji: "進歩", hiragana: "しんぽ", example: "日本語が進歩した。" },
  { vietnamese: "Thay đổi", kanji: "変化", hiragana: "へんか", example: "時代の変化に対応する。" },
  { vietnamese: "Phát triển", kanji: "発達", hiragana: "はったつ", example: "技術が発達している。" },
  { vietnamese: "Thể lực", kanji: "体力", hiragana: "たいりょく", example: "体力をつけるために運動する。" },
  { vietnamese: "Tham gia", kanji: "出場", hiragana: "しゅつじょう", example: "大会に出場する。" },
  { vietnamese: "Hoạt động", kanji: "活躍", hiragana: "かつやく", example: "新しい職場で活躍する。" }
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
