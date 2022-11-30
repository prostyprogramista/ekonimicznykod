---
id: ebab9f9d-30e0-46ec-9948-01df21620942
title: Zasada DRY
description: |
    Artykuł opisuje zasadę DRY. Dowiesz się co ona oznacza, jak jej używać oraz jak należy ją prawidłowo interpretować.
img: images/header/theory/dry/header-dry.jpg
created_at: '2022-08-10'
modified_at: '2022-11-12'
author_first_name: Andrzej
author_last_name: Kwiatkowski
route: 
    path: /theory/dry
categories: 
    - dobre_praktyki
tags: 
    - teoria
---
## Czym jest zasada DRY?
`DRY` to zasada, która bardzo mocno przyjęła się w świecie programistycznym. Nie ma tutaj się co dziwić. Stosowanie się do tej reguły potrafi niejednokrotnie zaoszczędzić nam wielu problemów i pracy. 

Rozwinięciem skrótu `DRY` jest `Don’t Repeat Yourself`, po polsku można to przetłumaczyć jako `Nie powtarzaj się`. Co do zasady, chodzi tutaj po prostu o to aby nie powielać kolejny raz, tego co zostało już zrobione wcześniej. 

Niby proste. Niby moglibyśmy tutaj zakończyć ten artykuł.., ale? No właśnie, zasada z pozoru trywialna, ale czy aby na pewno wszystko jest takie oczywiste jak mogłoby się to wydawać? 

### Powielenie wiedzy
Powszechnie mówi się o zasadzie `DRY`, jako o zasadzie niezezwalającej na kopiowanie kodu, gdzie w zamian powinniśmy tworzyć funkcje lub metody, które potem będziemy używać w weilu miejscach. To prawda, jednak za tą zasadą kryje się coś więcej i jestem pewny, że nie wszyscy prawidłowo ją interpretują. 

Myśląc o zasadzie `DRY`, powinno się bardziej myśleć jako o zaprzestaniu powielania wiedzy powiązanej z funkcjonalnością aniżeli stricte kopiowania kodu. W końcu kod powstaje na podstawie wiedzy i wymagań opisujących oczekiwania użytkownika końcowego. Czyli tego co ma dana aplikacja robić. Bez takiej wiedzy jest niemożliwe tworzenie oprogramowania. Bo niby skąd mielibyśmy wiedzieć w jakim kierunku należy rozwijać aplikację, skoro nawet nie mamy pojęcia co ona ma robić? 

> Info: <dfn>Każdy kawałek kodu opisujący jakiś wycinek wiedzy na konkretny temat, musi mieć dokładnie jedną, powszechnie znaną reprezentację w ramach tworzonej aplikacji.</dfn>

No dobra, ale czy to i tak nie wychodzi na to samo? 

No nie do końca. Weźmy za przykład rejestracje użytkownika w sklepie internetowym. Mamy tam między innymi takie pola jak numer telefonu i kod pocztowy. Początkowe wymagania zakładają, że pola nie mogą zawierać żadnych liter. Weryfikacja tych założeń mogłaby wyglądać tak. 

```java
public boolean validatePhoneNumber(String value) {
    return value.matches("^\\d{1,}(-\\d{1,}){0,}$"); // Sprawdza czy podana wartość nie jest pusta i czy zawiera liczby, które mogą być oddzielone myślnikiem.
}

public boolean validateZipCode(String value) {
    return value.matches("^\\d{1,}(-\\d{1,}){0,}$"); // Sprawdza czy podana wartość nie jest pusta i czy zawiera liczby, które mogą być oddzielone myślnikiem.
}
```
```kotlin
fun validatePhoneNumber(value: String): Boolean {
    return value.matches(Regex.fromLiteral("^\\d{1,}(-\\d{1,}){0,}$")) // Sprawdza czy podana wartość nie jest pusta i czy zawiera liczby, które mogą być oddzielone myślnikiem.
}

fun validateZipCode(value: String): Boolean {
    return value.matches(Regex.fromLiteral("^\\d{1,}(-\\d{1,}){0,}$")) // Sprawdza czy podana wartość nie jest pusta i czy zawiera liczby, które mogą być oddzielone myślnikiem.
}
```

