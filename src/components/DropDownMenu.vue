<template>
  <div>
    <div class="placeholder"></div>
    <div class="menusbox" v-if="num==1">
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <template #header>
            <p class="title">OVERVIEW</p>
          </template>
          <a-list-item><a href="javascript:;">About Apex Lengends</a></a-list-item>
          <a-list-item><a href="javascript:;">Lengends</a></a-list-item>
          <a-list-item><a href="javascript:;">Maps</a></a-list-item>
          <a-list-item><a href="javascript:;">FAQ</a></a-list-item>
          <a-list-item><a href="javascript:;">PC Requirements</a></a-list-item>
          <a-list-item><a href="javascript:;">Credits</a></a-list-item>
          <a-list-item><a href="javascript:;">Accessibility</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <template #header>
            <p>SHOP</p>
          </template>
          <a-list-item><a href="javascript:;">Champion Edition</a></a-list-item>
        </a-list>
      </div>
    </div>
    <div class="menusbox" v-else-if="num==2">
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <a-list-item></a-list-item>
          <a-list-item><a href="javascript:;">Arenas</a></a-list-item>
          <a-list-item><a href="javascript:;">Battle Royale</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
    </div>

    <div class="menusbox" v-else-if="num==3">
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <a-list-item></a-list-item>
          <a-list-item><a href="javascript:;">Latest News</a></a-list-item>
          <a-list-item><a href="javascript:;">Game Updates</a></a-list-item>
          <a-list-item><a href="javascript:;">Latest Media</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
    </div>

    <div class="menusbox" v-else-if="num==4">
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <template #header>
            <p class="title">SOCIAL</p>
          </template>
          <a-list-item><a href="javascript:;">Twitter</a></a-list-item>
          <a-list-item><a href="javascript:;">Instagram</a></a-list-item>
          <a-list-item><a href="javascript:;">Facebook</a></a-list-item>
          <a-list-item><a href="javascript:;">Youtube</a></a-list-item>
          <a-list-item><a href="javascript:;">Twitch</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <template #header>
            <p class="title">COMMUNITY</p>
          </template>
          <a-list-item><a href="javascript:;">Forums</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <template #header>
            <p class="title">MERCHANDISE</p>
          </template>
          <a-list-item><a href="javascript:;">platapexshop.com</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
    </div>

    <div class="menusbox" v-else-if="num==5">
      <div class="menusItem">
        <a-list :bordered="false" :split="false">
          <a-list-item></a-list-item>
          <a-list-item><a href="javascript:;">Compete</a></a-list-item>
          <a-list-item><a href="javascript:;">Community Guidelines</a></a-list-item>
          <a-list-item></a-list-item>
        </a-list>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    num: {
      type: [String, Number],
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.placeholder {
  width: 100%;
  height: 10px;
}
.menusbox {
  display: flex;
  flex-wrap: nowrap;
  // padding-top: 10px;
  padding-left: 10px;
  a,
  p {
    color: #fff;
    white-space: nowrap;
  }
  a {
    margin: 0;
    text-decoration: none;
    font-size: 19px;
    &:hover {
      color: #da292a;
    }
  }
  p {
    margin-top: 50px;
    font-size: 22px;
    border-bottom: 1px solid #333;
  }
  background-color: rgba(25, 24, 5);
  opacity: 0.97;
  border-radius: 10px;
}

.menusItem {
  flex: 1;
}
</style>
