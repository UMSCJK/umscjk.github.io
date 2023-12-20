totalQueNum = 10, userSelect = '', queList = [], currentQueNum = 0, wrongQues = [], userAns = [], correctAns = [], result = [], ansCard = [], correctQueNum = 0, queSource = [];
document.title = totalQueNum + ' Questions Challenge';
document.getElementById("optnA").addEventListener("click", function () { sel(0) });
document.getElementById("optnB").addEventListener("click", function () { sel(1) });
document.getElementById("optnC").addEventListener("click", function () { sel(2) });
document.getElementById("optnD").addEventListener("click", function () { sel(3) });
document.getElementById("optnE").addEventListener("click", function () { sel(4) });
for (var i = 0; i < totalQueNum; i++) {
	var tempQue = [];
	var paperNum = Math.floor(Math.random() * 13);
	var queNum = Math.floor(Math.random() * 5);
	var queAns = data[paperNum].pbls[queNum].asw;
	tempQue.push(paperNum, queNum, queAns);
	queList.push(tempQue);
	userAns.push('');
};
function sel(opt) {
	function clsAdd(idO, idP, idQ, idR) {
		document.getElementById(idO).classList.remove("seled");
		document.getElementById(idP).classList.remove("seled");
		document.getElementById(idQ).classList.remove("seled");
		document.getElementById(idR).classList.remove("seled");
		document.getElementById(idO).classList.add("unseled");
		document.getElementById(idP).classList.add("unseled");
		document.getElementById(idQ).classList.add("unseled");
		document.getElementById(idR).classList.add("unseled");
	};
	if (opt == 0) {
		clsAdd("optnB", "optnC", "optnD", "optnE");
		document.getElementById("optnA").classList.add("seled");
		document.getElementById("optnA").classList.remove("unseled");
		userSelect = 'A';
	} else if (opt == 1) {
		clsAdd("optnA", "optnC", "optnD", "optnE");
		document.getElementById("optnB").classList.add("seled");
		document.getElementById("optnB").classList.remove("unseled");
		userSelect = 'B';
	} else if (opt == 2) {
		clsAdd("optnA", "optnB", "optnD", "optnE");
		document.getElementById("optnC").classList.add("seled");
		document.getElementById("optnC").classList.remove("unseled");
		userSelect = 'C';
	} else if (opt == 3) {
		clsAdd("optnA", "optnB", "optnC", "optnE");
		document.getElementById("optnD").classList.add("seled");
		document.getElementById("optnD").classList.remove("unseled");
		userSelect = 'D';
	} else if (opt == 4) {
		clsAdd("optnA", "optnB", "optnC", "optnD");
		document.getElementById("optnE").classList.add("seled");
		document.getElementById("optnE").classList.remove("unseled");
		userSelect = 'E';
	};
	document.getElementById("continue").disabled = false;
	// console.log(userSelect);
};
function setQue() {
	document.getElementById("question").innerHTML = '<span class="emsp">&emsp;</span>' + data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[0] + '<br /><span class="emsp">&emsp;</span>' + data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[1];
	document.getElementById("textA").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[2];
	document.getElementById("textB").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[3];
	document.getElementById("textC").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[4];
	document.getElementById("textD").innerHTML = data[queList[currentQueNum][0]].pbls[queList[currentQueNum][1]].eng[5];
	document.getElementById("continue").disabled = true;
	document.getElementById("prog-bar").style.width = (currentQueNum * 10 / totalQueNum * 10).toFixed() + '%';
	document.getElementById("prog-bar").innerHTML = (currentQueNum * 10 / totalQueNum * 10).toFixed() + '%';
	if (userAns[currentQueNum] == 'A') {
		sel(0);
	} else if (userAns[currentQueNum] == 'B') {
		sel(1);
	} else if (userAns[currentQueNum] == 'C') {
		sel(2);
	} else if (userAns[currentQueNum] == 'D') {
		sel(3);
	} else if (userAns[currentQueNum] == 'E') {
		sel(4);
	};
	if (currentQueNum == 0) {
		document.getElementById("prog-bar").innerHTML = '';
		document.getElementById("backward").disabled = true;
	} else {
		document.getElementById("backward").disabled = false;
	};
	// console.log(userAns);
};
function clsRst() {
	document.getElementById("optnA").classList.remove("seled");
	document.getElementById("optnB").classList.remove("seled");
	document.getElementById("optnC").classList.remove("seled");
	document.getElementById("optnD").classList.remove("seled");
	document.getElementById("optnE").classList.remove("seled");
	document.getElementById("optnA").classList.add("unseled");
	document.getElementById("optnB").classList.add("unseled");
	document.getElementById("optnC").classList.add("unseled");
	document.getElementById("optnD").classList.add("unseled");
	document.getElementById("optnE").classList.add("unseled");
};
function forward() {
	currentQueNum++;
	clsRst();
	userAns[currentQueNum - 1] = userSelect;
	userSelect = '';
	if (currentQueNum == totalQueNum) {
		info();
	} else {
		setQue();
	}
};
function backward() {
	currentQueNum--;
	clsRst();
	setQue();
};
function debug() {
	for (var i = 0; i < totalQueNum; i++) {
		var rdm = Math.floor(Math.random() * 4);
		if (rdm == 0) {
			userAns[i] = 'A';
		} else if (rdm == 1) {
			userAns[i] = 'B';
		} else if (rdm == 2) {
			userAns[i] = 'C';
		} else if (rdm == 3) {
			userAns[i] = 'D';
		};
	};
	info();
};
function info() {
	alert('作答完毕，点击确定或关闭查看结果');
	if (document.getElementById("header")) {
		document.getElementById("header").remove();
		document.getElementById("question").remove();
		document.getElementById("options").remove();
		document.getElementById("continue").remove();
	};
	for (var i = 0; i < totalQueNum; i++) {
		correctAns.push(queList[i][2]);
	};
	ansCard.push(correctAns, userAns);
	for (var i = 0; i < totalQueNum; i++) {
		if (ansCard[0][i] == ansCard[1][i]) {
			result[i] = true;
			correctQueNum++;
		} else {
			result[i] = false;
		};
		queSource.push([queList[i][0], queList[i][1]]);
	};
	ansCard.push(result, queSource, correctQueNum);
	console.log(ansCard);
	document.body.innerHTML = `<h1 id="resultTitle">结果统计</h1>
	<h2 id="percentage">正确率：</h2>
	<table id="result">
		<thead>
			<tr>
				<th style="width: 40px;">题号</th>
				<th style="width: 40px;">答案</th>
				<th style="width: 40px;">作答</th>
				<th style="width: 112px;">来源试卷</th>
				<th style="width: 56px;">原题号</th>
			</tr>
		</thead>
		<tbody id="tbody"></tbody>
	</table>
	<div id="buttons">
		<button id="back" onclick="window.location.href='../index.html'">返回主页</button>
		<button id="bank" onclick="window.location.href='../bank/index.html'">查看题库</button>
		<button id="opts" onclick="window.location.href='../options/index.html'">选项解析</button>
	</div>
	<button id="reload" onclick="location.reload()">再做一次</button>`;
	document.getElementById("percentage").innerHTML += (ansCard[4] * 10 / totalQueNum * 10).toFixed(1) + '%';
	var writeTable = '';
	for (var i = 0; i < totalQueNum; i++) {
		writeTable += '<tr><td>'
			+ (i + 1) + '</td><td>'
			+ ansCard[0][i]
			+ '</td><td>'
			+ ansCard[1][i]
			+ '</td><td>'
			+ data[ansCard[3][i][0]].paperTitle
			+ '</td><td>'
			+ (ansCard[3][i][1] + 1)
			+ '</td></tr>';
	};
	document.getElementById("tbody").innerHTML = writeTable;
};
clsRst();
setQue();