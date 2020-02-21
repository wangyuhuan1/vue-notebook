<template>
  <div class="container">
    <!-- <img :src="playlist.coverImgUrl" alt="">
    <p>{{playlist.name}}</p>-->
    <div class="top">
      <i class="iconfont" @click="toggle">&#xe607;</i>
      详情
    </div>
    <div v-for="value of playlist.tracks" :key="value.id">
      <img :src="value.al.picUrl" alt="">
      <p>{{value.name}}</p>
      <p>{{Math.floor(value.dt/60000)+':'+(value.dt%60000)}}</p>
      <p>{{value.ar[0].name}}</p>
      <p>{{value.al.name}}</p>
    </div>
    <!-- <button @click="toggle">跳转回列表页</button> -->
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      playlist: []
    };
  },
  mounted() {
    // var id=this.$route.query.id
    this.axios.get(`https://music.aityp.com/playlist/detail?id=${this.id}`)
      .then(res => {
        this.playlist = res.data.playlist;
      });
  },
  methods: {
    toggle() {
      this.$router.back();
    }
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  }
};
</script>

<style scoped>
.container {
  width: 10rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  /* border: 1px solid #333; */
  margin-left: auto;
  margin-right: auto;
}
.top {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #c20c0c;
  text-align: center;
  color: #fff;
  font-size: 22px;
  position: relative;
}
i {
  position: absolute;
  left: 20px;
}
i:hover {
  cursor: pointer;
}
</style>