<template>
  <div id="app">
    <div class="container">
      <div class="top">
        <span class="pro">推荐节目</span>
        <span class="new">(每日更新)</span>
      </div>
      <div class="item" v-for="item of programs" :key="item">
        <a href>
          <img :src="item.coverUrl" alt />
        </a>
        <a class="name" href>{{item.mainSong.name}}</a>
        <a href class="radio">{{item.radio.name}}</a>
        <span class="play">播放{{item.listenerCount}}</span>
        <span class="like">赞{{item.likedCount}}</span>
        <a href class="type">{{item.radio.category}}</a>
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
      programs: []
    };
  },
  mounted() {
    var url = "https://music.aityp.com/program/recommend?limit=50";
    axios.get(url).then(res => {
      this.programs = res.data.programs;
    });
  }
};
</script>
<style scoped>
img {
  width: 40px;
  margin-right: 10px;
}
a {
  text-decoration: none;
}
.container {
  width: 900px;
  padding: 40px;
  border: 1px solid #d3d3d3;
  margin-left: auto;
  margin-right: auto;
}
.item {
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
  box-sizing: border-box;
}
.item:hover {
  background: #eee;
}
.item:nth-of-type(2) {
  border-top: 2px solid #C20C0C;
}
.item:nth-last-child(1) {
  border-bottom: 1px solid #d3d3d3;
}
.name {
  width: 304px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
  color: #333;
}
a:hover {
  text-decoration: underline;
}
.radio {
  width: 166px;
  margin-left: 10px;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.play {
  width: 90px;
}
.like {
  width: 126px;
}
span {
  color: #999;
  margin-left: 10px;
}
.type {
  border: 1px solid #999;
  color: #999;
  padding: 0 5px;
}
.type:hover {
  color: #666666;
  text-decoration: none;
  border: 1px solid #666;
}
.top{
  margin-bottom: 10px;
}
.pro{
  font-size: 24px;
  color:#000
}
.new{
  font-size: 12px
}
</style>