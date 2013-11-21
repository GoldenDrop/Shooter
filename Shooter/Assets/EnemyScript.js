#pragma strict

// Enemyの移動速度
var enemy_speed : float = 0.2;

// Enemy１体あたりの得点 
var score : int = 10;

function Update () {
	transform.position.z -= enemy_speed;
	transform.Rotate(2, 2, 2);
}

// 攻撃が当たった時
function OnCollisionEnter(obj : Collision) {  
    // ぶつかるCannonBallはGunBarrelからのクローン  
    if (obj.gameObject.name == "CannonBall(Clone)") { 
    	GameObject.FindWithTag("GameController").SendMessage("GetScore",score);
        Destroy(gameObject); 
    }  
}  
