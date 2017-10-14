<template>
  <div class="container">
    <div class="title">GeeKlub</div>
    <div class="slogan">Talk is cheap, show me the code.</div>
    <div class="content">
      <div class="category about"><router-link to="/about">关于我们</router-link></div>
      <div class="category event"><router-link to="/event">未来活动</router-link></div>
      <div class="category history"><router-link to="/history">往期活动</router-link></div>
      <div class="category members"><router-link to="/members">社团成员</router-link></div>
      <div class="category contact"><router-link to="/contact">加入我们</router-link></div>
    </div>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    data() {
      return {

      }
    },
    methods: {
      about() {
      }
    }
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
    font-size: 1.2em;
    margin: 0 auto;
    width: 60%;
    letter-spacing: 0.5em;
    padding: 0 2em;
    border-radius: 0.3em;
    position: relative;
    top: -5%;
  }
  .content {
    background-color: #333333;
    height: 60%;
    width: 70%;
    margin: 0 auto;
    border-radius: 1em;
    box-shadow: 0.5em 0.4em 3em gray;
    margin-top: 1em;
    position: relative;
    top: -3%;
  }
  .category {
    height: 100%;
    width: 20%;
    float: left;
    color: #333333;
    font-size: 2em;
    writing-mode: vertical-lr;
    letter-spacing: 1em;
    text-align: center;
    text-indent: 1em;
    vertical-align:middle;
    padding-left: 1.7em;
    font-family: pingfang;
  }
  .category:hover > a {
    color: white;
  }
  .about {
    background-color: #f7f7f7;
    border-radius: 0.4em 0 0 0.4em;
    transition: 0.7s;
  }
  .about:hover {
    background-color: #333333;
    color: #f7f7f7;
  }
  .event {
    background-color: #f3f3f3;
    transition: 0.7s;
  }
  .event:hover {
    background-color: #333333;
    color: #f3f3f3;
  }
  .history {
    background-color: #efefef;
    transition: 0.7s;
  }
  .history:hover {
    background-color: #333333;
    color: #efefef;
  }
  .members {
    background-color: #ebebeb;
    transition: 0.7s;
  }
  .members:hover {
    background-color: #333333;
    color: #ebebeb;
  }
  .contact {
    background-color: #e7e7e7;
    border-radius: 0 0.4em 0.4em 0;
    transition: 0.7s;
  }
  .contact:hover {
    background-color: #333333;
    color: #e7e7e7;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
</style>
