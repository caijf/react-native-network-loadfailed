# react-native-network-loadfailed

加载失败

### Getting started

安装 `react-native-network-loadfailed`

	npm install react-native-network-loadfailed --save

使用

	// ...
	
	import LoadFailed from 'react-native-network-loadfailed';
	
	export default class LoadFailedExample extends Component{
		render(){
			return (
				<LoadFailed
					onPressButton={()=>{alert('callback')}}
				/>
			)
		}
	}


### API
- **onPressButton** - (Function) - 点击按钮回调
- **text** - (Number) - 提示文本，默认 "网络不给力，请再试试吧。"
- **buttonText** - (Number) - 按钮文本，默认 "重试"
- **source** - (Object, Image) - 默认 "游游哭"
- **style** - (Object, Array) - 外层样式
