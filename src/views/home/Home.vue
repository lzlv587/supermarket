<template>
    <div id="home">
        <nav-bar>
            <div slot="center">首页</div>
        </nav-bar>
        <scroll class="scroll" ref="scroll">
            <carousel :banners="banners"/>
            <recommend :recommends="recommands"/>
            <weekpop/>
            <tabcontrol :titles="titles" @tabClick="tabClick"/>
            <goodlist :items="showgood"/>
            <h2>首页</h2>
            <ul>
                <li>测试用例1</li>
                <li>测试用例2</li>
                <li>测试用例3</li>
                <li>测试用例4</li>
                <li>测试用例5</li>
                <li>测试用例6</li>
                <li>测试用例7</li>
                <li>测试用例8</li>
                <li>测试用例9</li>
                <li>测试用例10</li>
                <li>测试用例11</li>
                <li>测试用例12</li>
                <li>测试用例13</li>
                <li>测试用例14</li>
                <li>测试用例15</li>
                <li>测试用例16</li>
                <li>测试用例17</li>
                <li>测试用例18</li>
                <li>测试用例19</li>
                <li>测试用例20</li>
                <li>测试用例21</li>
                <li>测试用例22</li>
                <li>测试用例23</li>
                <li>测试用例24</li>
                <li>测试用例25</li>
                <li>测试用例26</li>
                <li>测试用例27</li>
                <li>测试用例28</li>
                <li>测试用例29</li>
                <li>测试用例30</li>
                <li>测试用例31</li>
                <li>测试用例32</li>
                <li>测试用例33</li>
                <li>测试用例34</li>
                <li>测试用例35</li>
                <li>测试用例36</li>
                <li>测试用例37</li>
                <li>测试用例38</li>
                <li>测试用例39</li>
                <li>测试用例40</li>
                <li>测试用例41</li>
                <li>测试用例42</li>
                <li>测试用例43</li>
                <li>测试用例44</li>
                <li>测试用例45</li>
                <li>测试用例46</li>
                <li>测试用例47</li>
                <li>测试用例48</li>
                <li>测试用例49</li>
                <li>测试用例50</li>
                <li>测试用例51</li>
                <li>测试用例52</li>
                <li>测试用例53</li>
                <li>测试用例54</li>
                <li>测试用例55</li>
                <li>测试用例56</li>
                <li>测试用例57</li>
                <li>测试用例58</li>
                <li>测试用例59</li>
                <li>测试用例60</li>
                <li>测试用例61</li>
                <li>测试用例62</li>
                <li>测试用例63</li>
                <li>测试用例64</li>
                <li>测试用例65</li>
                <li>测试用例66</li>
                <li>测试用例67</li>
                <li>测试用例68</li>
                <li>测试用例69</li>
                <li>测试用例70</li>
                <li>测试用例71</li>
                <li>测试用例72</li>
                <li>测试用例73</li>
                <li>测试用例74</li>
                <li>测试用例75</li>
                <li>测试用例76</li>
                <li>测试用例77</li>
                <li>测试用例78</li>
                <li>测试用例79</li>
                <li>测试用例80</li>
                <li>测试用例81</li>
                <li>测试用例82</li>
                <li>测试用例83</li>
                <li>测试用例84</li>
                <li>测试用例85</li>
                <li>测试用例86</li>
                <li>测试用例87</li>
                <li>测试用例88</li>
                <li>测试用例89</li>
                <li>测试用例90</li>
                <li>测试用例91</li>
                <li>测试用例92</li>
                <li>测试用例93</li>
                <li>测试用例94</li>
                <li>测试用例95</li>
                <li>测试用例96</li>
                <li>测试用例97</li>
                <li>测试用例98</li>
                <li>测试用例99</li>
                <li>测试用例100</li>
            </ul>
        </scroll>
        <pushup @click.native="backtop()"/>
    </div>
</template>
<script>

import NavBar from 'components/common/navbar/NavBar'
//home的子组件
import carousel from './childComps/Carousel'
import recommend from './childComps/Recommend'
import weekpop from './childComps/WeekPop'
import {getHomeMutidata,getDanmu} from 'network/home'
import goodlist from 'components/content/goods/GoodList'

import tabcontrol from 'components/content/tabControl/TabControl'
import scroll from 'components/common/scroll/Scroll'
import pushup from 'components/common/pushup/pushup'
export default {
    name:'Home',
    components:{
        NavBar,
        carousel,
        recommend,
        weekpop,
        tabcontrol,
        goodlist,
        scroll,
        pushup
    },
    data(){
        return{
            banners:[],
            recommands:[],
            main_data:[
                {
                    danmu:{
                        page:2,
                        danmu_data:[]
                    }
                },
                {
                    danmu:{
                        page:4,
                        danmu_data:[]
                    }
                },
                {
                    danmu:{
                        page:4,
                        danmu_data:[]
                    }
                }
            ],
            titles:['流行','新款','古装'],
            currentType:0
        }
    },
    methods:{
        tabClick(index){
            this.currentType=index
        },
        backtop(){
            console.log("回到顶部")
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        }
    },
    computed:{
        showgood(){
            return this.main_data[this.currentType].danmu.danmu_data
        }
    },
    created(){
        /**
         * 数据网络请求
        */
        getHomeMutidata().then(res=>{
            this.banners=res.data.data.banner.list
            this.recommands=res.data.data.recommend.list
        }).catch(err=>{
            console.log(err)
        })
        getDanmu(this.main_data[0].danmu.page).then(res=>{
            console.log(res)
            this.main_data[0].danmu.danmu_data.push(...res.data)
        }).catch(err=>{
            console.log(err);
        })
        getDanmu(this.main_data[1].danmu.page).then(res=>{
            console.log(res)
            this.main_data[1].danmu.danmu_data.push(...res.data)
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
    /* #home{
        height: 100vh;
    } */
    .scroll{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left:0px;
        right:0px;
        overflow:hidden;
    }
    /* .scroll{
        overflow: hidden;

        height: calc(100% - 93px);
    } */
</style>

