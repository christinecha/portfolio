## What are HTML Attributes?

So now you've learned a couple ways to write HTML elements.

1. Without anything inside:

```html
<div></div>
```

2. Without anything inside and self-closing:

```html
<br />
```

3. With things (other elements! and text!) inside:

```html
<div>
  <h1>Onions</h1>
  <p>They have layers.</p>
</div>
```

So in simple terms, you know how to make either an empty element or one with stuff inside.

Using "attributes" is another way to customize how an element shows up on your website. An "attribute", as its English meaning implies, is a trait that describes your element, just like I might describe myself:

- hair-color = black
- height = short
- weakness = waking up early

<!-- > ILLUSTRATION: On the left, it's me? Maybe curled up in a ball on my couch with a laptop. On the right it's a plain circle. Then caption each like: Me, "shape": "round", "is-moving": "false" (+ maybe one thats differen) -->

## How to apply attributes to an HTML element

There are two parts to each element attribute: the name and the value.

```html
<div size="large" mood="happy" x="y">Text</div>
```

This tells the browser you have an element type `div` with these attributes:

- size = "large"
- mood = "happy"
- x = "y"

The attribute name goes after the element name, with some space in between. Then, add an equals sign, followed by the attribute value, which needs to be in quotations. Finally, you have the angle bracket (`>`) to close your opening tag, and the closing tag stays the same as before.

Optionally, you can omit the equals sign and value. (But you must omit BOTH the equals sign & value; including just one will cause an error). This will save your attribute with its custom name but with no defined value.

```html
<div size="large" easy breezy beautiful="yes">Text</div>
```

This translates to:

- size = "large"
- easy = _undefined_
- breezy = _undefined_
- beautiful = "yes"

This is useful in situations where you just need to know that the attribute exists and it doesn't matter what the value is.

## Valid HTML Attributes

Just like `div` and `h1` came from a long list of all of the existing HTML element types, there's an even longer list of existing attribute types!

All of [these attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) are available on every single HTML element type (although they might be useful on some types).

Each element type has its own unique set of existing attributes as well. For instance, if you look up the [attributes for `img`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes) - the aptly named "image" element - you'll see a long list of these options.

Each attribute, when added to an HTML element, gives a specific instruction to the browser on how to interpret that element. There might specific rules to what format each value has to be in, too.

For instance, here I'm setting the `src` (short for "source") attribute to [this image address](https://christinecha.github.io/web-development-000/public/assets/00/bread-cat.jpg). This tells the browser: for this `img` element, fetch the picture from this web address as a source.

```html
<img
  src="https://christinecha.github.io/web-development-000/public/assets/00/bread-cat.jpg"
/>
```

(Did you notice `img` is one of those self-closing tags? 😛)

Now I'm making that image element show up 200 pixels wide and 100 pixels tall - it'll stretch itself to fit those proportions.

> HTML code:
>
> ```
> <img
>   width="200"
>   height="100"
>   src="https://christinecha.github.io/web-development-000/public/assets/00/bread-cat.jpg"
> />
> ```
>
> Browser output:
>
> <img width="200" height="100" src="https://christinecha.github.io/web-development-000/public/assets/00/bread-cat.jpg" />

_Note: These width/height attributes are not available on most other element types. To adjust the size of a `div` element, for instance, you'll need to add styles (we'll get to that in the next section)._

Here are a few other realistic examples so you can get used to the syntax.

Here's an `<a>` element with a custom `href` attribute. "Anchor" is the origin of its name `a` but you can also just call this a link element. The `href` stands for "Hypertext Reference" but I've never heard anyone say that. Usually we just pronounce it the letter "H" then "ref" like referee. The value of an `href` is where you end up when you click the link element.

> HTML code:
>
> ```
> <a href="https://cat-bounce.com/">
>   Click to see some bouncy cats!
> </a>
> ```
>
> Browser output:
>
> <a href="https://cat-bounce.com/">Click to see some bouncy cats!</a>

Making two `<input>` (literally takes a user's "input") elements of `type` "text" and "number".

> HTML code:
>
> ```html
> <input type="text" /><input type="number" />
> ```
>
> Browser output:
>
> <input type="text" /><input type="number" />

Try these examples in your `.html` file! Change the attribute values around (different `width`, `height`, `href`, `src`, etc.) Here are some practice ideas:

- Add two different images but make them show up as same exact size. (Tip: To get the web address of an image, try ctrl+clicking an image on a website and hiting "Copy Image Address")
- Set up a classic prank by creating an innocent-looking link that [goes here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
- Can you figure out a way to make it so you have to click an image to go to that link?
