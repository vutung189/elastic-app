<template>
  <v-tabs v-model="tab" bg-color="primary" hidden>
    <v-tab value="1">Item One</v-tab>
    <v-tab value="2">Item Two</v-tab>
    <v-tab value="3">Item Three</v-tab>
    <v-tab value="4">Item four</v-tab>
  </v-tabs>
  <v-window v-model="tab" class="min-h-screen">
    <v-window-item value="1">
      <div class="flex align-middle justify-center">
        <Left v-bind="tabLeft['1']" />
        <RightTitle :tabMove="tabMove" />
      </div>
    </v-window-item>
    <v-window-item value="2">
      <div class="flex align-middle justify-center mb-4">
        <Left v-bind="tabLeft['2']" />
        <RightSkill :tabMove="tabMove" />
      </div>
    </v-window-item>
    <v-window-item value="3">
      <div class="flex align-middle justify-center">
        <Left v-bind="tabLeft['3']" />
        <RightScope :tabMove="tabMove" />
      </div>
    </v-window-item>
    <v-window-item value="4">
      <div class="flex align-middle justify-center">
        <Left v-bind="tabLeft[4]" />
        <div class="flex justify-end gap-x-10">
          <ButtonCustom :onclickBtn="() => tabMove(3)" content="Back" />
          <ButtonCustom
            bgColor="success"
            :onclickBtn="() => tabMove(5)"
            content="Next: Description"
          />
        </div>
      </div>
    </v-window-item>
  </v-window>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import Left from "@/components/home/Left.vue";
import RightTitle from "@/components/home/RightTitle.vue";
import RightSkill from "@/components/home/RightSkill.vue";
import RightScope from "@/components/home/RightScope.vue";
import _ from "lodash";
export default defineComponent({
  name: "Home",
  components: {
    Left,
    RightTitle,
    RightSkill,
    RightScope,
  },

  data() {
    return {
      tabLeft: {
        1: {
          title: "Title",
          tab: 1,
          contentFirst: "Let's start with a strong title.",
          contentLast:
            "This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!",
        },
        2: {
          title: "Skills",
          tab: 2,
          contentFirst: "What are the main skills required for your work?",
          contentLast: "",
        },
        3: {
          title: "Scope",
          tab: 3,
          contentFirst: "Next, estimate the scope of your work.",
          contentLast:
            "These aren’t final answers, but this information helps us recommend the right talent for what you need.",
        },
        4: {
          title: "Budget",
          tab: 4,
          contentFirst: "Tell us about your budget.",
          contentLast:
            "This will help us match you to talent within your range.",
        },
      },
      tab: "1",
      title: "",
      rulesTitle: [(value: string) => !!value || "Title is required."],
    };
  },
  methods: {
    async keyUp() {
      const __ = this;
      if (_.every(__.rulesTitle, (fn) => fn(__.title))) {
        const rs = await this.$http.get(
          "/elt/search?page=0&size=5&title=change manage"
        );
        console.log("rs: ", rs);
      }
    },
    tabMove(next: number) {
      const __ = this;
      if (next === 0 || next === 5) {
        return;
      }
      __.tab = String(next);
    },
  },
});
</script>
