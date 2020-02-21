<template>
  <div id="app">
    <div class="container">
      <div class="top">
        <span>全部新碟</span>
        <ul>
          <li><a href="">全部</a></li>
          <li>|</li>
          <li><a href="">华语</a></li>
          <li>|</li>
          <li><a href="">欧美</a></li>
          <li>|</li>
          <li><a href="">韩国</a></li>
          <li>|</li>
          <li><a href="">日本</a></li>
        </ul>
      </div>
      <div class="content">
        <div class="item" v-for="item of albums" :key="item.id">
          <img :src="item.picUrl" alt />
          <p class="name"><a href="">{{item.name.slice(0,10)+"..."}}</a></p>
          <p class="at"><a href="">{{item.artist.name.slice(0,6)+"..."}}</a></p>
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
      albums: []
    };
  },
  mounted() {
    var url = "https://music.aityp.com/top/album";
    axios.get(url).then(res => {
      this.albums = res.data.albums;
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
  width: 900px;
  padding: 40px;
  border: 1px solid #D3D3D3;
  margin-left: auto;
  margin-right: auto;
}
img {
  width: 130px;
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
ul {
  list-style: none;
  display: flex;
  font-size: 12px;
}
li{
  margin-right: 8px;
}
li a{
  color:#666
}
li:nth-child(2n + 2) {
  color: #999;
}
.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
}
.item{
  margin-right: 33px;
  margin-bottom: 30px
}
.name{
  font-size: 14px;
  margin:5px 0
}
.name a{
  color:#333
}
.at{
  font-size: 12px;
  margin:0;
}
.at a{
    color:#999
}
</style>