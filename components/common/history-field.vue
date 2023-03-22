<script setup lang="ts">
	import {
		withDefaults,
		toRefs,
		computed
	} from 'vue';
	import {
		ILotteryDetail
	} from '@types/common';

	interface IDetail extends ILotteryDetail {
		fieldNum ? : string;
		qbqh ? : string;
		jcje ? : string;
		kjjgqq ? : Array < string > ;
		kjjghq ? : string;
		imgSrc ? : string;
		kjsj ? : string
		fieldTitle ? : string | undefined;
	}

	interface IHistoryItem {
		date: string;
		map: Record < string, number > ;
	}

	interface IHistoryData {
		[key: string]: IHistoryItem;
	}

	interface Props {
		field: string;
		historyData ? : IHistoryData;
		detail ? : IDetail;
		isShowMore ? : boolean;
		footerText ? : string;
	}

	const props = withDefaults(defineProps < Props > (), {
		isShowMore: true,
		detail: () => ({
			fieldTitle: '',
			fieldNum: '',
			qbqh: '',
			jcje: '',
			kjjgqq: [],
			kjjghq: '',
			imgSrc: '',
		}),
		historyData: () => ({}),
		footerText: '点击查看更多',
	});

	const goToDetail = () => {
		if (!props.field) return;
		uni.navigateTo({
			url: `detail/index?type=${props.field}`
		});
	};

	const goToMockDetail = () => {
		uni.navigateTo({
			url: `/pages/mock/detail/index?type=${props.field}`
		});
	}

	const {
		fieldTitle,
		fieldNum,
		jcje,
		kjjghq,
		imgSrc
	} = toRefs(props.detail);
	const balls = computed(() => {
		const map = props.historyData?. [fieldNum.value]?.map
		if (!map) return null
		const key = Object.keys(map)?. [0]
		const list = key?.split(",") ?? []
		const num = map?. [key]
		return {
			list,
			num
		}
	})

</script>

<template>
	<uni-group class="wd-text-36r wd-m-20r wd-border-bottom-5r wd-border-bottom-black wd-border-bottom-solid">
		<view>
			<view class="">
				<view>第{{ fieldNum }}期</view>
				<template v-if="jcje">
					<text>{{ fieldTitle || '奖池滚存' }}:</text>
					<text style="color: red;">￥{{ jcje }}元</text>
				</template>
			</view>
			<view class="wd-flex">
				<image class="wd-w-150r wd-h-150r wd-flex-none" :src="imgSrc" mode="widthFix" />
				<view v-if="balls" class="wd-flex-wrap wd-flex wd-align-item-center wd-text-center wd-leading-60r">
					<view v-for="(ball, j) in balls.list.slice(0, -1)" :key="j"
						class="wd-w-60r wd-h-60r wd-rounded-full wd-mr-10r wd-text-white wd-my-5r wd-self-center"
						style="background-color: #e60013;">
						{{ ball }}
					</view>
					<view v-if="kjjghq" class="wd-w-60r wd-h-60r wd-rounded-full wd-text-white wd-self-center"
						style="background-color: aqua;">
						{{ balls.list[balls.list.length - 1] }}
					</view>
				</view>
				<view @click="goToMockDetail" class="wd-h-150r wd-leading-96r wd-mt-30r wd-ml-20r" v-else>
					暂无数据，点击开玩
					<uni-icons class="wd-align-middle" type="forward" size="20"></uni-icons>
				</view>
			</view>
			<view v-if="isShowMore && balls" class="wd-flex">
				<view @click="goToDetail" class="wd-text-center wd-text-666 wd-align-middle wd-flex-1">
					{{ footerText }}
					<uni-icons class="wd-align-middle" type="forward" size="20"></uni-icons>
				</view>
			</view>
		</view>
	</uni-group>
</template>

<style></style>
