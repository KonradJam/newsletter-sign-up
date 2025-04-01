# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). 

## Table of contents 

- [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [The most important part](#the-most-important-part)
- [Author](#author)

## Overview

### Screenshot

![](./preview.jpeg)

### Links

Live Site URL: [GitHub Pages]()

## My process

### Built with

- Semantic HTML 5 markup
- CSS logic properties
- Mobile-first workflow
- Flexbox and Grid
- RWD
- Sass
- BEM
- Accessibility
- JavaScript

### The most important part

The most important part of this challenge was to validate the email. This is done using regular expressions.

```
const EMAIL_REGEX = /^(?!\.)(?!.*\.\.)(?!.*\.$)[a-zA-Z0-9._%+-]+@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/;
```

Explenation:
`^` – Start of the string
`(?!\.)` – No leading dot
`(?!.*\.\.)` – No consecutive dots
`[a-zA-Z0-9._%+-]+` – Local part (before @)
`@` – The mandatory separator
`[a-zA-Z0-9-]+` – Domain name (before .)
`(?:\.[a-zA-Z]{2,})+` – Top-level domain (TLD)
`$` – End of the string


## Author

- LinkedIn [KonradJam](www.linkedin.com/in/konradjam)
- X [KonradJam_](https://x.com/KonradJam_)
- Frontend Mentor [KonradJam](https://www.frontendmentor.io/profile/KonradJam)
- Codewars [KonradJam](https://www.codewars.com/users/KonradJam)
- CodePen [KonradJam](https://codepen.io/konradjam)