Jak widać obie metody weryfikujące poprawność danych posiadają tą samą treść. Tylko czy to znaczy, że została tutaj naruszona zasada `DRY`? Czy powinniśmy utworzyć tutaj tylko jedną weryfikującą metodę wspólną dla obu pól? Otóż nie, co prawda kod wewnętrzny jest identyczny jednak wiedza reprezentująca te funkcje różni się. Te dwie funkcje weryfikują poprawność dwóch, niezwiązanych ze sobą rzeczy, dla których akurat w danym momencie obowiązują te same reguły, a to że mamy tak samo wyglądające metody to tylko zbieg okoliczności. 

Jeśli faktycznie wyciągnelibyśmy część wspólną z tych metod to w przypadku zmiany wymagań tylko dla jednej z nich, moglibyśmy nieświadomie zmienić działanie drugiej - co spowodowałoby nieoczekiwane błędy walidacji. Jeśli nawet jeśli bylibyśmy uważni i zauważyli powiązania. Mogłoby się okazać, że omawiane walidatory byłyby już używane w bardzo wielu miejscach. Spowodowałoby to dodatkowy nagład pracy na ekstrakcje i podmianę rozwiązań. 

Ważnym aspektem w podejściu `DRY` jest pamiętanie aby, wiedza na temat istnienia danego rozwiązania była powszechnie znana. Nie tylko przez nas ale również przez pozostałych członków zespołu. Jest to warunek konieczny aby rozwiązania mogłby być dalej propagowane przez wszystkich członków zespołu. 

Dzięki temu jesteśmy w większym stopniu chronieni przed niespójnością naszego kodu. Często pracując jako programista spotykałem się z sytuacjami gdzie defakto te same rozwiązania były implementowane od nowa w różnych miejscach jednego systemu. Powodowało to potem spoko problemów, ponieważ te rozwiązania były często niespójne ze sobą co generowało nieoczekiwane błędy. Można by pomyśleć, że ta niespójność jest winą niekompetentnych programistów lub analityków zbierających wymagania. Otóż nie do końca. Każdy kto jest w branży IT dłuższy czas, na pewno zdaje sobie sprawę, że nie ma nic niezmiennego. Szczególnie jeśli mówimy o wymaganiach biznesowych. Tak więc każda zmiana wymagań skutkuje, zmianami w kodzie. Jeśli mamy x implementacji danego rozwiązania, nie trudno jest zapomnieć o zmianie którejś z nisz szczególnie, że zazwyczaj pozostałe rozwiązania nie są w żaden sposób powiązany z zmienianym kodem co sprawia, że jedyne na co możemy wtedy liczyć to nasza znajomość systemu oraz niezawodna pamięć, która mogłaby nam podsunąć miejsca, w których zmiana wymagań również powinna skutkować modyfikacją kodu. 

## Podsumowanie

`DRY` daje nam kilka bardzo ważnych wskazówek na temat tego jak tworzyć dobre i niezawodne oprogramowanie. Powinno się jednak pamiętać o tym aby nie interpretować tej zasady tylko jako zaprzestania bezmyślnego kopiowania kodu. Do każdego przypadku należy podejść indywidualnie i zastanowić się nad przeznaczeniem tworzonego rozwiązania - może się okazać, że akurat w naszym przypadku zasada `DRY` nie obowiązuje. 

Ważne jest również aby tworzone rozwiązania były szeroko znane przez możliwie jak największe grono oraz aby propagować ich użycie przy każdej nadarzającej się okazji. Dokumentowanie takich powtarzalnych czynności też mogłoby nie być głupim pomysłem. 

Mam nadzieję, że udało mi się nieco przybliżyć koncepcję `DRY`, kto wie, być może nawet rzuciłem na ten temat nieco inne światło. Tak czy inaczej mam nadzieję, że artykuł okazał się pomocny. Jednocześnie zapraszam do komentarzy i zapoznania się z pozostałymi postami na moim blogu. Pozdrawiam i do następnego! :)