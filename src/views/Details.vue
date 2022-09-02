<template>
  <div class="details">
    <Formular class="formular"></Formular>
    <li v-for="item in entries">{{ item.title }}</li>
  </div>
</template>

<script>

import Formular from "@/components/Formular.vue";

export default {
  name: 'DetailsView',
  components: {
    Formular,
  },
  data: function () {
    return {
      entries: [],
      id: 0
    }
  },
  methods: {
    saveForm: function (title, text, date) {
      this.entries.push({ id: this.id, title: title, text: text, date: date })
      this.id++
    }
  }
}
</script>

<style scoped>
.formular {
  align-items: left
}

;
</style>