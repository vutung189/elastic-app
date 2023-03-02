<template>
  <div class="mt-5">
    <div class="flex justify-between border-b border-[#d5e0d5] pb-3">
      <div class="text-h5">{{ content }}</div>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </div>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="inline p-0 pt-16">
          <ButtonSkill
            className="inline-flex mr-2 mt-2"
            v-for="x in lstBtn"
            :value="x?.value"
            :content="x?.label"
          />
        </v-card-text>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "ExpandTransition",
  props: {
    content: String,
    onclickBtn: Function,
    className: String,
    lstBtn: { type: Array, default: () => [] },
  },
  data() {
    return { show: false };
  },
};
</script>
