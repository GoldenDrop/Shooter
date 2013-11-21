#pragma strict

function OnGUI() {
	
	if(GUI.Button(Rect(Screen.width / 2 - 150, Screen.height / 2, 100, 30), "RETRY")) {
		// Mainを読んでゲームを再開する
		Application.LoadLevel("Main"); 
	}

	if(GUI.Button(Rect(Screen.width / 2 + 50, Screen.height / 2, 100, 30), "QUIT")) {
		// 終了する
		Application.Quit(); 
	}
}