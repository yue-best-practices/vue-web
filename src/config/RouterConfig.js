/**
 * Created by yuanjianxin on 2018/8/17.
 */
import HelloWorld from '@/components/HelloWorld'

export const routes=[];

routes.push({ path: '/', name: 'HelloWorld', component: HelloWorld });




export const routers=routes.map(v=>v.path);

