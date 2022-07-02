---
id: 91f55a50-8b5a-49ad-9132-18cc93dc69d9
title: UML - Diagram klas
description: |
    W tym artykule dowiemy się czym jest diagram klas, w jakich sytuacjach możemy go używać i w czym może nam pomóc.
img: images/header/header-big-2.jpg
route: 
    path: /uml/diagram-klas
categories: 
    - uml
hash-tags: 
    - projektowanie
    - architektura
    - teoria
---

## Co to jest diagram klas?

Diagram klas służy do opisywania reprezentacji klas oraz związków między nimi. Diagram klas z reguły pokazuje tylko wycinek całej struktury aplikacji – wycinek, który autor danego diagramu w tym momencie ma zamiar opisywać. Przy pomocy diagramu klas możemy opisać w statyczny sposób wizję naszego systemu lub jego części. Dzięki niemu możemy już przed przystąpieniem do programowania określić nazewnictwo, strukturę, korelacje i funkcjonalność poszczególnych elementów w naszej aplikacji.  
  
Diagramu klas nie powinniśmy traktować zbyt serio. Nie chodzi tutaj o to żeby odzwierciedlać każdy najmniejszy szczegół. UML jest narzędziem, które pomaga nam w komunikacji z innymi osobami. Dlatego też nacisk powinien być stawiany bardziej na przejrzystości i konkretności intencji jaką chcemy przekazać innym. Często zbyt duża liczba szczegółów może okazać się niepotrzebnym szumem informacyjnym. Łatwo jest przysłonić motyw przewodni idący za naszym diagramem klas a skomplikowanie może niejednej osobie utrudnić jego interpretację. Osobiście podczas korzystania ze specyfikacji UML polecam skupiać się tylko na najistotniejszych kwestiach – minimalizm wcale nie musi być zły, a czasem nawet wręcz przeciwnie ;)

## Z czego składa się diagram klas?

Diagram klas składa się z graficznych reprezentacji (notacji), opisujących strukturę kodu, jego relację między klasami i ich zachowania. Diagram klas przedstawiany jest przy pomocy bloczków reprezentujących implementacje klas oraz relacje między nimi zachodzące, które ilustrowane są przy pomocy różnego rodzaju linii i strzałek.  

## Reprezentacja klas

Klasy w notacji UML reprezentowane są przy pomocy prostokątów. Prostokąty na samej górze zawierają nazwę przedstawianej klasy.  

Tradycyjne klasy reprezentowane są w następujący sposób: 

![Reprezentacja klasy](/ekonomicznykod/images/uml/class-diagram/class-representation.jpg "Reprezentacja klasy")

```java
public class Animal {
}
```
```kotlin
class Animal {
}
```

Gdy mówimy o klasach pewnie części z Was pomyśli sobie:  

>No dobra ale co jeśli mamy klasę abstrakcyjną?

W takiej sytuacji UML oczywiście również ma swój standard. Klasy abstrakcyjne także prezentowane są poprzez prostokąty zawierające w sobie nazwę klasy, jednak w tym przypadku zapis nazwy musi być pisany kursywą (pochylenie nie jest zarezerwowane wyłącznie dla nazw klas, używane jest również przy atrybutach i metodach abstrakcyjnych – o czym w dalszej części artykułu). 

![Reprezentacja klasy abstrakcyjnej](/ekonomicznykod/images/uml/class-diagram/abstract-class-representation.jpg "Reprezentacja klasy abstrakcyjnej")

```java
public abstract class Animal {
}
```
```kotlin
abstract class Animal {
}
```

Ok, myślę że mówiąc o reprezentacji klas w postaci prostokątów, warto również wspomnieć o interfejsach. Ich przestawienie jest zbliżone do standardowej klasy z tym, że przy interfejsach przed nazwą umieszcza się zapis `«interface»`.

![Reprezentacja interfejsu](/ekonomicznykod/images/uml/class-diagram/interface-representation.jpg "Reprezentacja interfejsu")

```java
public interface Animal {
}
```
```kotlin
interface Animal {
}
```

## Reprezentacja atrybutów

Sama klasa może być dzielona na sekcje. Sekcje na diagramie klas są oddzielane poziomą linią. Z regóły pierwszą sekcją jest sekcja atrybutów, umieszczamy tam pola, które może posiadać nasz obiekt. Atrybut opisujemy następująco: `nazwaAtrybutu: typAtrybutu`.

Weźmy na przykład klasę `Animal`. Jakie moglibyśmy nadać atrybuty zwierzęciu? Każde zwierze musi się jakoś nazywać, na pewno posiada datę narodzin i jakąś swoją wagę. Ok, przedstawmy to przy pomocy UML.

![Reprezentacja klasy z atrybutami](/ekonomicznykod/images/uml/class-diagram/class-with-atributes-representation.jpg "Reprezentacja klasy z atrybutami")

```java
class Animal {
    String name;
    LocalDateTime dateOfBirth;
    double weight;
}
```
```kotlin
data class Animal(
    var name: String,
    var dateOfBirth: LocalDateTime,
    var weight: Double
)
```

