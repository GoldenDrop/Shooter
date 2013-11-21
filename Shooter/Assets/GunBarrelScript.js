#pragma strict

var cannonball : Transform;
function Update () {
	if (Input.GetButtonUp("Fire1")) {  
        // オブジェクトを複製する。複製されるのはGameObjectクラス  
        Instantiate(cannonball, transform.position, transform.rotation);  
    }  
}