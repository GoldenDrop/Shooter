#pragma strict

// Enemyの移動速度
var enemy_speed : float = 0.2;

// 弾補充数
var bsum : int = 10;

function Update () {
	transform.position.z -= enemy_speed;
}


function OnCollisionEnter(obj : Collision) {  
    if (obj.gameObject.name == "Player") { 
		// GunBarrelに補充弾数を渡す
    	GameObject.FindWithTag("GunBarrel").SendMessage("SetBullet",bsum);
        Destroy(gameObject); 
    }  else if (obj.gameObject.name == "CannonBall(Clone)") {
    	Destroy(gameObject);
    } else {
    	Destroy(gameObject);
    }
}  
