# Comprendre

Essayez de synthétiser en binôme votre compréhension de la notion que vous avez vue (s'il s'agissait de plusieurs notions, vous pouvez répéter ce paragraphe plusieurs fois) : 
- Quel est son rôle ? 
- Quel est son intérêt ? 
- A-t-elle des désavantages ? 
- Y a-t-il plusieurs façons de s'en servir ? 
- Quelles sont les étapes importantes pour la mettre en place ? 
- Quelles sont les nuances d'un langage à l'autre ? 
- Existe-t-il des contextes (langages, environnements, outils) où elle n'existe pas ? 
- Quelles sont ses alternatives ? 

-------------------------------------------------------------------------------------

## Explication de code

### Source A
```py
class Pet:
	def __init__(self, name, greeting = "Hello"):
		self.name = name
		self.greeting = greeting

	def say_hi(self):
		print(f"{self.greeting}, I'm {self.name}!")

class Cat(Pet):
  def __init__(self, name):
		super().__init__(name, "Meow")

my_pet = Pet("Gaston")
my_pet.say_hi()
```
Ce snippet cree une classe `Pet`, une classe `Cat` qui herite de `Pet`.
Apres la creation, la classe `Pet` est instanciee sous la variable `my_pet`, avec pour attribut `name` `"Gaston"`.
Le code appelle ensuite la methode `.say_hi()` de `my_pet`. Cette fonction ecrira dans la sortie standard `Hello, I'm Gaston!`.

Concernant la classe `Cat`, on peut voir dans son constructeur (`__init__`) un appel vers le constructeur de sa classe parent, a l'aide de la fonction `super()`, ce qui permet d'eviter de reecrire la meme methode plusieurs fois. Cette capacite est l'un des avantages de l'heritage.

### Source B

~~~py
cat = Cat("Félix")
cat.say_hi()
~~~

Le code ci-dessus sert a instancier la classe `Cat` en tant que `cat`, puis d'appeller sa methode `.say_hi()`.
Comme vu avec la **Source A**, `Cat` herite de Pet, comme indique par la ligne `class Cat(Pet):`. Cette classe a donc les methodes de sa classe parent. 