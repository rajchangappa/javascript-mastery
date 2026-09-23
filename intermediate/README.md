# JavaScript Intermediate: The Machinery Behind the Syntax

## A Small Map of Hidden Behavior

This guide explores the JavaScript mechanisms that become important when code grows beyond simple scripts: where variables live, how functions remember data, how method calls choose `this`, and how objects share behavior. Each section pairs a practical definition with a compact example and a look at what JavaScript is doing underneath.

## The Story Behind the Objects

JavaScript is often described as a prototype-based language, even though its `class` syntax looks familiar to developers from class-based languages. Functions create scopes and closures, objects delegate property lookups through prototype chains, and classes provide a clearer syntax for configuring that delegation. Understanding these foundations makes callbacks, constructors, methods, and inheritance more predictable.

## Topics: The Language Under the Surface

### 1. Scope Station: Function Scopes

A function creates a local scope for its parameters and variables declared with `let`, `const`, or `var`. Code outside the function cannot directly access those local bindings. JavaScript uses lexical scoping, so a function can access variables from the scopes where it was written. A nested function searches its own scope first, then moves outward through its surrounding scopes.

```js
const label = "outside";

function showLabel() {
  const label = "inside";
  console.log(label); // inside
}

showLabel();
console.log(label); // outside
```

### 2. Closure Workshop: Functions That Remember

A closure is a function together with the variables available in its surrounding lexical scope. When an inner function uses an outer variable, JavaScript keeps that variable available even after the outer function has returned. Closures are useful for private state, callbacks, and function factories. Each call to the factory creates a separate environment.

```js
function createCounter() {
  let count = 0;
  return () => ++count;
}

const firstCounter = createCounter();
console.log(firstCounter()); // 1
console.log(firstCounter()); // 2
```

### 3. Context Compass: `this`

`this` is determined mainly by how a function is called, not where the function was defined. In `object.method()`, `this` refers to `object`; with `new`, it refers to the new instance; and with `call`, `apply`, or `bind`, it can be chosen explicitly. Arrow functions do not create their own `this`; they inherit it from the surrounding scope. Avoid relying on an accidental call style when the receiver matters.

```js
const user = {
  name: "Ada",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Ada
const greet = user.greet;
greet(); // undefined in strict mode
```

### 4. Immediate Workshop: IIFEs

An Immediately Invoked Function Expression, or IIFE, is a function expression that is created and called immediately. It creates a private scope without adding its variables to the surrounding scope. IIFEs were commonly used for encapsulation before modules became standard. They still appear in scripts that need one-time setup or isolated initialization.

```js
const settings = (() => {
  const apiUrl = "https://example.com";
  return { apiUrl };
})();

console.log(settings.apiUrl);
// apiUrl is not available as a top-level variable.
```

### 5. Delegation Desk: Prototypal Inheritance

In prototypal inheritance, an object can delegate property lookup to another object. `Object.create` makes this relationship explicit, while constructor functions can share methods through their `prototype` property. The child object does not copy inherited methods; it looks them up when needed. Own properties still take precedence over properties found on the prototype.

```js
const animal = {
  speak() {
    return "sound";
  },
};

const dog = Object.create(animal);
dog.speak = () => "woof";
console.log(dog.speak()); // woof
```

### 6. Lookup Ladder: The Prototype Chain

When JavaScript evaluates `object.property`, it first checks the object itself. If the property is missing, it follows the internal prototype link, commonly observed with `Object.getPrototypeOf`, and continues until it finds the property or reaches `null`. This sequence is the prototype chain. Methods such as `toString` are available because ordinary objects eventually delegate to `Object.prototype`.

```js
const base = { kind: "base" };
const child = Object.create(base);
child.name = "child";

console.log(child.kind); // base
console.log(Object.hasOwn(child, "kind")); // false
console.log(Object.getPrototypeOf(child) === base); // true
```

### 7. Class Understudy: How JavaScript Classes Work Under the Hood

A JavaScript `class` is syntax for creating constructor behavior and configuring prototypes; it does not replace the prototype system. Methods written in a class body are placed on the constructor's `prototype`, so instances share one method rather than receiving a separate copy. `extends` links the subclass prototype to the parent prototype, and `super` delegates to the parent constructor or method.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const ada = new Person("Ada");
console.log(ada.greet());
console.log(Object.hasOwn(Person.prototype, "greet")); // true
console.log(Object.hasOwn(ada, "greet")); // false
```

The class above is conceptually similar to a constructor function with a shared prototype method:

```js
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, ${this.name}`;
};
```

## The Next Step Forward

These concepts explain many JavaScript surprises: a callback losing its receiver, a method being shared across instances, or a value remaining alive after a function returns. Practice by writing a private counter with a closure, comparing an object created with `Object.create` to a class instance, and tracing each property lookup through its prototype chain.
