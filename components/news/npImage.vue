<template>
    <img class="npimage" :src="thumb" />
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  props: ['params'],
  computed: {
      thumb() {
          return this.params && this.params.thumb ? this.params.thumb : '';
      }
  },
  mounted() {
  }
}
</script>
<style>

</style>
