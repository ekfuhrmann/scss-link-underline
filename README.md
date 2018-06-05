# [scss-link-underline](https://nodei.co/npm/scss-link-underline/)

> A Sass Mixin Based on Adam Schwartz's "[Smarter Link Underlines for Every Website](https://eager.io/blog/smarter-link-underlines/)"

[![NPM](https://nodei.co/npm/scss-link-underline.png)](https://nodei.co/npm/scss-link-underline/)

## What?

**scss-link-underline** is a Sass library for creating beautiful and consistent link underlines across systems.

## Why?

As browsers continue to change, update, and improve over time, inconsistencies between them increase. For example, _Google Chrome_ by default now displays "pretty" link underlines, but _Mozilla Firefox_ still displays the classic underline of yesteryear.

This library ensures consistency across all browser, but best of all it guarantees that all of your links will look great and are easy to read.

## How to install

- With yarn: `yarn add --dev scss-link-underline`
- With npm: `npm install --dev scss-link-underline`
- Manually: download [this file](https://raw.githubusercontent.com/ekfuhrmann/scss-link-underline/master/dist/_link-underline.scss)

## Usage

The mixin takes in the following parameters:

- background color
- text color
- selection color (highlight color)
- underline boldness (defaults to normal)

```scss
a {
  @include link-underline(
    $color-background,
    $color-text,
    $color-selection,
    $underline-boldness: 'normal'
  );
}
```

##### Normal Underline:

###### Input:

```scss
a {
  @include link-underline(#fff, #000, #b4d5fe);
}
```

###### Output:

![image](https://user-images.githubusercontent.com/8878152/41007971-6671a520-68f6-11e8-80d7-5b415c6d2784.png)


##### Bold Underline:

###### Input:

```scss
a {
  @include link-underline(#fff, #000, #b4d5fe, 'bold');
}
```

###### Output:

![image](https://user-images.githubusercontent.com/8878152/41008008-95a9d8d0-68f6-11e8-9175-ee4d80e837ad.png)

## Limitations

1.  It requires that the text be on top of a solid background color.
2.  On mobile and older browsers, it may have minor performance penalties. In our testing, we didn’t find much if any impact, especially since the text-shadows don’t use any spread value. But since you’re drawing new things that didn’t used to be there, it’s worth noting.
