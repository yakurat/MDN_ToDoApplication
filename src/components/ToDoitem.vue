<template>
  <div>
    <input type="checkbox" v-bind:id="id" v-bind:checked="isDone" />
    <label v-bind:for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: { required: true, type: String },
  },
  data() {
    return {
      isDone: this.done,
      // lodash.uniqueid 一意のidを割り振ってくれる外部モジュール下の例だと todo-xxxxみたいな割り振り方
    };
  },
};
</script>
