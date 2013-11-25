#pragma strict

// Playerの移動速度
var playerSpeed : float;
//エフェクト
var eff : Transform;
var bulletEff : Transform;

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	transform.Translate(x * playerSpeed, 0, 0);
}

function OnCollisionEnter(obj : Collision) {
	switch (obj.gameObject.name) {
		case "Bullet(Clone)" : 
			Instantiate(bulletEff, transform.position, transform.rotation);
		break;
		case "Block" : 
			// 何もしない
		break;
		// Enemyに当たった時
		default : 
			Instantiate(eff, transform.position, transform.rotation);
			Application.LoadLevel("GameOver"); 
		break;
	}
}

