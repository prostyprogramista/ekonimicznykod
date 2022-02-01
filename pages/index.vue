<template>
  <div>
    <header class="main-page-header">
      <div class="hero-img">
        <div class="hero-shadow"></div>
        <div class="hero-text">
          <h1>Ekonomiczny kod</h1>
          <p>Witaj na blogu - w miejscu, gdzie programujemy z pasją</p>
          <img class="header-arrow" src="~/assets/icons/chevrons-down.svg" />
        </div>
      </div>
    </header>

    <main>
      <section class="index-page">
        <Test>
        <h1>Co znajdziesz na blogu?</h1>
        </Test>


        <div class="accept-icon-background">
          <div class="accept-icon-shadow"> 
              <img class="accept-icon"/>  
          </div>
        </div>


        <div class="info-icon-background">
          <div class="info-icon-shadow"> 
              <img class="info-icon"/>  
          </div>
        </div>
        <div class="warning-icon-background">
          <div class="warning-icon-shadow"> 
              <img class="warning-icon"/>  
          </div>
        </div>
        <div class="error-icon-background">
          <div class="error-icon-shadow"> 
              <img class="error-icon"/>  
          </div>
        </div>
        
        <p>
          <b>Główym założeniem bloga jest dzielenie się zdobytą wiedzą. </b>
        </p>
        <p>
          Na blogu publikowane są głównie posty związane z szerokopojętym programowaniem. Back-end, front-end, bazy danych, architektura, wzorce projektowe? Jasne! 
          Wszystkie te tematy są tu poruszane! Ocziwiście blog nie jest zamknięty wyłacznie w ramach technicznych.
          Poruszane są tutaj również tematy miękkie takie jak relacje, skuteczna komunikacja, samorozwój a także inne około programistyczne zagadnienia. 
          Sporadycznie na blogu mogą również się pojawiać tematy odbiegające od programowania - związane głównie z moimi zainteresowaniami :)
        </p>
        <p>
          <b>Blog podzielony jest na kilka sekcji: </b>
          <ul>
            <b><NuxtLink to="/ostatnie"># Najnowsze</NuxtLink></b> -  znajdziesz tam wszystkie ostatnio opublikowane posty. </br>
            <b><NuxtLink to="/spis-tresci"># Spis treści</NuxtLink></b> -  w tej sekcji znajdują się wsyzstkie artykuły związane z szerokopojętym programowaniem, upożądkowane tematycznie. </br>
            <b><NuxtLink to="/literatora"># Literatura</NuxtLink></b> - ta sekcja poświęcona jest książkom, które przeczytałem i uważam, że warto lub nie je polecać. Każda opisywana tam pozycja została okroszona moimi osobistymi wrażeniami z lektury. </br>
            <b><NuxtLink to="/inne"># Inne</NuxtLink></b> - zawiera dodatkowe podsekcje związane głównie z moimi zainteresowaniami. </br>
            <b><NuxtLink to="/kontakt"># Kontakt</NuxtLink></b> -  sekcja zawierająca informacje kontaktowe. </br>
            <b><NuxtLink to="/o-mnie"># O mnie</NuxtLink></b> -  chcesz dowiedzieć się czegoś więcej o mnie? Tutaj znajdziesz podstawowe informacje i motywacje mną kierujące. </br>
          </ul>
        </p>
      </section>
    </main>
  </div>
</template>
