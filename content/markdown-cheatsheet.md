---
title: Markdown Cheatsheet
description: This markdown cheatsheet provides an overview of all the Markdown syntax elements supported by this site.
date: "2020-09-23"
---

This markdown cheatsheet was prepared by Heiswayi Nrird to be used as markdown syntax testing for typography assessment.

<hr class="break">

### Headings

Headings from `H1` to `H6` are constructed with a `#` for each level.

```markdown
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading
```

Output:

# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

<hr class="break">

### Paragraph

Body copy written as normal, plain text will be wrapped with `<p></p>` tags in the rendered HTML.

```markdown
Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.
```

Output:

Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.

<hr class="break">

### Bold

For emphasizing a snippet of text with a heavier font-weight.

The following snippet of text is **rendered as bold text**.

```markdown
**rendered as bold text**
```

Output:

**rendered as bold text**

<hr class="break">

### Italics

For emphasizing a snippet of text with italics.

The following snippet of text is _rendered as italicized text_.

```markdown
_rendered as italicized text_
```

Output:

_rendered as italicized text_

<hr class="break">

### Strikethrough

In GitHub-flavored markdown, you can do strikethroughs. 

```markdown
~~Strike through this text.~~
```

Output:

~~Strike through this text.~~

<hr class="break">

### Blockquote

For quoting blocks of content from another source within your document.

Add `>` before any text you want to quote. 

```markdown
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
```

Output:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.

<hr class="break">

### Unordered list

A list of items in which the order of the items does not explicitly matter.

You may use any of the following symbols to denote bullets for each list item:

```markdown
* valid bullet
- valid bullet
+ valid bullet
```

For example:

```markdown
+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem
```

Output:

+ Lorem ipsum dolor sit amet
+ Consectetur adipiscing elit
+ Integer molestie lorem at massa
+ Facilisis in pretium nisl aliquet
+ Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
+ Faucibus porta lacus fringilla vel
+ Aenean sit amet erat nunc
+ Eget porttitor lorem

<hr class="break">

### Ordered list

A list of items in which the order of items does explicitly matter.

```markdown
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
```

Output:

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

**Tip**: If you just use `1.` for each number, GitHub will automatically number each item. For example:

```markdown
1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem
```

Output:

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem

<hr class="break">

### Inline code

Wrap inline snippets of code with `` ` ``.

```html
For example, `<section></section>` should be wrapped as "inline".
```

Output:

For example, `<section></section>` should be wrapped as "inline".

<hr class="break">

### Indented code

Or indent several lines of code by at least four spaces, as in:

```js
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

Output:

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

<hr class="break">

### Code block using "fences"

Use "fences"  ```` ``` ```` to block in multiple lines of code. 

<pre>
```html
Sample text here...
```
</pre>

Output:

```
Sample text here...
```

<hr class="break">

### Syntax highlighting

GitHub-flavored markdown also supports syntax highlighting. To activate it, simply add the file extension of the language you want to use directly after the first code "fence", ` ```js `, and syntax highlighting will automatically be applied in the rendered HTML. For example, to apply syntax highlighting to JavaScript code:

<pre>
```javascript
grunt.initConfig({
  assemble: {
    options: {
      assets: 'docs/assets',
      data: 'src/data/*.{json,yml}',
      helpers: 'src/custom-helpers.js',
      partials: ['src/partials/**/*.{hbs,md}']
    },
    pages: {
      options: {
        layout: 'default.hbs'
      },
      files: {
        './': ['src/templates/pages/index.hbs']
      }
    }
  }
};
```
</pre>

Output:

``` javascript
gruntinitConfig({
  assemble: {
    options: {
      assets: 'docs/assets',
      data: 'src/data/*.{json,yml}',
      helpers: 'src/custom-helpers.js',
      partials: ['src/partials/**/*.{hbs,md}']
    },
    pages: {
      options: {
        layout: 'default.hbs'
      },
      files: {
        './': ['src/templates/pages/index.hbs']
      }
    }
  }
};
```

Output (in HTML code):

