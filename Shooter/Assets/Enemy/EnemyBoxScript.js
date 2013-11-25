#pragma strict
// Enemyの登録
var enemy1 : Transform;
var enemy2 : Transform;
var enemy3 : Transform;
var bullet : Transform;

// 出現確率
var e1 : float = 0.60;
var e2 : float = 0.20;
var e3 : float = 0.1;
var b : float = 0.1;

function Update () {
	// 出現確率の配列
	var rList : float[] = [e1, e2, e3, b];
	if (Time.frameCount % 60 == 0) {
		// 返ってきたiに合わせて処理を分ける
		switch(choose(rList)) {
			case 0 : // Enemy1
				Debug.Log("Enemy1");
				Instantiate(enemy1, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
			case 1 : // Enemy2
				Debug.Log("Enemy2");
				Instantiate(enemy2, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
			case 2 : // Enemy3
				Debug.Log("Enemy3");
				Instantiate(enemy3, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
			case 3 : // Bullet
				Debug.Log("Bullet");
				Instantiate(bullet, Vector3(Random.Range(-6.0, 6.0), 1, 14), transform.rotation);
			break;
		}
	}
}

function choose (list : float[]) {
	var total: float = 0.0;
	
	// list内の数を全て足した数をtotalに入れる
	for (elem in list) {
		total += elem;
	}
	// 0 ~ total のランダムな位置を決める
	var randomPoint = Random.value * total;

	// randomPointがどの位置にいるのか
	for (var i : int = 0; i < list.length; i++) {
		// listの[i]番目の要素内にいるとき
		if (randomPoint < list[i]) {
			return i;
		} else {
			// listの[i]番目の要素外にいるなら
			// 次の要素と比べるため差分を求める
			randomPoint -= list[i];
		}
	}
	// randomPointが１だった場合
	return list.Length - 1;
}