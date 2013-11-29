#pragma strict

// Assetsからインポート
import LitJson;
var url = "http://localhost/ranking/getRanking.php";
var titleStyle : GUIStyle;
var noStyle : GUIStyle;
var nStyle : GUIStyle;
var sStyle : GUIStyle;
var getJSON : WWW;

function Start () {
	// WWWは通信をつかさどる
	// WWWクラスをインスタンス化し、urlを第二引数に渡す
	getJSON = new WWW( url );
	// 読み込まれるまで待つ
	yield getJSON;
}

function OnGUI() {
		// 題字
		GUI.Label(Rect(Screen.width / 2 - 30, 1, 100, 30),"Top 10", titleStyle);
		// ダイアログ
		GUI.Box(Rect(Screen.width / 2 - 100, 21, 200, 135), "");
		// とってきたJSON形式データをパース
		var jsonParser:JsonData = JsonMapper.ToObject(getJSON.text);
		// データ回分ループさせる
		for (var i : int = 0; i < jsonParser.Count; i++){
			// 名前
			var n : String = "";
			// スコア
			var s : String = "";
			// 余白
    		var y : int = i * 12;
    		// 順位
    		var no : String = "";

    		if(i < 9) {// 1 ~ 9位まで　桁が違うとずれるため余白で調節
    			no += " " + (1 + i);
    		} else{// 10位
    			no += 1 + i;
    		}
    		// パースされたデータを格納
    		n += jsonParser[i]["name"];
    		s += jsonParser[i]["score"];
    		// 画面に表示
    		GUI.Label(Rect(Screen.width / 2 - 80, 28 + y, 100, 20), no.ToString(), noStyle);
			GUI.Label(Rect(Screen.width / 2 - 50, 28 + y, 100, 20), n, nStyle);
			GUI.Label(Rect(Screen.width / 2 + 40, 28 + y, 100, 20), s, sStyle);
		}
		// タイトルに戻る
		if(GUI.Button(Rect(Screen.width / 2 - 30, Screen.height / 2 + 70, 60, 20), "Back")) {
			Application.LoadLevel("Title"); 
		}
		
}
