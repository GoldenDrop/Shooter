#pragma strict
var enemy1 : Transform;
var enemy2 : Transform;
var enemy3 : Transform;
var bullet : Transform;

var e1 : float = 0.60;
var e2 : float = 0.20;
var e3 : float = 0.06;
var b : float = 0.04;

function Update () {
	var rList : float[] = [e1, e2, e3, b];
	if (Time.frameCount % 60 == 0) {
		switch(choose(rList)) {
			case 0 :
				Debug.Log("Enemy1");
				Instantiate(enemy1, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
			case 1 :
				Debug.Log("Enemy2");
				Instantiate(enemy2, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
			case 2 :
				Debug.Log("Enemy3");
				Instantiate(enemy3, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
			case 3 :
				Debug.Log("Bullet");
				Instantiate(bullet, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
		}
	}
	//choose(rList);
}

function choose (list : float[]) {
	var total: float = 0.0;
	/*for (var i : int = 0; i < list.length; i++) {
		// Debug.Log(list[i]);
		total += list[i];
		Debug.Log(total);

	}*/
	for (elem in list) {
		total += elem;
		// Debug.Log(total);
	}
	var randomPoint = Random.value * total;
	// Debug.Log(randomPoint);

	for (var i : int = 0; i < list.length; i++) {
		if (randomPoint < list[i]) {
			// Debug.Log(i);
			return i;
		} else {
			randomPoint -= list[i];
		}
	}
	return list.Length - 1;
}