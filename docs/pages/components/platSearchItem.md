# CyanSearchItem

输入框，单选，多选，下拉选择器的方便显示和使用

## Props

<!-- @vuese:CyanSearchItem:props:start -->

| Name            | Description                           | Type      | Required | Default |
| --------------- | ------------------------------------- | --------- | -------- | ------- | ---- |
| needLabel       | -                                     | `Boolean` | `false`  | true    |
| needBorder      | -                                     | `boolean` | `false`  | -       |
| minHeightBorder | -                                     | `number`  | `false`  | -       |
| borderWidth     | -                                     | `string   | number`  | `false` | -    |
| searchType      | -                                     | `string`  | `false`  | input   |
| label           | -                                     | `string`  | `false`  | label   |
| inputValue      | -                                     | `string`  | `false`  | -       |
| statusOpts      | 传进来的 值                           | `[any]`   | `false`  | []      |
| selectValue     | 选择器的选项数组                      | `string`  | `false`  | -       |
| checkboxOpts    | 选择器的值 默认只有简单值赋值之类的   | `[any]`   | `false`  | []      |
| checkboxList    | 多选择框的选项数组                    | `string`  | `false`  | -       |
| radioOpts       | 多选择框的值 默认只有简单值赋值之类的 | `[any]`   | `false`  | []      |
| radioValue      | 单选框的选项数组                      | `string`  | `false`  | -       |
| placeholder     | 单选框的值 默认只有简单值赋值之类的   | `string`  | `false`  | -       |
| width           | -                                     | `string   | number`  | `false` | auto |
| minWidth        | -                                     | `string   | number`  | `false` | auto |
| maxWidth        | 最小宽度                              | `string   | number`  | `false` | auto |

<!-- @vuese:CyanSearchItem:props:end -->

## Events

<!-- @vuese:CyanSearchItem:events:start -->

| Event Name  | Description | Parameters |
| ----------- | ----------- | ---------- |
| input-keyup | -           | -          |

<!-- @vuese:CyanSearchItem:events:end -->

## Slots

<!-- @vuese:CyanSearchItem:slots:start -->

| Name    | Description | Default Slot Content |
| ------- | ----------- | -------------------- |
| default | -           | 输入框默认插槽       |
| content | -           | -                    |

<!-- @vuese:CyanSearchItem:slots:end -->