Często zdarza się, że atrybuty naszych obiektów mają jakieś wartości początkowe. Przedstawia się to przy pomocy znaku `=`, po którym następuje wartość inicjująca. Poniższy diagram przedstawia taki przypadek, klasa `Animal` posiada parametr `name`, dla którego jako wartość domyślną ustawimy `Koń`. Co sprawia, że każdy nowy obiekt `Animal`, w którym podczas tworzenia nie ustawimy od razu właściwości `name`, domyślnie przyjmie ona wartość `Koń`.

![Reprezentacja klasy z domyślnym atrybutem](/ekonomicznykod/images/uml/class-diagram/class-with-default-atribute-representation.jpg "Reprezentacja klasy z domyślnym atrybutem")

```java
public class Animal {
    String name = "Koń";
    LocalDateTime dateOfBirth;
    double weight;
}
```
```kotlin
data class Animal(
    var name: String = "Koń",
    var dateOfBirth: LocalDateTime,
    var weight: Double
)
```

Kolejnym ważnym aspektem, który możemy chcieć uwzględnić mogą być modyfikatory dostępu. UML uwzględnia cztery główne modyfikatory:  

1. public → +
2. private → -
3. protected → #
4. package → ~

Modyfikatory dostępu wstawiamy zawsze na początku. Na diagramie wyglądałoby to tak.

![Reprezentacja klasy z modyfikatorami dostępu](/ekonomicznykod/images/uml/class-diagram/class-with-modifiers-representation.jpg "Reprezentacja klasy z modyfikatorami dostępu")

```java
public class Animal {
    public String name = "Koń";
    protected LocalDateTime dateOfBirth;
    private double weight;
}
```
```kotlin
data class Animal(
    var name: String = "Koń",
    protected var dateOfBirth: LocalDateTime,
    private var weight: Double
)
```

Następną kwestią jaką chciałbym poruszyć w tym paragrafie jest nadawanie atrybutom jakiś specjalnych właściwości, mogą być nimi na przykład `readOnly` (tylko do odczytu) czy też `unique` (wartość musi być unikalna dla wszystkich obiektów). Jeśli mamy ich więcej niż jeden, oddzielamy kolejne przecinkami np. `{readOnly, unique}`. Właściwości należy dodawać na końcu opisu parametru w nawiasach klamrowych. 

![Reprezentacja klasy z właściwościami atrybutu](/ekonomicznykod/images/uml/class-diagram/class-with-atribute-property-representation.jpg "Reprezentacja klasy z właściwościami atrybutu")

```java
public class Animal {
    public final String name = "Koń";
    protected LocalDateTime dateOfBirth;
    private double weight;
}
```
```kotlin
data class Animal(
    val name: String = "Koń",
    protected var dateOfBirth: LocalDateTime,
    private var weight: Double
)
```

Przy właściwościach obiektu pozostają nam do omówienia tylko wartości statyczne. Przedstawiane są one poprzez podkreślenie.

![Reprezentacja klasy z statycznym atrybutem](/ekonomicznykod/images/uml/class-diagram/class-with-static-atribute-representation.jpg "Reprezentacja klasy z statycznym atrybutem")

```java
public class Animal {
    private static final String DEFAULT_ANIMAL_NAME = "Koń";

    public final String name = DEFAULT_ANIMAL_NAME;
    protected LocalDateTime dateOfBirth;
    private double weight;
}
```
```kotlin
data class Animal(
    val name: String = DEFAULT_ANIMAL_NAME,
    protected var dateOfBirth: LocalDateTime,
    private var weight: Double
) {
    companion object {
        const val DEFAULT_ANIMAL_NAME: String = "Koń"
    }
}
```

## Reprezentacja metod/funkcji

Metody umieszczane są w kolejnej sekcji. Żądzą się one podobnymi regułami co atrybuty:

- Modyfikatory dostępu są te same co przy atrybutach
- Metody statyczne są podkreślane
- Metody abstrakcyjne pisane są kursywą
- Dodatkowe właściwości ujęte są między klamrami na końcu


Ogólna deklaracja:  
`modifier name`(`parametrName`: `parametrType`): `returnType` { `properties` }
  <!-- **TODO** - Przykład do powyższego założenia  -->

`modifier` – modyfikator dostępu  
`name` – nazwa metody/funkcji  
`parametrName` - nazwa parametru  
`parametrType` – typ parametru  
`returnType` – typ zwracanej wartości  
`properties` - właściwości/cechy  
  
Przykład notacji: 
![Reprezentacja klasy z metodami](/ekonomicznykod/images/uml/class-diagram/class-with-methods-representation.jpg "Reprezentacja klasy z metodami")

