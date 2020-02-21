<template>
  <div class="about">
    <!-- <p @click="getDom" ref="music">音乐播放</p> -->
    <img @click="change" :src="isPlay?require('@/assets/play.png'):require('@/assets/pause.png')" alt />
    <audio 

    :src="playUrl" controls ref="audio"></audio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playUrl:"https://music.163.com/song/media/outer/url?id=35625825",
      isPlay: false,
    };
  },
  methods: {
    change() {
      if(this.isPlay){
          this.$refs.audio.pause()
          this.isPlay=false
      }else{
          this.$refs.audio.play()
          this.isPlay=true
      }
    },
    onPlay(){
        this.isPlay=true
    },
    onPause(){
        this.isPlay=false
    },
    getDom(){
        console.log(this.$refs.music)
    }
  }
};
</script>
<style scoped>
audio{
    visibility: hidden
}
</style>
