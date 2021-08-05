test test one two three

> 2

<template>
    <p-button type="primary">Click me</p-button>
</template>

<template>
	<p-button type="primary">Click me</p-button>
</template>

<script>
export default() {
  mounted() {
    this.$notice({
        title: '提示',
        content: this.content,
        duration: 3
    })
  }
}
<script>
