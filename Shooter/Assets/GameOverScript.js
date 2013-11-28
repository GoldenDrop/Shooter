#pragma strict

// 最後に表示させるスコア
private var score : int;
// ユーザーから入力された名前を格納
private var nameText : String = "";
// 名前が空白かどうかでInfotextメソッドに渡すストリングを変える
private var message : String;
// GUIスタイル
var scoreStyle : GUIStyle;
var gameOverStyle : GUIStyle;

function Awake() {
	// setterでスコアを移す
	setScore(GameController.staticScore);
}

function OnGUI() {
	GUI.Label(Rect(Screen.width / 2 - 105, Screen.height / 2 - 90, 100, 30),"Game Over", gameOverStyle);
	GUI.Label(Rect(Screen.width / 2 - 50, Screen.height / 2 - 45, 100, 30),"SCORE : " + score.ToString(),scoreStyle);
	// ダイアログ
	GUI.Box(Rect(Screen.width / 2 - 100, Screen.height / 2 - 20, 200, 100), "");
	GUI.Label(Rect(Screen.width / 2 - 70, Screen.height / 2 + 10, 60, 25),"Name : ");
	// テキストフィールドを作りユーザー入力させる
	// それを格納する
	nameText = GUI.TextField(Rect(Screen.width / 2 - 20, Screen.height / 2 + 10, 100, 25),nameText, 10);
	// Entryボタンを押したとき
	if(GUI.Button(Rect(Screen.width / 2 - 90, Screen.height / 2 + 50, 80, 25), "Entry")) {
		if (nameText == ""){// 名前が空白ならば
			messageSend("noName");
		} else {
			messageSend("entry");
			postScore();
			//後でランキングに変更
			Application.LoadLevel("Title"); 
		}
	}
	// Quitボタンを押したとき
	if(GUI.Button(Rect(Screen.width / 2 + 10, Screen.height / 2 + 50, 80, 25), "Quit")) {
		Debug.Log("登録しない");
		//タイトルシーンへ移動
		Application.LoadLevel("Title"); 
	}
}

// スコアをセット
function setScore(s : int) {
	score = s;
}

// サーバーにスコアを送る
function postScore() {
	var url1 = "http://localhost/ranking/postRanking.php ";

			var wwwForm:WWWForm = new WWWForm();
			//指定urlにデータを送信
			wwwForm.AddField( "name", nameText);
			wwwForm.AddField( "score", score);

			var gettext : WWW = new WWW(url1,wwwForm);
			yield gettext;
			Debug.Log( gettext.text );
}

// InfoTextオブジェクトに送る
function messageSend(str : String){
	var message : String = str;
	GameObject.FindWithTag("GameOver").SendMessage("infoText",message);
}

