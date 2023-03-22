<script lang="ts" setup>
import { computed, ref } from 'vue';
import useRandom from '@/hooks/useRandom';
import { ILotteryDetail } from '@/types/common';

interface Props {
	visible: boolean;
	type: string | null;
	list: Array<ILotteryDetail>;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:visible']);
const count = ref(5);
const pickerValue = ref();

const drawerVisible = computed({
	get: () => props.visible,
	set: val => emit('update:visible', val)
});
const [randomList, handleRandomClick] = useRandom(count, props.type);
const handlePickerChange = val => {
	console.log(val);
};
</script>

<template>
	<crush-drawer v-model:visible="drawerVisible">
		<scroll-view class="wd-text-36r wd-relative wd-mt-30" :scroll-y="true" :show-scrollbar="true">
			<uni-section title="选择玩法" type="line">
				<view class="wd-flex-center">
					<text class="wd-mx-auto">机选</text>
					<uni-number-box v-model="count" :min="0"></uni-number-box>
					<uni-button size="mini" @click="handleRandomClick()">点击开始</uni-button>
				</view>
			</uni-section>
			<uni-section title="选择期数" type="line">
				<view class="wd-flex wd-px-30r">
					<view class="wd-mr-10r">当前选择：</view>
					第
					<crush-picker v-model="pickerValue" range-key="qh" :options="list" @change="handlePickerChange"></crush-picker>
					期
				</view>
			</uni-section>
			<view class="wd-mt-30r">
				<uni-section :title="`机选${randomList.length}注`" type="line" />
				<uni-list class="wd-p-10r wd-text-36r">
					<uni-list-item v-for="(random, index) in randomList" :key="index" class="wd-flex-center wd-text-center wd-leading-60r">
						<template v-slot:body>
							<div
								v-for="(ball, i) in random"
								:key="i"
								class="wd-w-60r wd-h-60r wd-rounded-full wd-mr-10r wd-text-white"
								:style="{ 'background-color': i < 6 ? '#e60013' : 'aqua' }"
							>
								{{ ball }}
							</div>
						</template>
					</uni-list-item>
				</uni-list>
			</view>
			<uni-button size="mini" type="primary" class="wd-absolute wd-right-0 wd-bottom-80r" @click="handleOkClick()">确定</uni-button>
		</scroll-view>
	</crush-drawer>
</template>

<style></style>
