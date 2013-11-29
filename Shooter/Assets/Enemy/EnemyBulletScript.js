#pragma strict
// 弾速
var speed : float = 0.3;

function Update () {
	transform.position.z -= speed;
}


function OnCollisionEnter() {
	Destroy(gameObject);
}