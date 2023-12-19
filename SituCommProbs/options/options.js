var list = [
	// 指定回答某类内容的
	["Don't mention it", "别客气；别提了；不客气；不用介意；没关系（回答感谢）"],
	["It's a pleasure", "乐意效劳（回答感谢）"],
	["It's my pleasure", "别客气（回答感谢）"],
	["My pleasure", "不用谢；乐意效劳；那是我应该做的（回答感谢）"],
	["You're welcome", "不客气（回答感谢）"],
	["It doesn't matter", "没关系（回答道歉）"],
	["Never mind", "没关系；不必担心（回答道歉）"],
	["That's all right", "不要紧，没关系（回答道歉）"],
	["With pleasure", "好的，乐意效劳（回答请求）"],
	// 个人认为较重要的
	["As you wish", "如你所愿"],
	["By all means", "当然可以、一定"],
	["Cheer up", "振作起来"],
	["Do as you like", "随你便"],
	["Don't be a wet blanket", "别扫兴"],
	["Don't bother", "不用麻烦了；不打扰了"],
	["Go ahead", "去吧，问吧，干吧，做吧，继续说；开始做；着手干；着手做某事，尽管去做；表示鼓励对方去做刚提到的事"],
	["Help yourself", "随意；随便；别客气；请自便"],
	["How is it going", "最近还好吗"],
	["I beg to differ", "恕我不能同意"],
	["I can't stand it", "我受不了了"],
	["I couldn't agree more", "我非常同意"],
	["I didn't get it", "我不明白"],
	["I got it", "我明白了"],
	["I have no idea", "我不知道"],
	["I hope I didn't bother you", "希望没打扰到你"],
	["I'm all ears", "我洗耳恭听"],
	["It depends", "看情况而定"],
	["It is up to you", "取决于你"],
	["It just depends", "看情况"],
	["It's a deal", "一言为定；就这样定了"],
	["It's a piece of cake", "小菜一碟"],
	["It's up to you", "这取决于你；由你定；你决定吧"],
	["Keep cool", "保持冷静，有话好好说"],
	["Keep it up", "保持下去"],
	["Make yourself at home", "别拘束"],
	["Neither do I", "我也不"],
	["No comment", "无可奉告"],
	["No offence", "无意冒犯"],
	["No way", "决不，没门；表示拒绝"],
	["No wonder", "难怪"],
	["None of your business", "不关你的事"],
	["Nonsense", "胡说八道"],
	["Not at all", "一点也不"],
	["Not exactly", "不完全是这样"],
	["Not in the least", "一点也不"],
	["Not really", "不全是这样"],
	["Pardon me", "对不起，再说一遍"],
	["Pardon", "能再重复一遍吗"],
	["Same to you", "和你一样"],
	["So long", "再见"],
	["So what", "那又怎样"],
	["Some hope was lost, some not", "有些希望失去了，有些没有"],
	["Take it easy", "别担心；别紧张；放轻松"],
	["Take your time", "别着急；慢慢来；从容做"],
	["Thank you all the same", "还是谢谢你了"],
	["The same to you", "你也一样"],
	["We'd better not", "我们最好不"],
	["What are you up to", "你在忙什么"],
	["What are you", "你做什么工作的"],
	["What for", "为什么"],
	["What's for", "为什么"],
	["Why bother", "何必费心；何必麻烦"],
	["You bet", "当然"],
	["You got me there", "你难住我了"],
	["You have green fingers", "你是园艺高手"],
	["You read my mind", "由你来决定"],
	["You said it", "你说对了；我完全同意"],
	["You'd better not", "你最好不要；表示委婉的拒绝"],
	// 傻子都知道的，搂一眼就行
	["Are you serious?", "你说真的吗？"],
	["Are you sure", "你确定吗"],
	["Ask please", "请问"],
	["Be careful", "小心"],
	["Can I help you", "我可以帮你吗"],
	["Certainly not", "当然不"],
	["Cheers", "干杯"],
	["Come on", "加油；快点"],
	["Congratulations", "祝贺"],
	["Cool", "酷"],
	["Could you help me", "你可以帮我吗"],
	["Do you have a room", "你有房间吗"],
	["Don't trouble me", "别麻烦我"],
	["Don't worry", "别担心"],
	["Enjoy yourself", "过得愉快；玩得开心"],
	["Exactly", "一点不错，完全正确"],
	["Excuse me", "对不起，打扰一下"],
	["forget it", "得了吧；算了吧；没关系；不必在意"],
	["Go for it", "去争取"],
	["Good job", "干得不错"],
	["Good luck", "祝好运"],
	["had been", "已经去过了（过去完成时态）"],
	["had gone", "已经去了还没回来（过去完成时态）"],
	["Have a good time", "过得愉快；玩得开心"],
	["Have a good trip", "祝旅途愉快"],
	["have been", "已经去过了（现在完成时态）"],
	["have gone", "已经去了还没回来（现在完成时态）"],
	["Have you bought the book", "你买了那本书吗"],
	["How many watches do you have", "你有多少块手表"],
	["How much is your watch", "你的表多少钱"],
	["How much is your watch", "你的手表多少钱"],
	["I can't agree more", "我完全同意"],
	["I don't know", "我不知道"],
	["I think so", "我想是这样的"],
	["I'd love to", "我愿意"],
	["I'm afraid not", "恐怕不是这样的"],
	["I'm fine", "我很好"],
	["I'm happy to hear that", "我很高兴听你这么说"],
	["I'm in no hurry", "我不着急"],
	["I'm not free", "我没空"],
	["I'm sorry", "对不起"],
	["It couldn't be worse", "情况不能再糟了"],
	["it was boring", "它是令人厌烦的"],
	["it was expensive", "它是昂贵的"],
	["it was pleasant", "它是令人愉快的"],
	["it was terrible", "它是令人可怕的"],
	["It's a pity", "真遗憾"],
	["it's great", "极好的"],
	["It's hard to say", "这很难说"],
	["It's my share", "我该付一份"],
	["It's not my cup of tea", "我对此事不感兴趣"],
	["It's nothing", "没事"],
	["it's ordinary", "普通的"],
	["it's possible", "可能的"],
	["it's terrible", "可怕的"],
	["No doubt", "毫无疑问"],
	["No hurry", "不着急"],
	["No problem", "没问题"],
	["Of course not", "当然不"],
	["Oh, thanks", "谢谢"],
	["Really", "真的吗"],
	["Sorry to hear that", "很难过听到那个消息"],
	["Sorry", "抱歉"],
	["Sounds great", "听起来好极了"],
	["Sure", "当然，的确"],
	["That's a good idea", "好主意"],
	["That's a great idea", "是个好主意"],
	["That's great", "那太棒了"],
	["That's interesting", "那很有趣"],
	["That's it", "就是这样"],
	["That's OK", "好的；没关系"],
	["That's so easy", "太容易了"],
	["We'll be fine", "我们很好"],
	["Well done", "干得好；做得好"],
	["What a pity", "真可惜"],
	["What are you doing", "你正在做什么"],
	["What day is it today", "今天星期几"],
	["What is it over there", "那边是什么"],
	["What time is it now", "现在什么时间"],
	["What time is it", "几点钟了"],
	["What would you like", "你想要什么"],
	["What's the date today", "今天几号"],
	["What's the matter with you", "你怎么了"],
	["What's up", "怎么了；出什么事了"],
	["What's wrong", "你怎么了"],
	["What's your opinion", "你怎么说"],
	["Why not", "为何不"],
	["Yes, please", "是的，请"],
	["You are not alone", "你不是一个人"],
	["You are so nice", "你真好"],
	["You are welcome", "别客气"],
	["You never know", "你永远不会知道"],
	["You're crazy", "你疯了"],
	["You're lucky", "你真幸运"]
];
/*
var simplifiedAllOptionTrans = [
	[
		["Why bother?", "何必麻烦？"],
		["What for?", "为什么？"],
		["You got me there.", "你难住我了。"],
		["You said it.", "你说对了；我完全同意。"]
	],
	[
		["Don't bother", "不用麻烦了"],
		["No hurry", "不着急"],
		["Go ahead", "开始做；着手干"],
		["No problem", "没问题"]
	],
	[
		["See you later", null],
		["I didn't know that", null],
		["Hold on, please", null],
		["I hope I didn't bother you", "希望没打扰到你"]
	],
	[
		["I didn't get it.", "我不明白。"],
		["You read my mind.", "由你来决定。"],
		["You never know.", "你永远不会知道。"],
		["It's up to you.", "你猜透了我的想法。"]
	],
	[
		["What's up", "出什么事了"],
		["What's for", "为什么"],
		["What are you up to", "你在忙什么"],
		["So what", "那又怎么样"]
	],
	[
		["No problem", "没问题"],
		["No hurry", "不忙"],
		["Come on", "加油"],
		["That's OK", "没关系"]
	],
	[
		["Don't mention it", "不客气"],
		["Go ahead", "前进，去吧"],
		["Take it easy", "放轻松一点"],
		["It couldn't be worse", "情况不能再糟了"]
	],
	[
		["So long", "再见"],
		["Sounds great", "听起来好极了"],
		["Good luck", "好运"],
		["Have a good time", "过得愉快，玩的很开心"]
	],
	[
		["Excuse me", "对不起，打扰一下"],
		["Sorry", "抱歉"],
		["Sure", "当然，的确"],
		["No way", "决不，没门"]
	],
	[
		["No way", "没门；表示拒绝"],
		["Go ahead", "问吧，干吧，做吧；表示鼓励对方去做刚提到的事"],
		["You'd better not", "你最好不要；表示委婉的拒绝"],
		["I think so", "我想是这样的"]
	],
	[
		["Good job", "干得不错"],
		["Come on", "快点"],
		["Go ahead", "问吧；继续说"],
		["Help yourself", "请自便"]
	],
	[
		["Are you all right", "你还好吗"],
		["Have you bought the book", "你买了那本书吗"],
		["Can I help you", "我可以帮你吗"],
		["Do you have a room", "你有房间吗"]
	],
	[
		["What time is it", "几点钟了"],
		["What's the date today", "今天几号"],
		["How much is your watch", "你的手表多少钱"],
		["Could you help me", "你可以帮我吗"]
	],
	[
		["That's all right", "不要紧"],
		["Don't mention it", "别提了"],
		["You're welcome", "不客气"],
		["Oh, thanks", "谢谢"]
	],
	[
		["It's nothing", "没事"],
		["Be careful", "小心"],
		["Go ahead", "去吧"],
		["No problem", "没问题"]
	],
	[
		["Congratulations", "祝贺"],
		["That's great", "那太棒了"],
		["Well done", "做得好"],
		["Sorry to hear that", "很难过听到那个消息"]
	],
	[
		["Enjoy yourself", "过得愉快"],
		["You're welcome", "不客气"],
		["That's interesting", "那很有趣"],
		["The same to you", "你也一样"]
	],
	[
		["have a good time!", "玩得高兴！"],
		["I'm happy to hear that.", "我很高兴听你这么说。"],
		["good luck!", "祝你好运！"],
		["congratulations!", "祝贺你！"]
	],
	[
		["Certainly not", "当然不"],
		["Enjoy yourself", "玩得开心"],
		["Don't trouble me", "别麻烦我"],
		["Yes, please", "是的，请"]
	],
	[
		["My pleasure", "乐意效劳"],
		["Not exactly", "不完全是这样"],
		["With pleasure", "愉快地"],
		["No problem", "没问题"]
	],
	[
		["Not at all.", "一点也不。"],
		["Of course not.", "当然不。"],
		["You'd better not.", "你最好不。"],
		["Sure.", "当然。"]
	],
	[
		["What do you want", null],
		["Are you ready to order", null],
		["What's the specialty here", null],
		["What would you like to drink", null]
	],
	[
		["What are you doing", "你正在做什么"],
		["What are you", "你做什么工作的"],
		["What's wrong", "你怎么了"],
		["How is it going", "最近还好吗"]
	],
	[
		["it's nothing", null],
		["it's all right", null],
		["with pleasure", "好的，乐意效劳"],
		["my pleasure", "那是我应该做的"]
	],
	[
		["Don't mention it", "没关系"],
		["Forget it", "不必在意"],
		["Exactly", "一点不错，完全正确"],
		["I beg to differ", "恕我不能同意"]
	],
	[
		["Don't mention it.", "别客气。"],
		["What's up?", "怎么了？"],
		["I got it.", "我明白了。"],
		["Never mind.", "没关系。"]
	],
	[
		["It's a pleasure", "乐意效劳"],
		["Ask please", "请问"],
		["Help yourself", "别客气"],
		["Go ahead", "去吧，问吧"]
	],
	[
		["Make yourself at home", "别拘束"],
		["Take it easy", "别紧张"],
		["Take your time", "慢慢来"],
		["Enjoy yourself", "玩的愉快"]
	],
	[
		["Take your time", "别着急；从容做"],
		["Take it easy", "别担心；放轻松"],
		["Don't mention it", "不用介意"],
		["Don't bother", "不用麻烦了；不打扰了"]
	],
	[
		["Good luck", "祝好运"],
		["Cheer up", "振作起来"],
		["Same to you", "和你一样"],
		["Keep it up", "保持下去"]
	],
	[
		["No wonder", "难怪"],
		["No offence", "无意冒犯"],
		["No comment", "无可奉告"],
		["No doubt", "毫无疑问"]
	],
	[
		["Not really", "不全是这样"],
		["Don't mention it", "别客气"],
		["It's up to you", "你决定吧"],
		["By all means", "当然可以、一定"]
	],
	[
		["What for", "为什么"],
		["Why not", "为何不"],
		["So what", "那又怎样"],
		["Why bother", "何必费心"]
	],
	[
		["You got me there", "你难住我了"],
		["I don't know", "我不知道"],
		["As you wish", "如你所愿"],
		["I couldn't agree more", "我非常同意"]
	],
	[
		["It doesn't matter", "没关系"],
		["I can't agree more", "我完全同意"],
		["I have no idea", "我不知道"],
		["It's a pity", "真遗憾"]
	],
	[
		["No way", "没门"],
		["Go ahead", "着手做某事，尽管去做"],
		["Keep cool", "保持冷静，有话好好说"],
		["Never mind", "不必担心"]
	],
	[
		["That's it", "就是这样"],
		["Well done", "干得好"],
		["Cheers", "干杯"],
		["Nonsense", "胡说八道"]
	],
	[
		["have been", "已经去过了（现在完成时态）"],
		["have gone", "已经去了还没回来（现在完成时态）"],
		["had been", "已经去过了（过去完成时态）"],
		["had gone", "已经去了还没回来（过去完成时态）"]
	],
	[
		["forget it", "得了吧；算了吧；没关系"],
		["my pleasure", "不用谢"],
		["help yourself", "随便"],
		["pardon me", "对不起，再说一遍"]
	],
	[
		["I'm not free", "我没空"],
		["We'd better not", "我们最好不"],
		["We'll be fine", "我们很好"],
		["I'd love to", "我愿意"]
	],
	[
		["So what", "那又如何"],
		["Really", "真的吗"],
		["Pardon", "能再重复一遍吗"],
		["What for", "为了什么？"]
	],
	[
		["You're crazy", "你疯了"],
		["You're lucky", "你真幸运"],
		["You'd better not", "你最好不要"],
		["You never know", "你永远不会懂"]
	],
	[
		["All of the hope was lost", null],
		["No hope was lost", null],
		["None of the hope was lost", null],
		["Some hope was lost, some not", "有些希望失去了，有些没有"]
	],
	[
		["It's a piece of cake", "小菜一碟"],
		["Don't be a wet blanket", "别扫兴"],
		["You have green fingers", "你是园艺高手"],
		["I'm all ears", "我洗耳恭听"]
	],
	[
		["Don't worry about it", null],
		["It's my share", "我该付一份"],
		["None of your business", "不关你的事"],
		["It's up to you", "由你负责"]
	],
	[
		["Excuse me", "对不起，打扰一下"],
		["Sorry", "抱歉"],
		["Sure", "当然，的确"],
		["No way", "决不，没门"]
	],
	[
		["it was boring", "它是令人厌烦的"],
		["it was pleasant", "它是令人愉快的"],
		["it was terrible", "它是令人可怕的"],
		["it was expensive", "它是昂贵的"]
	],
	[
		["What would you like", "你想要什么"],
		["What is it over there", "那边是什么"],
		["What day is it today", "今天星期几"],
		["What's the matter with you", "你怎么了"]
	],
	[
		["Never mind", "没有关系"],
		["No problem", "没问题"],
		["Have a good trip", "祝你们旅途愉快"],
		["It's my pleasure", "别客气"]
	],
	[
		["I'm not free", "我没空"],
		["We'd better not", "我们最好不"],
		["We'll be fine", "我们很好"],
		["I'd love to", "我愿意"]
	],
	[
		["Do as you like", "随你便"],
		["Go for it", "去争取"],
		["Enjoy yourself", "玩得愉快"],
		["Good luck", "祝好运"]
	],
	[
		["I'm fine", "我很好"],
		["Never mind", "没关系"],
		["You're welcome", "不客气"],
		["The same to you", "你也一样"]
	],
	[
		["No problem.", "没问题。"],
		["Are you serious?", "你说真的吗？"],
		["Cool!", "酷！"],
		["That's so easy.", "太容易了。"]
	],
	[
		["What's up", "怎么了"],
		["So what", "那又怎样"],
		["Are you sure", "你确定吗"],
		["What's your opinion", "你怎么说"]
	],
	[
		["You are not alone", "你不是一个人"],
		["It's hard to say", "这很难说"],
		["I'm afraid not", "恐怕不是这样的"],
		["It's up to you", "这取决于你"]
	],
	[
		["I can't stand it", "我受不了了"],
		["I'm in no hurry", "我不着急"],
		["That's a great idea", "是个好主意"],
		["It's not my cup of tea", "我对此事不感兴趣"]
	],
	[
		["It's a deal", "一言为定"],
		["You bet", "当然"],
		["It is up to you", "取决于你"],
		["Of course not", "当然不"]
	],
	[
		["Forget it", "算了吧"],
		["Cheer up", "振作起来"],
		["Neither do I", "我也不"],
		["What a pity", "真可惜"]
	],
	[
		["Help yourself.", "随意。"],
		["No problem.", "没问题。"],
		["It's a deal.", "就这样定了。"],
		["It's up to you.", "由你定。"]
	],
	[
		["It depends.", "看情况而定"],
		["That's OK.", "好的"],
		["Never mind.", "没关系"],
		["It doesn't matter.", "没关系"]
	],
	[
		["You are welcome", "别客气"],
		["That's a good idea", "好主意"],
		["Don't worry", "别担心"],
		["You are so nice", "你真好"]
	],
	[
		["What's the date today", "今天几号"],
		["How much is your watch", "你的表多少钱"],
		["What time is it now", "现在什么时间"],
		["How many watches do you have", "你有多少块手表"]
	],
	[
		["I'm sorry", "对不起"],
		["I'd love to", "我愿意"],
		["That's all right", "不要紧，没关系"],
		["Come on", "加油；快点"]
	],
	[
		["it's great", "极好的"],
		["it's possible", "可能的"],
		["it's terrible", "可怕的"],
		["it's ordinary", "普通的"]
	],
	[
		["It just depends", "看情况"],
		["It's my pleasure", "别客气"],
		["Not in the least", "一点也不"],
		["Thank you all the same", "还是谢谢你了"]
	]
];
var allOptionTrans = [
	{
		"paperTitle": "模拟卷（一）",
		"pbls": [
			{
				"options": [
					"Why bother?",
					"What for?",
					"You got me there.",
					"You said it.",
					"何必麻烦？",
					"为什么？",
					"你难住我了。",
					"你说对了；我完全同意。"
				]
			},
			{
				"options": [
					"Don't bother",
					"No hurry",
					"Go ahead",
					"No problem",
					"不用麻烦了",
					"不着急",
					"开始做；着手干",
					"没问题"
				]
			},
			{
				"options": [
					"See you later",
					"I didn't know that",
					"Hold on, please",
					"I hope I didn't bother you",
					null,
					null,
					null,
					"希望没打扰到你"
				]
			},
			{
				"options": [
					"I didn't get it.",
					"You read my mind.",
					"You never know.",
					"It's up to you.",
					"我不明白。",
					"由你来决定。",
					"你永远不会知道。",
					"你猜透了我的想法。"
				]
			},
			{
				"options": [
					"What's up",
					"What's for",
					"What are you up to",
					"So what",
					"出什么事了",
					"为什么",
					"你在忙什么",
					"那又怎么样"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（二）",
		"pbls": [
			{
				"options": [
					"No problem",
					"No hurry",
					"Come on",
					"That's OK",
					"没问题",
					"不忙",
					"加油",
					"没关系"
				]
			},
			{
				"options": [
					"Don't mention it",
					"Go ahead",
					"Take it easy",
					"It couldn't be worse",
					"不客气",
					"前进，去吧",
					"放轻松一点",
					"情况不能再糟了"
				]
			},
			{
				"options": [
					"So long",
					"Sounds great",
					"Good luck",
					"Have a good time",
					"再见",
					"听起来好极了",
					"好运",
					"过得愉快，玩的很开心"
				]
			},
			{
				"options": [
					"Excuse me",
					"Sorry",
					"Sure",
					"No way",
					"对不起，打扰一下",
					"抱歉",
					"当然，的确",
					"决不，没门"
				]
			},
			{
				"options": [
					"No way",
					"Go ahead",
					"You'd better not",
					"I think so",
					"没门；表示拒绝",
					"问吧，干吧，做吧；表示鼓励对方去做刚提到的事",
					"你最好不要；表示委婉的拒绝",
					"我想是这样的"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（三）",
		"pbls": [
			{
				"options": [
					"Good job",
					"Come on",
					"Go ahead",
					"Help yourself",
					"干得不错",
					"快点",
					"问吧；继续说",
					"请自便"
				]
			},
			{
				"options": [
					"Are you all right",
					"Have you bought the book",
					"Can I help you",
					"Do you have a room",
					"你还好吗",
					"你买了那本书吗",
					"我可以帮你吗",
					"你有房间吗"
				]
			},
			{
				"options": [
					"What time is it",
					"What's the date today",
					"How much is your watch",
					"Could you help me",
					"几点钟了",
					"今天几号",
					"你的手表多少钱",
					"你可以帮我吗"
				]
			},
			{
				"options": [
					"That's all right",
					"Don't mention it",
					"You're welcome",
					"Oh, thanks",
					"不要紧",
					"别提了",
					"不客气",
					"谢谢"
				]
			},
			{
				"options": [
					"It's nothing",
					"Be careful",
					"Go ahead",
					"No problem",
					"没事",
					"小心",
					"去吧",
					"没问题"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（四）",
		"pbls": [
			{
				"options": [
					"Congratulations",
					"That's great",
					"Well done",
					"Sorry to hear that",
					"祝贺",
					"那太棒了",
					"做得好",
					"很难过听到那个消息"
				]
			},
			{
				"options": [
					"Enjoy yourself",
					"You're welcome",
					"That's interesting",
					"The same to you",
					"过得愉快",
					"不客气",
					"那很有趣",
					"你也一样"
				]
			},
			{
				"options": [
					"have a good time!",
					"I'm happy to hear that.",
					"good luck!",
					"congratulations!",
					"玩得高兴！",
					"我很高兴听你这么说。",
					"祝你好运！",
					"祝贺你！"
				]
			},
			{
				"options": [
					"Certainly not",
					"Enjoy yourself",
					"Don't trouble me",
					"Yes, please",
					"当然不",
					"玩得开心",
					"别麻烦我",
					"是的，请"
				]
			},
			{
				"options": [
					"My pleasure",
					"Not exactly",
					"With pleasure",
					"No problem",
					"乐意效劳",
					"不完全是这样",
					"愉快地",
					"没问题"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（五）",
		"pbls": [
			{
				"options": [
					"Not at all.",
					"Of course not.",
					"You'd better not.",
					"Sure.",
					"一点也不。",
					"当然不。",
					"你最好不。",
					"当然。"
				]
			},
			{
				"options": [
					"What do you want",
					"Are you ready to order",
					"What's the specialty here",
					"What would you like to drink",
					null,
					null,
					null,
					null
				]
			},
			{
				"options": [
					"What are you doing",
					"What are you",
					"What's wrong",
					"How is it going",
					"你正在做什么",
					"你做什么工作的",
					"你怎么了",
					"最近还好吗"
				]
			},
			{
				"options": [
					"it's nothing",
					"it's all right",
					"with pleasure",
					"my pleasure",
					null,
					null,
					"好的，乐意效劳",
					"那是我应该做的"
				]
			},
			{
				"options": [
					"Don't mention it",
					"Forget it",
					"Exactly",
					"I beg to differ",
					"没关系",
					"不必在意",
					"一点不错，完全正确",
					"恕我不能同意"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（六）",
		"pbls": [
			{
				"options": [
					"Don't mention it.",
					"What's up?",
					"I got it.",
					"Never mind.",
					"别客气。",
					"怎么了？",
					"我明白了。",
					"没关系。"
				]
			},
			{
				"options": [
					"It's a pleasure",
					"Ask please",
					"Help yourself",
					"Go ahead",
					"乐意效劳",
					"请问",
					"别客气",
					"去吧，问吧"
				]
			},
			{
				"options": [
					"Make yourself at home",
					"Take it easy",
					"Take your time",
					"Enjoy yourself",
					"别拘束",
					"别紧张",
					"慢慢来",
					"玩的愉快"
				]
			},
			{
				"options": [
					"Take your time",
					"Take it easy",
					"Don't mention it",
					"Don't bother",
					"别着急；从容做",
					"别担心；放轻松",
					"不用介意",
					"不用麻烦了；不打扰了"
				]
			},
			{
				"options": [
					"Good luck",
					"Cheer up",
					"Same to you",
					"Keep it up",
					"祝好运",
					"振作起来",
					"和你一样",
					"保持下去"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（七）",
		"pbls": [
			{
				"options": [
					"No wonder",
					"No offence",
					"No comment",
					"No doubt",
					"难怪",
					"无意冒犯",
					"无可奉告",
					"毫无疑问"
				]
			},
			{
				"options": [
					"Not really",
					"Don't mention it",
					"It's up to you",
					"By all means",
					"不全是这样",
					"别客气",
					"你决定吧",
					"当然可以、一定"
				]
			},
			{
				"options": [
					"What for",
					"Why not",
					"So what",
					"Why bother",
					"为什么",
					"为何不",
					"那又怎样",
					"何必费心"
				]
			},
			{
				"options": [
					"You got me there",
					"I don't know",
					"As you wish",
					"I couldn't agree more",
					"你难住我了",
					"我不知道",
					"如你所愿",
					"我非常同意"
				]
			},
			{
				"options": [
					"It doesn't matter",
					"I can't agree more",
					"I have no idea",
					"It's a pity",
					"没关系",
					"我完全同意",
					"我不知道",
					"真遗憾"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（八）",
		"pbls": [
			{
				"options": [
					"No way",
					"Go ahead",
					"Keep cool",
					"Never mind",
					"没门",
					"着手做某事，尽管去做",
					"保持冷静，有话好好说",
					"不必担心"
				]
			},
			{
				"options": [
					"That's it",
					"Well done",
					"Cheers",
					"Nonsense",
					"就是这样",
					"干得好",
					"干杯",
					"胡说八道"
				]
			},
			{
				"options": [
					"have been",
					"have gone",
					"had been",
					"had gone",
					"已经去过了（现在完成时态）",
					"已经去了还没回来（现在完成时态）",
					"已经去过了（过去完成时态）",
					"已经去了还没回来（过去完成时态）"
				]
			},
			{
				"options": [
					"forget it",
					"my pleasure",
					"help yourself",
					"pardon me",
					"得了吧；算了吧；没关系",
					"不用谢",
					"随便",
					"对不起，再说一遍"
				]
			},
			{
				"options": [
					"I'm not free",
					"We'd better not",
					"We'll be fine",
					"I'd love to",
					"我没空",
					"我们最好不",
					"我们很好",
					"我愿意"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（九）",
		"pbls": [
			{
				"options": [
					"So what",
					"Really",
					"Pardon",
					"What for",
					"那又如何",
					"真的吗",
					"能再重复一遍吗",
					"为了什么？"
				]
			},
			{
				"options": [
					"You're crazy",
					"You're lucky",
					"You'd better not",
					"You never know",
					"你疯了",
					"你真幸运",
					"你最好不要",
					"你永远不会懂"
				]
			},
			{
				"options": [
					"All of the hope was lost",
					"No hope was lost",
					"None of the hope was lost",
					"Some hope was lost, some not",
					null,
					null,
					null,
					"有些希望失去了，有些没有"
				]
			},
			{
				"options": [
					"It's a piece of cake",
					"Don't be a wet blanket",
					"You have green fingers",
					"I'm all ears",
					"小菜一碟",
					"别扫兴",
					"你是园艺高手",
					"我洗耳恭听"
				]
			},
			{
				"options": [
					"Don't worry about it",
					"It's my share",
					"None of your business",
					"It's up to you",
					null,
					"我该付一份",
					"不关你的事",
					"由你负责"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（十）",
		"pbls": [
			{
				"options": [
					"Excuse me",
					"Sorry",
					"Sure",
					"No way",
					"对不起，打扰一下",
					"抱歉",
					"当然，的确",
					"决不，没门"
				]
			},
			{
				"options": [
					"it was boring",
					"it was pleasant",
					"it was terrible",
					"it was expensive",
					"它是令人厌烦的",
					"它是令人愉快的",
					"它是令人可怕的",
					"它是昂贵的"
				]
			},
			{
				"options": [
					"What would you like",
					"What is it over there",
					"What day is it today",
					"What's the matter with you",
					"你想要什么",
					"那边是什么",
					"今天星期几",
					"你怎么了"
				]
			},
			{
				"options": [
					"Never mind",
					"No problem",
					"Have a good trip",
					"It's my pleasure",
					"没有关系",
					"没问题",
					"祝你们旅途愉快",
					"别客气"
				]
			},
			{
				"options": [
					"I'm not free",
					"We'd better not",
					"We'll be fine",
					"I'd love to",
					"我没空",
					"我们最好不",
					"我们很好",
					"我愿意"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（十一）",
		"pbls": [
			{
				"options": [
					"Do as you like",
					"Go for it",
					"Enjoy yourself",
					"Good luck",
					"随你便",
					"去争取",
					"玩得愉快",
					"祝好运"
				]
			},
			{
				"options": [
					"I'm fine",
					"Never mind",
					"You're welcome",
					"The same to you",
					"我很好",
					"没关系",
					"不客气",
					"你也一样"
				]
			},
			{
				"options": [
					"No problem.",
					"Are you serious?",
					"Cool!",
					"That's so easy.",
					"没问题。",
					"你说真的吗？",
					"酷！",
					"太容易了。"
				]
			},
			{
				"options": [
					"What's up",
					"So what",
					"Are you sure",
					"What's your opinion",
					"怎么了",
					"那又怎样",
					"你确定吗",
					"你怎么说"
				]
			},
			{
				"options": [
					"You are not alone",
					"It's hard to say",
					"I'm afraid not",
					"It's up to you",
					"你不是一个人",
					"这很难说",
					"恐怕不是这样的",
					"这取决于你"
				]
			}
		]
	},
	{
		"paperTitle": "模拟卷（十二）",
		"pbls": [
			{
				"options": [
					"I can't stand it",
					"I'm in no hurry",
					"That's a great idea",
					"It's not my cup of tea",
					"我受不了了",
					"我不着急",
					"是个好主意",
					"我对此事不感兴趣"
				]
			},
			{
				"options": [
					"It's a deal",
					"You bet",
					"It is up to you",
					"Of course not",
					"一言为定",
					"当然",
					"取决于你",
					"当然不"
				]
			},
			{
				"options": [
					"Forget it",
					"Cheer up",
					"Neither do I",
					"What a pity",
					"算了吧",
					"振作起来",
					"我也不",
					"真可惜"
				]
			},
			{
				"options": [
					"Help yourself.",
					"No problem.",
					"It's a deal.",
					"It's up to you.",
					"随意。",
					"没问题。",
					"就这样定了。",
					"由你定。"
				]
			},
			{
				"options": [
					"It depends.",
					"That's OK.",
					"Never mind.",
					"It doesn't matter.",
					"看情况而定",
					"好的",
					"没关系",
					"没关系"
				]
			}
		]
	},
	{
		"paperTitle": "2023年1月广东省普通高中学业水平合格性考试",
		"pbls": [
			{
				"options": [
					"You are welcome",
					"That's a good idea",
					"Don't worry",
					"You are so nice",
					"别客气",
					"好主意",
					"别担心",
					"你真好"
				]
			},
			{
				"options": [
					"What's the date today",
					"How much is your watch",
					"What time is it now",
					"How many watches do you have",
					"今天几号",
					"你的表多少钱",
					"现在什么时间",
					"你有多少块手表"
				]
			},
			{
				"options": [
					"I'm sorry",
					"I'd love to",
					"That's all right",
					"Come on",
					"对不起",
					"我愿意",
					"不要紧，没关系",
					"加油；快点"
				]
			},
			{
				"options": [
					"it's great",
					"it's possible",
					"it's terrible",
					"it's ordinary",
					"极好的",
					"可能的",
					"可怕的",
					"普通的"
				]
			},
			{
				"options": [
					"It just depends",
					"It's my pleasure",
					"Not in the least",
					"Thank you all the same",
					"看情况",
					"别客气",
					"一点也不",
					"还是谢谢你了"
				]
			}
		]
	}
]
*/