```java
abstract public class Animal {
    private String name;
    private LocalDateTime dateOfBirth;
    private double weight;

    public static void writeClassName() {
        System.out.println(Animal.class.getSimpleName());
    }

    abstract public String castVote();

    public void changeWeight(double weight) {
        this.weight = weight;
    }
}
```
```kotlin
abstract class Animal(
    private var name: String,
    private var dateOfBirth: LocalDateTime,
    private var weight: Double
) {
    companion object {
        fun writeClassName() {
            println(Animal::class.java.simpleName)
        }
    }

    abstract fun castVote(): String

    fun changeWeight(weight: Double) {
        this.weight = weight
    }
}
```

## Relacje między klasami

W diagramie klas występuje coś takiego jak relacja, która w pewien sposób wskazuje na powiązanie różnych klas. Jest kilka typów relacji, a każda z nich wskazuje nam na nieco inne kwestie. Relacje między klasami zapisuje się poprzez łączenie między sobą klas ciągłymi lub przerywanymi liniami, linie mogą być zakończone różnymi typami strzałem. To jakiej linii i jej zakończenia użyjemy będzie wskazywać na rodzaj korelacji jaki zachodzi między klasami.

### Zależność

Zależność to najsłabsza z wszystkich relacji w notacji UML. Reprezentuje relację dostawca-klient między elementami modelu, gdzie modyfikacja dostawcy może wpływać na elementy modelu klienta. Klientem będzie dla nas klasą, która jest związana w jakiś sposób z klasą dostawcy - bez której klient nie będzie w pełni kompletny. 

Używa się tego wiązania gdy jeden element wymaga innego elementu lub zestawu elementów do jego pełnej implementacji lub działania. 

>Accept: Myśląc o `zależności`, z reguły można przyjąć, że będzie ona występować np. gdy będziemy w jakichś metodach zwracać dostawcę lub używać go jako parametr metody.

>Error: W przypadku gdy klasa od, której zależymy będzie umieszczona jako argument klasy, nie możemy już wtedy mówić o relacji między tymi obiektami w kontekście `zależności`. Używanie klasy dostawcy jako atrybut klasy naszego klienta sprawia, że relacja staje się silniejsza a co za tym idzie `zależność` już jej nie obejmuje.

Zależność przedstawia się w postaci przerywanej strzałki między dwoma elementami modelu. Strzałkę prowadzi się od element modelu klienta do elementu modelu dostawcy, od którego klient jest zależny (grot strzałki skierowany jest w kierunku dostawcy). Strzałka może być oznaczona opcjonalnym słówkiem kluczowym lub stereotypem (objętym znacznikami `«`słówkoKluczoweLubStereotyp`»`) oraz opcjonalną nazwą.

![Ogólne przedstawienie zależności](/ekonomicznykod/images/uml/class-diagram/dependency-first-example.jpg "Ogólne przedstawienie zależności")

UML – Notacja przedstawiająca zależność między dwoma elementami, `FirstElement` jest zależny od `SecondElement`.

Rozważmy przykład: 

![Przykład fabryki przedmiotów](/ekonomicznykod/images/uml/class-diagram/dependency-second-example.jpg "Przykład fabryki przedmiotów")

```java
class Item {
}

public class ItemFactory {

    public Item createItem() {
        return new Item();
    }
}
```
```kotlin
class Item

class ItemFactory {

    fun createItem(): Item = Item()
}
```

Klasa `ItemFactory` jest naszą fabryką, której głównym zadaniem jest tworzenie nowych obiektów `Item` a co za tym idzie, jest też zależna od klasy `Item`. Z racji tego, że nie mamy tutaj jakiś poważniejszych powiązań a tylko używamy klasy `Item` w metodzie - mówimy tutaj o zależności. 

Patrząc na powyższy przykład możesz się pewnie zastanawiać o co chodzi z tym `«Instantiate»`, a no jest to standardowy stereotyp, który mówi nam, że instancja klasy `ItemFactory` tworzy instancję klasy `Item` (o stereotypach będzie jeszcze nieco na końcu). 

Ok, kolejny przykład.

Wyobraźmy sobie sytuację gdzie mamy osobę, która chce wykonać jakąś czynności. Jednak z wymagań wynika, że nasza osoba będzie mogła wykonywać różnego rodzaju akcje, dlatego chcielibyśmy posłużyć się tutaj interfejsem. Moglibyśmy przedstawić to w następujący sposób.

![Przykład osoby wykonującej czynność](/ekonomicznykod/images/uml/class-diagram/dependency-third-example.jpg "Przykład osoby wykonującej czynność")

```java
interface Action {
    void doSomething();
    boolean isFree();
}

public class Person {
    public void useAction(Action action) {
        if(action.isFree()) {
            action.doSomething();
        }
    }
}
```
```kotlin
interface Action {
    fun doSomething()
    fun isFree(): Boolean
}

class Person {
    fun useAction(action: Action) {
        if(action.isFree()) {
            action.doSomething()
        }
    }
}
```

### Asocjacja

Asocjacja jest silniejszym typem relacji niż zależność. Ten typ powiązania mówi nam, że obiekty objęte tą relacją są w pewien sposób od siebie zależne jednak istnienie jednego nie jest uwarunkowane od istnienia drugiego. Asocjacja reprezentuje sytuację, w której jeden obiekt jest jednym z atrybutów klasy drugiego.

