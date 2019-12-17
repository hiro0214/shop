<template>
  <div :class="{flashAction: $store.state.other.flash}" class="flash">
    <p>{{ $store.state.other.flashMessage }}</p>
  </div>
</template>

<style lang="scss">

.flash {
  width:100vw;
  height:30px;
  background:#00a13e;
  color:#fff;
  font-size:18px;
  font-weight:600;
  line-height:30px;
  text-align:center;
  position:absolute;
  z-index:100;
  margin-top:-50px;
  transition: .2s;
}

.flashAction {
  margin-top:0px;
  transition: .2s;
}

</style>
