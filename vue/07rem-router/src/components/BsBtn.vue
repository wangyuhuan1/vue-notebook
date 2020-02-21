<template>
  <div>
      <button class="btn">默认按钮</button>
      <slot name="header"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.btn{
    width:100px;
    height:35px;
    background: red
}
</style>