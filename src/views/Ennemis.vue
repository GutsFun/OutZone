<template>
  <div class="ennemis">
    <p>Le bestiaire d'<span>OutZone</span> est assez limité et il n'est pas rare de retrouver des ennemis récurants tout au long des 7 niveaux qui constituent <span>OutZone</span>. Mais ceux-ci sont suffisament argneux et offensifs pour vous faire passer le goût du déjà vu.</p>
    <p>Mais ce que l'on retiendra le plus dans <span>OutZone</span> se sont les levels design très bien conçus et surtout les boss de fin de niveau hyper détaillés et au challenge digne du cyborg mercenaire que vous êtes.</p>
    <p>Le jeu datant de 1990, on ne pouvait être qu'admiratif devant la qualité du travail graphique réalisé sur l'ensemble des niveaux et notamment sur les Boss terriblement charismatiques d'<span>OutZone</span>. Non seulement ils sont beaux et regorgent de détails, mais ils sont aussi très bien animés, le tout donnant un caractère unique au jeu. Voici un petit récapitulatif des 7 super ennemis que vous aurez à affronter.</p>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 1 : "Mazurka"</h3>
        <p>Le premier boss d'<span>OutZone</span> est constitué de quatre modules très rapides tirant des salves à intervalles réguliers et qui se déplacent de haut en bas de l'écran. Les pods vous visent plus ou moins sans vraiment être menaçants. Mais il est convenu de rester vigilant surtout quand ceux-ci sont proches du bas de l'écran.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p class="nowrap">
          <img src="../assets/boss/Boss1.gif" width="62" height="90" title="Mazurka" />
          <img src="../assets/boss/Boss1.gif" width="62" height="90" title="Mazurka" />
          <img src="../assets/boss/Boss1.gif" width="62" height="90" title="Mazurka" />
          <img src="../assets/boss/Boss1.gif" width="62" height="90" title="Mazurka" />
        </p>
      </div>
    </div>
    <div class="flex-row-reverse flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 2 : Death Tank "Shudder"</h3>
        <p>Ce terrible char d'assaut possède deux mitraillettes latérales vous barrant l'accès à droite et à gauche de l'aire de jeu, réduisant ainsi vos mouvements. L'oeil central projète deux tirs sinusoïdaux où vient de temps en temps se joindre un module jaune non offensif sur un premier tour de jeu mais lâchant une assez grande quantité de missiles à partir d'un deuxième tour. En regardant de plus près le deuxième niveau, vous remarquerez à un moment que le tank se déplace en dessous de vous.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p>
          <img src="../assets/boss/Boss2.gif" width="224" height="277" title="Death Tank Shudder" />
        </p>
      </div>
    </div>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 3 : "Night mare"</h3>
        <p>Le troisième boss est certainement le plus intéressant de tous. Son oeil central projète des cercles de feu assez rapides et ciblés tandis que sortent alternativement de sa droite et de sa gauche des petits modules qui vous tournent autour en vous harcelant de tirs. Pour corser le tout, deux lasers géants viennent lacérer le sol, découpant ainsi une bonne partie de vos déplacements.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p>
          <img src="../assets/boss/Boss3.gif" width="240" height="103" title="Night mare" />
        </p>
      </div>
    </div>
    <div class="flex-row-reverse flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 4 : Crisis Armor "Asura"</h3>
        <p>De loin le Boss le plus difficile au timing si vous n'êtes pas équipé du <router-link to="/items">Super Burner</router-link> ou de la <router-link to="/items">Super Ball</router-link>. Sous sa carapace verte se cache son point faible, un module entouré de 8 pods qui au moindre contact vous sera fatal. Le vaisseau largue une rangée de quatre missiles qui en explosant relâchent eux même des petits boomerangs sournois.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p>
          <img src="../assets/boss/Boss4.gif" width="240" height="162" title="Crisis Armor Asura" />
        </p>
      </div>
    </div>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 5 : Flying Armor "Junk"</h3>
        <p>L'un des rares boss qui vous demandera de lâcher une bombe. Il possède à l'avant deux mitrailleuses lourdes très rapides ainsi qu'une batterie de missiles à tête chercheuse. Son point faible est protégé par une capsule qu'il vous faudra détruire au préalable. De temps en temps, un robot volant identique à ceux rencontrés sur la plate-forme mouvante lui viendra en aide en vous harcelant de ses tirs violets.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p>
          <img src="../assets/boss/Boss5.gif" width="206" height="166" title="Flying Armor Junk" />
        </p>
      </div>
    </div>
    <div class="flex-row-reverse flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 6 : "Cipher"</h3>
        <p>Probablement l'adversaire le plus difficile du jeu. Son point faible se situe dans sa tête carapacé qu'il n'ouvre que pour lâcher une salve de tir. Il possède quatre bras mécaniques qu'il allonge jusqu'à vous pour vous frapper. Inutile de vous dire que même armé d'un bouclier c'est la mort directe.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p >
          <img src="../assets/boss/Boss6.gif" width="160" height="148" title="Cipher" />
        </p>
      </div>
    </div>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1">
        <h3>Boss 7 : Metal Brain "Severe"</h3>
        <p>Le dernier boss est très réussi. Aussi énorme que dangereux, il largue des lasers à tête chercheuse et est équipé de deux énormes épées qu'il enverra frontalement à gauche et à droite pour réduire votre espace vital. La précision de vos déplacements est de rigueur ici, car vos mouvements sont plus que limités.</p>
      </div>
      <div class="flex-col-2 sprite">
        <p>
          <img src="../assets/boss/Boss7.gif" width="256" height="190" title="Metal Brain Severe" />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url(../mixins/flexbox.less);

.flex-col-1 {
  .flex(1 0 210px);
}

.flex-col-2 {
  .flex(2 0 auto);
}

.sprite {
  .align-self(center);
}
</style>
