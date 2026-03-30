// ============================================================
// FILE: server/seed/data/hsk2Lessons.js
// HSK2: Complete 15-lesson curriculum with exercises
// ============================================================

const hsk2Lessons = [
  // LESSON 1: Comparison with 比
  {
    title: 'Comparison with 比',
    titleChinese: '第一课：比较',
    description: 'Learn to make comparisons using 比.',
    hskLevel: 'HSK2', order: 1, category: 'grammar',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['比','高','快','慢','多','非常','长'],
    content: {
      introduction: '比 is used to compare two things. The pattern is: A 比 B + adjective. For example, 他比我高 means "He is taller than me."',
      keyPoints: [
        'Pattern: A 比 B + adjective (A is more adj than B)',
        'Degree words like 多, 一点 can follow the adjective: 他比我高一点',
        '非常 cannot be used with 比; use 多了 or 得多 instead',
        'Negative: 没有 replaces 比 — 他没有我高 (He is not as tall as me)',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does "他比我高" mean?' }, options: [{ text: 'He is taller than me', isCorrect: true },{ text: 'He is shorter than me', isCorrect: false },{ text: 'I am taller than him', isCorrect: false },{ text: 'We are the same height', isCorrect: false }], explanation: 'A 比 B + adjective means A is more adjective than B.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '这条路___那条路长。(This road is longer than that one.)' }, correctAnswer: '比', acceptableAnswers: ['比'], explanation: '比 is placed between the two things being compared.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'Which sentence correctly uses 比?' }, options: [{ text: '她比我非常高', isCorrect: false },{ text: '她比我高多了', isCorrect: true },{ text: '她很比我高', isCorrect: false },{ text: '比她我高', isCorrect: false }], explanation: '非常 cannot be used after 比 + adjective. 多了 expresses a greater degree.' },
      { type: 'reorder', difficulty: 'hard', order: 4, xpReward: 10, question: { text: 'Arrange: "My sister runs faster than me."' }, correctOrder: ['我','姐姐','比','我','跑得','快'], scrambledWords: ['快','我','我','姐姐','跑得','比'], explanation: '我姐姐比我跑得快 uses 比 to compare speed.' },
      { type: 'multiple_choice', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'How do you say "This exam is not as difficult as that one" using 没有?' }, options: [{ text: '这次考试没有那次考试难', isCorrect: true },{ text: '这次考试比那次考试不难', isCorrect: false },{ text: '这次考试没比那次难', isCorrect: false },{ text: '那次考试比这次考试没难', isCorrect: false }], explanation: '没有 replaces 比 in negative comparisons: A 没有 B + adjective.' },
    ],
  },

  // LESSON 2: Siblings & Family Extensions
  {
    title: 'Siblings & Family Extensions',
    titleChinese: '第二课：家庭成员',
    description: 'Learn vocabulary for siblings and extended family.',
    hskLevel: 'HSK2', order: 2, category: 'vocabulary',
    estimatedMinutes: 10, xpReward: 20,
    vocabLinks: ['哥哥','姐姐','弟弟','妹妹','儿子','妻子','孩子','大家'],
    content: {
      introduction: 'Chinese family terms are precise about relative age. 哥 = older brother, 弟 = younger brother, 姐 = older sister, 妹 = younger sister.',
      keyPoints: [
        '哥哥 (gēgē) = older brother; 弟弟 (dìdi) = younger brother',
        '姐姐 (jiějie) = older sister; 妹妹 (mèimei) = younger sister',
        '儿子 (érzi) = son; 妻子 (qīzi) = wife; 孩子 (háizi) = child/children',
        '大家 (dàjiā) = everyone — useful for addressing a group',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 妹妹 mean?' }, options: [{ text: 'Younger sister', isCorrect: true },{ text: 'Older sister', isCorrect: false },{ text: 'Younger brother', isCorrect: false },{ text: 'Daughter', isCorrect: false }], explanation: '妹妹 specifically means younger sister. 姐姐 is older sister.' },
      { type: 'multiple_choice', difficulty: 'easy', order: 2, xpReward: 5, question: { text: 'How do you say "son" in Chinese?' }, options: [{ text: '孩子', isCorrect: false },{ text: '妻子', isCorrect: false },{ text: '儿子', isCorrect: true },{ text: '弟弟', isCorrect: false }], explanation: '儿子 means son. 孩子 means child (general).' },
      { type: 'fill_blank', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '我有一个哥哥和两个___。(I have one older brother and two younger sisters.)' }, correctAnswer: '妹妹', acceptableAnswers: ['妹妹'], explanation: '妹妹 = younger sister.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: '"大家好！" is most naturally said to:' }, options: [{ text: 'A group of people', isCorrect: true },{ text: 'One close friend', isCorrect: false },{ text: 'An older person', isCorrect: false },{ text: 'A child', isCorrect: false }], explanation: '大家 means "everyone," so 大家好 greets an entire group.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "My wife and children are all at home."' }, correctOrder: ['我','妻子','和','孩子','都','在','家'], scrambledWords: ['家','孩子','都','妻子','和','在','我'], explanation: '我妻子和孩子都在家 — 都 (all) comes before the verb.' },
    ],
  },

  // LESSON 3: At the Hotel
  {
    title: 'At the Hotel',
    titleChinese: '第三课：宾馆',
    description: 'Learn how to check in and communicate at a hotel.',
    hskLevel: 'HSK2', order: 3, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['宾馆','服务员','号','欢迎','进','贵','便宜','问'],
    content: {
      introduction: 'Staying at a Chinese hotel requires knowing key phrases for check-in, asking about rooms, and polite interaction with staff.',
      keyPoints: [
        '宾馆 (bīnguǎn) = hotel; 服务员 (fúwùyuán) = service staff/waiter',
        '欢迎光临 (huānyíng guānglín) = Welcome (formal greeting)',
        '号 (hào) used for room numbers: 三零八号房间 = Room 308',
        '进 (jìn) = to enter; 请进 = please come in',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 欢迎 mean?' }, options: [{ text: 'Welcome', isCorrect: true },{ text: 'Goodbye', isCorrect: false },{ text: 'Thank you', isCorrect: false },{ text: 'Excuse me', isCorrect: false }], explanation: '欢迎 means "welcome." Hotels often say 欢迎光临.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '请___！(Please come in!)' }, correctAnswer: '进', acceptableAnswers: ['进','jìn'], explanation: '请进 = "please come in." 进 means to enter.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'A hotel guest wants to know their room number. They ask: "我的房间是几___?"' }, options: [{ text: '号', isCorrect: true },{ text: '个', isCorrect: false },{ text: '件', isCorrect: false },{ text: '次', isCorrect: false }], explanation: '号 is the measure word for numbers like room numbers and dates.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Who would you address as 服务员 in a hotel?' }, options: [{ text: 'A staff member', isCorrect: true },{ text: 'The hotel manager only', isCorrect: false },{ text: 'Another guest', isCorrect: false },{ text: 'A taxi driver', isCorrect: false }], explanation: '服务员 means service staff and can be used to get the attention of hotel or restaurant workers.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "I would like to ask about the room price."' }, correctOrder: ['我','想','问','一下','房间','的','价格'], scrambledWords: ['价格','问','的','想','一下','我','房间'], explanation: '我想问一下房间的价格 — 一下 softens the request.' },
    ],
  },

  // LESSON 4: Transportation & Travel
  {
    title: 'Transportation & Travel',
    titleChinese: '第四课：交通和旅游',
    description: 'Learn vocabulary for getting around and traveling.',
    hskLevel: 'HSK2', order: 4, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['飞机','公共汽车','机场','票','从','到','路','旅游','出'],
    content: {
      introduction: '从...到... (from...to...) is the key pattern for describing routes. Pair it with transport vocabulary to talk about travel.',
      keyPoints: [
        '从 (cóng) = from; 到 (dào) = to/arrive; used together: 从北京到上海',
        '飞机 (fēijī) = airplane; 机场 (jīchǎng) = airport',
        '公共汽车 (gōnggòng qìchē) = public bus; 路 (lù) = road/route/bus line',
        '票 (piào) = ticket; 旅游 (lǚyóu) = to travel/tourism',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 机场 mean?' }, options: [{ text: 'Airport', isCorrect: true },{ text: 'Train station', isCorrect: false },{ text: 'Bus stop', isCorrect: false },{ text: 'Hotel', isCorrect: false }], explanation: '机场 = airport. 飞机 = airplane + 场 = field/place.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '我___北京___上海坐飞机。(I fly from Beijing to Shanghai.)' }, correctAnswer: '从', acceptableAnswers: ['从'], explanation: '从...到... is the "from...to..." pattern.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"两张票" means:' }, options: [{ text: 'Two tickets', isCorrect: true },{ text: 'Two roads', isCorrect: false },{ text: 'Two planes', isCorrect: false },{ text: 'Two buses', isCorrect: false }], explanation: '张 is the measure word for flat objects like tickets. 票 = ticket.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which word means "to travel for leisure"?' }, options: [{ text: '旅游', isCorrect: true },{ text: '出', isCorrect: false },{ text: '路', isCorrect: false },{ text: '到', isCorrect: false }], explanation: '旅游 = tourism/travel for pleasure.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "We want to travel from Shanghai to Beijing by plane."' }, correctOrder: ['我们','想','从','上海','坐','飞机','到','北京','旅游'], scrambledWords: ['旅游','北京','飞机','从','到','坐','上海','我们','想'], explanation: '我们想从上海坐飞机到北京旅游.' },
    ],
  },

  // LESSON 5: Health & Body
  {
    title: 'Health & Body',
    titleChinese: '第五课：身体和健康',
    description: 'Learn vocabulary for describing health and illness.',
    hskLevel: 'HSK2', order: 5, category: 'vocabulary',
    estimatedMinutes: 10, xpReward: 20,
    vocabLinks: ['身体','生病','药','累','休息','眼睛','好吃'],
    content: {
      introduction: 'Talking about health is essential. 身体 means "body/health," and 生病 means "to fall ill." Learn how to express you\'re unwell and need rest.',
      keyPoints: [
        '身体 (shēntǐ) = body or health; 身体好 = in good health',
        '生病 (shēngbìng) = to be/fall ill; 我生病了 = I am sick',
        '药 (yào) = medicine; 吃药 = to take medicine',
        '累 (lèi) = tired; 休息 (xiūxi) = to rest',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 生病 mean?' }, options: [{ text: 'To be sick', isCorrect: true },{ text: 'To be tired', isCorrect: false },{ text: 'To take medicine', isCorrect: false },{ text: 'To rest', isCorrect: false }], explanation: '生病 means "to fall ill." 生 = to give birth/happen, 病 = illness.' },
      { type: 'fill_blank', difficulty: 'easy', order: 2, xpReward: 5, question: { text: '我很___，想休息一下。(I am very tired and want to rest.)' }, correctAnswer: '累', acceptableAnswers: ['累','lèi'], explanation: '累 = tired. 休息 = to rest.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"你身体好吗？" means:' }, options: [{ text: 'How is your health?', isCorrect: true },{ text: 'Are you tired?', isCorrect: false },{ text: 'Do you have medicine?', isCorrect: false },{ text: 'Can you rest now?', isCorrect: false }], explanation: '身体好 = healthy. 你身体好吗 is a caring way to ask about someone\'s health.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'To say "take medicine" in Chinese, you use:' }, options: [{ text: '吃药', isCorrect: true },{ text: '喝药', isCorrect: false },{ text: '用药', isCorrect: false },{ text: '买药', isCorrect: false }], explanation: '吃药 = take medicine (literally "eat medicine"). Chinese uses 吃 for medicine, not 喝.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "The doctor said he needs to rest for three days."' }, correctOrder: ['医生','说','他','需要','休息','三天'], scrambledWords: ['三天','说','休息','他','医生','需要'], explanation: '医生说他需要休息三天.' },
    ],
  },

  // LESSON 6: Shopping & Prices
  {
    title: 'Shopping & Prices',
    titleChinese: '第六课：买东西',
    description: 'Learn to shop, bargain, and discuss prices.',
    hskLevel: 'HSK2', order: 6, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['贵','便宜','卖','多少','一共','件','给','要'],
    content: {
      introduction: 'Shopping conversations revolve around 多少钱 (how much?), 贵 (expensive), and 便宜 (cheap). Learn to ask prices and make purchases.',
      keyPoints: [
        '多少钱 (duōshao qián) = How much does it cost?',
        '贵 (guì) = expensive; 便宜 (piányí) = cheap/inexpensive',
        '一共 (yīgòng) = altogether/in total',
        '件 (jiàn) = measure word for clothing items and matters',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'How do you ask "How much does this cost?"' }, options: [{ text: '这个多少钱？', isCorrect: true },{ text: '这个什么钱？', isCorrect: false },{ text: '这个几块？', isCorrect: false },{ text: '这个怎么卖？', isCorrect: false }], explanation: '多少钱 is the standard way to ask for a price.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '两件衣服___五十块钱。(Two items of clothing cost 50 yuan in total.)' }, correctAnswer: '一共', acceptableAnswers: ['一共'], explanation: '一共 = altogether/in total.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'A customer says "太贵了！" They think the item is:' }, options: [{ text: 'Too expensive', isCorrect: true },{ text: 'Too cheap', isCorrect: false },{ text: 'Very nice', isCorrect: false },{ text: 'Not available', isCorrect: false }], explanation: '贵 = expensive; 太...了 = too...' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: '便宜 is the opposite of:' }, options: [{ text: '贵', isCorrect: true },{ text: '多', isCorrect: false },{ text: '少', isCorrect: false },{ text: '卖', isCorrect: false }], explanation: '便宜 = cheap/inexpensive; 贵 = expensive.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "I want to buy three items of clothing."' }, correctOrder: ['我','想','买','三','件','衣服'], scrambledWords: ['衣服','买','三','想','我','件'], explanation: '我想买三件衣服 — 件 is the measure word for clothing.' },
    ],
  },

  // LESSON 7: Colors & Clothing
  {
    title: 'Colors & Clothing',
    titleChinese: '第七课：颜色和衣服',
    description: 'Learn colors and how to describe clothing.',
    hskLevel: 'HSK2', order: 7, category: 'vocabulary',
    estimatedMinutes: 10, xpReward: 20,
    vocabLinks: ['颜色','白','黑','红','穿','件','新','好看'],
    content: {
      introduction: 'Describing clothing in Chinese requires knowing color words and the verb 穿 (to wear/put on clothing).',
      keyPoints: [
        '颜色 (yánsè) = color; 什么颜色 = what color',
        '白 (bái) = white; 黑 (hēi) = black; 红 (hóng) = red',
        '穿 (chuān) = to wear (clothing, shoes)',
        '新 (xīn) = new; 件 (jiàn) = measure word for clothing',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 红色 mean?' }, options: [{ text: 'Red color', isCorrect: true },{ text: 'White color', isCorrect: false },{ text: 'Black color', isCorrect: false },{ text: 'Blue color', isCorrect: false }], explanation: '红 = red; 色 = color. 红色 = red (the color).' },
      { type: 'fill_blank', difficulty: 'easy', order: 2, xpReward: 5, question: { text: '她___一件白色的衣服。(She is wearing a white item of clothing.)' }, correctAnswer: '穿', acceptableAnswers: ['穿','chuān'], explanation: '穿 = to wear/put on clothing.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"你喜欢什么颜色？" means:' }, options: [{ text: 'What color do you like?', isCorrect: true },{ text: 'What clothes do you like?', isCorrect: false },{ text: 'What color is this?', isCorrect: false },{ text: 'Do you like new clothes?', isCorrect: false }], explanation: '什么颜色 = what color; 喜欢 = to like.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which is the measure word for a shirt?' }, options: [{ text: '件', isCorrect: true },{ text: '个', isCorrect: false },{ text: '张', isCorrect: false },{ text: '本', isCorrect: false }], explanation: '件 is used for clothing items: 一件衬衫 = one shirt.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "He likes wearing black new clothes."' }, correctOrder: ['他','喜欢','穿','黑色','的','新','衣服'], scrambledWords: ['衣服','新','穿','喜欢','黑色','的','他'], explanation: '他喜欢穿黑色的新衣服.' },
    ],
  },

  // LESSON 8: Sports & Hobbies
  {
    title: 'Sports & Hobbies',
    titleChinese: '第八课：运动和爱好',
    description: 'Learn vocabulary for sports activities and hobbies.',
    hskLevel: 'HSK2', order: 8, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['打篮球','踢足球','跑步','跳舞','唱歌','玩','觉得','快乐'],
    content: {
      introduction: 'Sports verbs in Chinese are specific: 打 (hit/play) is used for ball sports, 踢 (kick) for soccer, 跑 for running, 跳 for dancing.',
      keyPoints: [
        '打篮球 (dǎ lánqiú) = play basketball; 踢足球 (tī zúqiú) = play soccer',
        '跑步 (pǎobù) = jogging/running; 跳舞 (tiàowǔ) = to dance',
        '唱歌 (chànggē) = to sing; 玩 (wán) = to play/have fun',
        '觉得 (juéde) = to feel/think; 快乐 (kuàilè) = happy',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'Which verb is used with basketball (篮球)?' }, options: [{ text: '打', isCorrect: true },{ text: '踢', isCorrect: false },{ text: '跑', isCorrect: false },{ text: '跳', isCorrect: false }], explanation: '打 is used for ball sports played with the hands: 打篮球, 打乒乓球.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '他每天早上___步。(He jogs every morning.)' }, correctAnswer: '跑', acceptableAnswers: ['跑'], explanation: '跑步 = to jog/run. The verb 跑 goes before 步.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我觉得跳舞很快乐" means:' }, options: [{ text: 'I feel that dancing is very happy/fun', isCorrect: true },{ text: 'I think dancing is very difficult', isCorrect: false },{ text: 'I want to dance and be happy', isCorrect: false },{ text: 'I feel tired after dancing', isCorrect: false }], explanation: '觉得 = to feel/think; 快乐 = happy/joyful.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which is NOT a sport vocabulary word from this lesson?' }, options: [{ text: '报纸', isCorrect: true },{ text: '踢足球', isCorrect: false },{ text: '唱歌', isCorrect: false },{ text: '跑步', isCorrect: false }], explanation: '报纸 = newspaper, which is unrelated to sports.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "She likes singing and dancing."' }, correctOrder: ['她','喜欢','唱歌','和','跳舞'], scrambledWords: ['和','跳舞','喜欢','唱歌','她'], explanation: '她喜欢唱歌和跳舞.' },
    ],
  },

  // LESSON 9: School & Exams
  {
    title: 'School & Exams',
    titleChinese: '第九课：学校和考试',
    description: 'Learn vocabulary for school life and taking exams.',
    hskLevel: 'HSK2', order: 9, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['教室','考试','课','学生','学习','题','回答','懂','铅笔','书店'],
    content: {
      introduction: 'School life is a common conversation topic. Learn to talk about lessons, exams, and understanding material.',
      keyPoints: [
        '教室 (jiàoshì) = classroom; 课 (kè) = lesson/class',
        '考试 (kǎoshì) = exam; 题 (tí) = question/problem',
        '学生 (xuéshēng) = student; 学习 (xuéxí) = to study/learn',
        '回答 (huídá) = to answer; 懂 (dǒng) = to understand',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 懂 mean?' }, options: [{ text: 'To understand', isCorrect: true },{ text: 'To study', isCorrect: false },{ text: 'To answer', isCorrect: false },{ text: 'To ask', isCorrect: false }], explanation: '懂 = to understand. 我不懂 = I don\'t understand.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '老师让学生___这道题。(The teacher asked students to answer this question.)' }, correctAnswer: '回答', acceptableAnswers: ['回答'], explanation: '回答 = to answer/respond.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"明天有考试" means:' }, options: [{ text: 'There is an exam tomorrow', isCorrect: true },{ text: 'I passed the exam yesterday', isCorrect: false },{ text: 'The exam has already finished', isCorrect: false },{ text: 'I don\'t want to take the exam', isCorrect: false }], explanation: '明天 = tomorrow; 有 = to have/there is; 考试 = exam.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Where do students typically study in school?' }, options: [{ text: '教室', isCorrect: true },{ text: '书店', isCorrect: false },{ text: '宾馆', isCorrect: false },{ text: '机场', isCorrect: false }], explanation: '教室 = classroom. 书店 = bookstore.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Students need to study hard before exams."' }, correctOrder: ['学生','在','考试','前','要','认真','学习'], scrambledWords: ['学习','认真','考试','要','前','在','学生'], explanation: '学生在考试前要认真学习.' },
    ],
  },

  // LESSON 10: Food & Restaurant
  {
    title: 'Food & Restaurant',
    titleChinese: '第十课：饭店和食物',
    description: 'Learn to order food and talk about Chinese dishes.',
    hskLevel: 'HSK2', order: 10, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['饭店','面条','鸡蛋','水果','西瓜','好吃','服务员','牛奶'],
    content: {
      introduction: 'Dining out is a core part of Chinese culture. Learn the names of popular dishes, how to order, and how to compliment the food.',
      keyPoints: [
        '饭店 (fàndiàn) = restaurant; 服务员 (fúwùyuán) = waiter',
        '面条 (miàntiáo) = noodles; 鸡蛋 (jīdàn) = egg',
        '水果 (shuǐguǒ) = fruit; 西瓜 (xīguā) = watermelon',
        '好吃 (hǎochī) = delicious; 牛奶 (niúnǎi) = milk',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 好吃 mean?' }, options: [{ text: 'Delicious', isCorrect: true },{ text: 'Good to drink', isCorrect: false },{ text: 'Full', isCorrect: false },{ text: 'Hungry', isCorrect: false }], explanation: '好吃 = delicious (literally "good to eat"). 吃 = to eat.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '服务员，我要一碗___！(Waiter, I want a bowl of noodles!)' }, correctAnswer: '面条', acceptableAnswers: ['面条'], explanation: '面条 = noodles. 碗 is the measure word for bowl-shaped servings.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"这个西瓜很甜" means:' }, options: [{ text: 'This watermelon is very sweet', isCorrect: true },{ text: 'This watermelon is very big', isCorrect: false },{ text: 'This fruit is delicious', isCorrect: false },{ text: 'This egg is very fresh', isCorrect: false }], explanation: '西瓜 = watermelon; 甜 = sweet.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'What is 鸡蛋?' }, options: [{ text: 'Egg', isCorrect: true },{ text: 'Chicken', isCorrect: false },{ text: 'Milk', isCorrect: false },{ text: 'Noodles', isCorrect: false }], explanation: '鸡 = chicken; 蛋 = egg. 鸡蛋 = chicken egg.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "This restaurant\'s noodles are very delicious."' }, correctOrder: ['这家','饭店','的','面条','很','好吃'], scrambledWords: ['很','面条','的','好吃','饭店','这家'], explanation: '这家饭店的面条很好吃.' },
    ],
  },

  // LESSON 11: Daily Routine
  {
    title: 'Daily Routine',
    titleChinese: '第十一课：日常生活',
    description: 'Learn to describe your daily schedule and activities.',
    hskLevel: 'HSK2', order: 11, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['起床','上班','开始','睡觉','每','时间','分钟','小时','晚上'],
    content: {
      introduction: 'Time expressions are essential for talking about routine. 每 (every), 分钟 (minutes), 小时 (hours) build the foundation for scheduling conversations.',
      keyPoints: [
        '起床 (qǐchuáng) = get up; 睡觉 (shuìjiào) = to sleep',
        '上班 (shàngbān) = to go to work; 开始 (kāishǐ) = to begin',
        '每 (měi) = every; 每天 = every day; 每次 = every time',
        '分钟 (fēnzhōng) = minute; 小时 (xiǎoshí) = hour',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 起床 mean?' }, options: [{ text: 'To get up (out of bed)', isCorrect: true },{ text: 'To go to sleep', isCorrect: false },{ text: 'To go to work', isCorrect: false },{ text: 'To start', isCorrect: false }], explanation: '起床 = get out of bed. 起 = rise; 床 = bed.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '我___天七点起床。(I get up at 7 o\'clock every day.)' }, correctAnswer: '每', acceptableAnswers: ['每'], explanation: '每 = every. 每天 = every day.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"这节课有四十五分钟" means:' }, options: [{ text: 'This class is 45 minutes long', isCorrect: true },{ text: 'Class starts at 4:45', isCorrect: false },{ text: 'There are 45 students in class', isCorrect: false },{ text: 'Class ended 45 minutes ago', isCorrect: false }], explanation: '分钟 = minutes; 四十五分钟 = 45 minutes.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'How do you say "I sleep for 8 hours every night"?' }, options: [{ text: '我每天晚上睡八个小时', isCorrect: true },{ text: '我每天晚上睡八分钟', isCorrect: false },{ text: '我八个小时每晚睡觉', isCorrect: false },{ text: '我晚上睡觉八每', isCorrect: false }], explanation: '小时 = hours. The number + 个 + 小时 pattern gives duration.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "He goes to work at 8 AM every day."' }, correctOrder: ['他','每天','早上','八点','上班'], scrambledWords: ['八点','上班','早上','每天','他'], explanation: '他每天早上八点上班.' },
    ],
  },

  // LESSON 12: Giving & Receiving
  {
    title: 'Giving & Receiving',
    titleChinese: '第十二课：给和送',
    description: 'Learn grammar patterns for giving, sending, and helping.',
    hskLevel: 'HSK2', order: 12, category: 'grammar',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['给','送','告诉','帮助','让','要','问'],
    content: {
      introduction: '给 (gěi) acts as both a verb (to give) and a preposition (for/to). It is essential in Chinese for expressing giving, receiving, and doing things for others.',
      keyPoints: [
        '给 as verb: 我给你一本书 = I give you a book',
        '给 as preposition: 我给你买了礼物 = I bought a gift for you',
        '送 (sòng) = to send/give as a gift/see off',
        '告诉 (gàosù) = to tell; 帮助 (bāngzhù) = to help; 让 (ràng) = to let/allow/make',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 告诉 mean?' }, options: [{ text: 'To tell', isCorrect: true },{ text: 'To give', isCorrect: false },{ text: 'To send', isCorrect: false },{ text: 'To help', isCorrect: false }], explanation: '告诉 = to tell someone something.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '妈妈___我一个蛋糕。(Mom gave me a cake.)' }, correctAnswer: '给', acceptableAnswers: ['给'], explanation: '给 as a verb means "to give." Subject + 给 + recipient + object.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"他让我帮助他" means:' }, options: [{ text: 'He made/asked me to help him', isCorrect: true },{ text: 'He helped me', isCorrect: false },{ text: 'I gave him help', isCorrect: false },{ text: 'He told me to give up', isCorrect: false }], explanation: '让 = to let/ask/make someone do something; 帮助 = to help.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which sentence uses 送 correctly to mean "give as a gift"?' }, options: [{ text: '他送给我一束花', isCorrect: true },{ text: '他送我一本书买', isCorrect: false },{ text: '我送给花了', isCorrect: false },{ text: '我给送他礼物', isCorrect: false }], explanation: '送给 = to give as a gift. 他送给我一束花 = He gave me a bouquet of flowers.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Please tell me your phone number."' }, correctOrder: ['请','告诉','我','你的','手机号码'], scrambledWords: ['你的','我','手机号码','告诉','请'], explanation: '请告诉我你的手机号码.' },
    ],
  },

  // LESSON 13: Expressing Feelings
  {
    title: 'Expressing Feelings',
    titleChinese: '第十三课：表达感情',
    description: 'Learn to express emotions and use because/so/although/but.',
    hskLevel: 'HSK2', order: 13, category: 'vocabulary',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['觉得','快乐','笑','希望','因为','所以','但是','虽然','对不起'],
    content: {
      introduction: 'Chinese has paired conjunctions: 因为...所以 (because...therefore) and 虽然...但是 (although...but). These are core to expressing complex thoughts.',
      keyPoints: [
        '因为 (yīnwèi) = because; 所以 (suǒyǐ) = therefore/so',
        '虽然 (suīrán) = although; 但是 (dànshì) = but/however',
        '觉得 (juéde) = to feel/think; 希望 (xīwàng) = to hope/wish',
        '快乐 (kuàilè) = happy; 笑 (xiào) = to smile/laugh',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 因为 mean?' }, options: [{ text: 'Because', isCorrect: true },{ text: 'Although', isCorrect: false },{ text: 'Therefore', isCorrect: false },{ text: 'But', isCorrect: false }], explanation: '因为 = because. It pairs with 所以 (therefore) in Chinese sentences.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '虽然他很忙，___他还是来了。(Although he was busy, he still came.)' }, correctAnswer: '但是', acceptableAnswers: ['但是','可是'], explanation: '虽然...但是 = although...but. These conjunctions come in pairs.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"因为今天下雨，所以我没有去跑步" means:' }, options: [{ text: 'Because it rained today, so I didn\'t go jogging', isCorrect: true },{ text: 'Although it rained, I still went jogging', isCorrect: false },{ text: 'I jogged in the rain today', isCorrect: false },{ text: 'I hoped to jog but it rained', isCorrect: false }], explanation: '因为...所以 links cause and effect.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: '希望 means:' }, options: [{ text: 'To hope/wish', isCorrect: true },{ text: 'To feel happy', isCorrect: false },{ text: 'To smile', isCorrect: false },{ text: 'To think', isCorrect: false }], explanation: '希望 = to hope or wish for something.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Although the exam was difficult, he still felt happy."' }, correctOrder: ['虽然','考试','很','难','但是','他','还是','很','快乐'], scrambledWords: ['快乐','但是','很','他','考试','虽然','很','难','还是'], explanation: '虽然考试很难，但是他还是很快乐.' },
    ],
  },

  // LESSON 14: Work & Company
  {
    title: 'Work & Company',
    titleChinese: '第十四课：工作和公司',
    description: 'Learn vocabulary for work life and professional settings.',
    hskLevel: 'HSK2', order: 14, category: 'conversation',
    estimatedMinutes: 12, xpReward: 20,
    vocabLinks: ['公司','上班','忙','事情','问题','时间','已经','让','告诉'],
    content: {
      introduction: 'Work conversations require vocabulary about being busy, company life, and managing time. 已经 (already) is key for describing completed states.',
      keyPoints: [
        '公司 (gōngsī) = company; 上班 (shàngbān) = to go to work',
        '忙 (máng) = busy; 事情 (shìqíng) = matter/thing/affair',
        '问题 (wèntí) = problem/question; 时间 (shíjiān) = time',
        '已经 (yǐjīng) = already — used before a verb/adjective',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 已经 mean?' }, options: [{ text: 'Already', isCorrect: true },{ text: 'Not yet', isCorrect: false },{ text: 'Still', isCorrect: false },{ text: 'Soon', isCorrect: false }], explanation: '已经 = already. It indicates a state that has been reached.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '这件___很重要，你要注意。(This matter is very important, pay attention.)' }, correctAnswer: '事情', acceptableAnswers: ['事情'], explanation: '事情 = matter/affair/thing.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我们公司有很多问题" means:' }, options: [{ text: 'Our company has many problems', isCorrect: true },{ text: 'Our company asks many questions', isCorrect: false },{ text: 'Our company is very busy', isCorrect: false },{ text: 'Our company already solved the problems', isCorrect: false }], explanation: '问题 = problem/question; 有 = to have.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'A colleague says "我已经上班了。" This means:' }, options: [{ text: 'I\'m already at work', isCorrect: true },{ text: 'I haven\'t gone to work yet', isCorrect: false },{ text: 'I don\'t want to go to work', isCorrect: false },{ text: 'I will go to work soon', isCorrect: false }], explanation: '已经 + verb + 了 = already done. 已经上班了 = already gone to work.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Because the company has many matters, we are very busy."' }, correctOrder: ['因为','公司','有','很多','事情','所以','我们','很','忙'], scrambledWords: ['我们','事情','因为','忙','公司','很多','很','所以','有'], explanation: '因为公司有很多事情，所以我们很忙.' },
    ],
  },

  // LESSON 15: HSK2 Review
  {
    title: 'HSK2 Comprehensive Review',
    titleChinese: '第十五课：复习',
    description: 'Review all HSK2 topics with mixed exercises.',
    hskLevel: 'HSK2', order: 15, category: 'mixed',
    estimatedMinutes: 15, xpReward: 25,
    vocabLinks: ['比','给','虽然','但是','因为','所以','已经','每','从','到','觉得','希望','欢迎','告诉','帮助'],
    content: {
      introduction: 'This lesson reviews the key grammar patterns and vocabulary from all HSK2 lessons. Focus on comparison (比), giving (给), conjunctions (因为/所以, 虽然/但是), and time expressions.',
      keyPoints: [
        'Comparison: A 比 B + adj; Negative: A 没有 B + adj',
        'Giving: 给/送/告诉/帮助 patterns',
        'Conjunctions: 因为...所以..., 虽然...但是...',
        '已经 = already; 每 = every; 从...到... = from...to...',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'Complete: "她___我跑得快。" (She runs faster than me.)' }, options: [{ text: '比', isCorrect: true },{ text: '给', isCorrect: false },{ text: '让', isCorrect: false },{ text: '因为', isCorrect: false }], explanation: '比 is used for direct comparisons: A 比 B + adj.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '___他今天生病了，___他没有上班。(Because he was sick today, he didn\'t go to work.)' }, correctAnswer: '因为', acceptableAnswers: ['因为'], explanation: '因为...所以... links cause and effect. 因为 starts the cause.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'Which sentence is correct?' }, options: [{ text: '虽然她很忙，但是她还是帮助了我', isCorrect: true },{ text: '因为她很忙，但是她还是帮助了我', isCorrect: false },{ text: '虽然她很忙，所以她还是帮助了我', isCorrect: false },{ text: '因为她很忙，虽然她帮助了我', isCorrect: false }], explanation: '虽然...但是 and 因为...所以 are the correct conjunction pairs.' },
      { type: 'fill_blank', difficulty: 'hard', order: 4, xpReward: 10, question: { text: '我___从上海___北京坐火车了。(I have already traveled from Shanghai to Beijing by train.)' }, correctAnswer: '已经', acceptableAnswers: ['已经'], explanation: '已经 = already. It indicates a completed state.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Every day she tells her children to study."' }, correctOrder: ['她','每天','告诉','孩子们','要','好好','学习'], scrambledWords: ['学习','每天','孩子们','好好','她','要','告诉'], explanation: '她每天告诉孩子们要好好学习.' },
    ],
  },
];

module.exports = hsk2Lessons;
