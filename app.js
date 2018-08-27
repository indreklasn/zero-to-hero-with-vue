const app = new Vue({
	el: '#app',
	data: {
		message: 'From Zero to Hero with Vue!',
		hasMessage: true,
		vue:
			'Vue.js is an open-source JavaScript framework for building user interfaces.',
	},
	methods: {
		logMessage() {
			console.log(this.message);
		},
		toggleMessage() {
			this.hasMessage = !this.hasMessage;
		},
	},
});
