<template>
  <section class="section">


    <div class="box">
      <div class="content">
        <h4>日文軸快速翻譯</h4>
      </div>
      <TranslateTools />
    </div>

    <div class="box" style="margin-top: 5em;">
      <div class="content">
        <h4>加入新翻譯</h4>
      </div>
      <UpdateName />
    </div>

    <div class="box" style="margin-top: 5em;">
      <TranslatedList />
    </div>

  </section>
</template>

<script>
import UpdateName from '@/components/UpdateName.vue';
import TranslateTools from '@/components/TranslateTools.vue';
import TranslatedList from '../components/TranslatedList.vue';


export default {
  name: "IndexPage",
  components: {
    TranslateTools, UpdateName, TranslatedList
  },
};
</script>
