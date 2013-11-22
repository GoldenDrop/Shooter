#pragma strict

var rList : float[] = [0.50, 0.25, 0.20, 0.05];
function Update () {
	choose(rList);
}

function choose (list : float[]) {
	var total = 0;
	for (elem in list) {
		total += elem;
	}
	Debug.Log(total);
}