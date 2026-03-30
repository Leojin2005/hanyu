// ============================================================
// FILE: server/seed/data/hsk3Lessons.js
// HSK3: Complete 15-lesson curriculum with exercises
// ============================================================

const hsk3Lessons = [
  // LESSON 1: Using 把 Structure
  {
    title: 'Using 把 Structure',
    titleChinese: '第一课：把字句',
    description: 'Master the 把 sentence structure to express what is done to an object.',
    hskLevel: 'HSK3', order: 1, category: 'grammar',
    estimatedMinutes: 15, xpReward: 25,
    vocabLinks: ['把','放','带','整理','完成','忘记','拿'],
    content: {
      introduction: '把 moves the object before the verb to emphasize the disposal or handling of that object. The result or complement after the verb is required.',
      keyPoints: [
        'Pattern: Subject + 把 + Object + Verb + Complement',
        '把 sentences always require a result: 我把书放在桌子上 (I put the book on the table)',
        'Simple verbs without complements CANNOT be used with 把: ✗ 我把书看',
        'Common verbs: 放 (put), 带 (bring), 拿 (take), 整理 (tidy up)',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What is the main purpose of the 把 structure?' }, options: [{ text: 'To emphasize what is done to an object', isCorrect: true },{ text: 'To indicate a passive action', isCorrect: false },{ text: 'To show comparison', isCorrect: false },{ text: 'To express a wish', isCorrect: false }], explanation: '把 puts the object early in the sentence to emphasize how it is disposed of or handled.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '请你___书___在桌子上。(Please put the book on the table.)' }, correctAnswer: '把', acceptableAnswers: ['把'], explanation: '把 introduces the object (书) before the verb (放). Full sentence: 请你把书放在桌子上.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'Which 把 sentence is grammatically correct?' }, options: [{ text: '我把作业完成了', isCorrect: true },{ text: '我把作业完成', isCorrect: false },{ text: '把我作业完成了', isCorrect: false },{ text: '我完成把作业', isCorrect: false }], explanation: '把 sentences need a result complement. 了 here marks completion, making the sentence correct.' },
      { type: 'reorder', difficulty: 'hard', order: 4, xpReward: 10, question: { text: 'Arrange: "She tidied up the room."' }, correctOrder: ['她','把','房间','整理','好了'], scrambledWords: ['好了','整理','房间','把','她'], explanation: '她把房间整理好了 — 好了 is the result complement.' },
      { type: 'multiple_choice', difficulty: 'hard', order: 5, xpReward: 10, question: { text: '"我把手机忘在家里了" means:' }, options: [{ text: 'I forgot my phone at home', isCorrect: true },{ text: 'My phone was forgotten by someone at home', isCorrect: false },{ text: 'Someone brought my phone home', isCorrect: false },{ text: 'I put my phone down at home', isCorrect: false }], explanation: '把手机忘在家里了 = forgot the phone, leaving it at home. 忘 = forget, 在家里 = at home.' },
    ],
  },

  // LESSON 2: Passive Voice with 被
  {
    title: 'Passive Voice with 被',
    titleChinese: '第二课：被字句',
    description: 'Learn the passive voice structure using 被 to express "being acted upon".',
    hskLevel: 'HSK3', order: 2, category: 'grammar',
    estimatedMinutes: 15, xpReward: 25,
    vocabLinks: ['被','打扫','发现','影响','使用','完成','收'],
    content: {
      introduction: '被 marks the subject as the receiver of an action. It often carries a negative or undesirable connotation, though not always. Pattern: Receiver + 被 + Agent + Verb + Result.',
      keyPoints: [
        'Pattern: Subject (receiver) + 被 + Agent + Verb + Result/Complement',
        '我被老板批评了 = I was criticized by the boss',
        'The agent can be omitted: 我的手机被偷了 = My phone was stolen',
        '被 often implies something undesirable happened (unlike English passive)',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 被 indicate in a Chinese sentence?' }, options: [{ text: 'The subject is the receiver of an action', isCorrect: true },{ text: 'The subject is performing an action', isCorrect: false },{ text: 'The sentence is a comparison', isCorrect: false },{ text: 'Something is about to happen', isCorrect: false }], explanation: '被 marks the subject as the one who receives or experiences the action.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '这个问题___他解决了。(This problem was solved by him.)' }, correctAnswer: '被', acceptableAnswers: ['被'], explanation: '被 introduces the agent (他) who performs the action.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我的钱包被人偷走了" means:' }, options: [{ text: 'My wallet was stolen by someone', isCorrect: true },{ text: 'I stole someone\'s wallet', isCorrect: false },{ text: 'I lost my wallet somewhere', isCorrect: false },{ text: 'Someone found my wallet', isCorrect: false }], explanation: '被人偷走了 = was stolen by someone. 走 is the directional complement.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which sentence correctly uses 被?' }, options: [{ text: '作业被老师检查了', isCorrect: true },{ text: '老师被作业检查了', isCorrect: false },{ text: '作业被检查老师了', isCorrect: false },{ text: '被老师检查作业了', isCorrect: false }], explanation: 'The receiver (作业) comes first, then 被, then the agent (老师), then the verb.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "The cake was eaten by the children."' }, correctOrder: ['蛋糕','被','孩子们','吃完了'], scrambledWords: ['吃完了','孩子们','蛋糕','被'], explanation: '蛋糕被孩子们吃完了 — receiver + 被 + agent + verb + result.' },
    ],
  },

  // LESSON 3: City Life & Locations
  {
    title: 'City Life & Locations',
    titleChinese: '第三课：城市生活',
    description: 'Learn vocabulary for navigating city life and locations.',
    hskLevel: 'HSK3', order: 3, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['城市','超市','银行','邮局','图书馆','附近','地铁','楼','入口'],
    content: {
      introduction: 'Modern Chinese cities are full of activity. This lesson covers common city locations and how to talk about where places are.',
      keyPoints: [
        '城市 (chéngshì) = city; 超市 (chāoshì) = supermarket',
        '银行 (yínháng) = bank; 邮局 (yóujú) = post office',
        '图书馆 (túshūguǎn) = library; 附近 (fùjìn) = nearby',
        '地铁 (dìtiě) = subway/metro; 入口 (rùkǒu) = entrance',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 附近 mean?' }, options: [{ text: 'Nearby, in the vicinity', isCorrect: true },{ text: 'Far away', isCorrect: false },{ text: 'In the city', isCorrect: false },{ text: 'On the second floor', isCorrect: false }], explanation: '附近 = nearby/in the vicinity. 这附近有银行吗？= Is there a bank nearby?' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '我要去___取钱。(I need to go to the bank to withdraw money.)' }, correctAnswer: '银行', acceptableAnswers: ['银行'], explanation: '银行 = bank. 取钱 = withdraw money.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"超市在图书馆旁边" means:' }, options: [{ text: 'The supermarket is next to the library', isCorrect: true },{ text: 'The library is inside the supermarket', isCorrect: false },{ text: 'The supermarket and library are far apart', isCorrect: false },{ text: 'There is no supermarket near the library', isCorrect: false }], explanation: '在...旁边 = next to, beside.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which is the most common urban transport in Chinese cities?' }, options: [{ text: '地铁', isCorrect: true },{ text: '飞机', isCorrect: false },{ text: '火车', isCorrect: false },{ text: '轮船', isCorrect: false }], explanation: '地铁 = subway/metro. It is the most common urban transport in major Chinese cities.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "The entrance to the library is on the east side of the building."' }, correctOrder: ['图书馆','的','入口','在','楼','的','东边'], scrambledWords: ['东边','的','图书馆','楼','入口','在','的'], explanation: '图书馆的入口在楼的东边.' },
    ],
  },

  // LESSON 4: Health & Medical
  {
    title: 'Health & Medical',
    titleChinese: '第四课：健康和医疗',
    description: 'Learn to describe health problems and talk about medical situations.',
    hskLevel: 'HSK3', order: 4, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['医院','健康','感冒','发烧','检查','手术','放心','担心'],
    content: {
      introduction: 'Health vocabulary is critical for everyday situations. Know how to describe symptoms and navigate medical appointments.',
      keyPoints: [
        '健康 (jiànkāng) = healthy/health; 医院 (yīyuàn) = hospital',
        '感冒 (gǎnmào) = cold/flu; 发烧 (fāshāo) = fever',
        '检查 (jiǎnchá) = to examine/check; 手术 (shǒushù) = surgery/operation',
        '放心 (fàngxīn) = feel relieved; 担心 (dānxīn) = to worry',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 感冒 mean?' }, options: [{ text: 'To have a cold/flu', isCorrect: true },{ text: 'To have a fever', isCorrect: false },{ text: 'To have surgery', isCorrect: false },{ text: 'To recover', isCorrect: false }], explanation: '感冒 = the common cold or flu. 发烧 specifically means fever.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '医生说他需要做一个小___。(The doctor said he needs a minor surgery.)' }, correctAnswer: '手术', acceptableAnswers: ['手术'], explanation: '手术 = surgical operation. 做手术 = to have/perform surgery.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"你放心吧！" means:' }, options: [{ text: 'Don\'t worry, relax!', isCorrect: true },{ text: 'Be careful!', isCorrect: false },{ text: 'Go to the hospital!', isCorrect: false },{ text: 'Take your medicine!', isCorrect: false }], explanation: '放心 = to set one\'s mind at rest; 你放心吧 = relax, don\'t worry.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'A doctor says "我需要给你做一个检查." This means:' }, options: [{ text: 'I need to give you an examination', isCorrect: true },{ text: 'You need to take a rest', isCorrect: false },{ text: 'You have a serious illness', isCorrect: false },{ text: 'I will prescribe you medicine', isCorrect: false }], explanation: '做检查 = to conduct an examination/check-up.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Don\'t worry, the doctor said his health is very good."' }, correctOrder: ['别','担心','医生','说','他','的','健康','很','好'], scrambledWords: ['很','健康','说','的','担心','别','他','医生','好'], explanation: '别担心，医生说他的健康很好.' },
    ],
  },

  // LESSON 5: Environment & Nature
  {
    title: 'Environment & Nature',
    titleChinese: '第五课：环境和自然',
    description: 'Learn vocabulary for talking about nature and the environment.',
    hskLevel: 'HSK3', order: 5, category: 'vocabulary',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['环境','太阳','树叶','草','河','空气','动物','保护','刮风'],
    content: {
      introduction: 'Nature vocabulary enriches descriptive ability. 保护环境 (protect the environment) is a commonly used phrase in modern Chinese.',
      keyPoints: [
        '环境 (huánjìng) = environment; 保护 (bǎohù) = to protect',
        '太阳 (tàiyáng) = sun; 空气 (kōngqì) = air',
        '河 (hé) = river; 草 (cǎo) = grass; 树叶 (shùyè) = leaves',
        '动物 (dòngwù) = animal; 刮风 (guā fēng) = windy',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 保护环境 mean?' }, options: [{ text: 'Protect the environment', isCorrect: true },{ text: 'Enjoy nature', isCorrect: false },{ text: 'Clean the air', isCorrect: false },{ text: 'Plant trees', isCorrect: false }], explanation: '保护 = to protect; 环境 = environment.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '今天___很大，我不想出门。(Today it\'s very windy, I don\'t want to go out.)' }, correctAnswer: '风', acceptableAnswers: ['风','刮风'], explanation: '风大 = strong wind; 刮风 = it is windy.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"这里的空气非常新鲜" means:' }, options: [{ text: 'The air here is very fresh', isCorrect: true },{ text: 'There is no wind here', isCorrect: false },{ text: 'The environment here is polluted', isCorrect: false },{ text: 'It rains a lot here', isCorrect: false }], explanation: '空气 = air; 新鲜 = fresh; 非常 = very.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which word means "leaves of a tree"?' }, options: [{ text: '树叶', isCorrect: true },{ text: '草', isCorrect: false },{ text: '花', isCorrect: false },{ text: '河', isCorrect: false }], explanation: '树叶 = tree leaves. 树 = tree; 叶 = leaf.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "We should protect animals and the natural environment."' }, correctOrder: ['我们','应该','保护','动物','和','自然','环境'], scrambledWords: ['环境','和','动物','保护','自然','应该','我们'], explanation: '我们应该保护动物和自然环境.' },
    ],
  },

  // LESSON 6: Work & Career
  {
    title: 'Work & Career',
    titleChinese: '第六课：工作和职业',
    description: 'Learn vocabulary for professional life, careers, and workplace conversations.',
    hskLevel: 'HSK3', order: 6, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['工作','办公室','加班','经验','计划','建议','完成','努力','成功'],
    content: {
      introduction: 'Career vocabulary is essential for adult learners. This lesson covers workplace phrases, expressing plans, and giving advice.',
      keyPoints: [
        '工作 (gōngzuò) = work/job; 办公室 (bàngōngshì) = office',
        '加班 (jiābān) = work overtime; 经验 (jīngyàn) = experience',
        '计划 (jìhuà) = plan; 建议 (jiànyì) = suggestion/advice',
        '努力 (nǔlì) = to work hard; 成功 (chénggōng) = to succeed',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 加班 mean?' }, options: [{ text: 'To work overtime', isCorrect: true },{ text: 'To take a break', isCorrect: false },{ text: 'To get a promotion', isCorrect: false },{ text: 'To go to work', isCorrect: false }], explanation: '加班 = to work overtime/extra hours. 加 = add; 班 = work shift.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '他有很多工作___，所以很快找到了新工作。(He has a lot of work experience, so he quickly found a new job.)' }, correctAnswer: '经验', acceptableAnswers: ['经验'], explanation: '经验 = experience (professional).' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我有一个建议" means:' }, options: [{ text: 'I have a suggestion', isCorrect: true },{ text: 'I have a plan', isCorrect: false },{ text: 'I have a question', isCorrect: false },{ text: 'I have a problem', isCorrect: false }], explanation: '建议 = suggestion, advice.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which sentence means "You need to work hard to succeed"?' }, options: [{ text: '你需要努力才能成功', isCorrect: true },{ text: '你成功了努力吗', isCorrect: false },{ text: '努力你成功了', isCorrect: false },{ text: '你成功努力地工作', isCorrect: false }], explanation: '需要...才能... = need to... in order to...' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Our company\'s plan has already been completed."' }, correctOrder: ['我们','公司','的','计划','已经','完成了'], scrambledWords: ['完成了','计划','的','已经','公司','我们'], explanation: '我们公司的计划已经完成了.' },
    ],
  },

  // LESSON 7: Travel & Directions
  {
    title: 'Travel & Directions',
    titleChinese: '第七课：旅行和方向',
    description: 'Learn to ask for and give directions, and discuss travel plans.',
    hskLevel: 'HSK3', order: 7, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['旅行','地图','方向','向','转','出发','护照','签证','问路'],
    content: {
      introduction: 'Traveling in China requires knowing direction words and how to ask for help navigating. 问路 (ask for directions) is a valuable skill.',
      keyPoints: [
        '向左/右转 = turn left/right; 一直走 = go straight',
        '出发 (chūfā) = to set off/depart; 护照 (hùzhào) = passport',
        '地图 (dìtú) = map; 签证 (qiānzhèng) = visa',
        '方向 (fāngxiàng) = direction; 向 (xiàng) = toward',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 出发 mean?' }, options: [{ text: 'To set off / depart', isCorrect: true },{ text: 'To arrive', isCorrect: false },{ text: 'To stop', isCorrect: false },{ text: 'To turn around', isCorrect: false }], explanation: '出发 = to set off, to depart. 我们明天出发 = We depart tomorrow.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '请问，去火车站怎么走？___走，然后___左转。(Go straight, then turn left.)' }, correctAnswer: '一直', acceptableAnswers: ['一直'], explanation: '一直走 = go straight. 然后向左转 = then turn left.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'Which document do you need to travel abroad?' }, options: [{ text: '护照', isCorrect: true },{ text: '地图', isCorrect: false },{ text: '菜单', isCorrect: false },{ text: '号码', isCorrect: false }], explanation: '护照 = passport. You also may need a 签证 (visa) for some countries.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: '"请向右转" means:' }, options: [{ text: 'Please turn right', isCorrect: true },{ text: 'Please go straight', isCorrect: false },{ text: 'Please turn left', isCorrect: false },{ text: 'Please stop here', isCorrect: false }], explanation: '向右转 = turn right. 向左转 = turn left.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "We will set off for Beijing tomorrow morning."' }, correctOrder: ['我们','明天','早上','出发','去','北京'], scrambledWords: ['北京','早上','出发','去','明天','我们'], explanation: '我们明天早上出发去北京.' },
    ],
  },

  // LESSON 8: Shopping & Modern Life
  {
    title: 'Shopping & Modern Life',
    titleChinese: '第八课：购物和现代生活',
    description: 'Learn to shop in modern China, discuss prices, and use payment methods.',
    hskLevel: 'HSK3', order: 8, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['超市','打折','信用卡','免费','价格','选','满意','换','收'],
    content: {
      introduction: 'Shopping in modern China combines traditional markets with digital payment. Learn key phrases for bargaining, paying, and expressing satisfaction.',
      keyPoints: [
        '打折 (dǎzhé) = discount; 免费 (miǎnfèi) = free of charge',
        '信用卡 (xìnyòngkǎ) = credit card; 价格 (jiàgé) = price',
        '满意 (mǎnyì) = satisfied; 换 (huàn) = to exchange/change',
        '选 (xuǎn) = to choose; 收 (shōu) = to receive/accept (payment)',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 打折 mean?' }, options: [{ text: 'Discount / on sale', isCorrect: true },{ text: 'Full price', isCorrect: false },{ text: 'Free', isCorrect: false },{ text: 'Too expensive', isCorrect: false }], explanation: '打折 = discount. 打八折 = 20% off (80% of original price).' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '这件衣服不___，我想换一件。(I\'m not satisfied with this item of clothing, I want to exchange it.)' }, correctAnswer: '满意', acceptableAnswers: ['满意'], explanation: '不满意 = not satisfied. 换 = to exchange.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"您可以用信用卡吗？" means:' }, options: [{ text: 'Can you pay by credit card?', isCorrect: true },{ text: 'Do you have a credit card?', isCorrect: false },{ text: 'This store does not accept cards', isCorrect: false },{ text: 'The price is too high', isCorrect: false }], explanation: '用信用卡 = use/pay by credit card.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'A store sign says 今天免费. This means:' }, options: [{ text: 'Free today', isCorrect: true },{ text: 'Discount today', isCorrect: false },{ text: 'Closed today', isCorrect: false },{ text: 'Limited stock today', isCorrect: false }], explanation: '免费 = free of charge. 今天免费 = free today.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "This store is having a 30% discount today, so I bought many things."' }, correctOrder: ['这家','店','今天','打折','所以','我','买了','很多','东西'], scrambledWords: ['东西','很多','买了','今天','所以','打折','店','我','这家'], explanation: '这家店今天打折，所以我买了很多东西.' },
    ],
  },

  // LESSON 9: Relationships & Social
  {
    title: 'Relationships & Social Life',
    titleChinese: '第九课：关系和社交',
    description: 'Learn vocabulary for describing relationships and social interactions.',
    hskLevel: 'HSK3', order: 9, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['关系','邻居','亲戚','见面','联系','礼貌','性格','热情','告别'],
    content: {
      introduction: 'Chinese social life places great emphasis on relationships (关系) and etiquette. This lesson covers vocabulary for describing people and maintaining connections.',
      keyPoints: [
        '关系 (guānxi) = relationship/connection; 邻居 (línjū) = neighbor',
        '亲戚 (qīnqi) = relatives; 见面 (jiànmiàn) = to meet/meet up',
        '联系 (liánxì) = to contact/keep in touch; 礼貌 (lǐmào) = polite',
        '性格 (xìnggé) = personality/character; 热情 (rèqíng) = warm/enthusiastic',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 邻居 mean?' }, options: [{ text: 'Neighbor', isCorrect: true },{ text: 'Relative', isCorrect: false },{ text: 'Colleague', isCorrect: false },{ text: 'Friend', isCorrect: false }], explanation: '邻居 = neighbor. 邻 = adjacent; 居 = to reside.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '他的___很好，对大家都很___。(His personality is great, he is warm/enthusiastic to everyone.)' }, correctAnswer: '性格', acceptableAnswers: ['性格'], explanation: '性格 = personality/character. 热情 = warm/enthusiastic.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我们要经常保持联系" means:' }, options: [{ text: 'We should keep in touch often', isCorrect: true },{ text: 'We should meet up often', isCorrect: false },{ text: 'We need to maintain our relationship', isCorrect: false },{ text: 'We must call each other every day', isCorrect: false }], explanation: '保持联系 = to keep/maintain contact.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'When leaving a party, you say 告别. This means:' }, options: [{ text: 'To bid farewell/say goodbye', isCorrect: true },{ text: 'To say hello', isCorrect: false },{ text: 'To introduce yourself', isCorrect: false },{ text: 'To make a toast', isCorrect: false }], explanation: '告别 = to bid farewell, to take leave. More formal than 再见.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "My neighbor is very polite and always greets me."' }, correctOrder: ['我','的','邻居','很','有','礼貌','总是','跟','我','打招呼'], scrambledWords: ['打招呼','礼貌','邻居','有','跟','总是','很','的','我','我'], explanation: '我的邻居很有礼貌，总是跟我打招呼.' },
    ],
  },

  // LESSON 10: Culture & Customs
  {
    title: 'Culture & Customs',
    titleChinese: '第十课：文化和习俗',
    description: 'Learn vocabulary for Chinese culture, customs, and traditions.',
    hskLevel: 'HSK3', order: 10, category: 'vocabulary',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['文化','传统','节日','礼物','习惯','长城','有名','民族','普通话'],
    content: {
      introduction: 'China has a rich cultural heritage. This lesson introduces vocabulary for discussing Chinese customs, festivals, and cultural practices.',
      keyPoints: [
        '文化 (wénhuà) = culture; 传统 (chuántǒng) = tradition',
        '节日 (jiérì) = festival/holiday; 礼物 (lǐwù) = gift',
        '习惯 (xíguàn) = habit/custom; 有名 (yǒumíng) = famous',
        '长城 (Chángchéng) = Great Wall; 普通话 (pǔtōnghuà) = Mandarin Chinese',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What is 普通话?' }, options: [{ text: 'Standard Mandarin Chinese', isCorrect: true },{ text: 'Cantonese dialect', isCorrect: false },{ text: 'A famous Chinese dish', isCorrect: false },{ text: 'The Chinese writing system', isCorrect: false }], explanation: '普通话 is the standard form of Mandarin Chinese, used as the national language.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '春节是中国最重要的___之一。(Spring Festival is one of the most important festivals in China.)' }, correctAnswer: '节日', acceptableAnswers: ['节日'], explanation: '节日 = festival/holiday. 春节 = Chinese New Year/Spring Festival.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"长城是世界有名的建筑" means:' }, options: [{ text: 'The Great Wall is a world-famous structure', isCorrect: true },{ text: 'The Great Wall is the largest building', isCorrect: false },{ text: 'China built the Great Wall for the world', isCorrect: false },{ text: 'The Great Wall is a famous Chinese tradition', isCorrect: false }], explanation: '有名 = famous; 世界有名 = world-famous.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'The word 习惯 can be used to mean:' }, options: [{ text: 'Both a noun (habit) and a verb (to be used to)', isCorrect: true },{ text: 'Only a noun (habit)', isCorrect: false },{ text: 'Only a verb (to like)', isCorrect: false },{ text: 'Only an adjective (traditional)', isCorrect: false }], explanation: '习惯 as noun: 好习惯 = good habit. As verb: 我习惯了 = I am used to it.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "Chinese culture has very many traditional festivals."' }, correctOrder: ['中国','文化','有','很多','传统','节日'], scrambledWords: ['传统','很多','节日','文化','中国','有'], explanation: '中国文化有很多传统节日.' },
    ],
  },

  // LESSON 11: Technology & Internet
  {
    title: 'Technology & Internet',
    titleChinese: '第十一课：科技和网络',
    description: 'Learn vocabulary for technology, the internet, and digital life.',
    hskLevel: 'HSK3', order: 11, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['上网','网络','电子邮件','下载','使用','科学','新闻','信用卡','发现'],
    content: {
      introduction: 'China is a leading technology nation. Learn the essential vocabulary for talking about the internet, apps, and digital communications.',
      keyPoints: [
        '上网 (shàngwǎng) = go online; 网络 (wǎngluò) = network/internet',
        '电子邮件 (diànzǐ yóujiàn) = email; 下载 (xiàzǎi) = to download',
        '使用 (shǐyòng) = to use; 科学 (kēxué) = science',
        '新闻 (xīnwén) = news; 发现 (fāxiàn) = to discover/find',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'How do you say "to go online" in Chinese?' }, options: [{ text: '上网', isCorrect: true },{ text: '用网', isCorrect: false },{ text: '开网', isCorrect: false },{ text: '进网', isCorrect: false }], explanation: '上网 = go online (literally "go up to the internet").' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '请给我发一封___。(Please send me an email.)' }, correctAnswer: '电子邮件', acceptableAnswers: ['电子邮件'], explanation: '电子邮件 = email. 发 = to send.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我在网上发现了很多有用的信息" means:' }, options: [{ text: 'I found a lot of useful information online', isCorrect: true },{ text: 'I uploaded a lot of information online', isCorrect: false },{ text: 'The internet has no useful information', isCorrect: false },{ text: 'I need to find information online', isCorrect: false }], explanation: '发现 = to discover/find; 在网上 = online.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'What does 下载 mean?' }, options: [{ text: 'To download', isCorrect: true },{ text: 'To upload', isCorrect: false },{ text: 'To search', isCorrect: false },{ text: 'To send', isCorrect: false }], explanation: '下载 = download. 下 = down; 载 = to carry/load.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "I use the internet every day to read news."' }, correctOrder: ['我','每天','上网','看','新闻'], scrambledWords: ['新闻','上网','看','我','每天'], explanation: '我每天上网看新闻.' },
    ],
  },

  // LESSON 12: Education & Learning
  {
    title: 'Education & Learning',
    titleChinese: '第十二课：教育和学习',
    description: 'Learn vocabulary for academic life, studying, and improving skills.',
    hskLevel: 'HSK3', order: 12, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['图书馆','复习','成绩','努力','提高','必须','语言','研究','年级'],
    content: {
      introduction: 'Education is highly valued in Chinese culture. This lesson covers vocabulary for academic performance, study habits, and language learning.',
      keyPoints: [
        '图书馆 (túshūguǎn) = library; 复习 (fùxí) = to review/revise',
        '成绩 (chéngjì) = grades/results; 提高 (tígāo) = to improve',
        '必须 (bìxū) = must/have to; 语言 (yǔyán) = language',
        '研究 (yánjiū) = to research; 年级 (niánjí) = grade/year level',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 成绩 mean?' }, options: [{ text: 'Grades / academic results', isCorrect: true },{ text: 'Homework', isCorrect: false },{ text: 'Teacher', isCorrect: false },{ text: 'Lesson', isCorrect: false }], explanation: '成绩 = grades, academic performance or results.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '如果你想___你的中文，你___每天练习。(If you want to improve your Chinese, you must practice every day.)' }, correctAnswer: '提高', acceptableAnswers: ['提高'], explanation: '提高 = to raise/improve. 必须 = must.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"我在图书馆复习功课" means:' }, options: [{ text: 'I am reviewing my schoolwork at the library', isCorrect: true },{ text: 'I am reading new books at the library', isCorrect: false },{ text: 'I work at the library', isCorrect: false },{ text: 'I am writing research at the library', isCorrect: false }], explanation: '复习 = to review/revise; 功课 = schoolwork/homework.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Which word means "language"?' }, options: [{ text: '语言', isCorrect: true },{ text: '文化', isCorrect: false },{ text: '研究', isCorrect: false },{ text: '成绩', isCorrect: false }], explanation: '语言 = language. Chinese is a 语言; Mandarin is a specific 语言.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "She studies very hard so her grades are very good."' }, correctOrder: ['她','学习','非常','努力','所以','成绩','很','好'], scrambledWords: ['很','成绩','努力','非常','好','所以','她','学习'], explanation: '她学习非常努力，所以成绩很好.' },
    ],
  },

  // LESSON 13: Sports & Exercise
  {
    title: 'Sports & Exercise',
    titleChinese: '第十三课：体育和锻炼',
    description: 'Learn vocabulary for sports, exercise, and healthy living.',
    hskLevel: 'HSK3', order: 13, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['运动','锻炼','爬山','散步','比赛','体育','赢','努力','健康'],
    content: {
      introduction: 'Exercise and sports play a big role in Chinese life. From morning tai chi to basketball courts in every neighborhood, physical activity vocabulary is widely used.',
      keyPoints: [
        '运动 (yùndòng) = exercise/sport; 锻炼 (duànliàn) = to work out/train',
        '爬山 (pá shān) = to hike/climb mountains; 散步 (sànbù) = to take a walk',
        '比赛 (bǐsài) = competition/match; 体育 (tǐyù) = physical education',
        '赢 (yíng) = to win; 健康 (jiànkāng) = healthy',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 锻炼 mean?' }, options: [{ text: 'To exercise / work out', isCorrect: true },{ text: 'To compete', isCorrect: false },{ text: 'To climb', isCorrect: false },{ text: 'To walk', isCorrect: false }], explanation: '锻炼 = to exercise, to train physically.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '我们每周末都去___，那里风景很美。(We go hiking every weekend, the scenery there is beautiful.)' }, correctAnswer: '爬山', acceptableAnswers: ['爬山'], explanation: '爬山 = to hike or climb a mountain.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"下午有一场篮球比赛" means:' }, options: [{ text: 'There is a basketball match this afternoon', isCorrect: true },{ text: 'I won the basketball competition', isCorrect: false },{ text: 'Basketball practice is in the afternoon', isCorrect: false },{ text: 'I lost the basketball game this afternoon', isCorrect: false }], explanation: '比赛 = competition/match; 一场 = one match (量词).' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: 'Regular exercise (锻炼) leads to:' }, options: [{ text: '健康', isCorrect: true },{ text: '生病', isCorrect: false },{ text: '累', isCorrect: false },{ text: '休息', isCorrect: false }], explanation: '经常锻炼有益健康 = Regular exercise is beneficial to health.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "If you want to be healthy, you must exercise often."' }, correctOrder: ['如果','你','想','健康','就','必须','经常','锻炼'], scrambledWords: ['锻炼','健康','经常','如果','想','必须','你','就'], explanation: '如果你想健康，就必须经常锻炼.' },
    ],
  },

  // LESSON 14: Food Culture
  {
    title: 'Food Culture',
    titleChinese: '第十四课：饮食文化',
    description: 'Explore Chinese food culture vocabulary including ingredients, preparation, and dining customs.',
    hskLevel: 'HSK3', order: 14, category: 'conversation',
    estimatedMinutes: 12, xpReward: 25,
    vocabLinks: ['菜单','甜','营养','锅','果汁','丰富','传统','满意','热情'],
    content: {
      introduction: 'Chinese food culture is one of the world\'s richest. This lesson covers vocabulary for discussing food preferences, dining customs, and flavors.',
      keyPoints: [
        '菜单 (càidān) = menu; 甜 (tián) = sweet; 营养 (yíngyǎng) = nutrition',
        '锅 (guō) = pot/pan/wok; 果汁 (guǒzhī) = fruit juice',
        '丰富 (fēngfù) = rich/abundant; 传统 (chuántǒng) = traditional',
        '满意 (mǎnyì) = satisfied; 热情 (rèqíng) = warm, enthusiastic (of hosts)',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'What does 菜单 mean?' }, options: [{ text: 'Menu', isCorrect: true },{ text: 'Dish', isCorrect: false },{ text: 'Restaurant', isCorrect: false },{ text: 'Chopsticks', isCorrect: false }], explanation: '菜单 = menu. 菜 = food/dish; 单 = single sheet/list.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '中国菜非常___，南北口味各不相同。(Chinese cuisine is very diverse, the flavors of north and south are all different.)' }, correctAnswer: '丰富', acceptableAnswers: ['丰富'], explanation: '丰富 = rich, abundant, diverse.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: '"这道菜很有营养" means:' }, options: [{ text: 'This dish is very nutritious', isCorrect: true },{ text: 'This dish is very delicious', isCorrect: false },{ text: 'This dish has a lot of spice', isCorrect: false },{ text: 'This dish is a traditional recipe', isCorrect: false }], explanation: '有营养 = nutritious (has nutrition).' },
      { type: 'multiple_choice', difficulty: 'medium', order: 4, xpReward: 8, question: { text: '火锅 (hotpot) gets its name because it uses:' }, options: [{ text: '锅 (pot) heated over fire', isCorrect: true },{ text: '火 to mean spicy', isCorrect: false },{ text: '锅 meaning something that boils', isCorrect: false },{ text: '火 referring to the color red', isCorrect: false }], explanation: '火 = fire; 锅 = pot/wok. 火锅 = hotpot, literally "fire pot".' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "The host was very warm and enthusiastic and gave us a lot of food."' }, correctOrder: ['主人','非常','热情','给','我们','准备了','很多','好吃的'], scrambledWords: ['好吃的','热情','主人','很多','给','非常','准备了','我们'], explanation: '主人非常热情，给我们准备了很多好吃的.' },
    ],
  },

  // LESSON 15: HSK3 Review
  {
    title: 'HSK3 Comprehensive Review',
    titleChinese: '第十五课：综合复习',
    description: 'Review all HSK3 grammar patterns and vocabulary in a comprehensive mixed lesson.',
    hskLevel: 'HSK3', order: 15, category: 'mixed',
    estimatedMinutes: 20, xpReward: 30,
    vocabLinks: ['把','被','必须','应该','虽然','如果','通过','发现','完成','提高','了解','认为'],
    content: {
      introduction: 'This review lesson consolidates all key HSK3 patterns: 把 sentences, 被 passives, complex conjunctions, and essential vocabulary from all topic areas.',
      keyPoints: [
        '把: Subject + 把 + Object + Verb + Result (disposal of object)',
        '被: Receiver + 被 + Agent + Verb + Result (passive, often negative)',
        'Key conjunctions: 虽然...但是, 因为...所以, 如果...就, 不但...而且',
        'Key adverbs: 必须, 应该, 已经, 马上, 经常, 一定',
      ],
    },
    exercises: [
      { type: 'multiple_choice', difficulty: 'easy', order: 1, xpReward: 5, question: { text: 'Choose the correct sentence using 把:' }, options: [{ text: '他把作业交给老师了', isCorrect: true },{ text: '他把老师交给作业了', isCorrect: false },{ text: '他被作业交给老师了', isCorrect: false },{ text: '把他作业交给老师', isCorrect: false }], explanation: '正确: 他把作业交给老师了. Object (作业) follows 把, verb (交给) has a result complement.' },
      { type: 'fill_blank', difficulty: 'medium', order: 2, xpReward: 8, question: { text: '我的自行车___人骑走了。(My bicycle was ridden away by someone.)' }, correctAnswer: '被', acceptableAnswers: ['被'], explanation: '被 introduces the passive. 被人骑走了 = was ridden away by someone.' },
      { type: 'multiple_choice', difficulty: 'medium', order: 3, xpReward: 8, question: { text: 'Which conjunction pair is correct?' }, options: [{ text: '不但他学习好，而且他体育也好', isCorrect: true },{ text: '不但他学习好，所以他体育也好', isCorrect: false },{ text: '虽然他学习好，而且他体育也好', isCorrect: false },{ text: '因为他学习好，但是他体育也好', isCorrect: false }], explanation: '不但...而且... = not only...but also...' },
      { type: 'multiple_choice', difficulty: 'hard', order: 4, xpReward: 10, question: { text: '"通过努力学习，他提高了自己的中文水平" means:' }, options: [{ text: 'Through hard study, he improved his Chinese level', isCorrect: true },{ text: 'He studied hard but did not improve', isCorrect: false },{ text: 'He found it difficult to improve his Chinese', isCorrect: false },{ text: 'He completed his Chinese studies', isCorrect: false }], explanation: '通过 = through/by means of; 提高 = to improve/raise; 水平 = level.' },
      { type: 'reorder', difficulty: 'hard', order: 5, xpReward: 10, question: { text: 'Arrange: "If you don\'t understand, you must immediately ask the teacher."' }, correctOrder: ['如果','你','不','明白','就','必须','马上','问','老师'], scrambledWords: ['老师','马上','明白','如果','问','不','你','必须','就'], explanation: '如果你不明白，就必须马上问老师.' },
    ],
  },
];

module.exports = hsk3Lessons;
