# 🔴 常用样式

```css
@layer components {
	.card-container {
		@apply p-5 m-2.5 shadow-lg rounded bg-white;
	}
	.card-container:nth-last-child {
		@apply mb-0;
	}
	.ellipsis {
		@apply whitespace-nowrap overflow-hidden text-ellipsis;
	}
}
```