>Accept: Asocjacja występuje wtedy gdy jednym z atrybutów naszego obiektu będzie referencja do jakiegoś obiektu – ten atrybut reprezentuje wiązanie asocjacyjne.


Przykład: 
![Przykład asocjacji](/ekonomicznykod/images/uml/class-diagram/association-first-example.jpg "Przykład asocjacji")

```java
class Employee {
    private String firstName;
    private String lastName;
    private String phoneNumber;

    //implementation
}

public class User {
    private String username;
    private String password;
    private Employee employee;

    //implementation
}
```
```kotlin
data class Employee(
    private val firstName: String,
    private val lastName: String,
    private val phoneNumber: String
) {
    //implementation
}

data class User(
    private val username: String,
    private val password: String,
    private val employee: Employee
) {
    //implementation
}
```

To samo można przedstawić nieco ogólniej. Być może nie potrzebujemy wszystkich szczegółów lub nie obchodzi nas jak będzie zbudowana klasa `Employee` wtedy moglibyśmy zdecydować się na taki zapis.

![Przykład asocjacji bez relacji](/ekonomicznykod/images/uml/class-diagram/association-second-example.jpg "Przykład asocjacji bez relacji")

Konsekwencją jednak będzie to, że nie wiemy jak wygląda struktura klasy `Employee`.

#### Liczebność

Przy asocjacjach możemy określać w jaki sposób i jak dużą ilość innych obiektów można powiązać z naszą klasą. Zazwyczaj zapisuje się to przy pomocy liczby, znacznika `*` reprezentującego dowolną liczbę lub zakresu liczb. Odpowiednią wartość zapisuje się na końcu relacji, której chcemy określić liczebność.

Konkretna liczebność: 
- `1` - oznacza dokładnie powiązanie jednego obiektu
- `4` - oznacza dokładnie powiązanie czterech obiektów
- `1, 3, 7` - oznacza powiązanie jednego lub trzech lub siedmiu obiektów
Znacznik:
- `*` - oznacza dowolną ilość obiektów, jakie może przyjąć obiekt w tej relacji (może być tożsamy z `n` używanym często przy algorytmach lub matematyce).
Zakres:
- `0..1` - oznacza przypisanie zera lub jednego obiektu
- `1..*` - oznacza przynajmniej jeden obiekt
- `1..10` - oznacza zakres od jednego do dziesięciu

Wyobraźmy sobie, że chcemy przy pomocy UML przedstawić korelacje liczbową roweru z kołami. Rower na ogół ma dokładnie dwa koła, dlatego i w naszym przypadku tak będzie. Wyobraźmy sobie jakiś rower, ten rower powinien mieć dwa koła, aby to zapisać – na linii relacji należy wpisać liczbę 2 po stronie koła, ponieważ rower musi mieć dokładnie dwa koła. Zmieńmy teraz nieco punkt widzenia i postawmy się w roli koła. Jedno koło może być wykorzystane tylko przy jednym rowerze w danym czasie (nie da się założyć jednego koła, do dwóch rowerów). Dlatego też w naszym diagramie po stronie roweru wstawiamy jedynkę.

![Diagram klas relacji roweru i kół](/ekonomicznykod/images/uml/class-diagram/quantity-first-example.jpg "Diagram klas relacji roweru i kół")

Załóżmy, że chcemy się wybrać z przyjaciółmi zagrać mecz w siatkę. Chcielibyśmy bardzo zagrać, mamy boisko, mamy piłkę jednak jest pewien problem. Nie jesteśmy pewni czy uda nam się zebrać wystarczającą ilość osób do wypełnienia składu w pełni. Jak powszechnie wiadomo drużyna do siatki powinna posiadać dokładnie 6 graczy. Z racji tego, że gramy amatorsko i brakuje nam osób, możemy spokojnie zmniejszyć ilość graczy w naszej drużynie, jednak żeby gra miała jakikolwiek sens liczba osób w drużynie nie powinna być mniejsza niż 3. Zobrazujmy to przy pomocy diagramu klas. Mamy klasę `Team` powiązaną z klasą `Player`. Patrząc od strony drużyny - może ona zawierać minimalnie 3 a maksymalnie 6 zawodników, dlatego wpiszemy przy klasie reprezentującej zawodnika `3..6`.  Jednak patrząc od strony zawodnika – jeden zawodnik powinien należeć tylko do jednej drużyny dlatego od strony reprezentującej drużynę damy wartość 1.

![Diagram klas relacji drużyny z zawodnikami](/ekonomicznykod/images/uml/class-diagram/quantity-second-example.jpg "Diagram klas relacji drużyny z zawodnikami")

Gdy robimy zakupy w sklepie internetowym, nasze zamówienia muszą mieć przynajmniej jeden produkt aby dokonać zakupów, jednak nie musimy się ograniczać wyłącznie do jednej rzeczy.

