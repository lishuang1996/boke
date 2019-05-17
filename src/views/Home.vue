<template>
  <div class="Home_Page">
    <div class="rock_bottom_bg">
      <img src="../assets/home/bg.jpg" alt="">
    </div>
    <div class="superstratum">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  created(){
    
  }
}
</script>
<style lang="scss" scoped>
.Home_Page{
  width: 100%;
}
.rock_bottom_bg{
  background-color: bisque;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  display: flex;
  justify-content:center;
}
.superstratum{
  height: 1200px;
  position: relative;
  top: 1000px;
  width: 100%;
  background-color: #fff;
}
</style>

