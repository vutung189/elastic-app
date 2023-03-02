<template>
  <div class="w-1/2 pr-[45px] flex">
    <div class="p-[30px] border-r border-[#d5e0d5] flex-1">
      <div class="mb-[20px]"><span class="text-[#5d6e55]">{{ tab }}/4</span><span class="ml-[15px]">{{ title }}</span>
      </div>
      <h2 class="text-dark-green text-[32px] leading-[32px] tracking-[-0.031em] font-rza font-bold mb-10 leading-10">
        {{ contentFirst }}</h2>
      <div class="text-dark-green text-[14px] leading-6">
        {{ contentLast }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Left',
  props: {
    tab: String,
    title: String,
    contentFirst: String,
    contentLast: String
  }
}
</script>
 