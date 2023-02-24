import { Component } from 'react'
import { View } from '@tarojs/components';
import classnames from 'classnames/bind';
import styles from './CalinTabs.scss';

const cx = classnames.bind(styles);

 class CalinTabsBlock extends Component {
  static defaultProps = {
    className: '',
    index: 0,
    current: 0,
  }
  render() {
    const {
      className,
      index,
      current,
    } = this.props
    return (
      <View
        className={cx([
          {
            [styles['calin-pane']]: true,
            [styles['calin-pane--active']]: index === current,
            [styles['calin-pane--inactive']]: index !== current
          }, className
        ])}
      >
        {this.props.children}
      </View>
    )
  }
}
export default CalinTabsBlock
