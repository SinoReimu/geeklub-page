<template>
  <div id="app">
    <router-view></router-view>
    <el-row class="footer">
      <el-col :span="6" :offset="9">
        <p>
          Made by  ❤  <a href="https://fogdong.github.io/">FogDong</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,sans-serif;
    width: 100%;
    height: 100%;
    background-image: url("./assets/todobg.jpg");
    position: absolute;
    background-size: 100%;
    padding: 0;
  }
  #app {
    height: 100%;
  }
  .footer {
    background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 100%);
    text-align: center;
    color: #888;
    padding: 10px;
  }
  a {
    text-decoration: none;
    color: #888;
  }
  @media only screen and (max-width: 1000px) {
    body {
      background-position-x: 50%;
    }
  }
</style>

