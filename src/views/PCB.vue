<template>
  <div class="PCB">
    <p>Fan d'<span>OutZone</span>, je me devais de possèder la <span>PCB</span> de ce mythique jeu. C'était pas une	mince affaire mais avec de la chance et beaucoup de patience on obtient toujours ce	que l'on veux. Et c'est d'un geste fébrile que j'ai ouvert le carton qui contenait la délicate plaque verte foncée criblée de composants aux numéros de série barbares et estampillée du non moins emblématique logo de la firme, en japonais s'il vous plait.</p>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1 cabinet">
        <p><span>PCB</span> ? C'est quoi ? PCB sont les initiales de <span>P</span>rinted <span>C</span>ircuit <span>B</span>oard qui désigne simplement le support sur lequel repose tout bon jeu d'Arcade qui se respecte.</p>
        <p>Les jeux de l'époque étaient réalisés sur d'énormes circuits imprimés regroupés autour d'une architecture spécifique à chaque constructeur mais restant tout de même dans des normes bien précises afin d'être adaptable dans n'importe quelle borne de jeu. Ces cartes se connectent sur un slot <span>JAMMA</span>, cordon ombilical de la machine qui fait un peu office de console de jeu.</p>
        <p>Tout le monde n'a pas la chance de posséder ce genre de système à la maison, déjà parce que cela coûte relativement cher mais aussi parce que c'est aussi encombrant qu'inesthétique pour certains modèles (Après chacun ses goûts). Heureusement que pour les petits budgets <router-link to="/emulation">certains</router-link> on pensé à tout.</p>
      </div>
      <div class="screenshot">
        <p><img src="/static/docs/cabinet.gif" title="La borne d'arcade OutZone"/></p>
        <span>La borne officielle US d'outzone distribuée par Romstar (*soupir*)</span>
      </div>
    </div>
    <div class="flex-row-reverse flex-wrap">
      <div class="flex-col-1 pcb">
        <p>On est fan ou on l'est pas. C'est un sacré coup de pot que j'ai eu pour obtenir cette carte. Un ami me donne un lien sur <a href="http://www.ebay.com" target="_new">ebay.com</a> concernant une PCB d'<span>OutZone</span> aux enchères. Attente et renchérissement de dernière minute pour gagner l'enchère (je vous raconte pas le stress) à la dernière seconde. Il a fallu ensuite attendre 2 longs mois pour enfin recevoir le 22 janvier 2004 ma propre PCB d'<span>OutZone</span>.</p>
	      <p>Maintenant, la question que l'on se pose ... est-ce un Set 1 ou un Set 2 ? Direction l'appartement d'un ami qui viens de se procurer une borne d'arcade pour essayer le jeu. J'attends l'intro, et là ! Bingo, c'est un Set 2. Oh joie, je suis comblé ^_^. Maintenant je peux jouer en toute légalité à ma <router-link to="/emulation">rom</router-link> d'<span>OutZone</span>, Remarquez, j'ai pas attendu de l'avoir pour y jouer sur le PC.</p>
	      <p>Mais il y a pas à dire c'est quand même mieux sur un écran vertical de 29".</p>
      </div>
      <div class="screenshot">
        <p><img src="/static/docs/Outzone_pcb_us.jpg" title="PCB d'OutZone avec son manuel" /></p>
        <span>Ma PCB d'OutZone US et sa notice</span>
      </div>
    </div>
    <h3>Quelques liens utiles pour ceux qui désirent se procurer du matériel ARCADE</h3>
    <dl>
      <dt><a href="http://www.sud-automatic.com/" target="_new">Sud-Automatic</a></dt>
      <dd>Société située sur Marseille qui fait de la vente au détail et qui livre sur toute la France.</dd>
      <dt><a href="http://www.coinopexpress.com" target="_new">CoinOpExpress</a></dt>
      <dd>Gros revendeur online de PCB et de systèmes full kit.</dd>
      <dt><a href="http://www.ebay.com" target="_new">Ebay.com</a></dt>
      <dd>Plus grand site de vente aux enchères. Avec de la chance on peut tomber sur de sacrés perles.</dd>
      <dt><a href="http://www.multigame.com/" target="_new">Multigame.com</a></dt>
      <dd>Quelques bonnes PCB à la vente. Attention, ça part vite.</dd>
      <dt><a href="http://www.quarterarcade.com/" target="_new">QuaterArcade.com</a></dt>
      <dd>Vente en ligne de système complet ou détail.</dd>
    </dl>
  </div>
</template>

<style scoped lang="less">
@import url(../mixins/flexbox.less);

h3 {
  padding-top: 0px;
}

.flex-col-1 {
  &.cabinet {
    .flex(1 0 230px);
  }

  &.pcb {
    .flex(1 0 170px);
  }
}

.PCB > p {
  margin-bottom: 50px;
}
</style>