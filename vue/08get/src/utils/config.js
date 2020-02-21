import Vue from 'vue';
import 'lib-flexible/flexible'
import BsBtn from '@/components/BsBtn.vue'
import axios from 'axios'
Vue.filter("format",function(val){
  if(val.length>6){
    val=val.slice(0,6)+"..."
  }
  return val
})
Vue.prototype.axios=axios
Vue.component('BsBtn',BsBtn)
export default Vue
