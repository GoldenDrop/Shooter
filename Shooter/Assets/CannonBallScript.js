#pragma strict
// 弾速
var speed : float = 0.3;


function Update () {
	transform.position.z += speed;
	transform.Rotate(3, 3, 3);
}

/*function OnCollisionEnter(obj : Collision) {
	if (obj.gameObject.name == "before") {
		Destroy(gameObject);	
	} else if (obj.gameObject.name == "Enemy(Clone)"){
    	Destroy(gameObject); 
	} 
}*/

function OnCollisionEnter(obj : Collision) {
	Destroy(gameObject);
}