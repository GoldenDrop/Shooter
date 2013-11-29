#pragma strict

// Enemyの移動速度
var enemy_speed : float = 0.07;
// Enemy１体あたりの得点 
var score : int = 30;
//エフェクト
var eff : Transform;
private var hit : int = 0; 

function Update () {
	transform.position.y = 2;
	transform.position.z -= enemy_speed;
	transform.Rotate(2, 2, 2);
}

// 攻撃が当たった時
function OnCollisionEnter(obj : Collision) {  
    if (obj.gameObject.name == "CannonBall(Clone)") { 
    	hit++;
    	Debug.Log(hit);
    	if(hit > 2) {
    		GameObject.FindWithTag("GameController").SendMessage("GetScore",score);
            Instantiate(eff, transform.position, transform.rotation);
        	Destroy(gameObject);	
    	} 
    }  
}  
