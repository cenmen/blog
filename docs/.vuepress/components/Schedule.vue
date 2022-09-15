<template>
	<div class="container">
		<div v-for="item in schedule" class="schedule-container">
			<el-card>
				<div slot="header">
					<span>{{ item.title }}</span>
				</div>
				<div class="option">
					<label>掌握度：</label>
					<div>
						<el-progress :text-inside="true" :stroke-width="14" :percentage="item.percent"></el-progress>
					</div>
				</div>
				<div class="option">
					<label>目标： </label>
					<el-tag type="warning" size="small">{{ level[item.level] }}</el-tag>
				</div>
				<div class="option">
					<label>重要度： </label>
					<el-rate v-model="item.rate" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
				</div>
				<div class="option" v-if="item.tags">
					<label>标签： </label>
					<el-breadcrumb separator="/">
						<el-breadcrumb-item v-for="tag in item.tags">{{ tag }}</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			level: {
				1: '了解',
				2: '熟悉',
				3: '熟练',
				4: '掌握',
				5: '原理'
			},
			schedule: [
				{
					title: 'JavaScript & ES6',
					percent: 80,
					level: 4,
					rate: 4.8
				},
				{
					title: 'HTML & CSS',
					percent: 80,
					level: 4,
					rate: 4.2
				},
				{
					title: 'Vue2.x & Vue3.x',
					percent: 60,
					level: 5,
					rate: 3.8
				},
				{
					title: 'React',
					percent: 60,
					level: 5,
					rate: 3.8
				},
				{
					title: 'Node.js',
					percent: 40,
					level: 3,
					rate: 3.0,
					tags: ['NestJs']
				},
				{
					title: '构建工具',
					percent: 50,
					level: 2,
					rate: 2.8,
					tags: ['Vite', 'Webpack']
				},
				{
					title: '浏览器',
					percent: 50,
					level: 2,
					rate: 2.8
				},
				{
					title: '网络基础',
					percent: 20,
					level: 2,
					rate: 2.6
				},
				{
					title: '加分技能',
					percent: 50,
					level: 2,
					rate: 2.0,
					tags: ['TypeScript', 'Less|Sass', 'Docker', 'Nginx']
				}
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
}
.schedule-container {
	width: 45%;
	margin-bottom: 10px;
}
.option {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	color: #4e6e8e;
	font-size: 12px;
}
.option > label {
	width: 100px;
	text-align: right;
}
.option > div {
	flex: 1;
}
</style>