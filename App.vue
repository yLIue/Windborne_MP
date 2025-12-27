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
	page{
		background-color: #f7f7f7;
	}
	.status{
		height: var(--status-bar-height);
	}
	@font-face {
	  font-family: 'ICO';
	  src: 
	       url('https://at.alicdn.com/t/c/font_4310283_2e06mdlry6z.ttf?t=1749964037919') format('truetype');
	}
</style>
