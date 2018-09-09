<template>
	<div>
		<Header>
			<h2 slot="title">The sum is: </h2>
      <h2 slot="sum" :class="sumClass">{{sum}}</h2>
		</Header>
		<div>
			<button @click="this.increment">+</button>
			<button @click="this.decrement">-</button>
		</div>
	</div>
</template>

<script>
import Header from './Header.vue';
export default {
	components: { Header},
	name: 'Counter',
	data() {
		return {
			sum: 0,
			sumClassName: 'grey'
		};
	},
	methods: {
		increment() {
			this.sum += 1;
		},
		decrement() {
			this.sum -= 1;
		},
	},
	computed: {
		sumClass() {
			if (this.sum === 0) return this.sumClassName = 'grey'
			if (this.sum > 0) return this.sumClassName = 'green'
			if (this.sum < 0) return this.sumClassName = 'red'
		}
	},
};
</script>

<style>
.red {
	color: #f6546a;
}

.green {
	color: #66cdaa;
}
.grey {
	color: #718da5;
}
</style>
