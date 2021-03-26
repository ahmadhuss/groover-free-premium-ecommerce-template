# Groover Free Premium E-commerce Template

[Live Preview](https://d2r00w08fz6ft0.cloudfront.net/groover-demo/home.html)

*I want to thank all of you who give stars and fork the repo. I love you all and I have no words in my heart.*

![snap1](/doc-imgs/01_preview.png)

**26+ Pages still not pressed the star & follow button.**


## Contents

- [Getting Started](#getting-started)
- [Downloaded Folders](#downloaded-folders)
- [HTML Version](#html-version)
- [Change Features](#change-features)
- [Webpack Version Structure](#webpack-version-structure)
- [Installation for Webpack](#installation-for-webpack)
- [Architecture of Webpack src folder](#architecture-of-webpack-src-folder)
- [Sources and Credits](#sources-and-credits)
- [Changelog Updates History](#changelog-updates-history)
- [Version](#version)




## Getting Started

Groover is new, clean and polish multipurpose e-commerce template built with modern workflow tool like [Webpack](https://webpack.js.org/concepts/). When developing this template I highly focused on some goals i.e. responsiveness, well tested on all compatible browsers, designed to be reusable and could be easy to customizable into any stores like clothing, toys, mobiles & tablets, electronics, books, furniture etc.

There are 2 versions of this template.
- Webpack Version (usually using [`npm`](https://docs.npmjs.com/getting-started/what-is-npm)) CLI for managing your node modules
- HTML5 Version

**Remember:**

There is not much difference in both versions, Webpack version contains js and sass files, some html partials and Webpack configuration file (usually labelled `webpack.config.js`) which helps the Webpack to build a distribution version of the template.

Html5 version contains just html, js and css files and nothing else.



## Downloaded Folders

When you unpack downloaded archive you'll get folder containing 2 folders.

Here they are, sorted alphabetically:

- **HTML** - HTML version of template
- **html_webpack** - Webpack version of template




## HTML Version

![snap1](/doc-imgs/img-6.jpg)

Inside the **css** folder we have all the stylesheets and vendor dependencies which our layout needs. You can use the color scheme according to your likeness.

- css/bundle.css **(Default color scheme)**
- css/bundle.black.css **(black color scheme)**
- css/bundle.blue.css **(blue color scheme)**
- css/bundle.green.css **(green color scheme)**
- css/bundle.green-munsell.css **(green-munsell color scheme)**
- css/bundle.orange.css **(orange color scheme)**
- css/bundle.pink.css **(pink color scheme)**
- css/bundle.purple.css **(purple color scheme)**
- css/bundle.skyblue.css **(skyblue color scheme)**




## Change Features

**1. Disable Modal**

Default when you visit the **Homepage** a newsletter modal will pop up. You can disable the newsletter modal by editing the file `app.js`. This file has 6 different sections, every section starts with the comment. So this is on the **Homepage** function which is called section no 3.

```javascript
/*============================================================================*/
/* Homepage JavaScript functions
/*============================================================================*/
$(function () {
    showNewsletterModal();
     // showNewsletterModal(); Comment this function
});
```

Comment this function then newsletter modal will not show.

**2. Slider Options**

All sliders invocation are **Homepage JavaScript functions** which are also section no 3 on `app.js` file. You can modify the slider options by editing the file.

```javascript
/*============================================================================*/
/* Homepage JavaScript functions
/*============================================================================*/
/**
 * Initialize Main Slider
 */
const sliderMain = function() {
    let $owl = $('.slider-main');
	$owl.owlCarousel({});
};
/**
 * Initialize owl-carousel for all product-place section on page
 */
const productSlider = function() {};
/**
 * Initialize owl-carousel for all Specific Category section on page
 */
const SpecificCategorySlider = function() {};
/**
 * Initialize owl-carousel for brand slider
 */
const brandSlider = function() {};
```

**3. Disable Countdown**

**Homepage** has a countdown section. You can disable the countdown from the section, just erase the class `dynamic` from the div.

```html
<div class="section-timing-wrapper dynamic">
```

**4. Disable Backdrop**

Default when you focus on **mega drop downs** and **search input** you will see on **html** pages some **backdrop effect** will appear, to disable this **effect** you can edit the file `app.js`. It's on section no 2 which is also called **Global JavaScript functions**.

```javascript
/*============================================================================*/
/* Global JavaScript functions
/*============================================================================*/

// Object Settings

let settings = {
     bodyBackDropOnScenes: true, // Change this property to false 'bodyBackDropOnScenes: false'
    zIndexNumber: 999998
    };
```

**4. Change color scheme**

All **.html** pages are included with default color scheme i.e. `bundle.css`.

```html
<!DOCTYPE html>
<html class="no-js" lang="en-US">

<head>
    <meta charset="UTF-8">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Groover - Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more</title>
    <!-- Standard Favicon -->
    <link href="favicon.ico" rel="shortcut icon">
    <!-- Base Google Font for Web-app -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <!-- Google Fonts for Banners only -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,800" rel="stylesheet">
    <!-- Vendor -->
    <link rel="stylesheet" href="css/vendor.css">
    <!-- Utility -->
    <link rel="stylesheet" href="css/utility.css">
    <!-- Main -->
    <link rel="stylesheet" href="css/bundle.css"> <!--- Default color scheme -->
```

You can change the stylesheet according to your **color scheme**, just erase the old `<link>` tag with the new one.

```html
<link rel="stylesheet" href="css/bundle.blue.css">
```

**5. Change Tab on a Section**

You can see **tabs** in all sections. Default we have made 2 tabs for a section.

- Horizontal Tab:
- Vertical Tab:

Every **tab** has 4 different styles which is written on `_section-maker.scss` file. You can change the style.

In **home.html** file for **horizontal-tabs** you can use these classes.

```html
<ul class="nav tab-nav-style-1-a justify-content-center">

<!-- You can erase the old class and add a new class -->

<ul class="nav tab-nav-style-1-b justify-content-center">

<ul class="nav tab-nav-style-1-c justify-content-center">

<ul class="nav tab-nav-style-1-d justify-content-center">
```

For **vertical-tabs** you can use these classes.

```html
<ul class="nav tab-nav-style-2-a justify-content-center">

<!-- You can erase the old class and add a new class -->

<ul class="nav tab-nav-style-2-b justify-content-center">

<ul class="nav tab-nav-style-2-c justify-content-center">

<ul class="nav tab-nav-style-2-d justify-content-center">
```

**6. Change Banner Hover Effect**

Default all banners on layout have **opacity effect**, which is shown when you hovering on banners. All hover effects are written on **src/scss/components/_banners-hover-effect.scss** file. You can change this.

```html
<a href="shop-v1-root-category.html" class="mx-auto banner-hover effect-dark-opacity">

<!-- Erase the effect- class, and add the new one -->

<a href="shop-v1-root-category.html" class="mx-auto banner-hover effect-border-scaling-gray">

<a href="shop-v1-root-category.html" class="mx-auto banner-hover effect-border-scaling-black">
```

**7. Change Page Breadcrumb background**

When you open some **html** pages you will see those pages have background picture on the breadcrumb. You can also change this, all variations are written on **src/scss/base/_pre-config.scss** file.

```html
<!-- Page Introduction Wrapper -->

<div class="page-style-a">

<!-- Erase the old class, add the new one -->

<div class="page-style-b">

<div class="page-style-c">
```




## Webpack Version Structure

![snap1](/doc-imgs/img-1.jpg)

It includes two folders: **dist** and **src**. The **dist** folder includes the generated html and asset files that you should not edit ideally. These files are meant for production environment.

![snap1](/doc-imgs/img-2.jpg)

To edit the template you would need to edit files inside the **src** folder.




## Installation for Webpack

Firstly you should have some information about [Webpack](https://webpack.js.org/concepts/) . It's a broad and painless definition, Webpack is a module build tool which bundles/compiles your **.js** and **.css** files into one file and performs all of the most common build tasks with only a few lines of configuration. However, it can do more things which are necessary for modern web applications.

- Assets Handling
- Managing MPA (Multi Page Application) or SPA (Single Page Application)
- Optimization
- Minimization

We use this tool as a command line tool, but first we have to install some environment tools [Node.JS](https://nodejs.org/en/download/) . It installs a CLI i.e. [NPM](https://docs.npmjs.com/getting-started/what-is-npm) (Node Package Manager) that helps to managing your node modules. Now open html_webpack folder on your favorite editing tool. You will see `package.json` file which holds all the settings that [NPM](https://docs.npmjs.com/getting-started/what-is-npm) needs, so we have to install these dependencies on our folder.

Type following **command** on command line.

```javascript
npm install
```

This command will create a folder named `node_modules` and it will install **Webpack** and others related dependencies.

**What are node_modules?**

Web applications are made of lots of things — frameworks, libraries, assets, and utilities. **Npm** manages all these things for you.

![snap1](/doc-imgs/node.jpg)

We are using **Npm** to manage all the different frameworks and plugins that we use in our template. It is an incredible package manager which allows us to separate all the third party/vendor assets from our core template. It allows us to keep all the required libraries and frameworks up to date and not worry about outdated code.

**How Webpack will generate distributed version?**

We have defined all our configurations on `webpack.config.js` file.

**Remember:**

Default in `package.json` file we have written 3 **Webpack** commands that help to build the distribute version which is also known as **dist** folder.

![snap1](/doc-imgs/command.jpg)

**dev** command is used on **development environment**, It will delete the old **dist** folder and create the new one. It doesn't minify and create hash for **.js** and **.css** files.

```javascript
npm run dev
```

**watch** command is also used on **development environment**, It will delete the old **dist** folder and create the new one. The execution of the command will never halt, it automatic update your **dist** folder when you modify your files in **src** folder + it doesn't minify and create hash for **.js** and **.css** files.

```javascript
npm run watch
```

**build** command is used on **production environment**, It will also delete the old **dist** folder and create the new one. It will minify and create hash for optimization on all your assets.

```javascript
npm run build
```

**For Deployment, Delete some unnecessary files which is generated by Webpack:**

These files are temporary JavaScript files which is generated by **Webpack** during Webpack command execution.

![snap1](/doc-imgs/tmp_files.jpg)




## Architecture of Webpack src folder
Inside the `src` folder you will find a set of files and folders. These are the files that generate html files in the `dist` folder.

**src/package.json**

**Webpack** uses different loaders for compiling files. Loaders help the **Webpack** to compile files that have different extension such as **.scss**, **.js**, **.html** and many more. All loaders names are written on this file, this file also contains some vendor dependencies names which is used by this template.

**src/includes**

This folder contains 2 files which are partials files used on layout pages. Don't get surprised with following syntax:
`<%= name %>`,`@require('includes/before-app.html')` in **.html** files. It is a very powerful and popular template syntax of **Underscore.js** which is using template engine called **lodash**, you can read more about it by [clicking here](https://github.com/emaphp/underscore-template-loader).

**src/js**

Inside **src/js** folder some files are **entry** files. **Entry** files are those JavaScript files which will import **.scss** files, **Webpack** will compile those files in **dist** folder.

**List of Entry files:**
- src/js/colors/app.black.js
- src/js/colors/app.blue.js
- src/js/colors/app.green.js
- src/js/colors/app.green-munsell.js
- src/js/colors/app.orange.js
- src/js/colors/app.pink.js
- src/js/colors/app.purple.js
- src/js/colors/app.skyblue.js
- src/js/utility.js

Inside the **js** folder you will see **colors** folder which contains **.js** files with color names, these files are **entry** files which will import **.scss** file related to that color. **Webpack** will compile those files and generate files with **.js** extension with same name in **dist/js** folder and **.css** files with same name in **dist/css** folder.

![snap1](/doc-imgs/img-3.jpg)

**src/js/app.js**

This is the main file which contains all functionality and plugins invocation of our layout.

**src/js/vendor.js**

This file requires all vendor libraries which are written on `package.json` file, some are on **src/js** folder, some are placed on the **src/js/vendor** folder. **Webpack** will compile those files and generate `vendor.css` file in the **dist/js**.


![snap1](/doc-imgs/img-4.jpg)

**src/scss/abstracts**

The **abstracts** folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here. The rule of thumb for this folder is that it should not output a single line of CSS when compiled on its own. These are nothing but Sass helpers. Inside this folder it has another folder named **mixins-module**, the file on this folder has a mixin which will generate space utility classes.

**src/scss/utility.scss**

This file is invoking a mixin from **mixins-module** which will generate space utility classes, these utility classes are also called **Global utility classes** which are used globally on this layout.

**src/scss/base**

The **base** folder holds what we might call the boilerplate code for the project. In there, you might find some typographic rules, defining some standard styles for commonly used HTML elements.

**src/scss/componenets**

**Components** are reusable styles on layout. It contains all kind of specific modules like a button, a dropdown, a widget-section, and anything along those lines. There are usually a lot of files in **components** folder since the whole site/application should be mostly composed of tiny modules. `_all.scss` is just import file which contains all code base of the folder. In Bottom you will see all components file and their usage on different places of layout.

**src/scss/componenets/_backdrop.scss**

![snap1](/doc-imgs/components/comp-1.png)

**src/scss/componenets/_banners-hover-effect.scss**

![snap1](/doc-imgs/components/comp-2.png)

**src/scss/componenets/_breadcrumb.scss**

![snap1](/doc-imgs/components/comp-3.png)

**src/scss/componenets/_buttons.scss**

![snap1](/doc-imgs/components/comp-4.png)

**src/scss/componenets/_checkbox.scss**

![snap1](/doc-imgs/components/comp-5.png)

**src/scss/componenets/_continue-link.scss**

![snap1](/doc-imgs/components/comp-6.png)

**src/scss/componenets/_dropdown.scss**

![snap1](/doc-imgs/components/comp-7.png)

**src/scss/componenets/_filter.scss**

![snap1](/doc-imgs/components/comp-8.png)

**src/scss/componenets/_form-coupon.scss**

![snap1](/doc-imgs/components/comp-9.png)

**src/scss/componenets/_get-reviews.scss**

![snap1](/doc-imgs/components/comp-10.png)

**src/scss/componenets/_inline-maker.scss**

![snap1](/doc-imgs/components/comp-11.png)

**src/scss/componenets/_modal.scss**

![snap1](/doc-imgs/components/comp-12.png)

**src/scss/componenets/_product.scss**

![snap1](/doc-imgs/components/comp-13.png)

**src/scss/componenets/_quantity.scss**

![snap1](/doc-imgs/components/comp-14.png)

**src/scss/componenets/_radiobox.scss**

![snap1](/doc-imgs/components/comp-15.png)

**src/scss/componenets/_rating-stars.scss**

![snap1](/doc-imgs/components/comp-16.png)

**src/scss/componenets/_section-maker.scss**

![snap1](/doc-imgs/components/comp-17.png)

**src/scss/componenets/_selectbox.scss**

![snap1](/doc-imgs/components/comp-18.png)

**src/scss/componenets/_textarea.scss**

![snap1](/doc-imgs/components/comp-19.png)

**src/scss/componenets/_textbox.scss**

![snap1](/doc-imgs/components/comp-20.png)

**src/scss/layout**

The **layout** folder contains everything which takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer), the grid system or even CSS styles for all the forms.

**src/scss/pages**

**Pages** folder contains styles per page.

**src/scss/vendor.scss**

This file is main file which contains every vendor dependency which are in **src/scss/vendor** folder and every dependency which name is written on `package.json` file.

**src/scss/vendors-extensions**

This folder doesn't have any relation with **src/scss/vendor** folder or **src/scss/vendor.scss** file, it just overrides some vendor dependencies which are included in our main **src/scss/app.scss** file.

**src/scss/_header-comment**

This file contains only header section comment for resultant CSS file.

**src/scss/_responsive.scss**

The responsive file should contain all **media queries** styles which requires for our layout. Remember if a **component** has a **media query** style then **media query** style will be writing on its own **component** file. This file only contains responsive styles for just layout and nothing else.

**Scss folder**

![snap1](/doc-imgs/img-5.jpg)




## Sources and Credits

- [Node.JS - JavaScript Environment](https://nodejs.org/en/download/)
- [Npm - Node Package Manager](https://docs.npmjs.com/getting-started/what-is-npm)
- [Webpack - JavaScript Module Bundler](https://webpack.js.org/concepts/)
- [Bootstrap 4](https://getbootstrap.com/)
- [Popper.js](https://popper.js.org/)
- [Modernizr](https://modernizr.com/)
- [NProgress.js](http://ricostacruz.com/nprogress/)
- [jQuery](https://jquery.com/)
- [jQuery UI Range Slider](https://jqueryui.com/slider/)
- [Font Awesome 5](https://fontawesome.com/)
- [Ion Icons 4](https://ionicons.com/)
- [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
- [Animate.css](https://daneden.github.io/animate.css/)
- [jQuery ScrollUp](https://github.com/markgoodyear/scrollup)
- [jQuery Slim Scroll](https://github.com/rochal/jQuery-slimScroll)
- [jQuery Elevate Zoom](http://elevateweb.co.uk/image-zoom)




## Changelog Updates History

Following you'll find a list of all Groover theme Template releases with a log of features added and bug fixes next to each one.




## Version
Version 1.0.0 - September 2018 Initial Release




