import Taro from '@tarojs/taro';
import { makeAutoObservable } from 'mobx';
// import {requestSubscribeLists} from '../../services/api';
// import { showLoading, hideLoading } from 'tools/toast'

class featureStore {

  constructor() {
    makeAutoObservable(this)
  }
  *fetchSubscribeLists() {
    // const { result } = yield requestSubscribeLists();
    this.subscribeList =result.subscribeList;
    this.invitingList =result.invitingList;
    this.rejectList =result.rejectList;
    // Taro.stopPullDownRefresh()
  };

}

export default new featureStore()
