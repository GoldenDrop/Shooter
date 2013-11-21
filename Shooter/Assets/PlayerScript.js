#pragma strict

// Playerの移動速度
var playerSpeed : float;
function Update () {
	var x : float = Input.GetAxis("Horizontal");
	transform.Translate(x * playerSpeed, 0, 0);
}

// Enemyにぶつかったとき
function OnCollisionEnter(obj : Collision) {   
    if (obj.gameObject.name == "Enemy(Clone)") {  
        Application.LoadLevel("GameOver"); 
    }  
}  
