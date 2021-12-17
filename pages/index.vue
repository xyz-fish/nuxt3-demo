<template>
  <div>
    Index Page
    <NuxtLink to="/admin"> 跳转到ADMIN </NuxtLink>
    <NuxtLink to="/test"> 跳转到TEST </NuxtLink>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  layout: 'default',
  setup() {
    return {}
  }
}
</script>

<style></style>
