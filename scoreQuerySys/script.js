document.getElementById('querybtn').addEventListener('click', function () { query() });
function setHTML(id, content) { document.getElementById(id).innerHTML = content; };
function query() {
	iNm = document.getElementById('name').value;
	if (iNm == '') {
		alert('请输入要查询成绩考生的姓名');
	} else if (typeof (data.main[iNm]) !== 'object') {
		alert('请输入一个四班考生的姓名');
		document.getElementById('name').value = '';
	} else {
		document.body.removeChild(document.getElementById('container'));
		document.body.innerHTML = `<h1 id='tit2'></h1><table><thead>
		<tr><td>学科</td><td>原分</td><td>赋分</td></tr></thead><tbody>
		<tr><td>语文</td><td id='chn1' colspan='2'></td></tr>
		<tr><td>数学</td><td id='mat1' colspan='2'></td></tr>
		<tr><td>英语</td><td id='eng1' colspan='2'></td></tr>
		<tr><td>物理</td><td id='phy1' colspan='2'></td></tr>
		<tr><td>化学</td><td id='che1'></td><td id='che2'></td></tr>
		<tr><td id='sel'></td><td id='sel1'></td><td id='sel2'></td></tr>
		<tr><td>总分</td><td id='tot1'></td><td id='tot2'></td></tr>
		<tr><td>理排</td><td id='rank' colspan='2'></td></tr>
		<tr><td>进退步</td><td id='prog' colspan='2'></td></tr></tbody></table>
		<div id='back' onclick='javascript:location.reload()'>返回</div>`;
		if (data.main[iNm].trs[2] == 'geo') {
			setHTML('sel', '地理');
		} else if (data.main[iNm].trs[2] == 'bio') {
			setHTML('sel', '生物');
		} else if (data.main[iNm].trs[2] == 'pol') {
			setHTML('sel', '政治');
		};
		setHTML('tit2', iNm + '的期末成绩'); setHTML('chn1', data.main[iNm].ori[0]);
		setHTML('mat1', data.main[iNm].ori[1]); setHTML('eng1', data.main[iNm].ori[2]);
		setHTML('phy1', data.main[iNm].ori[3]); setHTML('che1', data.main[iNm].ori[4]);
		setHTML('sel1', data.main[iNm].ori[5]); setHTML('che2', data.main[iNm].trs[0]);
		setHTML('sel2', data.main[iNm].trs[1]); setHTML('tot1', data.main[iNm].tot[0]);
		setHTML('tot2', data.main[iNm].tot[1]); setHTML('rank', data.main[iNm].tot[2] + ' (理科班共74人)');
		if (data.main[iNm].tot[3] == 0) {
			setHTML('prog', '没进没退');
		} else if (data.main[iNm].tot[3] < 0) {
			setHTML('prog', '退步' + -data.main[iNm].tot[3] + '名');
		} else if (data.main[iNm].tot[3] > 0) {
			setHTML('prog', '进步' + data.main[iNm].tot[3] + '名');
		};
	};
};