![Diagram klas relacji zamówienia z przedmiotami](/ekonomicznykod/images/uml/class-diagram/quantity-third-example.jpg "Diagram klas relacji zamówienia z przedmiotami")

Poniższy przykład obrazuje relację między jakąś grupą tematyczną w serwisie społecznościowym a użytkownikiem. Grupa mogłaby istnieć bez żadnych przypisanych do niej użytkowników lecz może również zawierać dowolną ilość takich użytkowników. Tak samo użytkownik może nie być przypisany do żadnej grupy ale może być też zapisany do wielu takich grup.

![Diagram klas grup i osób](/ekonomicznykod/images/uml/class-diagram/quantity-fourth-example.jpg "Diagram klas grup i osób")

Powyższy przykład można zapisać również w ten sposób.

![Diagram klas grup i osób alternatywny zapis](/ekonomicznykod/images/uml/class-diagram/quantity-fifth-example.jpg "Diagram klas grup i osób alternatywny zapis")

#### Kierunek

Na diagramie można zaznaczyć kierunek naszej asocjacji, oznacza to w którym kierunku następuje przepływ danych.

Używając asocjacji bezkierunkowej mówimy czytelnikom naszego diagramu, że jest to dla nas nieistotny aspekt – uogólniamy wtedy nieco nasz diagram, co może komunikować, że wchodzimy na wyższy poziom abstrakcji lub nie interesuje nas to w jaki sposób dany przypadek zostanie zrealizowany/zaimplementowany. 

Kierunek asocjacji określa się wstawieniem na końcu wiązania strzałki. W takim przypadku nawigacja jest możliwa tylko zgodnie z jej kierunkiem. Oznacza to tyle, że można odwoływać się tylko do obiektu, w kierunku którego skierowany jest grot (tylko obiekt, z którego wychodzi linia posiada jako atrybut obiekt podrzędny - obiekt podrzędny nie ma w sobie odniesienia do obiektu nadrzędnego, a więc nie może się do niego odnieść).

![Diagram klas z relacją kierunkową](/ekonomicznykod/images/uml/class-diagram/directory-first-example.jpg "Diagram klas z relacją kierunkową")

```java
class Employee {
    private String firstName;
    private String lastName;
    private String phoneNumber;

    //implementation
}

public class User {
    private String username;
    private String password;
    private Employee employee;

    //implementation
}
```
```kotlin
data class Employee(
    private val firstName: String,
    private val lastName: String,
    private val phoneNumber: String
) {
    //implementation
}

data class User(
    private val username: String,
    private val password: String,
    private val employee: Employee
) {
    //implementation
}
```

Nadawany kierunek asocjacji nie musi być wyłącznie jednostronny, możemy również tworzyć relacje dwukierunkowe. Patrząc na relacje, relacje dwukierunkowe są unikalną cechą wszystkich typów asocjacji (mowa tutaj nie tylko o asocjacji ale również o specjalnych jej rodzajach czyli agregacji częściowej i agregacji całkowitej – o których będę prawił w dwóch kolejnych sekcjach :D).

Rozważmy przypadek sklepu internetowego. Chcemy zamodelować relację zamówienia z klientem. Wiemy, że zamówienie jest tworzone po tym gdy klient zdecyduje się na jakiś zakup. Samo zamówienie nie może istnieć bez klienta a klient jest twórcą zamówienia – dlatego po stronie klienta użyjemy `kompozycji`. Zamówienie posiada wiedzę o tym, kto jest autorem zamówienia lecz z drugiej strony klient nie musi mieć żadnych zamówień, dlatego też mamy tutaj relację `agregacji`. Opisaną sytuację przedstawia poniższa notacja.

![Diagram klas z relacją dwukierunkową](/ekonomicznykod/images/uml/class-diagram/directory-second-example.jpg "Diagram klas z relacją dwukierunkową")

### Agregacja częściowa (Agregacja)

Agregacja częściowa jest to swego rodzaju odmiana asocjacji. Jest mocniejszym i bardziej szczegółowym typem asocjacji. Agregowanie obiektu to nic innego jak określenie, że jeden obiekt jest właścicielem drugiego. Agregacja częściowa mówi nam, że jest jakiś obiekt właściciela, który zawiera w sobie obiekt reprezentujący część właściwości obiektu właściciela. Dodatkowo agregacja częściowa sygnalizuje, to że oba obiektu mogą istnieć również niezależnie od siebie.

Oznacza się ją ciągłą linią (linią asocjacyjną) z pustym rąbem od strony klasy agregującej (zawierającej klasę agregowaną).

>Accept: Agregacja będzie na ogół występować gdy w klasie posiadamy atrybut obiektu agregowanego, który pod względem cyklu życia nie jest ściśle związany z obiektem swojego właściciela (obiekty mogą istnieć niezależnie od siebie). Po usunięciu obiektu agregującego, obiekt agregowany nadal może istnieć.

>Warning: Jeśli spotkasz się z określeniem `agregacja` bez skonkretyzowania czy jest to agregacja częściowa czy całkowita, będzie to oznaczać, że jest to agregacja częściowa.

