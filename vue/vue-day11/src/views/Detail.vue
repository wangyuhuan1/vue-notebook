<template>
  <div>
    Detail
    <img :src="imgUrl" alt />
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      imgUrl: ""
    };
  },
  mounted() {
    console.log(this.$route.params);
    console.log("发送detail-http");
    var id = this.$route.params.id;
    var url = "http://192.168.14.49:5000/playlist/detail?id=" + id;
    this.axios.get(url).then(res => {
      this.imgUrl = res.data.playlist.creator.avatarUrl;
    });
  },
  // activated() {
  //   var id = this.$route.params.id;
  //   var url = "http://192.168.14.49:5000/playlist/detail?id=" + id;
  //   this.axios.get(url).then(res => {
  //     this.imgUrl = res.data.playlist.creator.avatarUrl;
  //   });
  // }
};
</script>

<style scoped>
</style>