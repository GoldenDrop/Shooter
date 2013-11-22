#pragma strict

var enemy : Transform;
function Update () {
	// 
	if (Time.frameCount % 60 == 0) {
		Instantiate(enemy, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
	}
}