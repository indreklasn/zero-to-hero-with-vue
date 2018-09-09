<template>
	<div class="container">
		<slot name="title"></slot>
		<slot name="sum"></slot>
	</div>
</template>

<script>
export default {
	name: 'Header',
};
</script>

<style>
.container {
	display: flex;
	align-content: center;
}
</style>
