<template>
  <div class="home">
    <input type="text" v-model="keyword" @keyup.enter="handleEnter" />
    <p v-for="value of arr" :key="value">
    {{value}}
      </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      keyword: "",
      arr: []
    };
  },
  methods: {
    handleEnter() {
      this.arr.push(this.keyword);
      var words = JSON.parse(localStorage.getItem("words")); //2.获取mounted里面的空数组
      // console.log(typeof(words))  缓存为字符串，获取时解析
      words.push(this.keyword); //数组push
      localStorage.setItem("words", JSON.stringify(words)); //缓存要转换成字符串设置
    }
  },
  mounted() {
    let words =localStorage.getItem("words");  //获取缓存
    if (words) {                   //存在缓存
      this.arr=JSON.parse(words)  //更新arr
    } else {
      localStorage.setItem("words", "[]"); //1.要一个空数组
    }
  }
};
</script>