Niniejszy przykład przedstawia relacje między osobą a jej adresem zamieszkania. Osoba posiada adres zamieszkania a więc agreguje go - dlatego grot jest po stronie klasy `Person`. Jednak człowiek nie jest na stałe przypisany do jednego adresu przez całe swoje życie. Może się przeprowadzić a nawet zostać bezdomnym :D Więc nie jesteśmy tutaj na stałe związani z adresem. Z drugiej jednak strony, pod jednym adresem zamieszkania może mieszkać kilka osób, stąd też adres po wyprowadzce jednego z domowników nadal będzie miał swoich mieszkańców. Pójdźmy nawet dalej, powiedzmy że wszyscy się wyprowadzili spod wskazanego adresu – budynek nadal będzie stał, więc adres nadal będzie obowiązywał. Widzimy tutaj jak i jeden i drugi obiekt może istnieć bez siebie rozłącznie. O tym właśnie mówi nam koncepcja agregacji częściowej (w skrócie agregacji).

![Diagram klas z relacją agregacji](/ekonomicznykod/images/uml/class-diagram/aggregation.jpg "Diagram klas z relacją agregacji")

```java
class Address {
    private String city;
    private String street;
    private String numberOfHouse;

    public Address(String city, String street, String numberOfHouse) {
        this.city = city;
        this.street = street;
        this.numberOfHouse = numberOfHouse;
    }

    // implementation getters and setters
}

public class Person {
    private final String firstName;
    private final String lastName;
    private Address address;

    Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    // implementation getters
}
```
```kotlin
data class Address(
    var city: String,
    var street: String,
    var numberOfHouse: String
)

class Person(firstName: String, lastName: String) {
    var firstName: String
        private set
    var lastName: String
        private set
    var address: Address? = null

    init {
        this.firstName = firstName
        this.lastName = lastName
    }
}
```

Mówiąc o agregacji jak i o każdym rodzaju asocjacji – możemy nadawać wartości liczbowe związane z daną relacją.

### Agregacja całkowita (Kompozycja)

Agregacja całkowita jest to swego rodzaju odmiana asocjacji – jej najmocniejszy wariant. Kompozycja agreguje przez obiekt inny obiekt i co ważne jest jego jedynym właścicielem. W kompozycji obiekt agregujący zarządza całym cyklem życia obiektu agregowanego (tworzy, usuwa, zarządza).

Notacja kompozycji to linia asocjacyjna z wypełnionym rombem po stronie właściciela obiektu agregowanego.

>Accept: O kompozycji będziemy mówić gdy jeden obiekt jest wyłącznym właścicielem innego. Przy kompozycji na ogół klasa właściciela posiada w argumentach prywatny atrybut przechowujący obiekt agregowany oraz posiada w swojej implementacji sposób tworzenia tych obiektów. Klasa agregowana nie może żyć bez swojego właściciela.

>Warning: Jeśli spotkasz się z określeniem `kompozycja` w kontekście relacji, będzie to oznaczać, że jest to agregacja całkowita.

Kompozycję możemy przedstawić na przykładzie książki telefonicznej. Książka telefoniczna zawiera w sobie strony, jest ich właścicielem. Jednocześnie jeśli zniszczymy książkę strony również ulegną zniszczeniu – możemy ją dla przykładu spalić, raczej wątpliwe żeby jakieś strony się uchowały :D Strony nie mogą istnieć bez książki, a nawet jeśli, straciły by wtedy kontekst a tym samym swoją wartość. 

![Diagram klas z relacją kompozycji](/ekonomicznykod/images/uml/class-diagram/composition.jpg "Diagram klas z relacją kompozycji")


```java
class Page {
    private int pageNumber;

    public Page(int pageNumber) {
        this.pageNumber = pageNumber;
    }
}

public class PhoneBook {
    private List<Page> pages = new LinkedList<>();

    public PhoneBook() {
        for(int i = 1; i <= 100; i++) {
            Page newPage = new Page(i);

            pages.add(newPage);
        }
    }
}
```
```kotlin
class Page(private val pageNumber: Int)

class PhoneBook {
    private val pages: MutableList<Page> = LinkedList()

    init {
        for (i in 1..100) {
            val newPage = Page(i)
            
            pages.add(newPage)
        }
    }
}
```

Mówiąc o kompozycji jak i o każdym rodzaju asocjacji – możemy nadawać wartości liczbowe związane z daną relacją.

### Dziedziczenie

Relacja dziedziczenia wskazuje na rozszerzanie obiektów, co sprawia że współdzielą swoje funkcjonalności. Jest to najsilniejsza z wszystkich relacji. Dziedziczenie w UML zobrazowane jest przy pomocy strzałki z pustym grotem na jej końcu, grot wskazuje na rozszerzaną klasę.

>Accept: Używana przy dziedziczeniu. 

![Diagram klas obrazujący dziedziczenie](/ekonomicznykod/images/uml/class-diagram/inheritance.jpg "Diagram klas obrazujący dziedziczenie")

