import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
    
    history:createWebHistory(),
    routes:[
        {
            name:'zhuye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News,
            children: [
                {
                    // 第一种写法：将路由收到的所有params参数作为props传给路由
                    // name:'xiangqing',
                    // path:'detail',
                    // component: Detail,
                    // props:true

                    // 第二种：函数式
                    name:'xiangqing',
                    path:'detail',
                    component: Detail,
                    props(router) {
                        return router.query
                    }
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router