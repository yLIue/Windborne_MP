<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	:root{
		--background: #f7f7f7;
		--description: #6d6d72;
		--font-color:#343434;
	}
	page{
		background-color: var(--background);
	}
	.status{
		height: var(--status-bar-height);
	}
	.ico_purple { background: linear-gradient(135deg, #AF52DE, #5856D6); }
	.ico_pink { background: linear-gradient(135deg, #FF2D55, #FF375F); }
	@font-face {
	  font-family: 'ICO';
	  src: 
	       url('https://at.alicdn.com/t/c/font_4310283_2e06mdlry6z.ttf?t=1749964037919') format('truetype');
	}
</style>
