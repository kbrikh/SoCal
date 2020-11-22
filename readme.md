<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->

# Soldissime

A mobile app to calculate sales

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

A package that provide a module to genarate the SOUNDEX tag.

This package is configured for french laguage. However, it can be used for any language. To do so, you should replace the code-fr.json
with the one corresponding to your need.

This file include the corresponding code, the unused and the special characters to take into account for genrating the SOUNDEX tag.

For more information bout the Soundex algorithm and usage, thanks to wkipedia :

> Soundex is a phonetic algorithm for indexing names by sound, as pronounced in English. The goal is for homophones to be encoded to the same representation so that they can be matched despite minor differences in spelling.
>
> The algorithm mainly encodes consonants; a vowel will not be encoded unless it is the first letter.
>
> Soundex is the most widely known of all phonetic algorithms (in part because it is a standard feature of popular database software such as DB2, PostgreSQL, MySQL, SQLite, Ingres, MS SQL Server and Oracle.)
>
> Improvements to Soundex are the basis for many modern phonetic algorithms.
>
> [Source: Wikipedia - en](https://en.wikipedia.org/wiki/Soundex)

### Built With

-   [ES6 Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
-   [NodeJs v14.13.1 (compatible with v6+)](https://nodejs.org)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This project has no dependencies in production mode.

The only thing you have to do after downloading the source code :

```sh
npm install
```

### Installation

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```javascript
const soundex = require('<soundex path to index file>');

// Will provide a tag with one character and 4 digit (default behavior)
let tag = soundex('Chouchene');

// Provide a tag with one character and 3 digits
let idx = soundex('Chouchene', 3);

```


## Running the tests

All tests are configured and use Jasmine framework to be deployed.

```sh
npm test
```

### And coding style tests

For linting we use **eslint** with airbnb ruleswith some tweeks.

```sh
npm run lint
```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/kbrikh/soundex/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](https://gist.github.com/kbrikh/soundex/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kbrikh/soundex/tags).

## Authors

-   **Kamel BRIKH** - _Initial work_ - [kbrikh](https://github.com/kbrikh)

See also the list of [contributors](https://github.com/kbrikh/soundex/contributors) who participated in this project.

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Kamel BRIKH - [@kbrikh](https://twitter.com/kbrikh)

Project Link: [https://github.com/kbrikh/soundex](https://github.com/kbrikh/soundex)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Jasmine framework](https://jasmine.github.io/)
-   [Jasmine Spec Reporter](https://www.npmjs.com/package/jasmine-spec-reporter)
-   [Choose an Open Source License](https://choosealicense.com)
-   [Img Shields](https://shields.io)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/kbrikh/soundex.svg?style=flat-square
[contributors-url]: https://github.com/kbrikh/soundex/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kbrikh/soundex.svg?style=flat-square
[forks-url]: https://github.com/kbrikh/soundex/network/members
[stars-shield]: https://img.shields.io/github/stars/kbrikh/soundex.svg?style=flat-square
[stars-url]: https://github.com/kbrikh/soundex/stargazers
[issues-shield]: https://img.shields.io/github/issues/kbrikh/soundex.svg?style=flat-square
[issues-url]: https://github.com/kbrikh/soundex/issues
[license-shield]: https://img.shields.io/github/license/kbrikh/soundex.svg?style=flat-square
[license-url]: https://github.com/kbrikh/soundex/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kbrikh
