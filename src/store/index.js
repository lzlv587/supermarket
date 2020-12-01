import Vue from 'vue' 
import Vuex from 'vuex'
//Vue.use
Vue.use(Vuex)
import {
    ADDPERSON
} from './mutations_type'
//创建对象
const store=new Vuex.Store({
    state:{
        ScrollHight:0
    },
    mutations:{
        [ADDPERSON](state,person){
            state.person.push(person);
        }
    },
    getters:{
        get20more(state){
            return state.person.filter(p=>p.age>20)
        }
    },
    actions:{
        // aupdatePerson(context,payload){
        //     setTimeout(() => {
        //         context.commit("updatePerson");
        //         console.log(payload.message);
        //         payload.success();
        //     }, 1000);
        // }
        aupdatePerson(context,payload){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    context.commit('updatePerson')
                    console.log(payload);
                    resolve("promise中传递数据")
                }, 1000);
            })
        }
    },
    modules:{
        a:{
            name:"kobe"
        }
    }
})
//导出
export default store