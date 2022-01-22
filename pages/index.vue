<template>
  <div>
    <header class="header">
      <div class="hero-img">
        <div class="header-arrow">
          <img src="~/assets/icons/chevrons-down.svg" />
        </div>
        <div class="hero-shadow"></div>
        <div class="hero-text">
          <h1><br />Ekonomiczny kod</h1>
          <p>Witaj na blogu - w miejscu, gdzie programujemy z pasją</p>
        </div>
      </div>
    </header>

    <main class="main wrapper">
      <section class="about-blog">
        <div class="about-blog-content">
          <h1>Co znajdziesz na blogu?</h1>
          <p>
            <b>Główym założeniem bloga jest pozyskiwanie i dzielenie się zdobytą przy tym wiedzą. </b>
          </p>
          <p>
            Na blogu publikowane są głównie posty związane z szerokopojętym programowaniem. Back-end, front-end, bazy danych, architektura, wzorce projektowe? Jasne! 
            Wszystkie te tematy są tu poruszane! Ocziwiście blog nie jest zamknięty wyłacznie w ramach technicznych.
            Poruszane są tutaj również tematy miękkie takie jak relacje, skuteczna komunikacja, samorozwój a także inne około programistyczne zagadnienia. 
            Sporadycznie na blogu mogą również się pojawiać tematy odbiegające od programowania - związane z moimi zainteresowaniami :)
          </p>
          <p>
            <b>Blog podzielony jest na następujące sekcje: </b>
            <ul>
              <b><NuxtLink to="/ostatnie"># Najnowsze</NuxtLink></b> -  znajdziesz tam wszystkie ostatnio opublikowane posty. </br>
              <b><NuxtLink to="/spis-tresci"># Spis treści</NuxtLink></b> -  w tej sekcji znajdują się wsyzstkie artykuły związane z szerokopojętym programowaniem, upożądkowane tematycznie. </br>
              <!-- <b># Literatura - </b> ta sekcja poświęcona jest książkom, które przeczytałem i uważam, że warto lub nie je polecać. Każda opisywana tam lektura została okroszona moimi osobistymi wrażeniami z lektury. </br>
              <b># Inne - </b> zawiera dodatkowe podsekcje związane głównie z moimi zainteresowaniami. </br> -->
              <b><NuxtLink to="/kontakt"># Kontakt</NuxtLink></b> -  sekcja zawierająca informacje kontaktowe. </br>
              <b><NuxtLink to="/o-mnie"># O mnie</NuxtLink></b> -  chcesz dowiedzieć się czegoś więcej o mnie? Tutaj znajdziesz podstawowe informacje i motywacje mną kierujące. </br>
            </ul>
          </p>
        </div>
      </section>
    </main>
  </div>
</template>
