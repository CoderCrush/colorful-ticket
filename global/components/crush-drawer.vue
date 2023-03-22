<script setup lang="ts">
import {
	withDefaults,
	watch,
	ref,
	computed
} from "vue"

interface Props {
	visible: boolean,
	mode?: "left" | "right",
	width?: number, // 仅支持百分比(基于屏幕宽度)
	clickBodyClose?: boolean
}
const props = withDefaults(defineProps<Props>(), {
	mode: "left",
	width: 80,
	clickBodyClose: false
})
const emit = defineEmits(['update:visible', 'bodyClick'])
const leftDrawerRef = ref()
const { windowWidth } = uni.getWindowInfo()
const innerWidth = computed(() => windowWidth * props.width / 100)

const handleShowLeftChange = flag => {
	const fn = flag ? 'open' : 'close'
	console.log(flag);
	leftDrawerRef.value?.[fn]();
}
watch(() => props.visible, handleShowLeftChange)
const handleShowLeftChangeClick = (flag) => {
	emit('update:visible', flag)
}
const handleBodyClick = () => {
	props.clickBodyClose && handleShowLeftChangeClick(false)
	emit('bodyClick')
}
</script>

<template>
	<uni-drawer class="drawer" :width="innerWidth" @click="handleBodyClick" ref="leftDrawerRef" mode="left">
		<view class="wd-float-right" @click="handleShowLeftChangeClick(false)"><uni-icons type="close" size="30"></uni-icons></view>
		<slot />
	</uni-drawer>
</template>

<style></style>
