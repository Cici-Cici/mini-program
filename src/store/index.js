
import { observable, action,makeObservable } from "mobx";

class CountStore {
    constructor(){
        makeObservable(this)
    }
    @observable a = 1;
    @observable list = [{id:0, gm_company_id: 1142, type: 3, name: "李酷"},
    {id:1,gm_company_id: 1144, type: 3, name: "现代"}];
    @observable total = {};
    @action  add  =   async () => {
        console.log('add');
    };
  }

  const countStore = new CountStore();
  export default countStore;
