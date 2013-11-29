#pragma strict

function OnGUI() {
	// 外面中心を起点
	var x : int = Screen.width / 2;
	var y : int = Screen.height / 2 + 30;
	// ボタンのサイズ
	var bw : int = 80;
	var bh : int = 22;

	if(GUI.Button(Rect(x - bw / 2, y, bw, bh), "RANKING")) {
		// Mainを読んでゲームを開始する
		Application.LoadLevel("Ranking"); 
	}
	if(GUI.Button(Rect(x - (bw * 1.5 + 20) , y, bw, bh), "START")) {
		// ランキングへ移動
		Application.LoadLevel("Main"); 
	}
	if(GUI.Button(Rect(x + bw / 2 + 20, y, bw, bh), "QUIT")) {
		// ゲームを終了
		Application.Quit(); 
	}
}