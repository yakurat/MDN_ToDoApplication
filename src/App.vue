<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>To-DO List</h1>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <!-- v-for Vueの機能 配列に要素をマッピングする-->
        <to-do-item
          :label="item.label"
          :done="item.done"
          :id="item.id"
        ></to-do-item>
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ToDoItem from "./components/ToDoitem.vue";
import ToDoForm from "./components/ToDoform.vue";
import uniqueId from "lodash.uniqueid";

export default {
  name: "App",
  components: {
    // HelloWorld,
    "to-do-item": ToDoItem,
    "to-do-form": ToDoForm,
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId("todo-"), label: "learn Vue", done: false },
        {
          id: uniqueId("todo-"),
          label: "Create a Vue project with the CLI",
          done: true,
        },
        { id: uniqueId("todo-"), label: "Have fun", done: true },
        { id: uniqueId("todo-"), label: "Created todo list", done: false },
      ],
    };
  },
  methods: {
    addToDo(toDoLabel) {
      console.log("To-do added", toDoLabel);
      this.ToDoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
