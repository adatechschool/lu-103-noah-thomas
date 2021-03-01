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

Noha - POO

```python
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

Ce code en python affiche : 
"Hello, I'm Gaston!"

Et si je rajoute ces 2 lignes :

```python
cat = Cat("Félix")
cat.say_hi()
```

Le code m'affiche :
"Hello, I'm Gaston!"
"Meow, I'm Félix!"

Je crée ensuite la classe Parrot avec une fonction say_hi perso :

```python
class Parrot(Pet):
	def __init__(self, name):
		super().__init__(name, "Ouïe")
	def say_hi(self):
		print(f"{self.greeting}, my name is {self.name}!")
```

Et je crée un nouveau lapin : 

```python
parrot = Parrot("Pinpin")
parrot.say_hi()
```

Le code affiche alors :
"Ouïe, my name is Pinpin!"

```python
class Pet:
	legs = 2

	def __init__(self, name, greeting = "Hello", legs = 2):
		self.name = name
		self.greeting = greeting
		self.legs = legs
		# self.legs = cls.legs

	def say_hi(self):
		print(f"{self.greeting}, I'm {self.name}!")

	@classmethod
	def legs_count(cls):
		return cls.legs

class Cat(Pet):
	legs = 4

	def __init__(self, name):
		super().__init__(name, "Meow", 4)

class Parrot(Pet):
	legs = 2

	def __init__(self, name):
		super().__init__(name, "Ouïe", 2)

	def say_hi(self):
		print(f"{self.greeting}, my name is {self.name}!")

print(Cat.legs_count())
print(Parrot.legs_count())

# cat = Cat("Félix")
# cat.say_hi()
# print(cat.legs_count())

# parrot = Parrot("Pinpin")
# parrot.say_hi()
# print(parrot.legs_count())
```
