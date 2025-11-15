---
title: Advanced Markdown Features
description: Explore the extended markdown features supported by this static site generator
date: "2025-01-14"
tags: ["markdown", "features", "tutorial"]
draft: false
---

This static site generator supports many extended markdown features beyond the basics. Let's explore what's available!

## Syntax Highlighting

We use highlight.js for beautiful code syntax highlighting:

```python
def fibonacci(n):
    """Generate Fibonacci sequence up to n terms"""
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b
    print()

fibonacci(10)
```

```css
.window {
  margin: 20px auto;
  max-width: 800px;
  border: 2px solid #000;
}

.title-bar {
  background: #000;
  color: #fff;
  padding: 4px;
}
```

## Tables

You can create tables with alignment:

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Cell 1       | Cell 2         | Cell 3        |
| Cell 4       | Cell 5         | Cell 6        |
| Cell 7       | Cell 8         | Cell 9        |

### Multi-line Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Basic Tables | Simple table support | ✓ |
| Multi-line | Tables with line breaks and complex content | ✓ |
| Alignment | Left, center, right alignment | ✓ |

## Task Lists

Perfect for TODO lists and checklists:

- [x] Install the generator
- [x] Configure settings
- [x] Write first post
- [ ] Add more content
- [ ] Customize styling
- [ ] Deploy to production

## Footnotes

You can add footnotes[^1] to your content. They're great for references[^2] and additional information.

[^1]: This is a footnote with additional information.
[^2]: Footnotes automatically appear at the bottom of the page.

## Keyboard Shortcuts

Use the kbd plugin to show keyboard shortcuts:

- Save: [[Ctrl]]+[[S]] or [[Cmd]]+[[S]]
- Copy: [[Ctrl]]+[[C]] or [[Cmd]]+[[C]]
- Paste: [[Ctrl]]+[[V]] or [[Cmd]]+[[V]]
- Quit: [[Ctrl]]+[[Q]] or [[Cmd]]+[[Q]]

## Blockquotes

> "The best way to predict the future is to invent it."
>
> — Alan Kay

> This is a longer blockquote that demonstrates how quoted text appears in the retro Apple System 6 design. It maintains readability while fitting the overall aesthetic.

## Lists

### Unordered Lists

- Item one
- Item two
  - Nested item 2.1
  - Nested item 2.2
    - Deeply nested item
- Item three

### Ordered Lists

1. First step
2. Second step
   1. Sub-step 2.1
   2. Sub-step 2.2
3. Third step

## Text Formatting

You can use **bold text**, *italic text*, ~~strikethrough~~, and `inline code`.

Combine them: ***bold and italic***, **bold with `code`**, etc.

## Links and Images

[Visit the GitHub repository](https://github.com/heiswayi/hnstaticgen)

You can also add images:

```markdown
![Alt text](path/to/image.jpg)
```

## Horizontal Rules

You can create visual breaks with horizontal rules:

---

That's just a small sample of what's possible with the extended markdown support in this generator!
