<template>
  <NuxtLayout name="custom">
    <template #header>这里是slot header</template>
    <template #footer>这里是slot footer</template>
    <div>admin</div>
    <button @click="getCounter">点击获取counter</button>
    <div>{{ counter.counter }}</div>
    <br />
    <div>{{ d }}</div>
    <div>
      <button @click="getOtherData">拉去数据</button>
      <div v-for="l in list" :key="l">
        {{ l }}
      </div>
    </div>
  </NuxtLayout>
</template>

<script></script>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const counter = ref({ counter: 0 })
const list = reactive([])

async function getCounter() {
  // TODO: 这里传入参数 在server 里处理看看
  const { data } = await useAsyncData('counter', () => $fetch('/api/counter'))
  console.log(data.value)
  counter.value = data.value
}

async function getOtherData() {
  // const {data} = await useLazyAsyncData('data', () => $fetch('/api/jj-data'))
  const { data } = await useFetch('/api/jj-data')
  list.push(...data.value)
}

getOtherData()
const [d, d2] = await Promise.all([
  useFetch('https://api.github.com/orgs/nuxt'),
  useFetch('https://api.github.com/orgs/nuxt/repos')
])
console.log(d, d2)
</script>

<style></style>
