<template>
  <div id="app">
    <div class="title">
      <div class="left">
        <span>华语</span>
        <a href>选择分类</a>
      </div>
      <div class="right">
        <a href>热门</a>
      </div>
    </div>
    <div class="container">
      <div class="item" v-for="item of musics" :key="item.id">
        <img :src="item.coverImgUrl" alt />
        <a href>
          <p>{{item.name.slice(0,10)+"..."}}</p>
        </a>
        <p class="nick">
          <span class="by">by</span>
          <a href>{{item.creator.nickname.slice(0,10)+"..."}}</a>
        </p>
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
      musics: []
    };
  },
  mounted() {
    var url = "https://music.aityp.com/top/playlist?cat=华语";
    axios.get(url).then(res => {
      this.musics = res.data.playlists;
    });
  }
};
</script>
<style scoped>
*{margin: 0;padding: 0;}
img {
  width: 140px;
  border: 1px solid #999;
  box-sizing: border-box;
}
#app {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  border: 1px solid #d3d3d3;
}
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 13px;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
.item {
  margin-right: 20px;
  margin-bottom: 30px;
}
.item
.nick {
  font-size: 12px;
  color: #999;
}
.nick a {
  margin-left: 5px;
  color: #666;
}
.title {
  height:40px;
  width:870px;
  margin-bottom: 30px;
  border-bottom: 2px solid #C20C0C;
  display: flex;
  justify-content: space-between
}
.left{
    font-size: 20px;
    display: flex
}
.left a{
    display: inline-block;
    width:84px;
    height:30px;
    font-size: 14px;
    border:1px solid #C3C3C3;
    color:#0C73C2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 10px
}
.left a:hover{
    text-decoration: none
}
.right a{
    display: inline-block;
    width:46px;
    height:29px;
    background: #C60C0C;
    color:#fff;
    border-radius: 5px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>