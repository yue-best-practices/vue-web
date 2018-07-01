/**
 * Created by yuanjianxin on 2018/7/1.
 */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  methods:{
    eventTest(){
      this.$listener.$emit('eventTest','This is event test.');
    }
  }
}
