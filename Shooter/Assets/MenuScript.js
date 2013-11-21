#pragma strict

function OnGUI() {
	// ボタンを中央に配置するには(画面の1/2)-(ボタンの大きさ1/2)
	// ボタンが押されたときtrueになる
	if(GUI.Button(Rect(Screen.width / 2- 50, Screen.height / 2, 100, 30), "START")) {
		// Mainを読んでゲームを開始する
		Application.LoadLevel("Main"); 
	}
}