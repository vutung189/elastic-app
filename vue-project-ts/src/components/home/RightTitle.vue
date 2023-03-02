<template lang="">
  <div class="pl-5 w-1/2 mt-20">
    <h4 class="text-[16px] font-bold mb-3">Write a title for your job post</h4>
    <v-text-field
      :rules="rulesTitle"
      v-model="title"
      clearable
      @input="keyUp"
    ></v-text-field>
    <div class="mt-20">
      <div class="text-[16px] font-bold">Example titles</div>
      <ul class="list-disc">
        <li>
          Build responsive WordPress site with booking/payment functionality
        </li>
        <li>AR experience needed for virtual product demos (ARCore)</li>
        <li>
          Developer needed to update Android app UI for new OS/device specs
        </li>
      </ul>
    </div>
    <div class="mt-20">
      <div v-show="!isEmptyJobCategory">
        <div class="font-bold text-[16px]">Job category</div>
        <v-radio-group>
          <v-radio
            v-for="job in jobCategory"
            :value="job.id"
            :label="job.title"
          />
        </v-radio-group>
      </div>
    </div>

    <div class="flex justify-end gap-x-10 mt-20">
      <ButtonCustom :onclickBtn="() => this.tabMove(0)" content="Back" />
      <ButtonCustom
        bgColor="success"
        :onclickBtn="() => this.tabMove(3)"
        content="Next: Skills"
      />
    </div>

    <div class="flex justify-end gap-x-10 mt-20">
      <v-btn @click="() => this.tabMove(1)"> Back </v-btn>
      <v-btn color="success" @click="() => this.tabMove(2)">
        Next: Skills
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
      rulesTitle: [(value: string) => !!value || "Title is required."],
      jobCategory: [],
    };
  },
  methods: {
    async keyUp() {
      const __ = this;
      if (_.every(__.rulesTitle, (fn) => fn(__.title))) {
        const { data } = await this.$http.get(
          `/search?page=0&size=3&title=${__.title}`
        );
        __.jobCategory = data;
        console.log("__.jobCategory: ", __.jobCategory);
      }
    },
  },
  computed: {
    isEmptyJobCategory: function () {
      const __ = this;
      return _.isEmpty(__.jobCategory);
    },
  },
});
</script>

<style lang=""></style>
