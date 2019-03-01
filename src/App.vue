<template>
  <div id="app" :class="getRandomizeBg()">
    <div class="bg-wrapper">
      <div class="padding-wrapper">
        <header>
          <Title :name="$route.name" class="title"/>
        </header>
        <section>
          <Navigation />
          <router-view />
        </section>
        <footer>
          <p><img src="./assets/ui/toaplan_logo.gif" /></p>
          <p><img src="./assets/ui/copyright.gif" /></p>
          <p class="small">Site réalisé par <a href="mailto:guts@gutsfun.com">Guts</a>, &copy;2004-{{currentYear}}</p>
          <p><a href="https://www.vuejs.org/" target="_new"><img src="./assets/ui/vuejs.png" title="Développé sous Vue.js"/></a></p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Title,
    Navigation,
  },
})
export default class App extends Vue {
  public currentYear: number = new Date().getFullYear();

  // Get rendomize class for background image.
  public getRandomizeBg(): string {
    const index: number = Math.floor(Math.random() * 3);
    return `${'bg' + index}`;
  }
}
</script>

<style lang="less">
@import url(./mixins/flexbox.less);

html, body, #app {
  height: 100%;
  margin: 0;
}

body {
  background-repeat: repeat;
}

blockquote {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin: 0px;
  padding: 10px 50px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #00ff00;
  .flex-display();
  .flex-direction(column);
  .flex-wrap(wrap);
  align-items: center;
  overflow-x: scroll;
  -webkit-transition: background-image 0.2s ease-in-out;
  transition: background-image 0.2s ease-in-out;
}

.bg0 {
  background-image: url(./assets/ui/patern_fer.gif);
  background-attachment: fixed;
}
.bg1 {
  background-image: url(./assets/ui/patern_sol.gif);
  background-attachment: fixed;
}
.bg2 {
  background-image: url(./assets/ui/patern_terre.gif);
  background-attachment: fixed;
}

.bg-wrapper {
  .flex(1 0 auto);
  width: 700px;
  background: url(./assets/ui/patern_grille.gif) repeat-y center,
    url(./assets/ui/patern_bordure_gauche.gif) repeat-y left,
    url(./assets/ui/patern_bordure_droite.gif) repeat-y right;
}

.padding-wrapper {
  padding: 15px 14%;
  font-size: 0.8em;
}

@media screen and (max-width:500px) {
  .bg-wrapper {
    width: 100%;
  }

  .padding-wrapper {
    padding: 15px 5%;
  }
}

a {
  color: #FFFF00;
  text-decoration : none;

  &:hover {
    text-decoration : underline;
  }
}

h3 {
  background-image: url(./assets/ui/bomb.gif);
  background-repeat: no-repeat;
  height: 30px;
  color: #FFFFFF;
  font-size: 1em;
  line-height: 1.2;
  padding-left: 30px;
  padding-top: 4px;
  margin-bottom: 0px;

  &.daisenpu {
    background-image: url(./assets/ui/daisenpu.gif);
    padding-left: 40px;
    padding-top: 8px;
  }

  &.pipiru {
    background-image: url(./assets/ui/pipiru.gif);
    padding-left: 40px;
    padding-top: 12px;
  }

  &.zerowing {
    background-image: url(./assets/ui/zig.gif);
    padding-left: 40px;
    padding-top: 5px;
  }

  &.bonus {
    background-image: url(./assets/items/5000.gif);
    padding-top: 3px;
  }

  &.redhead {
    background-image: url(./assets/ui/redhead.gif);
    padding-left: 40px;
    padding-top: 10px;
  }

  &.tatsujin {
    background-image: url(./assets/ui/tatsujin.gif);
    padding-left: 40px;
    padding-top: 12px;
  }
}

p {
  padding: 0px;
  margin: 0px 0px 10px 0px;

  span, b {
    color: #FFFFFF;
  }

  &.small {
    font-size: 0.85em;
  }
}

ul {
  list-style-type: square;
}

dl {
  .flex-display();
  .flex-direction(column);
  margin-left: 10%;
  width: 90%;
}

dt, dd {
  .align-self(flex-start);
}

dt {
  display: list-item;
  list-style-type: square;
  padding-bottom: 3px;
}

dd {
  margin: 0;
  padding-bottom: 5px;
  font-size: 0.85em;
  color: #FFFFFF;
}

footer {
  margin-top: 30px;
  text-align: center;

  p {
    margin-bottom: 5px;
  }
}

.flex-row {
  .flex-display();
  .flex-direction();
  .justify-content(space-around);
}

.flex-row-reverse {
  .flex-display();
  .flex-direction(row-reverse);
  .justify-content(space-around);
}

@media screen and (max-width:500px) {
  .flex-row-reverse {
    .flex-direction();
  }
}

.flex-wrap {
  .flex-wrap(wrap);
}

.nowrap {
  white-space: nowrap;
}

.screenshot {
  text-align: center;
  margin-bottom: 15px;
  margin-top: 10px;
  .flex(1 0 240px);

  &.small {
    .flex(1 0 120px);
  }

  img {
    border: 1px solid #993300;
    width: 90%;
  }

  p {
    margin: 0px;
  }

  span {
    color: #FFFFFF;
    font-size: 0.85em;
    padding: 0px 5px;
  }
}

.sprite {
  margin: 0 10px 20px 0;
  text-align: center;

  p {
    margin: 0px;
  }

  span {
    color: #FFFFFF;
    font-size: 0.85em;
  }
}
</style>
