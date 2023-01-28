import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import * as api from '../services/api'
import { Provider } from "mobx-react"
import store from "../../store"
import Show1 from "../show1"
import { action } from "mobx";
// import { observable, action, computed } from "mobx"; 
export default class Index extends Component {

    componentWillMount() {

    }


    render() {
        return (
            <Provider store={store}>
                <View className='index'>
                    <Show1 />
                </View>
            </Provider>
        )
    }
}
