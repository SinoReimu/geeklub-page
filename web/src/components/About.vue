<template>
  <div class="container">
    <div class="title">GeeKlub</div>
    <div class="slogan">Talk is cheap, show me the code.</div>
    <div class="content">
      <div class="left">About</div>
      <div class="right">
        GeeKlub 是杭电计算机学院下独立技术型社团，</br>
        由初代部长 Jury Xiong 创立。</br>
        是一个分享自己所学，与他人分享交流的平台。</br>
        我们会组织参加外部举办的各种互联网大会和比赛，以此丰富自我知识以及提升自我的技术水平，</br>
        并希望能通过社团活动来提升大家的核心竞争力。</br></br>

        我们的 <a href="https://github.com/Gklub">Github</a></br>
        我们的 <a href="">Coding</a>
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
  a:hover {
    text-decoration: none;
    color: #333333;
  }
  a {
    color: lightslategrey;
  }
</style>
