#pragma strict

function OnCollisionEnter(obj : Collision) { 
    if (obj.gameObject.name == "Enemy(Clone)") {  
    	Application.LoadLevel("GameOver");
    }
}  
