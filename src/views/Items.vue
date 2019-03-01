<template>
  <div class="items">
    <p>Tout est une question de choix. Certains préfèreront jouer avec le <span>Super Burner</span>, se donnant une impression de puissance et de maîtrise du jeu dus à une faible porté de tir. D'autre préfèrerons la facilité avec la <span>Super Ball</span>, grâce à l'incroyable force de destruction du projectile et sa capacité à traverser les obstacles.</p>
	  <p>Tout ça pour dire que pour aider notre héros à terminer les 7 niveaux d'enfer d'<span>OutZone</span>, le parcours est jalonné d'options diverses augmentant les capacités de combat du cyborg incluant les classiques power up ainsi que différent "super bonus" que je vais vous décrire ci-dessous.</p>
    <p>Dans chaque niveau d'<span>OutZone</span>, vous retrouverez disséminés par-ci par-là deux types de caisse :</p>
    <div class="flex-row-reverse flex-wrap">
      <div class="flex-col-1-box">
        <p>A l'aide de l'option <img src="../assets/items/change.gif" width="16" height="15" title="Option d'alternance des armes"> libérée par le containeur rouge, vous aurez la possibilité de passer d'une arme multidirectionnelle à une arme fixe sur 3 angles et inversement. Faites attention à bien choisir votre arme durant les niveaux, cela peut s'avérer décisif.</p>
      </div>
      <div class="flex-col-2-box sprite">
        <p><img src="../assets/items/contain-change.gif" width="64" height="64" /></p>
        <span>3 ways ou multidirectionnelle ?</span>
      </div>
      <div class="flex-col-1-box">
        <p>Tout au long du jeu, l'énergie vital de votre Cyborg va décroissant jusqu'à la perte irrémédiable d'une vie. Avant le cas échéant vous êtes averti par un message signalétique et une alarme assez stressante.</p>
      </div>
      <div class="flex-col-2-box sprite">
        <p><img src="../assets/items/energy-empty.gif" width="80" height="48" title="Plus d'énergie" /></p>
        <span>Un message peu plaisant</span>
      </div>
      <div class="flex-col-1-box">
        <p>Les caisses blanches relâchent des <img src="../assets/items/energy.gif" title="Vitale !" class="icon"> qui restaureront partiellement votre énergie vitale. Il est donc impératif de parcourir les niveaux assez rapidement pour ne pas succomber bêtement.</p>
	      <p>Une option spéciale vous permet heureusement d'augmenter la jauge d'énergie. Une fois cette option acquise, il est plus facile de parcourir les niveaux et de faire du leeching.</p>
      </div>
      <div class="flex-col-2-box sprite">
        <p><img src="../assets/items/contain-en.gif" width="80" height="80" title="caisse d'énergie" /></p>
        <span>Détruit, ce containeur libère le précieux <img src="../assets/items/energy.gif" title="Vitale !" class="icon"></span>
      </div>
      <div class="flex-col-1-box">
        <p>Parmis les groupes d'ennemis que vous rencontrez, l'un d'entre eux sera de couleur rouge. Une fois mort il libèrera soit une bombe <img src="../assets/items/bomb.gif" title="Un objet bien utile" border="0" class="icon"> soit un power up <img src="../assets/items/powerup.gif" title="POWER UP !" class="icon"></p>
	      <p>Vous pouvez cumuler jusqu'à deux power up et dix bombes, ensuites soit ils libèrent des <span>Special Powerup</span> soit vous obtenez un bonus de <span>5.000 points</span> qui s'affiche <img src="../assets/items/5000.gif" title="5.000 points" class="icon"></p>
      </div>
      <div class="flex-col-2-box sprite">
        <p><img src="../assets/items/commander.gif" width="98" height="94" title="Commandant rouge" /></p>
        <span>Les commandants de bataillon sont nettement plus rare sur un second tour de jeu.</span>
      </div>
    </div>
    <h3>SPECIAL POWERUP</h3>
    <div class="flex-row flex-wrap">
      <div class="flex-col-1-item sprite">
        <span><img src="../assets/items/t-energy.gif" title="Energy Extend" /></span>
        <p><img src="../assets/items/b-energy.gif" width="48" height="48" title="Energy Extend" /></p>
      </div>
      <div class="flex-col-2-item">
        <p>En plus de recharger votre barre d'énergie à fond, cette option a aussi la faculté d'augmenter sa taille, ce qui vous laissera beaucoup plus de temps pour aller récupérer le prochain <img src="../assets/items/energy.gif" title="Energy" class="icon" /></p>
      </div>
      <div class="flex-col-1-item sprite">
        <span><img src="../assets/items/t-speed.gif" title="Speed Up" /></span>
        <p><img src="../assets/items/b-speed.gif" width="48" height="48" title="Speed Up" /></p>
      </div>
      <div class="flex-col-2-item">
        <p>Augmente la mobilité du héros. Elle donne beaucoup plus de rythme au jeu mais augmente la prise de risque sur les parties plateforme jalonnées de crevasses.</p>
      </div>
      <div class="flex-col-1-item sprite">
        <span><img src="../assets/items/t-shield.gif" title="Shield" /></span>
        <p><img src="../assets/items/b-shield.gif" width="48" height="48" title="Shield" /></p>
      </div>
      <div class="flex-col-2-item">
        <p>Le bouclier est une excellente option qui vous permettra de contrer un tir adverse. Cela équivaut à une vie supplémentaire sans avoir à recommencer à un check-point. Le fait est que si vous tombez dans un trou, cela revient à perdre l'équivalent de deux vies.</p>
      </div>
      <div class="flex-col-1-item sprite">
        <span><img src="../assets/items/t-burner.gif" title="Super Burner" /></span>
        <p><img src="../assets/items/b-burner.gif" width="48" height="48" title="Super Burner" /></p>
      </div>
      <div class="flex-col-2-item">
        <p>Le Super Burner (sorte de lance flamme super puissant) est une arme de corps à corps aussi puissante que sa portée est courte. A recommander aux joueurs experts du joystick. Elle reste mon arme favorite.</p>
      </div>
      <div class="flex-col-1-item sprite">
        <span><img src="../assets/items/t-superball.gif" title="Super Ball" /></span>
        <p><img src="../assets/items/b-superball.gif" width="48" height="48" title="Super Ball" /></p>
      </div>
      <div class="flex-col-2-item">
        <p>La Super Ball est un peu spéciale dans son utilisation. Elle forme un cercle autour du joueur sur une simple pression du bouton d'action. Si vous appuyez sur cette même touche au moment ou le projectile de la Super Ball a fait un tour complet, celui-ci fonce tout droit passant même à travers les murs. De plus c'est surpuissant. Muni de cette arme, vous arriverez à coup sûr des ennemis les plus féroces.</p>
      </div>
      <div class="flex-col-1-item sprite">
        <span><img src="../assets/items/t-oneup.gif" title="One Up" /></span>
        <p><img src="../assets/items/b-oneup.gif" width="48" height="48" title="One Up" /></p>
      </div>
      <div class="flex-col-2-item">
        <p>Le classique one-up qui apparaît de temps en temps. Je pense qu'il existe une certaine manipulation pour le faire apparaître, tout comme les Bi-Plans ou le vaisseau de Truxton, mais celà reste un mystère ...</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url(../mixins/flexbox.less);

.flex-col-1-box {
  .flex(1 0 300px);
}

.flex-col-2-box {
  .flex(2 0 100px);
}

.flex-col-1-item {
  .flex(1 0 70px);
}

.flex-col-2-item {
  .flex(2 0 170px);
}
</style>