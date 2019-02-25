<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <img src="@/assets/ui/menu_review.gif">
        </router-link>
      </li>
      <li>
        <router-link to="/items">
          <img src="@/assets/ui/menu_items.gif">
        </router-link>
      </li>
      <li>
        <router-link to="/ennemis">
          <img src="@/assets/ui/menu_ennemis.gif">
        </router-link>
      </li>
      <li>
        <router-link to="/bonus">
          <img src="@/assets/ui/menu_bonus.gif">
        </router-link>
      </li>
      <li>
        <router-link to="/pcb">
          <img src="@/assets/ui/menu_pcb.gif">
        </router-link>
      </li>
      <li>
        <router-link to="/medias">
          <img src="@/assets/ui/menu_medias.gif">
        </router-link>
      </li>
      <li>
        <router-link to="/emulation">
          <img src="@/assets/ui/menu_emulation.gif">
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="less">
@import url(../mixins/flexbox.less);

nav {
  position: relative;
  float: left;
  line-height: 16px;
  margin: 0 20px 10px 0;
  background: url(../assets/ui/amenu_hg.gif) no-repeat left top,
    url(../assets/ui/amenu_hd.gif) no-repeat right top,
    url(../assets/ui/amenu_bg.gif) no-repeat left bottom,
    url(../assets/ui/amenu_bd.gif) no-repeat right bottom,
    url(../assets/ui/bmenu_h.gif) repeat-x top,
    url(../assets/ui/bmenu_b.gif) repeat-x bottom,
    url(../assets/ui/bmenu_g.gif) repeat-y left,
    url(../assets/ui/bmenu_d.gif) repeat-y right;

  ul {
    padding: 0px 16px;
  }

  li {
    list-style-type: none;
    text-align: left;
    background-color: #4a0000;
  }

  a {
    &:hover {
      filter: hue-rotate(90deg);
    }

    &.router-link-exact-active {
      filter: hue-rotate(260deg);
    }
  }
}
</style>
