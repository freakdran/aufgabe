<template>
    <div class="inputForm">
        <input id="titleInput" v-model="title" placeholder="Titel (up to a 100 characters)" maxlength="100" />
        <p></p>
        <textarea id="textInput" v-model="text" placeholder="Text (up to a 300 characters)" maxlength="300"></textarea>
        <div id="countdown">{{ textLenght() }}/300</div>
        <div id="dateField">{{this.timestamp}}</div>
        <button id="saveButton" @click="saveForm()"
            :disabled="this.title.length === 0 || this.text.length === 0">Save</button>
    </div>
</template>
  
<script>
export default {
    name: 'FormularComponent',
    props: ["formData"],
    emits:["saveForm","saveEdit"],
    data: function () {
        return {
            title: "",
            text: "",
            id: -1,
            timestamp: "a"
        }
    },
    methods: {
        textLenght: function () {
            return this.text.length;
        },
        saveForm: function () {
            if (this.title.length > 0 && this.text.length > 0) {
                if (this.id === -1) {
                    this.$emit("saveForm", { title: this.title, text: this.text, date: Date.now() })
                } else {
                    this.$emit("saveEdit", { title: this.title, text: this.text, date: Date.now(), id: this.id })
                }
                this.title = "";
                this.text = "";
                this.id = -1;
            }
        },
        showEdit: function (title, text, id) {
            this.title = title;
            this.text = text;
            this.id = id;
        },
        getTime: function () {
            const now = new Date();
            const date = `${now.getDay()}.${now.getMonth()}.${now.getFullYear()}`;
            const time = `${now.getHours()}:${now.getMinutes()}`;

            this.timestamp = `${date} ${time}`
        }
    },
    mounted: function () {
        this.getTime();
        setInterval(() => { this.getTime() }, 5000)
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

#dateField {
    text-align: right;
}
</style>
  