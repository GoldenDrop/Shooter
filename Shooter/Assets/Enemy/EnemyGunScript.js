#pragma strict

var score : int = 20;

var eBullet : Transform;
function Update () {
	if (Time.frameCount % 120 == 0) {
		Instantiate(eBullet, transform.position, transform.rotation);
	}
}
// 攻撃が当たった時
function OnCollisionEnter(obj : Collision) {  
    // ぶつかるCannonBallはGunBarrelからのクローン  
    if (obj.gameObject.name == "CannonBall(Clone)") { 
    	GameObject.FindWithTag("GameController").SendMessage("GetScore",score);
        Destroy(gameObject); 
        // Destroy(GameObject("Enemy3(Clone)"));
    }  
}  