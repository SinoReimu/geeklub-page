<template>
  <div class="container">
    <div class="title">GeeKlub</div>
    <div class="slogan">Talk is cheap, show me the code.</div>
    <div class="content">
      <div class="left">History</div>
      <div class="right">
        <b>2015年Hackathon黑客马拉松：</b>
        <a href="https://www.bilibili.com/video/av2350570/">宣传视频</a>
        <a href="https://segmentfault.com/a/1190000002800488">文字记录</a></br>
        <b>2016年Hackathon黑客马拉松：</b>
        <a href="https://www.bilibili.com/video/av4077719/">宣传视频1</a>
        <a href="https://www.bilibili.com/video/av4219763/">宣传视频2</a></br>
        <a href="https://www.zhihu.com/question/20621242/answer/95670001">文字记录</a></br></br>
        <a href="https://m.weibo.cn/5596258589/3839670385447989">2015年的Geekraft mc服务器</a></br>
        <a href="https://m.weibo.cn/5596258589/3841098756010877">2015年和通信学院合作的学子交流会</a></br>
        <a href="https://m.weibo.cn/5596258589/3911211101902180">2016年的第一次分享会</a></br>
        <a href="https://m.weibo.cn/5596258589/3919735126890781">2016年和Geek Coffee合作的技术沙龙</a></br>
        <a href="https://m.weibo.cn/5596258589/3919735126890781">每年都会有的社服</a></br>
        <a href="https://m.weibo.cn/5596258589/4038839384723224">2017年的第一次分享会</a></br>
        <a href="https://m.weibo.cn/5596258589/4053956440731662">2017年的软件嘉年华</a></br>
        <a href="https://m.weibo.cn/5596258589/4097181235718857">2017年的技术沙龙</a>
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
    overflow: scroll;
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
    overflow: scroll;
  }
  a:hover {
    text-decoration: none;
    color: #333333;
  }
  a {
    color: lightslategrey;
  }
</style>
