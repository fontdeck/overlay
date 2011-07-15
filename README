#Overlay

This javascript function enables one font to be added ontop of another.

Some fonts are designed to be used together, such as *Acier Bat Display Outline* and *Acier Bat Display Strokes*. This script enables people to specify a font to overlay using the :after psudo class.

##Requirements
* Requires Javascript, but degrades gracefully using the `has-overlay` class
* Works in IE9, Firefox 3+, Safari and Chrome
* Doesn't support target elements which contain other HTML elements (eg `<strong>`, `<br>`)

##Usage
1. Include overlay.js at the bottom of your document, just before the closing `</html>` tag.
2. Call the function `setOverlay()`, passing in a string containing the CSS selectors you wish to style (eg `setOverlay('h1, h2, .acier');`).
3. In your CSS, specify the font as you wish for it to appear in browsers which don't support this technique (eg `h1 { ... }`)
4. Override the styles using the `.has-overlay` selector (eg `.has-overlay h1 { ... }`)
5. Specify the font to use for the overlay using the `:after` psudo class (eg `h1:after { ... }`)

##Example
If you want to see this technique in practice, launch `example.html` in a browser. Fonts are set up to work on the domains `localhost` and `overlay.dev`.

##Troubleshooting
Firefox can be quite sensitive to the font's metrics when using the CSS property `font-size-adjust`. If the fonts are not lining up properly in Firefox, try removing this property.