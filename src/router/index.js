import Vue from 'vue'
import Router from 'vue-router'
import Navi from '@/components/Navi/Navi'
import HelloWorld from '@/components/HelloWorld'
import HelloVue from '@/components/HelloVue'
import HelloElement from '@/components/HelloElement'

Vue.use(Router);

const router = new Router({
  routes: [
   /* {
      path: '/',
      name:'Navi',
      component: Navi
    }*/
    {
      path: '/',
      name:'HelloWorld',
      component: HelloWorld
    },{
      path:'/',
      name:'HelloVue',
      component: HelloVue
    },{
      path:'/',
      name:'HelloElement',
      component: HelloElement
    }
  ]
});
export default router;
