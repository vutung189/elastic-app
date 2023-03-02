<template lang="">
  <div class="pl-5 w-1/2 mt-20">
    <v-radio-group>
      <template v-for="r in radioFirst">
        <v-radio :value="r.id" :label="r.title" class="font-bold text-black" />
        <span class="text-[12px]">{{ r.content }}</span>
      </template>
    </v-radio-group>
    <v-window v-model="tab" class="min-h-screen">
      <v-window-item value="1">
        <h4 class="text-[16px] font-bold mb-3">
          How long will your work take?
        </h4>
        <template v-for="r in radioSecond">
          <v-radio
            :value="r.id"
            :label="r.title"
            class="font-bold text-black"
          />
        </template>
      </v-window-item>
    </v-window>

    <div class="flex justify-end gap-x-10 mt-20">
      <ButtonCustom :onclickBtn="() => this.tabMove(0)" content="Back" />
      <ButtonCustom
        bgColor="success"
        :onclickBtn="() => this.tabMove(3)"
        content="Next: Skills"
      />
    </div>

    <div class="flex justify-end gap-x-10 mt-20">
      <v-btn @click="() => this.tabMove(2)"> Back </v-btn>
      <v-btn color="success" @click="() => this.tabMove(3)">
        Next: Scope
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
export default defineComponent({
  name: "RightTitle",
  props: {
    tabMove: { type: Function },
  },
  data() {
    return {
      show: false,
      title: "",
      tab: "1",
      rulesTitle: [(value: string) => !!value || "Title is required."],
      radioFirst: [
        {
          id: 1,
          title: "Large",
          content:
            "Longer term or complex initiatives (ex. design and build a full website)",
        },
        {
          id: 2,
          title: "Medium",
          content: "Well-defined projects (ex. a landing page)",
        },
        {
          id: 3,
          title: "Small",
          content:
            "Quick and straightforward tasks (ex. update text and images on a webpage)",
        },
      ],
      radioSecond: [
        {
          id: 1,
          title: "More than 6 months",
        },
        {
          id: 2,
          title: "3 to 6 months",
          content: "Well-defined projects (ex. a landing page)",
        },
        {
          id: 3,
          title: "1 to 3 months",
        },
      ],
    };
  },
  methods: {
    async keyUp() {
      const __ = this;
      if (_.every(__.rulesTitle, (fn) => fn(__.title))) {
        const { data } = await this.$http.get(
          `/search?page=0&size=3&title=${__.title}`
        );
        // __.jobCategory = data;
        // console.log("__.jobCategory: ", __.jobCategory);
      }
    },
  },
  // computed: {
  //   isEmptyJobCategory: function () {
  //     const __ = this;
  //     return _.isEmpty(__.jobCategory);
  //   },
  // },
});
</script>

<style lang=""></style>
