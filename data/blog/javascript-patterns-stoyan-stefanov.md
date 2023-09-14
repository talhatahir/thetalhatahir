---
title: 'Book Highlights: JavaScript patterns by Stoyan Stefanov'
date: '2023-06-01'
tags: ['writings', 'books']
layout: 'PostSimple'
summary: 'My selected highlights and thoughts on the book by Stoyan Stefanov about Javascript patterns generated using highlightextractor.com'
images:
  ['https://cdn.waterstones.com/bookjackets/large/9780/5968/9780596806750.jpg']
---

![JavaScript Patterns by Stoyan Stefanov](https://cdn.waterstones.com/bookjackets/large/9780/5968/9780596806750.jpg)

**Completed Book on : 12th August 2021**

Highlights were extracted using [highlightextractor.com](https://www.highlightextractor.com/)

---

### Main Summary

This book highlights some of the patterns which you should use in Javascript code. Keep in mind how flexible Javascript is since it's a weakly typed language and it gives the developer full liberty to do one thing in 10 ways. At times, the best thing when using Javascript is to follow a consistent approach. Other than approach, there are some good and bad parts of Javascript since it's almost as old as Web itself. This book highlights and cautions you to use the good parts and avoid some of the bad parts of this dynamically typed language.

## Highlights

**If you spot the use of eval() in your code, remember the mantra “eval() is evil.” This function takes an arbitrary string and executes it as JavaScript code. When the code in question is known beforehand (not determined at runtime), there’s no reason to use eval().**

Eval is evil because it is vulnerable to XSS aka cross-site scripting. You can find tons of articles online on the disadvantage of using eval(). In most cases, if you are in a situation where you have to use eval() then it means your code is not that good. Better refactor it rather than using eval. eval() is EVIL!

**It’s also important to remember that passing strings to setInterval(), setTimeout(), and the Function() constructor is, for the most part, similar to using eval() and therefore should be avoided.**

Another anti-pattern which you should avoid. Its pretty similar to eval and you should avoid it. Seemlessly

**_antipatterns_**

```js
setTimeout('myFunc()', 1000);

setTimeout('myFunc(1, 2, 3)', 1000);
```

**_preferred_**

```js
setTimeout(myFunc, 1000);

setTimeout(function () {
  myFunc(1, 2, 3);
}, 1000);
```

**To avoid inconsistency and unexpected results, always specify the radix parameter:**

```js
var month = '06',
  year = '09';

month = parseInt(month, 10);

year = parseInt(year, 10);
```

In this example, if you omit the radix parameter like parseInt(year), the returned value will be 0, because “09” assumes octal number (as if you did parseInt(year, 8)) and 09 is not a valid digit in base 8.

**It’s important to establish and follow coding conventions—they make your code consistent, predictable, and much easier to read and understand. A new developer joining the team can read through the conventions and be productive much sooner, understanding the code written by any other team member.if you’re the one suggesting the adoption of conventions in your organization, be prepared to face resistance and hear different but equally strong opinions. Remember that it’s much more important to establish and consistently follow a convention, any convention, than what the exact details of that convention will be.**

This is pretty important because Javascript gives you a lot of freedom as a developer so you need to set down consistent patterns as quickly as you can. This then becomes easier for a new joiner to understand the patterns being used and he can easily adjust to them quickly.

**Curly braces should always be used, even in cases when they are optional. Technically, if you have only one statement in an if or a for, curly braces are not required, but you should always use them anyway. It makes the code more consistent and easier to update.**

**Imagine you have a for loop with one statement only. You could omit the braces and there will be no syntax error:**

```js

 // bad practice
 for (var i = 0; i &lt; 10; i += 1)
 alert(i);

//But what if, later on, you add another line in the body of the loop?
// bad practice

for (var i = 0; i &lt; 10; i += 1)
 alert(i);
 alert(i + " is " + (i % 2 ? "odd" : "even"));

```

**The second alert is outside the loop although the indentation may trick you. The best thing to do in the long run is to always use the braces, even for one-line blocks:**

```js
// better

for (var i = 0; i &lt; 10; i += 1) {
    alert(i);
}
```

**Similarly for if conditions:**

```js
// bad
if (true) alert(1);
else alert(2);

// better
if (true) {
  alert(1);
} else {
  alert(2);
}
```

```js
// warning: unexpected return value function

 func() { return { name: "Batman" }; }

```

**If you expect this function to return an object with a name property, you’ll be surprised. Because of the implied semicolons, the function returns undefined. The preceding code is equivalent to this one:**

```js
 // warning: unexpected return value function
 func() { return undefined;

 // unreachable code follows... { name: "Batman" }; }
```

**In conclusion, always use curly braces and always put the opening one on the same line as the previous statement:**

```js
**func() { return { name: "Batman" }; }**
```

Always use curly braces and semi-colons.

**A note on semicolons: Just like with the curly braces, you should always use semicolons, even when they are implied by the JavaScript parsers. This not only promotes discipline and a more rigorous approach to the code but also helps resolve ambiguities, as the previous example showed.**

Always use semi-colons.

**Another way to make your code more predictable and maintainable is to adopt naming conventions. That means choosing names for your variables and functions in a consistent manner. Below are some naming convention suggestions that you can adopt as-is or tweak to your liking. Again, having a convention and following it consistently is much more important than what that convention actually is.**

**When you have multiple words in a variable or a function name, it’s a good idea to follow a convention as to how the words will be separated. A common convention is to use the so-called camel case. Following the camel case convention, you type the words in lowercase, only capitalizing the first letter in each word. For your constructors, you can use upper camel case, as in MyConstructor(), and for function and method names, you can use lower camel case, as in myFunction(), calculateArea() and getFirstName().**

Use camelCase for functions and for constructors, use Pascal Case. The main thing is to keep things consistent so there is a pattern seen in how you are naming your variables and functions.

**there is no way to define constants in JavaScript (although there are some built-in such as Number.MAX_VALUE), so developers have adopted the convention of using all-caps for naming variables that shouldn’t change values during the life of the program, like: // precious constants, please don't touch var PI = 3.14,**

For constants, the recommended approach is ALL_CAPS with underscores between words. This convention has been picked up from the in-built constant values in Javascript.

**Another case of using a convention to mimic functionality is the private members convention. Although you can implement true privacy in JavaScript, sometimes developers find it easier to just use an underscore prefix to denote a private method or property.**

Similarly like constants, to denote the usage of a private method, we use \_ before it.

**You shouldn’t go overboard commenting the obvious: every single variable or every single line. But you usually need to document all functions, their arguments and return values, and also any interesting or unusual algorithm or technique. Think of the comments as hints to the future readers of the code; the readers need to understand what your code does without reading much more than just the comments and the function and property names.**

Comments are helpful in case what you are commenting about isn’t obvious. It's a good idea to leave a comment or two for your future readers.

**Most developers consider writing documentation a boring and unrewarding task. But that doesn’t have to be the case. API documentation can be auto-generated from comments in the code. This way you can have the documentation written without actually writing it. Most programmers find this idea fascinating, because auto-generating a readable reference from specific keywords and specially formatted “commands” looks much like actual programming. for JavaScript there are two excellent tools, both free and open source: the JSDoc Toolkit ( http://code.google.com/p/jsdoc-toolkit/) and YUIDoc ( http://yuilibrary.com/projects/yuidoc).**

You can and you should document your APIs especially since the task of writing it manually is arduous, there are tools available like JSDoc Toolkit or simply JSDocs and many other which can be easily used if you follow their syntax in defining your API functions.

**Another way to make your code better is to have it peer reviewed. Peer reviews could be formal and standardized, even aided by specialized tools, and this is a great way to make the reviews a streamlined part of the development process. But not having the time to research and adopt review tools shouldn’t be in the way. You can simply ask the developer next to you to take a look at your code or you can walk her through it.**

Always get your code reviewed by someone, its very simple to do this. You can ask for a review now using the tools available or if that is not possible, simply call them up in a meeting and go through the code by explaining to them what you are achieving in the code. Reviewing and giving reviews is an approach which helps you learn new things and teaches the other new things.

**Some summarized points : **

**Essential best practices and patterns for writing Good maintainable code including:**

- **Reducing the number of globals, ideally one per application**
- **Using a single var per function, which helps keep an eye on all variables in a single spot and prevents surprises caused by the variable hoisting behavior**
- **Never to augment built-in prototypes.**
- **Following coding conventions (consistent white space, indentation, using curly braces and semicolons even when they are optional) and naming conventions (for constructors, functions, and variables)**
- **Do not attempt to write minified code at the expense of readability, and always checking your code with JSLint**

This is just summary points which are clear and to the point

**An example showing two equivalent ways to create two identical objects:**

```js
// one way -- using a literal

var car = { goes: 'far' };

// another way -- using a built-in constructor

// warning: this is an antipattern

var car = new Object();
car.goes = 'far';
```

**As you can see from this example, an obvious benefit of the literal notation is that it’s shorter to type. Another reason why the literal is the preferred pattern for object creation is that it emphasizes that objects are simply mutable hashes and not something that needs to be baked from a “recipe” (from a class). Another reason for using literals as opposed to the Object constructor is that there is no scope resolution. Because it’s possible that you have created a local constructor with the same name, the interpreter needs to look up the scope chain from the place you are calling Object() all the way up until it finds the global Object constructor.**

In short, always use Object literals or Array literals for the declaration and initialization of objects. One advantage is speed since the literal defines it on the spot while in case of using a built-in constructor, the interpreter would first look it up if there is a global object within that scope of the same name.

**What happens if you forget new when you invoke a constructor? This is not going to cause syntax or runtime errors but might lead to logical errors and unexpected behavior. That’s because when you forget new, this inside the constructor will point to the global object. (In browsers this will point to window.)**

If you forget the new keyword, then the object created is pointing to the window object of the browser. It would work fine though, there would be no syntax error.

**One more reason to stay away from new Array() is to avoid a possible trap that this constructor has in store for you. When you pass a single number to the Array() constructor, it doesn’t become the value of the first array element. It sets the length of the array instead. This means that new Array(3) creates an array with length of 3, but no actual elements. If you try to access any of the elements, you get the value undefined because the elements don’t exist.**

**The following code example shows the different behavior when you use the literal and the constructor with a single value.**

```js
// an array of one element
var a = [3];
console.log(a.length); // 1
console.log(a[0]); // 3
```

Here another example is given which again highlights that you should use the Array literal method to declare an array.

**The only syntax difference between JSON and the object literal is that property names need to be wrapped in quotes to be valid JSON. In object literals the quotes are required only when the property names are not valid identifiers, for example, they have spaces**

This just highlights the difference between JSON and Object literals, you only need to use quotes in object Literals if the property names have spaces in between them.

**Regular expressions in JavaScript are also objects, and you have two options to create them:**

**• Using the new RegExp() constructor**

**• Using the regular expression literal**

**When using the RegExp() constructor, you also need to escape quotes and often you need to double-escape backslashes, as shown in the preceding snippet, where we need four backslashes to match a single one. This makes your regular expression patterns longer and harder to read and modify. Regular expressions are hard enough to begin with, and any chance to simplify them is welcome, so it’s best to stick to the literal notation.**

Like in case of Arrays and Objects, Regular expressions are also objects at heart so using the literal pattern for Regex is preferred.

**JavaScript has five primitive value types: number, string, boolean, null, and undefined. With the exception of null and undefined, the other three have the so-called primitive wrapper objects. The wrapper objects can be created using the built-in constructors Number(), String(), and Boolean().**

Out of the five primitive types, three are primitive wrapper objects.

**It's better to avoid wrapper object built-in constructors like:**

```js
var s = new String('my string');

var n = new Number(101);

var b = new Boolean(true);

// better and simpler:

var s = 'my string';

var n = 101;

var b = true;
```

**One reason to use the wrapper objects is when you want to augment the value and persist state. Because primitives are not objects, they cannot be augmented with properties.**

Always use the literal approach and only use the constructor when you have to later augment the value and persist state.

**functions are first-class objects and the second is that they provide scope. Functions are objects that:**

**• Can be created dynamically at runtime, during the execution of the program**

**• Can be assigned to variables, can have their references copied to other variables, can be augmented, and, except for a few special cases, can be deleted**

**• Can be passed as arguments to other functions and can also be returned by other functions**

**• Can have their own properties and methods**

```js
// function expression, a.k.a. anonymous function

var add = function (a, b) {
  return a + b;
};
```

**Function declarations can only appear in “program code,” meaning inside of the bodies of other functions or in the global space.**

**The case against function declarations and the reason to prefer function expressions is that the expressions highlight that functions are objects like all other objects and not some special language construct.**

**All variables, no matter where in the function body they are declared, get hoisted to the top of the function behind the scenes. The same applies for functions because they are just objects assigned to variables.**

**A function can return another more specialized function, or it can create another function on-demand, depending on some inputs.**

**A function does some work, probably some one-off initialization, and then works on its return value. The returned value happens to be another function, which can also be executed:**

```js
var setup = function () {
  alert(1);

  return function () {
    alert(2);
  };
};

// using the setup function

var my = setup(); // alerts 1

my(); // alerts 2
```

**Because setup() wraps the returned function, it creates a closure, and you can use this closure to store some private data, which is accessible by the returned function but not to the outside code. **

**Functions can be defined dynamically and can be assigned to variables. If you create a new function and assign it to the same variable that already holds another function, you’re overwriting the old function with the new one. this pattern is “lazy function definition,” because the function is not properly defined until the first time it’s used and it is being lazy afterwards, doing less work.**

**Immediate Functions The immediate function pattern is a syntax that enables you to execute a function as soon as it is defined.**

```js
//Here’s an example:

(function () {
  alert('watch out!');
})();
```

**Functions are first-class objects; they can be passed around as values and augmented with properties and methods.**

**Static properties and methods are those that don’t change from one instance to another.**

**The idea of the singleton pattern is to have only one instance of a specific class. This means that the second time you use the same class to create a new object, you should get the same object that was created the first time.**

**The purpose of the factory is to create objects. It’s usually implemented in a class or a static method of a class, which has the following purposes:**

**• Performs repeating operations when setting up similar objects**

**• Offers a way for the customers of the factory to create objects without knowing the specific type (class) at compile time**

**In the iterator pattern, you have an object containing some sort of aggregate data.**

**In the decorator pattern, additional functionality can be added to an object dynamically, at runtime.**

**DOM access is expensive; it’s the most common bottleneck when it comes to JavaScript performance. This is because the DOM is usually implemented separately from the JavaScript engine. From a browser’s perspective, it makes sense to take this approach, because a JavaScript application may not need DOM at all. And also languages other than JavaScript (for example, VBScript in IE) can be used to work with the page’s DOM. The bottom line is that DOM access should be reduced to minimum.**
