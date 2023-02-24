import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, ScrollView } from '@tarojs/components'
import classnames from 'classnames/bind';
import styles from './CalinTabs.scss';

const cx = classnames.bind(styles);

class CalinTabs extends Component {
  static defaultProps = {
    className: '',
    currentIndex: 0,
    tabList: [],
    onClick: () => { },
    onRefresh: () => { },
  }
  constructor() {
    super(...arguments)
    this.state = {
      isRefresh: false,
      extraHeight:38,
    }
  }

  handleRefresh = async () => {
    this.setState(
      {
        isRefresh: true,
      },
    )
    await this.props.onRefresh()
    var that = this;
    setTimeout(function () {
      that.setState({
        isRefresh: false,
      })
    }, 1000);
  }
  handleToLower = async () => {
    if(this.props.onToLower)
    await this.props.onToLower()
  }

  handleClick() {
    this.props.onClick(...arguments)
  }
  render() {
    const {
      tabList,
      currentIndex
    } = this.props
    const {
      isRefresh,
      extraHeight
    } = this.state

    const windowHeight = Taro.getSystemInfoSync().windowHeight
    const contentHeight = windowHeight-extraHeight
    const tabItems = tabList.map((item, idx) => {
      const itemCls = cx(
        styles['calin__item'],
        { [styles['calin__item--active']]: currentIndex === idx }
      )
      return <View
        className={itemCls}
        id={`tab${idx}`}
        key={item.title}
        onClick={this.handleClick.bind(this, idx)}
      >
        {item.title}
        <View className={styles['calin__item-underline']}></View>
      </View>
    })

    return (
      <View
      >
        <View
          className={styles['calin__header']}
        >
          <View className={styles['calin__header_fixed']} >
            {tabItems}
          </View>
        </View>
        {/* 上面是头部 */}
        {/* 下面是具体内容 */}
        <View >
            <ScrollView
              style={{ height: `${contentHeight}px` }}
              scrollY
              refresherTriggered={isRefresh}
              enablePassive
              scrollTop={0}
              scrollWithAnimation
              refresherEnabled
              refresherBackground='#f4f5f6'
              onRefresherRefresh={this.handleRefresh}
              onScrollToLower={this.handleToLower}
            >
                <View>
                  {this.props.children}
                </View>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default CalinTabs