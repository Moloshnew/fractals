var audio, mctx, analyser, msrc, array;

audio = document.getElementById("audio");

document.onclick = function() {
	prep();
	audio.play();
}


function prep () {
	console.log(1);
	mctx = new AudioContext();
	analyser = mctx.createAnalyser();
	msrc = mctx.createMediaElementSource(audio);
	msrc.connect(analyser);
	analyser.connect(mctx.destination);
	loop();
}

function loop () {
	array = new Uint8Array(analyser.frequencyBitCount);
	analyser.getByteFrequencyData(array);
	
	console.log(array[40]);
	
	window.requestAnimationFrame(loop);
}