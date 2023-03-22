<script setup lang="ts">
import { withDefaults, watch, computed, ref, useAttrs } from 'vue';

interface Props {
	options?: Array<unknown>;
}
const props = withDefaults(defineProps<Props>(), {
	options: ['苹果', '华为', '小米']
});
const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();
const index = ref(0);
const innerValue = computed(() => {
	const rangeKey = attrs['range-key'];
	if (rangeKey) {
		return props.options[index.value][rangeKey];
	}
	return props.options[index.value];
});

const bindPickerChange = e => {
	index.value = e.detail.value;
};

watch(
	innerValue,
	val => {
		emit('update:modelValue', val);
		emit('change', props.options[index.value]);
	},
	{
		immediate: true
	}
);
</script>

<template>
	<picker class="wd-flex" @change="bindPickerChange" :value="index" :range="options" v-bind="attrs">
		<text class="uni-input">{{ innerValue }}</text>
		<slot></slot>
	</picker>
</template>

<style></style>