```java
class Animal {
}

class Cat extends Animal {
}

class Dog extends Animal {
}
```
```kotlin
open class Animal

class Cat : Animal()
class Dog : Animal()
```

### Implementacja interfejsu

Gdy mamy jakiś interface i chcemy wskazać, że któraś z klas implementuje jego funkcjonalność używamy podobnej notacji co w przypadku dziedziczenia z tą różnicą, że tutaj linia prowadząca strzałkę będzie przerywana.

>Accept: Używana w przypadku chęci wskazania, że jakaś klasa implementuje nasz interfejs.

![Diagram klas obrazujący implementacje interfejsu](/ekonomicznykod/images/uml/class-diagram/implementation.jpg "Diagram klas obrazujący implementacje interfejsu")

```java
interface Animal {
    void doSomething();
}

class AnimalImpl implements Animal {
    public void doSomething() {
        //implementation
    }
}
```
```kotlin
interface Animal {
    fun doSomething()
}

class AnimalImpl : Animal {
    override fun doSomething() {
        //implementation
    }
}
```

## Interfejsy

O interfejsach już nieco wspominałem wcześniej, jednak temat nie został wyczerpany do końca. Interfejs można wyznaczać przy użyciu standardowej notacji klasy ze słówkiem kluczowym `«interface»`. Przedstawia to poniższy diagram.

![Diagram klas przedstawiający powiązania z interfejsem Action](/ekonomicznykod/images/uml/class-diagram/interface-first-example.jpg "Diagram klas przedstawiający powiązania z interfejsem Action")

Alternatywą i uproszczeniem do tego sposobu przedstawiania interfejsów jest notacja kołowa (zwana również lizakiem). Używając tego sposobu przedstawiania interfejsów, ukrywamy szczegóły z nim związane np. metody, które w sobie zawiera. Notacja lizaka przedstawiana jest za pomocą kółka połączonego ciągłą linią z klasą, która ten interfejs implementuje. Przy notacji kółka należy umieszczać nazwę interfejsu, który sobą reprezentuje. Poniższy rysunek przedstawia to samo co dolna część poprzedniego diagramu (interfejs `Action` oraz klasę implementującą `ActionImpl`).

![Diagram klas przedstawiający notacje lizakową implementacji intefejsu Action](/ekonomicznykod/images/uml/class-diagram/interface-second-example.jpg "Diagram klas przedstawiający notacje lizakową implementacji intefejsu Action")

Do notacji lizakowej można również dodać zależność innej klasy od naszego interfejsu. Zapisuje się to przy pomocy tak zwanego gniazda – przedstawiane jest to poprzez półokrąg połączony ciągłą linią do klasy, która zależy od naszego interfejsu. Poniżej przedstawiono reprezentację wizualną. Przykład przedstawia klasę person oraz relację zależności od interfejsu.

![Diagram klas przedstawiający notacje zależności od intefejsu Action](/ekonomicznykod/images/uml/class-diagram/interface-third-example.jpg "Diagram klas przedstawiający notacje zależności od intefejsu Action")

Chcąc zobrazować przy pomocy notacji lizakowej pierwszy rysunek tego działu - moglibyśmy zrobić to w ten sposób.

![Diagram klas z pierwszego obrazka w notacji lizakowej](/ekonomicznykod/images/uml/class-diagram/interface-fourth-example.jpg "Diagram klas z pierwszego obrazka w notacji lizakowej")

Z punktu widzenia funkcjonalności oba rysunki przedstawiają to samo.

## Typy enumeryczne

Typy enumeryczne zapisuje się podobnie co interfejsy, wystarczy przed nazwą klasy wstawić `«enumeration»`. Przy klasach enumerycznych możemy również wypisać wszystkie możliwości jakie ta klasa przyjmuje, zapisuje się je w osobnej sekcji.

![Diagram klas z enumem](/ekonomicznykod/images/uml/class-diagram/enumeration.jpg "Diagram klas z enumem")

```java
public enum Animal {
    MAMMAL, 
    BIRD, 
    FISH, 
    REPTILE, 
    AMPHIBIAN
}
```
```kotlin 
enum class Animal {
    MAMMAL, 
    BIRD, 
    FISH, 
    REPTILE, 
    AMPHIBIAN
}
```

## Szablony – typy generyczne

UML uwzględnia również szablony, możemy dzięki nim opisywać typy generyczne. Typy generyczne opisane są w górnym prawym rogu w ramce z przerywanych linii. Powiedzmy, że chcemy zrobić sobie szablon naszych klas repozytoriów do komunikacji z bazą danych zapewniającą nam podstawowe operacje `CRUD`. Użyjemy do tego typów generycznych.

![Przykład diagramu klas dla typów generycznych](/ekonomicznykod/images/uml/class-diagram/generic-type.jpg "Przykład diagramu klas dla typów generycznych")

