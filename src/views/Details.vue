<template>
  <div class="details">
    <Formular class="formular" ref="form" v-model="this.formData" @saveForm="saveForm" @saveEdit="saveEdit"></Formular>
    <br>
    <br>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <!-- <th>Text</th> -->
          <th>Date</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.id">
          <td>{{ entry.title }}</td>
          <!-- <td>{{ entry.text }}</td> -->
          <td>{{ new Date(entry.date).toDateString() }}</td>
          <td><button @click=editEntry(entry.id)>Edit</button>
            <button :disabled="true" @click=deleteEntry(entry.id)>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import Formular from "@/components/Formular.vue";

export default {
  name: 'DetailsView',
  components: {
    Formular,
  },
  data() {
    return {
      entries: [],
      id: 0,
      formData: { id: 0, title: "", text: "" }
    }
  },
  methods: {
    saveForm(form) {
      this.entries.push({ id: this.id, title: form.title, text: form.text, date: form.date });
      this.id++;
    },
    saveEdit(form) {
      let index = this.entries.map(entry => entry.id).indexOf(form.id);
      if (index !== -1) {
        this.entries.splice(index, 1, { id: form.id, title: form.title, text: form.text, date: form.date });
        console.log(this.entries)
      } else {
        this.entries.push({ id: this.id, title: form.title, text: form.text, date: form.date });
        this.id++;
      }
    },
    deleteEntry(id) {
      let index = this.entries.map(entry => entry.id).indexOf(id);
      this.entries.splice(index, 1);
    },
    editEntry(id) {
      let index = this.entries.map(entry => entry.id).indexOf(id);
      this.$refs.form.showEdit(this.entries[index].title, this.entries[index].text, this.entries[index].id);
    }
  }
}
</script>

<style scoped>
.formular {
  align-items: left;
}

table {
  border-collapse: collapse;
  border: 1px solid black;
  width: 85vw;
  table-layout: fixed;
}

tr:nth-child(even) {
  background-color: #e1e1e1;
}

thead {
  border-bottom: 2px solid black;
}

/* with Text collumn */
/*
thead>tr>th:nth-child(1) {
  width: 15%;
}

thead>tr>th:nth-child(2) {
  width: 60%;
}

thead>tr>th:nth-child(3) {
  width: 15%
}

thead>tr>th:nth-child(4) {
  width: 10%
} */

/* without Text collumn */
thead>tr>th:nth-child(1) {
  width: 75%;
}

thead>tr>th:nth-child(2) {
  width: 15%;
}

thead>tr>th:nth-child(3) {
  width: 10%;
}


tbody>tr>td {
  border-left: 1px solid black;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 3px;
  text-align: left;
}
</style>