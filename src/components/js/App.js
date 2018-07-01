/**
 * Created by yuanjianxin on 2018/7/1.
 */
export default {
  name: 'App',

  mounted(){
    this.$listener.$on('eventTest',data=>{
      alert(data);
    });


    this.$listener.$on('createWS',async ()=>{
      console.log('====create WS start====');
      let res=await this.$networkHandler.sendRequest('GET_WS_INFO',{},{'Authorization':'Bearer '+this.$store.getters.authKey});
      console.log('====createWS',res);

      let wsConfig={
        url:res.data,
        token:this.$store.getters.authKey,
        onMsgFunc:(data)=>{
          this.$listener.$emit('aaa',data)
        },
        heartBeatCommand:'PING',
        heartCheckTimeout:20000,
        reconnectTime:5000
      };

      this.$wsHandler.createWebSocket(wsConfig);
    })


  },
}
