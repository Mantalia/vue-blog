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
/*
 * 页面规整样式文件
 */

@charset "utf-8";
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, .3);
  -webkit-backface-visibility: hidden;
  opacity: 1;
}

:focus {
  outline: none;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

caption,
th,
td {
  font-weight: normal;
}

a,
img,
iframe,
button {
  border: none;
  outline: 0;
}

a:hover {
  text-decoration: none;
}

img {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}

ol,
ul,
li {
  list-style: none;
}

input,
textarea,
select,
button {
  font-size: 100%;
  font-family: inherit;
  color: #41454D;
}

select {
  margin: inherit;
}

input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

body {
  font-family: "Microsoft YaHei", simsun, Arial, sans-serif, Mingliu, Verdana, Helvetica, Lucida;
  text-align: justify;
}

abbr,
article,
aside,
audio,
canvas,
datalist,
details,
dialog,
figure,
footer,
header,
hgroup,
mark,
menu,
meter,
nav,
output,
progress,
section,
time,
video {
  display: block;
}

a {
  color: #41454D;
}

a:hover {
  color: #41454D;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  font-size: 12px;
  color: #333;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.main, .container {
  width: 100%;
  height: 100%;
}

.omission {
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.clrfix {
  zoom: 1;
}

.clrfix:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.text-l {
  text-align: left;
}

.text-c {
  text-align: center;
}

.text-r {
  text-align: right;
}
</style>
