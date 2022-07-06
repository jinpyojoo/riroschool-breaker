// 기숙사 컴퓨터로 필요해서 만든거라 더러워도 양해좀
document.getElementsByClassName('treeWrap')[0].style.display='None';
document.body.innerHTML = document.body.innerHTML + "<div class='inject_macro' style='position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: fit-content;'><h1 style='font-size: 50px;'>리로스쿨 자동신청기</h1><br><p>"+document.querySelector('#content > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td:nth-child(2)').innerText+"</p><br></div>"
trs = document.querySelectorAll('tr');
trs.forEach((elem)=>{elem.style.display='none';})
location.reload()
setTimeout(()=>{
	try {
btn = document.getElementsByClassName('blue-button')[0];
btn.click();
	} catch(e) {
		alert('수강 신청이 활성화되어있지 않습니다')
	}
}, 10);
