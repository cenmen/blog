<template>
	<div class="container">
		<el-steps :active="1" :space="500">
			<el-step v-for="item in steps" :title="item.title" :description="item.desc"></el-step>
		</el-steps>
	</div>
</template>

<script>
export default {
	data() {
		return {
			steps: [
				{ title: 'Vite', desc: 'B 站视频 & 官方文档' },
				{ title: 'Webpack', desc: '了解更高阶的知识' }
			]
		};
	},
	methods: {}
};
</script>

<style scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin-bottom: 20px;
}
</style>