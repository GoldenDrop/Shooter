#pragma strict

// 当たったオブジェクトを削除
function OnCollisionEnter(obj : Collision) {
	Destroy(obj.gameObject);
}

