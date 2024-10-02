# javascript and classes

## OOP - Object Orianted Programing

## Objects 
- collection of properties and methods
- loLowerCase

## why use OOP
## Parts of OOP
Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new, this)

## 4 pillars
Abstraction  
Encapsulation
Inheritance
Polymorphim


# Here's what happens behind the scenes when the new keyword is used:

A new Object is created: The new keyword initiates the creatiion of a new JS object.

A prototype is linked: The newly created obj gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

THe constructor is called: THe constructor function is called with the specified arguments and this is bound to the newly created obj. If no explicite return value is specified from the constructor, JS assumes this, the newly created obj, to be the intended return value.

