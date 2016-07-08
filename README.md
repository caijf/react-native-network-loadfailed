# react-native-network-loadfailed

加载失败

### Getting started

安装

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
- **text** - (String) - 提示文本，默认 "网络不给力，请再试试吧。"
- **buttonText** - (String) - 按钮文本，默认 "重试"
- **source** - (Object, Image) - 默认 "游游哭图片"
- **top** - (Number) - 距离顶部位置
