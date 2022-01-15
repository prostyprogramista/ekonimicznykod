<template>
  <div>
    <NavigationBar />

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
            Sporadycznie na blogu mogą się również pojawiać tematy odbiegające od programowania - związane z moimi zainteresowaniami :)
          </p>
          <p>
            W poszczególnych sekcjach gurnego paska nawigującego znajdziesz: 
            <ul>
              <b># Strona główna - </b> znajdziesz tam wszystkie ostatnio opublikowane posty. </br>
              <b># Spis treści - </b> w tej sekcji znajdują się wsyzstkie artykuły związane z szerokopojętym programowaniem, upożądkowane tematycznie. </br>
              <b># Literatura - </b> ta sekcja poświęcona jest książkom, które przeczytałem i uważam, że warto lub nie je polecać. Każda opisywana tam lektura została okroszona moimi osobistymi wrażeniami z lektury. </br>
              <b># Inne - </b> zawiera dodatkowe sekcje związane głównie z moimi zainteresowaniami. </br>
              <b># Kontakt - </b> sekcja zawierająca informacje kontaktowe. </br>
            </ul>
          </p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
