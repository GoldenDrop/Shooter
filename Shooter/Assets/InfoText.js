#pragma strict

function infoText(s : String) {
	switch(s) {
		case "noName" : // 名前入力がないとき
		guiText.text = "No Name...";
		break;
		case "entry" : // 登録されたとき  
		guiText.text = "Thank You!";
		break;
	}
}
