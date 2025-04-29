<template>
  <div class="about-section pt-2 px-3 px-lg-1 mt-1">
    <!-- Phần giới thiệu -->
    <div class="mb-1 text-center">
      <h2 class="h4 mb-1">{{ t('aboutMe') }}</h2>
      <p>{{ about }}</p>
    </div>
    <!-- Phần thông tin cá nhân -->
    <div class="personal-info">
      <div class="info-row">
        <span class="info-label">{{ t('age') }}:</span>
        <span class="info-value">{{ age }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">{{ t('email') }}:</span>
        <span class="info-value">{{ email }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">{{ t('phone') }}:</span>
        <span class="info-value">{{ phone }}</span>
      </div>
      <div class="info-row">
        <span class="info-label">{{ t('address') }}:</span>
        <span class="info-value">{{ address }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutSection',
})
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  about: string
  dateOfBirth: string
  age: number
  email: string
  phone: string
  address: string
}>()
</script>

<style scoped>
.personal-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
}
.info-row {
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
}
.info-label {
  font-weight: 600;
  min-width: 70px;
  text-align: left;
}
.info-value {
  color: #6c757d;
}
</style>
