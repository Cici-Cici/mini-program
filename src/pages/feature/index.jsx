import { Component } from 'react'
import { View, Button,ScrollView } from '@tarojs/components'
import './index.scss'
import { observer, inject } from "mobx-react"
class Feature extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('11');
        console.log(this.props);
    }
    onPullDownRefresh() {
        console.log('onPullDownRefresh');
    }
    render() {
        return (
            <View className='index'>
                <ScrollView
                    scrollY
                    style={{ height: `1200px` }}
                    // refresherTriggered={isRefresh}
                    enablePassive
                    scrollWithAnimation
                    refresherEnabled
                    refresherBackground='#f4f5f6'
                    refresherThreshold={100}
                    // onRefresherRefresh={this.handleRefresh}
                >
                    ddddd

             </ScrollView>

            </View>
        )
    }
}
export default inject((stores) => ({
    featureStore: stores.store.featureStore,
}))(observer(Feature))