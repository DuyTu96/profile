<template>
  <div class="cover-bg p-3 p-lg-4 text-white">
    <div class="text-center">
      <div class="avatar hover-effect bg-white shadow-sm p-1 mx-auto mb-1">
        <img :src="'/profile' + profileImage" width="150" height="200" />
      </div>
      <div>
        <a class="h4 mt-2 text-light" :href="pdfUrl" target="_blank">{{ name }}</a>
        <p>{{ jobTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileHeader',
})
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const pdfUrl = computed(() => {
  return locale.value === 'ja'
    ? 'DinhDuyTu_CV_Fullstack_Dev_JA.pdf'
    : 'DinhDuyTu_CV_Fullstack_Dev_EN.pdf'
})

defineProps<{
  name: string
  jobTitle: string
  profileImage: string
}>()
</script>

<style scoped>
a {
  text-decoration: none;
}

.avatar {
  max-width: 156px;
}

.avatar img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
