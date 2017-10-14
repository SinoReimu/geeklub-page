<template>
  <div class="container">
    <div class="title">GeeKlub</div>
    <div class="slogan">Talk is cheap, show me the code.</div>
    <div class="content">
      <div class="left">Contact</div>
      <div class="right">
        Contact
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .container {
    height: 100%;
    padding: 0;
  }
  @font-face {
    font-family: pingfang;
    src: url("../assets/pingfang.ttf");
  }
  .title {
    color: #333333;
    font-family: pingfang;
    font-size: 8em;
    text-align: center;
    letter-spacing: 0.05em;
  }
  .slogan {
    color: white;
    font-family: pingfang;
    text-align: center;
    background-color: #333333;
    position: absolute;
    font-size: 1.2em;
    top: 26%;
    left: 50%;
    width: 55%;
    letter-spacing: 0.5em;
    padding: 0 2em;
    border-radius: 0.3em;
    transform: translateX(-50%);
  }
  .content {
    background-color: #f7f7f7;
    height: 60%;
    width: 70%;
    margin: 0 auto;
    border-radius: 1em;
    box-shadow: 0.5em 0.4em 3em gray;
    margin-top: 1em;
  }
  .left {
    background-color: #333333;
    width: 15%;
    height: 100%;
    border-radius: 0.2em 0 0 0.2em;
    font-size: 4em;
    letter-spacing: 0.1em;
    padding-top: 0.2em;
    writing-mode: vertical-lr;
    color: #f7f7f7;
    font-family: pingfang;
    float: left;
  }
  .right {
    font-family: pingfang;
    font-size: 1.5em;
    color: #333333;
    padding-top: 0.5em;
    width: 85%;
    float: right;
    padding-left: 0.5em;
  }
</style>
