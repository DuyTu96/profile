<template>
  <div class="skills-section mt-3 px-3 px-lg-2">
    <h2 class="h5 mb-1">{{ t('additionalInformation') }}</h2>
    <div class="skills-list">
      <div class="skill-group" v-for="(info, index) in additionalInfo" :key="index">
        <div class="mb-1">
          <span> - {{ info.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{
  additionalInfo: Array<{ text: string }>
}>()

const { t } = useI18n()
</script>
<style scoped>
.skills-list {
  margin-left: 1rem;
}
</style>
