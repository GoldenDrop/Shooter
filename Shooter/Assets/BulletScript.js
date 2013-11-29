#pragma strict

// Enemyの移動速度
var enemy_speed : float = 0.2;
// 弾補充数
var bsum : int = 10;
//エフェクト
var eff : Transform;

function Update () {
	transform.position.z -= enemy_speed;
}

function OnCollisionEnter(obj : Collision) {  
    if (obj.gameObject.name == "Player") { 
    	GameObject.FindWithTag("GunBarrel").SendMessage("SetBullet",bsum);
        Destroy(gameObject); 
    } else if (obj.gameObject.name == "CannonBall(Clone)") {
        Instantiate(eff, transform.position, transform.rotation);
    	Destroy(gameObject);
    } else {
    	Destroy(gameObject);
    }
}  
