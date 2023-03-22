<script setup lang="ts">
import { computed } from 'vue';
const upperNumberMap = {
	1: '一',
	2: '二',
	3: '三',
	4: '四',
	5: '五',
	6: '六'
};
interface Props {
	nper: string | number;
	history: Record<string, any>;
}
const props = defineProps<Props>();
// const count = computed(() => Object.values(props.history.map).reduce((prev, cur) => prev + cur.count, 0));
const count = computed(() => Object.keys(props.history.map).reduce((prev, cur) => prev + props.history.map[cur].count, 0));
const winMap = computed(() =>
	Object.keys(props.history.map).reduce((prev, cur) => {
		let { level, count } = props.history.map[cur];
		level = level || -1;
		return { ...prev, [level]: prev[level] ? { ...prev[level], [cur]: count } : { [cur]: count } };
	}, {})
);
const totalWinCount = computed(() =>
	Object.keys(winMap.value).reduce((prev, cur) => (cur == '-1' ? prev : prev + Object.keys(winMap.value[cur]).reduce((p, c) => p + winMap.value[cur][c], 0)), 0)
);
console.log(winMap);
</script>

<template>
	<uni-collapse>
		<uni-collapse-item title-border="none" :title="`模拟次数 ${count} 次, 中将次数 ${totalWinCount} 次`" :border="false">
			<template class="wd-p-10r wd-text-36r" v-for="(detail, level) in winMap" :key="level">
				<uni-section :title="level == -1 ? '未中奖' : `${upperNumberMap[level]}等奖`" type="line" />
				<uni-list v-for="(count, balls) in detail">
					<uni-list-item class="wd-flex-center wd-text-center wd-leading-60r">
						<template v-slot:body>
							<div
								v-for="(ball, i) in balls.split(',')"
								:key="i"
								class="wd-w-60r wd-h-60r wd-rounded-full wd-mr-10r wd-text-white"
								:style="{ 'background-color': i < 6 ? '#e60013' : 'aqua' }"
							>
								{{ ball }}
							</div>
							<div>{{ count }}注</div>
						</template>
					</uni-list-item>
				</uni-list>
			</template>
		</uni-collapse-item>
	</uni-collapse>
</template>

<style></style>
