import { Component } from 'react'
import { View,} from '@tarojs/components'
import './index.scss'
import Header from '../component/header/header.jsx'
import Body from '../component/body/body.jsx'
import{requestList}from '../services/api'

export default class Show1 extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('11');
        requestList();
    }
    render() {
        return (
            <View className='index'>
                <Header list={['sdd成熟的彩', 'fvfsdd', 'dede', 'zss']} />
                <Body sourceData={{ text1: 'text1', text2: 'text22发',
                 line2: 'line2fa爽肤水',
                 list: [12131231431231, '的发', 'dafrna', 'as的'] }} />
            </View>
        )
    }
}
