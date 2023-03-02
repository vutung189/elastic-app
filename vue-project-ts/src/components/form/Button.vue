<template>
  <v-btn v-bind:color="bgColor" class="rounded-full" @click="onclickBtn">{{ content }}</v-btn>
</template>


<script>
export default {
  name: "ButtonCustom",
  props: {
    content: String,
    bgColor: String,
    onclickBtn: Function
  }
}
</script>