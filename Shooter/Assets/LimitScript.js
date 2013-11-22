#pragma strict

function OnCollisionEnter(obj : Collision) {
	switch (obj.gameObject.name) {
		case "Enemy(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
		case "Enemy2(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
		case "Enemy3(Clone)" : 
			Application.LoadLevel("GameOver"); 
		break;
	}
} 

