#pragma strict

private var score : int = 0;
var style : GUIStyle;

function GetScore (s : int) {
	score += s;
}

function OnGUI() {
	// scoreの値をintからstringに変えておくこと
	GUI.Label(Rect(10, 10, 300, 100), "SCORE : " + score.ToString(), style);
}