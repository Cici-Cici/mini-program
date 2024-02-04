import { Component } from 'react'
import {keyboardData,maxLineNum,} from './data'
import { View, CoverImage,Text } from '@tarojs/components'
import styles from './index.scss';
export default class componentPage extends Component {
    constructor() {
        super();
        this.state = {
            heightStave: [],
            lowStave: [],
            staveCurrentNum: 0,
            staveNumList: []
        }
    }
    handleClick(itemIndex,index){
        console.log('1111');
        const note=keyboardData[itemIndex][index];
        //点击后改变两个数组
        let heightStave = this.state.heightStave;
        let lowStave = this.state.lowStave;
        if(note.position==='height'){
            heightStave.push({ Element: note.Element, top: note.top });
            lowStave.push({});
        }else{
            heightStave.push({});
            lowStave.push({ Element: note.Element, top: note.top });
        }
        this.setState({ heightStave, lowStave }, this.changeNum(lowStave.length))
    };
    deleteClick(type){
        if(type==='all'){
           const heightStave= [];
           const lowStave=[];
           const staveCurrentNum= 0;
           const staveNumList=[];
            this.setState({ heightStave, lowStave,staveCurrentNum,staveNumList})
        }else{
            let heightStave = this.state.heightStave;
            let lowStave = this.state.lowStave;
            heightStave.pop();
            lowStave.pop();
            this.setState({heightStave,lowStave},this.changeNum(lowStave.length));
        }
    };
    changeNum(num) {
        //改变组个数
        const {staveCurrentNum}=this.state;
        let staveNumList=this.state.staveNumList;
        if (Math.ceil(num / maxLineNum) > staveCurrentNum) {
            //情况1，加{ start: 0, end: ？ }；
            staveNumList.push({start: staveCurrentNum*maxLineNum, end: (staveCurrentNum+1)*maxLineNum })
            this.setState({staveCurrentNum:staveCurrentNum+1,staveNumList})
        } else if (Math.ceil(num / maxLineNum) < staveCurrentNum) {
            //情况2，减最后一个{ start: 。, end: 。 }
            staveNumList.pop();
            this.setState({staveCurrentNum:staveCurrentNum-1,staveNumList})
        } else if (Math.ceil(num / maxLineNum) === staveCurrentNum) {
            //在同一阶层
            console.log('===');
        }


    }
    render() {
        const imgWidth = '30px';
        const { heightStave, lowStave, staveNumList } = this.state;
        const getKeyStyle=(lineIndex)=>{
            if(lineIndex===0)return 'keyboard-line-top'
            else if(lineIndex===1)return 'keyboard-line-center'
            else if(lineIndex===2)return 'keyboard-line-bottom'
        };
        return <View className={styles['transform']}>
            {
                staveNumList.map((numberItem, index) => {
                    return <View className={styles['stave']} key={index}>
                        <View className={styles['stave-height']}>
                            {
                                heightStave.slice(numberItem.start, numberItem.end).map((item, index) => {
                                    return item.Element ?  <View className={styles['img-box']}  key={index}><CoverImage src={item.Element} key={index} className={styles['stave-img']} style={{ marginTop: `${item.top}px`, }}></CoverImage> </View> :
                                        <View style={{ width: `${imgWidth}` }} key={index}></View>
                                })
                            }
                        </View>
                        <View className={styles['stave-low']}>
                            {
                                lowStave.slice(numberItem.start, numberItem.end).map((item, index) => {
                                    return item.Element ? <View className={styles['img-box']}  key={index}><CoverImage src={item.Element} className={styles['stave-img']} style={{ marginTop: `${item.top}px`, }}></CoverImage></View> :
                                        <View style={{ width: `${imgWidth}` }} key={index}></View>
                                })
                            }
                        </View>
                    </View>
                })
            }

            <View className={styles['keyboard']}>
            <Text className={styles['delete']} onClick={()=>{this.deleteClick('')}}>删除</Text>
            <Text className={styles['clear']} onClick={()=>{this.deleteClick('all')}}>清空</Text>
            <Text className={styles['download']}>下载</Text>
                {keyboardData.map((lineItem, indexItem) => {
                    return <View className={styles['keyboard-line']} key={indexItem}>
                        {lineItem.map((item, index) => {
                            return <View className={styles[getKeyStyle(indexItem)]} key={index} onClick={()=>{this.handleClick(indexItem,index)}}>
                                {item.keyboardNum}
                            </View>
                        })}
                    </View>
                })}
            </View>
            <View className={styles['box']}></View>
        </View>;

    }
}
