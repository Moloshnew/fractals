var audio, mctx, analyser, msrc, array;

audio = document.getElementById("audio");

document.onclick = function() {
	prep();
	audio.play();
}


function prep () {
	mctx = new AudioContext();
	analyser = mctx.createAnalyser();
	msrc = mctx.createMediaElementSource(audio);
	msrc.connect(analyser);
	analyser.connect(mctx.destination);
	loop();
}

function loop () {
	//window.requestAnimationFrame(loop);
	array = new Uint8Array(analyser.frequencyBitCount);
	analyser.getByteFrequencyData(array);
	
	console.log(array);
	
}