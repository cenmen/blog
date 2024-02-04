---
groupTitle: Guide
---

# 文字下划线动画

```css
.underline-animation {
  cursor: text;
  display: inline-block;
  background: linear-gradient(to right, #666, #666) no-repeat right bottom;
  background-size: 0px 1px;
  transition: background-size 0.8s;
}
.underline-animation:hover {
  background-size: 100% 1px;
  background-position: left bottom;
}
```
