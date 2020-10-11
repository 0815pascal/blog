---
path: how-to-handle-typescript-error-argument-of-type-string-null-is-not-assignable-to-parameter-of-type-string
date: 2020-10-09T19:27:35.439Z
title: JSON.parse() requires a string, so we have to make sure that it gets one
description: "In this post I discuss how we can handle Typescript-error:
  Argument of type 'string | null' is not assignable to parameter of type
  'string'. Type 'null' is not assignable to type 'string'."
---
I was trying to create a language switch that allows the user to change the language in which the site is displayed. I therefore stored the current language in the `localStorage`. 

At some other point I had to read the current language from `localStorage` and I tried doing it first in the following way: 

```javascript
const currentLanguage = localStorage.getItem('savedValues?
```

However, as I quickly discovered, it's not possible to return the name of the current language by writing `currentLanguage.name`. 

The reason is that values stored in `localStorage` are stored as strings and it's therefore not possible to reference its values with a dot notation (the latter required an object). 

In order to construct an object from a JSON string, we can use `JSON.parse()`. 

But writing `JSON.parse(localStorage.getItem('savedValues'))` produces an error: 

> Argument of type 'string | null' is not assignable to parameter of type 'string'. Type 'null' is not assignable to type 'string'.

The reason is that `localStorage.getItem()` can return either a string or `null`. `JSON.parse()` requires a string, so I had therefore to test the result of `localStorage.getItem()` before I'm using it:

```javascript
const currentLanguage = JSON.parse(localStorage.getItem('savedValues') || '{}')
```
If `localStorage.getItem()` returns `null` we return `JSON.parse()` curly braces `{}` which will be interpreted by the latter as an empty object.  
