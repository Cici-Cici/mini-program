import { Component } from 'react'
import { View, Button, ScrollView, Navigator } from '@tarojs/components'
import styles from './index.scss'
import CalinTabs from 'parts/CalinTabs'
import CalinTabsBlock from 'parts/CalinTabsBlock'
import { observer, inject } from "mobx-react"
class Feature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            tabList: [
                // { title: '已使用' },
                // { title: '未使用' },
                // { title: '新功能' },
                { title: '1' },
                { title: '2' },
                // { title: '3' },
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
        featureStore.fetchFeatureList();
    }
    handleClick = () => (e) => {
        console.log('handleClick');
        console.log(e);
        this.setState({
            currentIndex: e
        })
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
                     看看
                        来了
                        来了
                    <Navigator
                        url={'/pages/mini_features/notation_transform/index'}
                    >
                        简谱转五线谱
                    </Navigator>

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