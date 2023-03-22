<script lang="ts">
	export default {
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: `/pages/mock/detail/index?type=${this.$page.options.type}`
			})
		}
	}
</script>

<script lang="ts" setup>
	import {
		computed,
		getCurrentInstance
	} from 'vue';
	import HistoryCollapse from "./cpns/history-collapse"
	import useStore from '@/store/history';

	const historyStore = useStore();
	const instance = getCurrentInstance();
	const type = computed(() => instance.vnode.props?.type)
	const historyList = computed(() => historyStore.historyData[type.value]);
</script>

<template>
	<scroll-view class="wd-text-36r wd-relative" :scroll-y="true" :show-scrollbar="true">
		<view class="wd-mt-30r" v-for="(history, nper) in historyList" :key="nper">
			<uni-section :title="`${nper}期 ${history.date}`" type="line" />
			<history-collapse :history="history" :nper="nper" />
		</view>
	</scroll-view>
</template>

<style></style>
