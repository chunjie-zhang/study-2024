# vue3-snippets-plugin

目前只适配vue3的 snippets 插件

## 目前支持的代码片段

### vue模版片段

|  关键词   |             代码片段     | 
| :-----: | :----------------------------------------------------------: | :------: |
| vue3 | `<template></template><script setup lang="ts"></script><style lang="" scoped></style>`   |
|  vue3-1  | `<template></template><script>export default { setup() {return {}}}</script><style lang="" scoped></style>` | 
| template | `<template><div></div></template>`   |
| scripte | `<script setup lang="ts"></script>`   |
| style | `<style lang="" scoped></style>`   |
| scss| `<style lang="scss" scoped></style>`   |
| Sass | `<style lang="sass" scoped></style>`   |
| Less | `<style lang="less" scoped></style>`   |

### template片段

|  关键词   |             代码片段     | 
| :-----: | :----------------------------------------------------------: | :------: |
| vText | ` v-text="msg"`   |
|  vHtml  | `v-html="html"` | 
| vIf| `<template><div></div></template>`   |
| vShow | ` v-show="show"`   |
| vElse | `<style lang="" scoped></style>`   |
| vElseIf| `<style lang="scss" scoped></style>`   |
| vFor | ` v-for="(item, index) in items" :key="index"`   |
| vBind | ` v-bind=""`   |
| vModel | `v-model="something"`   |
| vSlot | `v-slot=""`   |
| vOnce | `v-once`   |
| component | `<component :is="componentId"></component>`   |

### script片段
|  关键词   |             代码片段     | 
| :-----: | :----------------------------------------------------------: | :------: |
| import | `import {  } from ''`   |
|  vRef  | `const ref = ref('')` | 
| setup | `setup (props, ctx) { return {}}`   |
| vProps | `const props = defineProps({	name : value	})`   |
| vEmits | `const emits = defineEmits([	name	])`   |
| vExpose| `defineExpose({	name : value	})`   |
| vComputed | `const compoted = computed(() => {}),`   |
| vWatch | `watch( ref, (oldValue, newValue) => {},`   |
| vWatchEffect | `watchEffect(() => {},`   |