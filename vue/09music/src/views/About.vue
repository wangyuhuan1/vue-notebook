<template>
  <div class="about">
    <fade>
      <h1 slot="fade" v-show="isShow">This is an about page</h1>
    </fade>
    <img @click="Change" :src="isPlay?require('@/assets/play.png'):require('@/assets/pause.png')" alt />
  </div>
</template>
<script>
import Fade from "../components/Fade";
export default {
  data() {
    return {
      isShow: true,
      isPlay: false
    };
  },
  components: {
    Fade
  },
  methods: {
    Change() {
      this.isPlay=!this.isPlay
      console.log(this.isPlay);
    }
  }
};
</script>
