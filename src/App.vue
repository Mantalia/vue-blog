<template>
  <div class="main">
    <aside class="aside">
      <div class="logo">Lakes</div>
      <ul class="nav text-c">
        <li v-for="nav of navArr">
          <router-link :to="{ name: nav.name }">
            {{ nav.text }}
          </router-link>
        </li>
      </ul>
    </aside>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      navArr: state => state.app.navArr
    })
  }
}
</script>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    background: whitesmoke;
  }
  .main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .aside {
    padding-top: 60px;
    padding-bottom: 40px;
    width: 20%;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    overflow-y: scroll;
    z-index: 1001;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  .container {
    width: 80%;
    height: 100%;
    position: absolute;
    right: 0;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }
  .logo {
    text-align: center;
    font-family: "Roboto", Arial, sans-serif;
    font-weight: 700;
    margin-bottom: 2em;
    text-transform: uppercase;
    font-size: 38px;
  }
  .nav {
    li {
      margin-bottom: 20px;
      &.active {
        color: #000;
        &:after {
          visibility: visible;
          -webkit-transform: scaleX(1);
          -moz-transform: scaleX(1);
          -ms-transform: scaleX(1);
          -o-transform: scaleX(1);
          transform: scaleX(1);
        }
      }
      a {
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
        letter-spacing: .1em;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
        position: relative;
        padding: 10px 10px;
        letter-spacing: .2em;
        font-family: "Roboto", Arial, sans-serif;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
      }
    }
  }
</style>
