<template>
	<div>
		<button @click="this.increment">+</button>
		<span>{{sum}}</span>
		<button @click="this.decrement">-</button>
	</div>
</template>

<script>
export default {
	name: 'Counter',
	data() {
		return { sum: 0 };
	},
	methods: {
		increment() {
			this.sum += 1;
		},
		decrement() {
			this.sum -= 1;
		},
	},
};
</script>
