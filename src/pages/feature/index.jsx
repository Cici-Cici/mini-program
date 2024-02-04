import { Component } from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import styles from './index.scss'
import CalinTabs from 'parts/CalinTabs'
import { observer, inject } from "mobx-react"
class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            tabList: [
                { title: '功能列表' },
                { title: '新功能' },
            ]
        };
    }
    async onRefresh() {
        // console.log('onRefresh111');
        // console.log("this2",this);
        // this.fetchData()
    }
    componentWillMount() {
        const { featureStore } = this.props;
        // featureStore.fetchFeatureList();
    }
    handleClick = () => (e) => {
        console.log('handleClick');
        console.log(e);
        this.setState({
            currentIndex: e
        })
    }
    btnClick=()=>{
        Taro.switchTab({url:'/pages/component_page/index'})
    }
    onPullDownRefresh() {

    }
    render() {
        const { currentIndex, tabList } = this.state;
        const { featureStore: { hadFeatureList, noFeatureList, newFeatureList } } = this.props;
        console.log('currentIndex', currentIndex);
        return (
            <View>
                <CalinTabs
                    currentIndex={currentIndex}
                    tabList={tabList}
                    onClick={this.handleClick()}
                    onRefresh={this.onRefresh.bind(this)}
                >
                    <View className={styles['btn']} onClick={this.btnClick}>
                            简谱转五线谱
                    </View>


                    {/* <CalinTabsBlock current={currentIndex} index={0}>
                        null1
                        null1
                        null1
                    </CalinTabsBlock>
                    <CalinTabsBlock current={currentIndex} index={1}>
                        null1
                        null1
                        null1
                    </CalinTabsBlock> */}
                </CalinTabs>
            </View >
        );

    }
}
export default inject((stores) => ({
    featureStore: stores.store.featureStore,
}))(observer(Feature))