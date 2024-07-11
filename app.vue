<script lang="ts" setup>
const { data } = useFetch("/api/hello")

</script>
<template>
  <div>
    just test right now {{ data }}
  </div>
</template>