```xml
<div class="highlight"><pre><span class="nx">grunt</span><span class="p">.</span><span class="nx">initConfig</span><span class="p">({</span>
  <span class="nx">assemble</span><span class="o">:</span> <span class="p">{</span>
    <span class="nx">options</span><span class="o">:</span> <span class="p">{</span>
      <span class="nx">assets</span><span class="o">:</span> <span class="s1">'docs/assets'</span><span class="p">,</span>
      <span class="nx">data</span><span class="o">:</span> <span class="s1">'src/data/*.{json,yml}'</span><span class="p">,</span>
      <span class="nx">helpers</span><span class="o">:</span> <span class="s1">'src/custom-helpers.js'</span><span class="p">,</span>
      <span class="nx">partials</span><span class="o">:</span> <span class="p">[</span><span class="s1">'src/partials/**/*.{hbs,md}'</span><span class="p">]</span>
    <span class="p">},</span>
    <span class="nx">pages</span><span class="o">:</span> <span class="p">{</span>
      <span class="nx">options</span><span class="o">:</span> <span class="p">{</span>
        <span class="nx">layout</span><span class="o">:</span> <span class="s1">'default.hbs'</span>
      <span class="p">},</span>
      <span class="nx">files</span><span class="o">:</span> <span class="p">{</span>
        <span class="s1">'./'</span><span class="o">:</span> <span class="p">[</span><span class="s1">'src/templates/pages/index.hbs'</span><span class="p">]</span>
      <span class="p">}</span>
    <span class="p">}</span>
  <span class="p">}</span>
<span class="p">};</span>
</pre></div>
```

<hr class="break">

### Anchor link

```markdown
[Assemble](http://assemble.io)
```

Output (hover over the link, there is no tooltip):

[Assemble](http://assemble.io)

Output (in HTML code):

```html
<a href="http://assemble.io">Assemble</a>
```

<hr class="break">

### Anchor link with a title

```markdown
[Upstage](https://github.com/upstage/ "Visit Upstage!")
```

Output (hover over the link, there should be a tooltip):

[Upstage](https://github.com/upstage/ "Visit Upstage!")

Output (in HTML code):

```html
<a href="https://github.com/upstage/" title="Visit Upstage!">Upstage</a>
```

<hr class="break">

### Named anchors

Named anchors enable you to jump to the specified anchor point on the same page. For example, each of these chapters:

```markdown
# Table of Contents
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)
```

will jump to these sections:

```markdown
## Chapter 1 <a id="chapter-1"></a>
Content for chapter one.

## Chapter 2 <a id="chapter-2"></a>
Content for chapter one.

## Chapter 3 <a id="chapter-3"></a>
Content for chapter one.
```

**PS:** Note that specific placement of the anchor tag seems to be arbitrary. They are placed inline here since it seems to be unobtrusive, and it works.

<hr class="break">

### Horizontal line

The HTML `<hr>` element is for creating a "thematic break" between paragraph-level elements. In markdown, you can create a `<hr>` with any of the following:

* `___`: three consecutive underscores
* `---`: three consecutive dashes
* `***`: three consecutive asterisks

Output:

___

---

***

<hr class="break">

### Tables

Tables are created by adding pipes as dividers between each cell, and by adding a line of dashes (also separated by bars) beneath the header. Note that the pipes do not need to be vertically aligned.

```markdown
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

Output:

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

<hr class="break">

### Table with right aligned text

Adding a colon on the right side of the dashes below any heading will right align text for that column.

```markdown
| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

Output:

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

<hr class="break">

### Images

Images have a similar syntax to links but include a preceding exclamation point.

```markdown
![Minion](http://octodex.github.com/images/minion.png)
```
![Minion](http://octodex.github.com/images/minion.png)

or
```markdown
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")
```
![Alt text](http://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

``` markdown
![Alt text][id]
```
![Alt text][id]

With a reference later in the document defining the URL location:

[id]: http://octodex.github.com/images/dojocat.jpg  "The Dojocat"

<hr class="break">

### Task lists

Task lists are lists with items marked as either `[ ]` or `[x]` (incomplete or complete). For example:

```markdown
- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed
```

Output:

- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed

<hr class="break">

### Footnotes

Inlining footnote references in the writing, for example:

> Here is a footnote reference,[^1] and another.[^longnote]

```markdown
Here is a footnote reference,[^1] and another.[^longnote]
```

Adding matching footnote definitions at the end of writing, for example:

```markdown
[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.
```

...

This footnotes will always be the bottom of the page/post content:

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.