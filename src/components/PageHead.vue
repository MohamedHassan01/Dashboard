<template>
  <div class="page-head">
    <h1 class="page-title">{{ pageTitle }}</h1>
    <p class="page-description">This is Home page</p>
  </div>
</template>

<script>
export default {
  name: "page-head",

  props: ['pageTitle']
};
</script>
