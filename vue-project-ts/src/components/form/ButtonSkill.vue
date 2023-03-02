<template>
  <v-btn
    rounded="pill"
    size="x-small"
    class=""
    :class="
      className +
      ' text-black normal-case hover:shadow-none shadow-none bg-[#e4ebe4] p-2 flex align-middle text-[12px]'
    "
  >
    {{ content }} <v-icon class="text-[12px]">mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonSkill",
  props: {
    content: String,
    onclickBtn: Function,
    className: String,
  },
};
</script>
