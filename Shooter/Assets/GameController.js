#pragma strict

// ほかのシーンでも使うため
static var staticScore : int = 0;

private var score : int = 0;
private var bullet : int = 100;

var scoreStyle : GUIStyle;
var bulletStyle : GUIStyle;

// インスタンスが生成されて場に出てくるときに実行される
function Awake() {
	//次のシーンを読み込むときに、自分自身を破壊しない
    DontDestroyOnLoad(this);
}

function GetScore (s : int) {
	score += s;
}

function GetBullet (b : int) {
	bullet = b;
}

function OnGUI() {
	// Mainシーンにいるなら
	if(Application.loadedLevelName == "Main"){
        // scoreの値をintからstringに変えておくこと
		GUI.Label(Rect(10, 10, 100, 30), "SCORE  : " + score.ToString(), scoreStyle);
		// 弾数を表示させる
		GUI.Label(Rect(10, 30, 100, 30), "BULLET : " + bullet.ToString(), bulletStyle);
    }
}

function Update() {
	//　Mainシーンにいるなら
    if(Application.loadedLevelName == "Main"){
    	// スコアを移す
        staticScore = score;
    }
}

// 自身を削除する
function destroyMe() {
	Debug.Log("Destroy me");
	Destroy(gameObject);
}