import Taro from '@tarojs/taro';
import { makeAutoObservable } from 'mobx';
import {getFeatureList} from 'services/api';

class featureStore {

  constructor() {
    makeAutoObservable(this)
  }
  hadFeatureList=['moren'];
  noFeatureList=['22'];
  newFeatureList=['33'];


  *fetchFeatureList() {
    const res = yield getFeatureList();
    this.hadFeatureList =res.hadFeatureList;
    this.noFeatureList =res.noFeatureList;
    this.newFeatureList =res.newFeatureList;
  };

}

export default new featureStore()
