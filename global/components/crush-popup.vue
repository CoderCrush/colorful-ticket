<script setup lang="ts">
import {
	withDefaults,
	watch,
	ref,
	useAttrs
} from "vue"

interface Props {
	visible: boolean,
	mode?: "left" | "right",
	width?: number
}
const props = withDefaults(defineProps<Props>(), {
	mode: "left",
	width: 300
})
const emit = defineEmits(['update:visible'])
const leftPopupRef = ref()

const handleShowLeftChange = flag => {
	const fn = flag ? 'open' : 'close'
	console.log(flag);
	leftPopupRef.value?.[fn]();
}

console.log(props);

watch(() => props.visible, handleShowLeftChange)

const handleShowLeftChangeClick = (flag) => {
	emit('update:visible', flag)
}

const attrs = useAttrs()
</script>

<template>
	<uni-popup class="popup" :width="width" @click="handleShowLeftChangeClick(false)" v-bind="attrs" ref="leftPopupRef" type="left">
		<view class="wd-float-right" @click="handleShowLeftChangeClick(false)"><uni-icons type="close" size="30"></uni-icons></view>
		<slot />
	</uni-popup>
</template>

<style></style>
