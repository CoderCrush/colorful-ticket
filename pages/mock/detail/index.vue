<script lang="ts" setup>
	import {
		computed,
		getCurrentInstance,
		ref
	} from 'vue';
	import useRandom from '@/hooks/useRandom';
	import useStore from '@/store/home';
	import useHistoryStore from '@/store/history';
	import fabConfig from "./config/fab"

	const count = ref(5);
	const pickerValue = ref();
	const fabRef = ref();
	const dateValue = ref();
	const homeStore = useStore();
	const {
		setHistoryStore
	} = useHistoryStore();
	const instance = getCurrentInstance();
	const type = computed(() => instance.vnode.props?.type)
	const [randomList, handleRandom] = useRandom(count, type.value);
	const lotteryList = computed(() => homeStore[type.value]);

	const handlePickerChange = (val: Record < string, any > ) => dateValue.value = val?.kjsj;

	const fabTrigger = () => {
		fabRef.value.isShow = false
	}

	const handleRandomClick = () => {
		if (typeof handleRandom !== 'function') {
			return uni.showToast({
				title: '暂未开放，敬请期待！',
				icon: 'error'
			})
		}
		const options = {
			type: type.value,
			date: dateValue.value,
			nper: pickerValue.value,
			list: randomList.value
		}
		setHistoryStore(options);
		uni.showToast({
			title: '已添加到历史记录'
		})
	}
</script>

<template>
	<scroll-view class="wd-text-36r wd-relative" :scroll-y="true" :show-scrollbar="true">
		<uni-section title="选择玩法" type="line">
			<view class="wd-flex-center">
				<text>机选</text>
				<uni-number-box v-model="count" :min="0" :max="1000"></uni-number-box>
				<uni-button class="wd-m-0" size="mini" @click="handleRandomClick()">点击开始</uni-button>
			</view>
		</uni-section>
		<uni-section title="选择期数" type="line">
			<view class="wd-flex wd-px-30r">
				<view class="wd-mr-10r">当前选择：</view>
				第
				<crush-picker v-model="pickerValue" range-key="qh" :options="lotteryList" @change="handlePickerChange">期
					{{ dateValue }}
				</crush-picker>
			</view>
		</uni-section>
		<view class="wd-mt-30r">
			<uni-section :title="`机选${randomList.length}注`" type="line" />
			<uni-list class="wd-p-10r wd-text-36r">
				<uni-list-item v-for="(random, index) in randomList" :key="index"
					class="wd-flex-center wd-text-center wd-leading-60r">
					<template v-slot:body>
						<div v-for="(ball, i) in random" :key="i"
							class="wd-w-60r wd-h-60r wd-rounded-full wd-mr-10r wd-text-white"
							:style="{ 'background-color': i < 6 ? '#e60013' : 'aqua' }">
							{{ ball }}
						</div>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		<uni-fab ref="fabRef" v-bind="fabConfig" @trigger="fabTrigger"></uni-fab>
	</scroll-view>
</template>

<style></style>