```java
public class AbstractRepository<ENTITY, ID> {
    public ENTITY getById(ID id) {
        //implementation
    }

    public List<ENTITY> getAll() {
        //implementation
    }

    public ENTITY create(ENTITY entity) {
        //implementation
    }

    public ENTITY update(ENTITY entity) {
        //implementation
    }

    public boolean delete(ENTITY entity) {
        //implementation
    }

    public boolean deleteById(ID id) {
        //implementation
    }
}
```
```kotlin 
class AbstractRepository<ENTITY, ID> {
    fun getById(id: ID): ENTITY {
        //implementation
    }

    fun getAll(): List<ENTITY> {
        //implementation
    }

    fun create(entity: ENTITY): ENTITY {
        //implementation
    }

    fun update(entity: ENTITY): ENTITY {
        //implementation
    }

    fun delete(entity: ENTITY): Boolean {
        //implementation
    }

    fun deleteById(id: ID): Boolean {
        //implementation
    }
}
```

W tym przykładzie użyliśmy dwóch typów generycznych, jednego reprezentującego typ naszej klasy `ENTITY` oraz `ID` reprezentującego typ naszego identyfikatora.

## Klasy zagnieżdżone

Jeśli chcielibyśmy użyć klas zagnieżdżonych, UML daje nam taką możliwość. Wystarczy w nasz prostokąt wpisać kolejny prostokąt – reprezentujący klasę wewnętrzną. Poniżej przykład.

![Przykład klas zagnieżdżonych przy użyciu diagramu klas](/ekonomicznykod/images/uml/class-diagram/generic-type.jpg "Przykład klas zagnieżdżonych przy użyciu diagramu klas")

```java
public class OuterClass {
    private int firstField;
    private long secondField;

    public int getFirstField() {
        return firstField;
    }

    class FirstInnerClass {
        public void doSome() {
        }

        class InnerInnerClass {
            public int field;
        }
    }

    class SecondInnerClass {
        public boolean field;
    }
}
```
```kotlin
class OuterClass {
    val firstField: Int? = null
    private val secondField: Long? = null

    class FirstInnerClass {
        fun doSome() {}

        class InnerInnerClass {
            var field: Int? = null
        }
    }

    class SecondInnerClass {
        var field: Boolean? = null
    }
}
```

## Stereotypy

UML w swojej notacji opisuje zbiór standardowych stereotypów. Stereotypy są predefiniowane w specyfikacji UML. Każdy stereotyp umieszczany jest między znacznikami `«...»` a nazwa stereotypu pisana jest dużą literą. Stereotypy mogą być stosowane w różnych kontekstach i mają swoje przeznaczenie oraz opis, przykładami stereotypu może być `«Instantiate»`, `«Entity»`, `«Type»`, `«Library»`, `«Process»`, `«Script»`. Pełną listę wraz z ich przeznaczeniem i opisem znajdziesz w [oficjalnej specyfikacji UML](https://www.omg.org/spec/UML/2.5.1/PDF#%5B%7B%22num%22%3A2829%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C99.9%2C735.3%2C0%5D).

>Warning: Znaczniki `«…»` nie są zarezerwowane wyłącznie dla stereotypów, można w nich umieszczać również słówka kluczowe, należy jednak pamiętać aby pisać je z małych liter.

`«interface»` - słówko kluczowe  
`«Service»` - stereotyp

## Podsumowanie

Mam nadzieję, że przedstawiony post nieco przybliżył Ci tajniki związane z diagramem klas. Zdaję sobie sprawę, że w powyższym wpisie nie zgłębiłem całkowicie wszystkich aspektów związanych z tym tematem. Jednak uważam, że informacje zawarte w tym artykule pozwolą każdemu opanować tajniki diagramu klas na dość dobrym poziomie co przełoży się na zrozumienie oraz samodzielne tworzenie poprawnych diagramów klas. Diagram klas może okazać się bardzo przydatny przy projektowaniu nowoczesnych aplikacji i systemów informatycznych, dlatego też zachęcam do jego korzystania. Często wcześniejsze rozpisanie sobie oczekiwanej architektury może uwidocznić nam problemy, których na pierwszy rzut oka można nie zauważyć, będzie się to przekładać na zaoszczędzony czas już na etapie implementacji aplikacji. 

Pragnę jeszcze raz zaznaczyć, że z diagramem klas nie należy przesadzać. Często rozpisywanie najdrobniejszych szczegółów w UML może okazać się stratą czasu a nawet niepotrzebnym skomplikowaniem zaciemniającym tylko naszą intencję zobrazowania oczekiwanego rezultatu. UML jest tylko narzędziem a jak każde narzędzie zostało stworzone po to aby nam ułatwiać a nie komplikować pracę. 

Jeśli chcesz sprawdzić moje pozostałe wpisy o notacji UML możesz je znaleźć [» tutaj «](https://prostyprogramista.github.io/ekonomicznykod/ostatnie/?category=uml)  

Natomiast jeśli chciałbyś abym opisał inny rodzaj diagramu UML napisz o tym proszę w komentarzu :)