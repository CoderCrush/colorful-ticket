<script setup lang="ts">
	import {
		withDefaults,
		computed
	} from 'vue';
	import {
		ILotteryDetail
	} from '@types/common';
	import useStore from '@/store/home';

	interface IDetails extends ILotteryDetail {
		fieldNum?:string;
		qbqh?:string;
		jcje?:string;
		kjjgqq?:Array < string > ;
		kjjghq?:string;
		imgSrc?:string;
		fieldTitle?:string | undefined;
		key?:string;
	}

	interface Props {
		list?:IDetails[];
		isShowMore?:boolean;
		footerText?:string;
		valueKey?:string;
		sliceLength?:number
	}

	const store = useStore();

	const props = withDefaults(defineProps < Props > (), {
		isShowMore: true,
		list: () => [{
			fieldTitle: '',
			fieldNum: '',
			qbqh: '',
			jcje: '',
			kjjgqq: [],
			kjjghq: '',
			imgSrc: '',
			key: ''
		}],
		footerText: '点击查看更多',
		sliceLength: -1
	});

	const listData = computed(() => props.sliceLength === -1 ? store[props.valueKey] : store[props.valueKey].slice(0, props.sliceLength));

	defineEmits(['handleFooterClick']);
</script>

<template>
	<uni-group v-for="({ fieldNum, jcje, kjsj, imgSrc, kjjgqq, kjjghq, fieldTitle }, index) in listData" :key="index"
		class="wd-text-36r wd-m-20r wd-border-bottom-5r wd-border-bottom-black wd-border-bottom-solid">
		<view @click="$emit('handleFooterClick')">
			<view class="">
				<view class="wd-flex wd-justify-between">
					<view>第{{ fieldNum }}期</view>
					<view>开奖时间: {{ kjsj }}</view>
				</view>
				<template v-if="jcje">
					<text>{{ fieldTitle || '奖池滚存' }}:</text>
					<text style="color: red;">￥{{ jcje }}元</text>
				</template>
			</view>
			<view class="wd-flex">
				<image class="wd-w-150r wd-h-150r wd-flex-none" :src="imgSrc" mode="widthFix" />
				<view class="wd-flex-wrap wd-flex wd-align-item-center wd-text-center wd-leading-60r">
					<view v-for="(ball, j) in kjjgqq" :key="j"
						class="wd-w-60r wd-h-60r wd-rounded-full wd-mr-10r wd-text-white wd-my-5r wd-self-center"
						style="background-color: #e60013;">
						{{ ball }}
					</view>
					<view v-if="kjjghq" class="wd-w-60r wd-h-60r wd-rounded-full wd-text-white wd-self-center"
						style="background-color: aqua;">{{ kjjghq }}</view>
				</view>
			</view>
			<view v-if="isShowMore" class="wd-text-center wd-text-666 wd-align-middle">
				{{ footerText }}
				<uni-icons class="wd-align-middle" type="forward" size="20"></uni-icons>
			</view>
		</view>
	</uni-group>
</template>

<style></style>
