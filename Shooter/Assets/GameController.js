#pragma strict

private var score : int = 0;
private var bullet : int = 100;

var scoreStyle : GUIStyle;
var bulletStyle : GUIStyle;

function GetScore (s : int) {
	score += s;
}

function GetBullet (b : int) {
	bullet = b;
}
function OnGUI() {
	// scoreの値をintからstringに変えておくこと
	GUI.Label(Rect(10, 10, 100, 30), "SCORE  : " + score.ToString(), scoreStyle);
	// 弾数を表示させる
	GUI.Label(Rect(10, 30, 100, 30), "BULLET : " + bullet.ToString(), bulletStyle);

}