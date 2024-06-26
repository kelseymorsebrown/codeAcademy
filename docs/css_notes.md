# CSS Notes

## Box Model

CSS _box model_ is a box that wraps around an HTML element and controls the design and layout.

[Box Model Cheatsheeet](https://www.codecademy.com/learn/learn-css/modules/learn-css-box-model/cheatsheet)

### Box Sizing

The property `box-sizing` controls which aspect of the box is determined by the `height` and `width` properties - aka which box model is used by the browser

- `content-box` Renders the actual size of the element including the content box, but not the padding and borders. This is the default value.
- `border-box` Renders the actual size of an element including the content box, paddings, and borders

In the default [box model](https://www.codecademy.com/resources/docs/css/box-model), (`content-box`) box dimensions are affected by border thickness and padding.

We can reset the entire [box model](https://www.codecademy.com/resources/docs/css/box-model) and specify a new one: `border-box` which is **not** affected by border thickness or padding.

```css
* {
  box-sizing: border-box;
}
```

In this box model, the height and width of the box will remain fixed. The border thickness and padding will be included inside of the box, which means the overall dimensions of the box do not change.

### Margin Collapse

CSS _margin collapse_ occurs when the top and bottom margins of blocks are combined into a single margin equal to the largest individual block margin.

Margin collapse only occurs with vertical margins, not for horizontal margins.

Horizontal margins (left and right), like padding, are always displayed and added together. In this example, the space between the `#img-one` and `#img-two` [borders](https://www.codecademy.com/resources/docs/css/borders) is 40 pixels. The right margin of `#img-one` (20px) and the left margin of `#img-two` (20px) add to make a total margin of 40 pixels.

```css
#img-one {
  margin-right: 20px;
}

#img-two {
  margin-left: 20px;
}
```

Unlike horizontal margins, vertical margins do not add. Instead, the larger of the two vertical margins sets the distance between adjacent elements. In this example, the vertical margin between the `#img-one` and `#img-two` elements is 30 pixels. Although the sum of the margins is 50 pixels, the margin collapses so the spacing is only dependent on the `#img-one` bottom margin.

```css
#img-one {
  margin-bottom: 30px;
}

#img-two {
  margin-top: 20px;
}
```

## Positioning

- The [`position`](https://www.codecademy.com/resources/docs/css/position) property allows you to specify the position of an element.
  - When set to `relative`, an element’s position is relative to its default position on the page.
  - When set to `absolute`, an element’s position is relative to its closest positioned parent element. It can be pinned to any part of the web page, but the element will still move with the rest of the document when the page is scrolled.
  - When set to `fixed`, an element’s position can be pinned to any part of the web page. The element will remain in view no matter what.
  - When set to `sticky`, an element can stick to a defined offset position when the user scrolls its parent container.
- The [`z-index`](https://www.codecademy.com/resources/docs/css/position/z-index) of an element specifies how far back or how far forward an element appears on the page when it overlaps other elements.
- The [`display`](https://www.codecademy.com/resources/docs/css/display) property allows you to control how an element flows vertically and horizontally in a document.
  - `inline` elements take up as little space as possible, and they cannot have manually adjusted width or height.
  - `block` elements take up the width of their container and can have manually adjusted heights.
  - `inline-block` elements can have set width and height, but they can also appear next to each other and do not take up their entire container width.
- The [`float`](https://www.codecademy.com/resources/docs/css/display/float) property can move elements as far left or as far right as possible on a web page.
- You can [`clear`](https://www.codecademy.com/resources/docs/css/display/clear) an element’s left or right side (or both) using the clear property.

## Flexbox

[CSS Flexbox and Grid Cheatsheet](https://www.codecademy.com/learn/learn-css-flexbox-and-grid/modules/layout-with-flexbox/cheatsheet)

[flex-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow) specifies the direction of a flex container, as well as its wrapping behavior. Can be set to a `flex-direction` value, a `flex-wrap` value, or a `flex-diriection` value followed by a `flex-wrap` value

- [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed) - `row` `row-reverse` `column` `column-reverse`
- [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked - `nowrap` `wrap` `wrap-reverse`

[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) sets how a flex item will grow or shrink to fit the space available in its flex container. This property is a shorthand for the `flex-grow` `flex-shrink` and `flex-basis` CSS properties. As such, It's possible values get a little complex, see the [syntax documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/flex#syntax).

- [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) sets the flex grow factor, which specifies how much of the flex container's remaining space should be assigned to the flex item's main size. Accepts a numeric value.
- [flex-shrink] sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`. Accepts a numeric value.
- [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) - ex: `auto` `0` `200px`

## Resetting Defaults

All major web browsers have a default stylesheet they use in the absence of an external stylesheet. These default stylesheets are known as user agent stylesheets. In this case, the term _[user agent](https://en.wikipedia.org/wiki/User_agent)_ is a technical term for the browser.

User agent stylesheets often have default CSS rules that set default values for [padding](https://www.codecademy.com/resources/docs/css/padding) and [margin](https://www.codecademy.com/resources/docs/css/margins/margin). This affects how the browser displays HTML elements, which can make it difficult for a developer to design or style a web page.

Many developers choose to reset these default values so that they can truly work with a clean slate.

```css
* {
  margin: 0;
  padding: 0;
}
```

The code in the example above resets the default margin and padding values of all HTML elements. It is often the first CSS rule in an external stylesheet.

Note that both properties are set to 0. When these properties are set to 0, they do not require a unit of measurement.

## Fonts

Multi-word fonts must be in quotes.

To use fonts from a free font service like [Google Fonts](https://fonts.google.com/) and [Adobe Fonts](https://fonts.adobe.com/) in your CSS, grab the `<link>` element generated by the service when you selected your font, and then add it to the `<head>` element in your HTML document.

```html
<head>
  <!-- Add the link element for Google Fonts along with other metadata -->
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
    rel="stylesheet"
  />
</head>
```

To use fonts from paid font distributors like [fonts.com](https://www.fonts.com/), you download and host the font with the rest of your site’s files. You can create a [@font-face ruleset](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) in your CSS stylesheet to link to the relative path of the font file.

Fonts come in a few different file formats, such as:

- OTF (OpenType Font)
- TTF (TrueType Font)
- WOFF (Web Open Font Format)
- WOFF2 (Web Open Font Format 2)

The different formats are a progression of standards for how fonts will work with different browsers, with WOFF2 being the most progressive. It’s a good idea to include TTF, WOFF, and WOFF2 formats with your `@font-face` rule to ensure compatibility on all browsers. You can use additional tools to generate additional file types for WOFF and WOFF2, check out MDN’s [list of font generators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts#generating_the_required_code) for more information. Note: the order you list the different formats is important because the browser will start from the top of the list and use the first font format that it supports.

```css
@font-face {
  font-family: 'MyParagraphFont';
  src: url('fonts/Roboto.woff2') format('woff2'), url('fonts/Roboto.woff')
      format('woff'), url('fonts/Roboto.ttf') format('truetype');
}
```

[Web Safe fonts](https://www.cssfontstack.com/) are good fallback fonts that can be used if your preferred font is not available. In the below example, Georgia and Times New Roman are fallback fonts to Caslon. When you specify a group of fonts, you have what is known as a font stack. The browser will try the fonts in order, and use whichever is the first that's available. You can also use the keyword values `serif` and `sans-serif` as a final fallback font if nothing else in the font stack is available.

```css
h1 {
  font-family: Caslon, Georgia, 'Times New Roman', serif;
}
```

### Font Weight & Style

The `font-weight` property can take a numeric value between 1 (lightest) and 1000 (boldest) as well any one of these keyword values:

- `normal`: Normal font weight. This is the default value. Equivalent to a numerical font weight of `400`
- `bold`: Bold font weight. Equivalent to a numerical font weight of `700`
- `lighter`: One font weight lighter than the element’s parent value.
- `bolder`: One font weight bolder than the element’s parent value.

The `font-style` property can take any one of these keyword values:

- `normal`: Normal font style. This is the default value.
- `italic`: Causes the text to appear in italics.

### Transformation

The `text-transform` property

- `uppercase`: formats text to appear entirely in uppercase
- `lowercase`: formats text to appear entirely in lowercase

### Text Layout

- `text-align`: aligns text to its parent element. `justify` `left` `right` `center`
- `letter-spacing`: sets the horizontal spacing between the individual characters in an element. Takes length values in units, such as `2px` or `0.5em`.
- `word-spacing`: sets the space between words. Takes length values in units, such as `3px` or `0.2em`, however using `em` values are recommended because the spacing can be set based on the size of the font.
- `line-height`: sets how tall we want each line containing our text to be. Inclusive of font-size and leading, the space bewtween a line and the line above it (see diagram below). Values can be a unitless number, such as `1.2`, or a length value, such as `12px`, `5%`, or `2em`, though unitless values are preferred because it is responsive to the current font size and will readjust automatically if the font size is changed.

![Line height diagram](https://content.codecademy.com/courses/updated_images/htmlcss1-diagram__leading_updated_1-01.svg)

## References

- [The Box Model cheatsheet](https://www.codecademy.com/learn/learn-css/modules/learn-css-box-model/cheatsheet)
- [Inline-level content](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content)
- [Block-level content](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content)
- [Web Safe fonts](https://www.cssfontstack.com/)
- [Mastering the CSS :nth-child() selector](https://medium.com/@quinnfeng26276/mastering-the-css-nth-child-selector-59d8af92fdd4)
- [flexbox froggy](https://flexboxfroggy.com/)
