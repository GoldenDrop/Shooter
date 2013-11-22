#pragma strict

var cannonball : Transform;

// 初期弾数
var bullet : int = 100;
function Update () {
	// 攻撃をスペースキーに
	if (Input.GetButtonUp("Jump")) {  
		if (bullet > 0) {
			bullet--;
        	Instantiate(cannonball, transform.position, transform.rotation);
        	// 弾数をGameControllerに渡す
        	GameObject.FindWithTag("GameController").SendMessage("GetBullet",bullet);
    	} else {
    		Debug.Log("弾切れ！");
    	}
    }  
}

// Bulletから補充
function SetBullet (b : int) {
	bullet += b;
}