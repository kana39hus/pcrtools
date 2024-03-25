<template>
  <section class="section is-title-bar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <ul class="title-custom">
            <li class="title-custom" v-for="(title, index) in titleStack" :key="index">
              {{ title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleStack: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
section.section.is-title-bar {
  padding: 0.5em;
  font-family: "Nunito", sans-serif;

  ul.title-custom {
    li.title-custom {
      display: inline-block;
      padding: 0 0 0 0;
      font-size: 2em;
      color: rgb(94, 94, 94);

      &:after {
        display: inline-block;
        content: '/';
        padding-left: 1rem;
        padding-right: 1rem;
      }

      &:last-child {
        padding-right: 0;
        font-weight: 500;
        color: var(--navy);

        &:after {
          display: none;
        }
      }
    }
  }
}

</style>