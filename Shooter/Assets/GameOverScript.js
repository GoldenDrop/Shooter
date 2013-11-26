#pragma strict

// 最後に表示させるスコア
private var score : int;
var style : GUIStyle;

function Awake() {
	// setterでスコアを移す
	setScore(GameController.staticScore);
}

function OnGUI() {
	// SCOREを表示
	GUI.Label(Rect(Screen.width / 2 - 75, Screen.height / 2 - 10, 150, 30), "SCORE : " + score.ToString(), style);
	
	if(GUI.Button(Rect(Screen.width / 2 - 150, Screen.height / 2 + 40, 100, 30), "RETRY")) {
		// Mainを読んでゲームを再開する
		Application.LoadLevel("Main"); 
	}

	if(GUI.Button(Rect(Screen.width / 2 + 50, Screen.height / 2 + 40, 100, 30), "QUIT")) {
		// 終了する
		Application.Quit(); 
	}
}

function setScore(s : int) {
	score = s;
}