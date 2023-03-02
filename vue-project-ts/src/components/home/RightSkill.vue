<template lang="">
  <div class="w-1/2 flex-1 pt-[30px] px-[20px]">
    <h4 class="text-[16px] font-bold mb-[10px]">
      Search or add up to 10 skills
    </h4>

    <v-autocomplete
      append-inner-icon=""
      prepend-inner-icon="mdi-magnify"
      v-model="title"
      :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]"
    ></v-autocomplete>
    <div class="text-dark-green">
      <v-icon>mdi-star</v-icon>
      <span class="text-[14px] font-bold"
        >For the best results, add 3-5 skills</span
      >
    </div>
    <ExpandTransition content="Popular skills" :lstBtn="popularSkills" />
    <ExpandTransition content="Devices" :lstBtn="devices" />
    <ExpandTransition content="Mobile Platforms" :lstBtn="popularSkills" />
    <ExpandTransition content="App Features" :lstBtn="popularSkills" />
    <ExpandTransition
      content="Popular Apple Development APIs"
      :lstBtn="popularSkills"
    />
    <ExpandTransition
      content="Mobile Programming Languages"
      :lstBtn="popularSkills"
    />
    <ExpandTransition
      content="Mobile App Development Skills"
      :lstBtn="popularSkills"
    />
    <ExpandTransition content="Role" :lstBtn="popularSkills" />
    <ExpandTransition content="Databases" :lstBtn="popularSkills" />
    <ExpandTransition content="Business Size" :lstBtn="popularSkills" />

    <div class="flex justify-end gap-x-10 mt-20">
      <ButtonCustom :onclickBtn="() => this.tabMove(1)" content="Back" />
      <ButtonCustom
        bgColor="success"
        :onclickBtn="() => this.tabMove(3)"
        content="Next: Skills"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
import ButtonCustom from "@/components/form/Button.vue";
import ButtonSkill from "@/components/form/ButtonSkill.vue";
import ExpandTransition from "@/components/home/ExpandTransition.vue";
export default defineComponent({
  name: "RightTitle",
  components: { ButtonCustom, ButtonSkill, ExpandTransition },
  props: {
    tabMove: { type: Function },
  },

  data() {
    return {
      popularSkills: [
        { value: 1, label: "JavaScript" },
        { value: 2, label: "Php" },
        { value: 3, label: "Automation" },
        { value: 4, label: "Api" },
        { value: 5, label: "Autodesk AutoCAD" },
        { value: 6, label: "Web Development" },
        { value: 7, label: "Python" },
        { value: 8, label: "Java" },
        { value: 9, label: "Android" },
        { value: 10, label: "Springting" },
      ],
      devices: [
        { value: 11, label: "Smartphone" },
        { value: 12, label: "Tablet" },
        { value: 13, label: "Smartwatch" },
        { value: 14, label: "Virtual Reality" },
        { value: 15, label: "JavaScript" },
        { value: 16, label: "JavaScript" },
        { value: 17, label: "JavaScript" },
      ],
      show: true,
      title: "",
      rulesTitle: [(value: string) => !!value || "Title is required."],
    };
  },
  methods: {
    async keyUp() {
      const __ = this;
      if (_.every(__.rulesTitle, (fn) => fn(__.title))) {
        const rs = await this.$http.get(
          "/search?page=0&size=5&title=change manage"
        );
        console.log("rs: ", rs);
      }
    },
  },
});
</script>

<style lang=""></style>
