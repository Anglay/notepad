<template>
  <div id="app">
    <NoteHeader></NoteHeader>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import NoteHeader from "@/components/header"
export default {
  name: 'app',
  components: {
    NoteHeader
  }
}
</script>

<style lang="less">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video,
input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

html,
body {
  height: 100%;
}









/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}



/* custom */

a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
  text-decoration: none;
}

li {
  list-style: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  .container {
    height: auto;
    overflow: hidden;
    padding-top: 90px;
  }
}

.page {
  height: auto;
  overflow: hidden;
  .icon_no_list{
    width: 150px;
    height: 30px;
    line-height: 30px;
    margin:120px auto 0;
    padding-top: 150px;
    background: url(assets/icon_no_list.png) no-repeat top center;
    text-align: center;
  }
  .noted-grid {
    height: auto;
    overflow: hidden;
    margin: 5px 15px;
    border: 1px solid #ccc;
    border-bottom: none;
    border-left: none;
    .grid-item {
      display: flex;
      flex-direction: row;
      height: 60px;
      border-bottom: 1px solid #ccc;
      >div {
        flex-grow: 1;
        height: 60px;
        border-left: 1px solid #ccc;
        padding: 5px;
        line-height: 50px;
      }
      .item-index {
        flex-basis: 40px;
        .item-wrap {
          text-align: center;
        }
      }
      .item-title {
        flex-basis: 600px;
        .item-wrap {
          width: 600px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #81cde6;
        }
      }
      .item-date {
        flex-basis: 150px;
        .item-wrap {
          color: #a5a5a5;
        }
      }
      .item-action {
        flex-basis: 150px;
        span {
          color: #e5687f;
          font-size: 12px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
