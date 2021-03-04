# Expliquer

## Encapsulation

L'encapsulation est une maniere de stocker des donnees dans une meme entite, comme par exemple en ***paquet*** en reseau, ou bien en ***class*** en Python.

## Abstraction

L'abstraction permet de creer des schemas pour construire des objets.
Par exemple, une classe abstraite contient les methodes qui seront incluses dans ses sous-classes.

## Héritage

L'heritage permet de passer des attributs d'un objet parent a un objet enfant, evitant ainsi de repeter des methodes reutiliser dans plusieurs enfants differents.

## Polymorphisme

Le polymorphisme est le principe voulant qu'une fonction puisse etre utlisees dans differents contextes, avant differents types de donnees.

## Classe vs. Instance

Une Classe est un ensemble de membre constituant un objet.
Par exemple (Ruby):

```ruby
class Rectangle
    attr_reader :largeur, :longeur
    @@cotes = 4
    def initialize(largeur,longueur)
        @largeur = largeur.to_i
        @longueur = longueur.to_i
    end
```
Ce *snippet* cree une classe `Rectangle`, qui prend 2 parametres a l'instanciation, `largeur` et `longueur`, et qui possede aussi un attribut `cotes` egal a 4.
L'instanciation de  cette classe ce ferait comme suit:
```ruby
mon_rectangle = Rectangle.new(4,12)
```
Et creera un objet `Rectangle` sous le nom `mon_rectangle`, avec pour parametres `4` et `12`.

Une instance quant a elle est une occurence d'une classe, soit, pour reprendre l'exemple precedent, `mon_rectangle`.

## Classe
Une Classe est un ensemble de membre constituant un objet.
Par exemple (Python):

```python
class Rectangle:
    cotes=4
    def __init__(self,largeur,longueur):
        self.largeur = largeur
        self.longueur = longueur
```
Ce *snippet* cree une classe `Rectangle`, qui prend 2 parametres a l'instanciation, `largeur` et `longueur`, et qui possede aussi une variable de classe `cotes` egale a 4.

## this / self

Les mots-clefs `this` et `self` servent a representer l'instance de la classe.

## Constructeur

Un constructeur est une methode appelee lors de l'instanciation d'une classe, afin de lui definir des attributs par defaut.

## Méthode

Une methode est une fonction propre a une classe.

## Attribut / propriété / membre

Un Attribut/propriete represente un etat dans lequel est la classe
Un membre represente aussi bien une methode qu'un attribut.

## Interface

Une interface est une description du comportement d'un objet face a certaines situations.
Exemple (Python):

```python
class Ecole:
    def __init__(self,nom,nb_elv,domaine,lst_promo):
        self.__nom =nom
        self.__nb_elv=nb_elv
        self.__domaine=domaine
        self.__lst_promo=lst_promo
    def __contains__(self,promo):
        return promo in self.__lst_promo

ada_tech_school = Ecole("Ada Tech School", 60, "Developpement",["Bella Guerin", "Beatrice Worsley"])

print("Bella Guerin" in ada_tech_school)
```

Si l'interface pour `in` (`__contains__`) n'etait pas definie, l'erreur suivante serait levee:
```python
TypeError: 'Ecole' object is not iterable
```

Ici, on a indique que `<valeur> in <cible>` devait renvoyer la valeur de `<valeur> in <cible.__lst_promo>`, evitant ainsi l'erreur precedente, puisque l'attribut `__lst_promo` est une liste, et les liste sont iterable en Python.