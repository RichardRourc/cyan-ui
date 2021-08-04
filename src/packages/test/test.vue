<template>
  <button
    class="lime-button"
    :class="{ [`lime-button-${type}`]: true }"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      validator(value) {
        return [
          'default',
          'primary',
          'info',
          'success',
          'warning',
          'error',
        ].includes(value)
      },
      type: String,
      default: 'default',
    },
  },
}
</script>
