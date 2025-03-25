<template>
  <div class="cover-bg p-3 p-lg-4 text-white">
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <div class="avatar hover-effect bg-white shadow-sm p-1">
          <img :src="'/profile' + profileImage" width="150" height="200" />
        </div>
      </div>
      <div class="col-lg-8 col-md-7 text-center text-md-start">
        <h2 class="h1 mt-2">{{ name }}</h2>
        <p>{{ jobTitle }}</p>
        <div class="d-print-none">
          <a class="btn btn-light text-dark shadow-sm mt-1 me-1" href="cv.pdf" target="_blank">
            {{ t('download') }}
          </a>
        </div>
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

const { t } = useI18n()

defineProps<{
  name: string
  jobTitle: string
  profileImage: string
}>()
</script>
