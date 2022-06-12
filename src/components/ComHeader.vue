<template>
  <div class="box">
    <IconMenu class="myIconlist" style="{color: #a2a2a2; font-size: 40;}" />
    <a href="javascript:;" style="font-size: 0">
      Home
      <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-white-nav-logo.svg" alt="">
    </a>
    <ul class="tabs">
      <li class="dropdown">
        ABOUT
        <DropDownMenu class="menus" :num="1"></DropDownMenu>
      </li>
      <li class="dropdown">MODES
        <DropDownMenu class="menus" :num="2"></DropDownMenu>
      </li>
      <li>SEASON</li>
      <li>BATTLEPASS</li>
      <li class="dropdown">
        NEWS&amp;MEDIA
        <DropDownMenu class="menus" :num="3"></DropDownMenu>
      </li>
      <li class="dropdown">
        COMMUNIT
        <DropDownMenu class="menus" :num="4"></DropDownMenu>
      </li>
      <li class="dropdown">
        COMPETE
        <DropDownMenu class="menus" :num="5"></DropDownMenu>
      </li>
    </ul>
    <div class="downloadBtn dropdown">
      DOWMLOAD FOR FREE*
    </div>
  </div>

</template>

<script>
import DropDownMenu from './DropDownMenu.vue'
export default {
  name: 'com-header',
  components: {
    DropDownMenu
  }
}
</script>

<style lang='less'>
@font-face {
  font-family: 'duke_fill';
  src: url('../assets/font/duke_fill-webfont/duke_fill-webfont.ttf');
}

@font-face {
  font-family: 'TTLakes-Regular';
  src: url('../assets/font/TTLakes-Regular/TTLakes-Regular.otf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 24px;
}

.dropdown {
  // 下拉菜单
  .menus {
    // width: ;
    max-height: 0;
    position: absolute;
    top: 70px;
    left: -50px;
    font-family: 'TTLakes-Regular';
    transition: all 0.5s;
    overflow: hidden;
    &:hover {
      max-height: 800px;
    }
  }
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    right: 0;
    transform: rotate(-45deg);
    width: 0.6667rem;
    border-radius: 10px;
    height: 0px;
    border-top: 2px solid #ffffff;
    transition: all 0.2s;
  }

  &:before {
    position: absolute;
    content: '';
    top: 50%;
    right: 0.45rem;
    transform: rotate(45deg);
    width: 0.6667rem;
    height: 0px;
    border-radius: 10px;
    border-top: 2px solid #ffffff;
    transition: all 0.2s;
  }
  &:hover {
    color: #da292a;
    &:before,
    &:after {
      border-top: 2px solid #da292a;
    }

    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
    .menus {
      max-height: 800px;
    }
  }
}

.box {
  position: relative;
  width: 100%;
  height: 70px;
  background-color: #000000;
  display: flex;
  color: #ffffff;
  line-height: 70px;
  align-items: center;
  font-family: 'duke_fill';
  // font-weight: bold;
  .myIconlist {
    position: absolute;
    left: 5px;
    top: 13px;
    color: #a2a2a2;
    @media only screen and (min-width: 1260px) {
      display: none;
    }
    cursor: pointer;
  }
  a {
    margin: 0 50px;
  }

  a img {
    vertical-align: middle;
  }

  ul {
    width: fit-content;
    list-style: none;
    display: flex;
    li {
      position: relative;
      flex: 1;
      padding-right: 20px;
      margin-right: 22px;
      transition: all 0.2s;
    }
    li:hover {
      color: #da292a;
    }
    @media only screen and (max-width: 1260px) {
      display: none;
    }
  }
  .downloadBtn {
    position: absolute;
    right: 10px;
    width: 300px;
    height: 56px;
    background-color: #da292a;
    text-align: center;
    line-height: 56px;
    font-size: 20px;
    font-weight: 300;
    font-family: 'TTLakes-Regular';
    &:before {
      right: 1.1333rem;
    }
    &::after {
      right: 0.6667rem;
    }
    &:before,
    &:after {
      width: 12px;
      border-top: 3px solid #fff;
    }
    @media only screen and (max-width: 1260px) {
      display: none;
    }
  }
  .downloadBtn:hover {
    color: #fff;
    &:before,
    &:after {
      border-top: 3px solid #fff;
    }
  }
}
</style>
