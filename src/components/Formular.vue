<template>
    <div class="inputForm">
        <input id="titleInput" v-model="title" placeholder="Titel (up to a 100 characters)" maxlength="100">
        <p></p>
        <textarea id="textInput" v-model="text" placeholder="Text (up to a 300 characters)" maxlength="300"></textarea>
        <div id="countdown">{{ textLenght() }}/300</div>
        <button id="saveButton" @click="saveForm()">Save</button>
    </div>
</template>
  
  <script>
export default {
    name: 'FormularComponent',
    props: {
    },
    data: function () {
        return {
            title: "",
            text: "",
            date: Date.now(),
        }
    },
    methods: {
        textLenght: function () {
            return this.text.length
        },
        saveForm: function () {
            if (this.title.length > 0 && this.text.length > 0) {
                this.$parent.saveForm(this.title, this.text, this.date)
            }
        }

    }
}
</script>
  
  <style scoped>
  .inputForm {
      width: 80vw;
      margin-left: 20px;
  }
  
  #titleInput {
      width: 100%;
  }
  
  #textInput {
      font-family: Arial, Helvetica, sans-serif;
      width: 100%;
      height: 150px;
      resize: none
  }
  
  #countdown {
      width: 80vw;
      text-align: right;
  }
  
  #saveButton {
      margin-top: 10px;
      float: right;
  }
  </style>
  