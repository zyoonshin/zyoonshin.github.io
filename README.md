# jekyll-theme-minimalistic

안녕하세요!
저는 네이버클라우드 캠프 1기 신지윤입니다.
잘 부탁드립니다. [Jiyoon Shin](https://vaibhavvikas.github.io/jekyll-theme-minimalistic/).

## Customizing

### Configuration variables

Minimalistic will respect the following variables, if set in your site's `_config.yml`:

```yml
title: [Jiyoon's cloud voyage]
description: [The course of growth as a Cloud Engineer]
```

Additionally, you may choose to set the following optional variables:

```yml
google_analytics: [Your Google Analytics tracking ID]
```

Choose light, dark, or automatically adjusting theme based on system theme:

```yml
color-scheme: auto/light/dark
```

Specify logo for the website:

```yml
logo: /assets/img/<logo_file>
```

Enable favicon by putting a `favicon.ico` in the repo's root directory and add the following line in `config.yml`:

```yml
favicon: true
```

### Customizing Sidebar

You can define a list of platforms that are linked from the sidebar in `_config.yml`:

```yml
platforms:
  - name: GitHub
    icon: <i class="fa-brands fa-github"></i>
    link: https://github.com/zyoonshin
  - name: LinkedIn
    icon: <i class="fa-brands fa-linkedin"></i>
    link: 
  - ...
```

### Navigation

You can also define, hyperlinks for specific pages or section of a pages (very helpful if creating multipage documentation or easy navigation between multiple sections). 

For adding navigation do the following steps:

1. Put your .md files in the root directory. and add the below text on top of pages to get it converted to html by jekyll.
   
```yml
---
layout: default
---
```

2. Use the navigation example below to add navigation section in _config.yml file. Treat all your .md files as .html files. Currently it only supports one nesting in sublist.

```yml
navigation:
  - name: Readme
    link: ./index.md
    sublist:
      - name: Image
        link: ./index.md#small-image
  - name: Another Page
    link: ./another-page.md
  - ...
```

### Adding Card:

Use the code template:
```html
<div class="card">
  <h3>Some Title</h3>
  <p><b>New Delhi</b>, India<br>
  Some Text</p>
  <a href="https://vaibhavvikas.ml/"><span class="card-link-spanner"></span></a>
</div>
```

## Credits:

This theme was built using [Minimalist](https://github.com/BDHU/minimalist) theme by BDHU and [Minimal](https://github.com/pages-themes/minimal) by GithHub.
