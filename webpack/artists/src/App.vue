<template>
  <div id="app">
    <div class="container">
      <div class="top">
        <span>全部新碟</span>
      </div>
      <div class="content">
        <div class="item" v-for="item of artists" :key="item.id">
          <a href=""><img :src="item.picUrl" alt /></a>
          <p class="name"><a href="">{{item.name}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      artists: []
    };
  },
  mounted() {
    var url = "https://music.aityp.com/top/artists";
    axios.get(url).then(res => {
      this.artists = res.data.artists;
    });
  }
};
</script>
<style scoped>
a{
  text-decoration: none
}
a:hover{
  text-decoration: underline
}
.container {
  width: 720px;
  padding: 40px;
  border: 1px solid #D3D3D3;
  margin-left: auto;
  margin-right: auto;
}
img {
  width: 130px;
  height:130px
}
.top {
  display: flex;
  color: #333;
  border-bottom: 2px solid #c20c0c;
  margin-bottom: 20px;
}
.top span {
  font-size: 24px;
}
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.item{
  margin-bottom: 10px
}
.name{
  font-size: 14px;
  margin:5px 0
}
.name a{
  color:#333
}
</style>