export default {
	directionStr: '垂直',
	horizontal: 'right',
	vertical: 'bottom',
	direction: 'horizontal',
	pattern: {
		color: '#7A7E83',
		backgroundColor: '#fff',
		selectedColor: '#007AFF',
		buttonColor: '#007AFF',
		iconColor: '#fff'
	},
	is_color_type: false,
	content: [
		{
			iconPath: '/static/imgs/common/order.png',
			selectedIconPath: '/static/imgs/common/order-active.png',
			text: '保存',
			active: false
		},
		{
			iconPath: '/static/imgs/common/search.png',
			selectedIconPath: '/static/imgs/common/search-active.png',
			text: '查看结果',
			active: true
		},
		{
			iconPath: '/static/imgs/common/star.png',
			selectedIconPath: '/static/imgs/common/star-active.png',
			text: '收藏',
			active: false
		}
	]
};
