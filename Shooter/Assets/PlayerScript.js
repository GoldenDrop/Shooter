#pragma strict

// Playerの移動速度
var playerSpeed : float;
function Update () {
	var x : float = Input.GetAxis("Horizontal");
	transform.Translate(x * playerSpeed, 0, 0);
}

// 当たり判定
/*function OnCollisionEnter(obj : Collision) {   
    if (obj.gameObject.name == "Bullet(Clone)") {  
        // 何もしない
    }  else {
        Application.LoadLevel("GameOver"); 
    }
}*/

function OnCollisionEnter(obj : Collision) {
	switch (obj.gameObject.name) {
		case "Enemy(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
		case "Enemy2(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
		case "Enemy3(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
		case "EnemyBullet(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
	}
} 
