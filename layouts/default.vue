<template>
  <div>
    <div>
      <!-- 언어 스위치 -->
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)">
        {{ locale.name }}
      </nuxt-link>
    </div>    
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    if(this.$i18n.locale === 'ko') {
      return {
        meta: [
          {
            hid: 'og:title',
            property: 'og:title',
            content: '타이틀'
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: '설명'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: ''
          },
        ]
      }
    }
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Title'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Description'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
      ]
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => {
        return i.code !== this.$i18n.locale;
      });
    }
  }
}
</script>
  
<style>

</style>