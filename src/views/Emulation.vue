<template>
  <div class="emulation">
    <p>Si vous n'avez pas la chance de posséder la <router-link to="/pcb">PCB</router-link> du jeu accompagnée de sa borne d'arcade, vous aurez la possibilité de vous essayer à <span>OutZone</span> par l'intermédiaire d'un outil capable d'<span>émuler</span> un système arcade. Il faut savoir qu'<span>OutZone</span> n'a jamais été converti sur une console de salon ou un ordinateur. Il existe bien un jeu sorti sur Amiga mais qui n'a en commun avec <span>OutZone</span> que le nom.</p>
	  <p>Il est donc encore temps de découvrir ou redécouvrir ce jeu sublime et de se laisser emporter par la nostalgie des salles obscures et enfumées ...</p>
    <p>Pour celà il vous suffit dans un premier temps de télécharger un programme qui s'appelle <a href="https://www.mamedev.org/" target="_new">M.A.M.E</a> (Multi Arcade Machine Emulator). Je vais pas m'amuser à vous faire un cours sur M.A.M.E, il existe de nombreuses FAQ sur le sujet très bien faites. Une fois que vous vous serez procuré l'émulateur, vous devrez copier un dump de la rom d'<span>OutZone</span> dans le répertoire rom de votre émulateur. Heureusement, cette fois je vais vous épargner cette recherche qui peut s'avérer parfois assez aventureuse :</p>
    <ul>
      <li><a href="/static/emul/outzone.zip">OutZone (Parent set / Set 4) - outzone.zip / 930 Ko</a></li>
      <li><a href="/static/emul/outzoneh.zip">OutZone (Harder set / Set 1) - outzoneh.zip / 91 ko</a></li>
      <li><a href="/static/emul/outzonea.zip">OutZone (Old set / Set 2) - outzonea.zip / 91 ko</a></li>
      <li><a href="/static/emul/outzoneb.zip">OutZone (Older set / ??) - outzoneb.zip / 101 ko</a></li>
      <li><a href="/static/emul/outzonec.zip">OutZone (Oldest set / Set 3 Prototype) - outzonec.zip / 87 ko</a></li>
    </ul>
    <p>Pour simplement jouer à la première version d'<span>OutZone</span>, vous aurez besoin que de la rom notée <i>outzone.zip</i>, par contre si vous désirez utiliser les autres clones connus d'<span>OutZone</span> (a, b, c et h), vous devrez vous munir de chaque set.</p>
    <h3>Quelles sont les différences entre les sets d'OutZone ??</h3>
    <p>Depuis la version 0.149u1 de MAME, la nomination des Set d'OutZone a changé. La communauté avait pour habitude d'utiliser le Set 2 (maintenant défini comme <i>Old set</i>) comme version de référence pour jouer et le Set 1 (<i>Harder set</i> ??) était la rom d'origine. On voit même apparaître un 5<sup>ème</sup> Set plus récent que le Set 3 devenu le <i>Oldest set</i>.</p>
    <p>Pour des raisons d'hygiène mentale nous continurons à utiliser l'ancienne convention pour la suite de l'article.</p>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1">
        <p>Le Set 2 apporte quelques améliorations ou modifications, entendez le comme vous voudrez. La première visible est probablement au niveau du gameplay qui a été revu à la hausse. Certaines vagues ennemis ont disparu laissant place à de nouveaux adversaires. Ensuite, des bonus de points plus importants et des supports aériens en fonction de votre score sont matérialisés sous la forme d'un escadron de biplans tiré de <span>Flying Shark</span> ou du vaisseau de <span>Truxton</span> (Tatsujin en japonais). Enfin, l'agencement des musiques a aussi été modifié afin de rajouter un nouveau thème pour le niveau 7, modifier celle du niveau 4 qui reprenait celui du premier et aussi donner un autre rythme au jeu. N'hésitez pas à les <router-link to="/medias">écouter</router-link>, elles valent tout de même le détour pour l'époque.</p>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/biplan.gif" title="Flying Shark Power !" /></p>
        <span>Le support aérien très Flying Shark ...</span>
      </div>
    </div>
    <blockquote>
      Quelques exemples sur les différences entre les Sets
    </blockquote>
    <div class="flex-row flex-wrap">
      <p>Captures d'écran du Set 1 (<i>Harder set</i>)</p>
      <p>Captures d'écran du Set 2 (<i>Old set</i>)</p>
      <div class="screenshot">
        <p><img src="../assets/screenshots/start.gif" title="Introduction - Set 1" /></p>
        <span>Simple et efficace, une intro de jeu qui a le mérite de vous mettre tout de suite dans l'action</span>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/starta.gif" title="Introduction - Set 2" /></p>
        <span>On remarque la présence du héro, ainsi qu'une traduction différente du texte un peu plus ... bourrine</span>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/level02_1.gif" title="Niveau 2 - Set 1" /></p>
        <span>Les tourelles sont (étaient) éparpillées, pas d'arbre pour gêner la progression</span>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/level02_1a.gif" title="Niveau 2 - Set 2" /></p>
        <span>Des arbres font leur apparition, les tourelles sont cachées derrière</span>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/level02_2.gif" title="Niveau 2 - Set 1" /></p>
        <span>Un ennemi récurant de ce niveau, généralement par paquets de 6 ...</span>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/level02_2a.gif" title="Niveau 2 - Set 2" /></p>
        <span>... remplacé par un tank à la gachette facile</span>
      </div>
    </div>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1">
        <h3>Replay et scoring</h3>
        <p>Pour ceux que ça intéresse, sachez que vous avez la possibilité d'enregistrer vos parties et d'en faire profiter les autres sur des sites spécialisés. Des règles à respecter sont bien sûr de rigueur pour pouvoir envoyer vos scores. Je vous invite à vous inscrire sur les sites de <a href="http://marp.retrogames.com" target="_new">MARP</a> et <a href="http://hiscores.shmup.com/" target="_new">Shmup HISCORES</a> afin de révéler le grand champion que vous êtes.</p>
	      <p>Et pour les plus curieux, vous pouvez télécharger l'<a href="/static/emul/guts_outzone_2907930_wolf83.zip">INP</a> de ma meilleure partie d'<span>OutZone</span> sur le Set 1, réalisée avec les options par défaut sur l'émulateur WolfMAME32+ 0.83.</p>
	      <p>Mon score final est de <span>2.907.930 points</span>, soit 190% du jeu réalisé. Avis aux amateurs, je mettrais ici les meilleurs scores pour ceux qui m'enverons des INP valides.</p>
      </div>
      <div class="screenshot">
        <p><img src="../assets/screenshots/score.gif" title="2.907.930 points" /></p>
        <span>Peut mieux faire ...</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url(../mixins/flexbox.less);

.flex-col-1 {
  .flex(1 0 240px);
  padding-right: 10px;
}
</style>
