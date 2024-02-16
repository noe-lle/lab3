<script>
	let bg = document.getElementById('bg');
	let text = document.getElementById('text');
	let btn = document.getElementById('btn');
	let front2 = document.getElementById('front2');
	
	window.addEventListener('scroll', function(){
		let value = window.scrollY;
		text.style.marginRight = value * 3.5 + 'px';
	})
</script>