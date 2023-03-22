<script setup lang="ts">
	import {
		unref,
		getCurrentInstance,
		computed
	} from 'vue';
	import useStore from '@/store/home';
	// import RandomPlayDrawer from '@/components/drawer/randomPlayDrawer';
	import LotteryField from '@/components/common/lottery-field.vue';

	const homeStore = useStore();
	// const drawerVisible = ref(false);
	const instance = getCurrentInstance();
	const type = computed(() => instance.vnode.props?.type);
	const lotteryList = computed(() => homeStore[unref(type)]);

	const handleMockClick = () => uni.navigateTo({
		url: `/pages/mock/detail/index?type=${unref(type)}`
	})
</script>

<template>
	<view class="wd-text-36r">
		<uni-section class="wd-p-10r wd-text-20r" title="选择玩法" type="line"><button type="primary" size="mini"
				@click="handleMockClick">模拟开奖</button></uni-section>

		<uni-section title="近期开奖结果" type="line">
			<lottery-field :list="lotteryList" :isShowMore="false" />
		</uni-section>
		<!-- <random-play-drawer v-model:visible="drawerVisible" :type="instance.vnode.props?.type" :list="lotteryList" /> -->
		<lottery-field :valueKey="type" :isShowMore="false" />
	</view>
</template>

<style scoped lang="scss"></style>
