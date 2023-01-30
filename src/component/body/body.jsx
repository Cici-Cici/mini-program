import * as React from 'react'
import { View, Text, } from '@tarojs/components'
import './body.scss'
class Body extends React.Component {
    render() {
        console.log('1');
        console.log(this.props.sourceData);
        return <view className="body-view">
            <view className="line1">
                <Text className="body-text">{this.props.sourceData.text1}</Text>
                <Text className="body-text">{this.props.sourceData.text2}</Text>
            </view>
            <view className="line2">
                <Text className="body-text">{this.props.sourceData.line2}</Text>
            </view>
            <View className="body-list">
                {this.props.sourceData.list.map((item, index) =>
                    <Text className="body-text" key={index}>{item}</Text>)}
            </View>
        </view>
    }
}
export default Body;