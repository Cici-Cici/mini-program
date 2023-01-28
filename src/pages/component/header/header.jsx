import * as React from 'react'
import { View, Text, } from '@tarojs/components'
import './header.scss';
class Header extends React.Component {
    render() {
        // console.log(style);
        return <View className='header-list'>
            {this.props.list.map((item, index) =>
                <Text className='text' key={index}>{item}</Text>)}
        </View>
    }
}
export default Header;