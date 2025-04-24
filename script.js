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
