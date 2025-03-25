<template>
  <div class="about-section pt-4 px-3 px-lg-4 mt-1">
    <div class="row">
      <div class="col-md-6">
        <h2 class="h3 mb-3">{{ t('aboutMe') }}</h2>
        <p>{{ about }}</p>
      </div>
      <div class="col-md-5 offset-md-1">
        <div class="row mt-2">
          <div class="col-sm-4">
            <div class="pb-1">{{ t('age') }}</div>
          </div>
          <div class="col-sm-8">
            <div class="pb-1 text-secondary" id="age-text">{{ age }}</div>
          </div>
          <div class="col-sm-4">
            <div class="pb-1">{{ t('email') }}</div>
          </div>
          <div class="col-sm-8">
            <div class="pb-1 text-secondary">{{ email }}</div>
          </div>
          <div class="col-sm-4">
            <div class="pb-1">{{ t('phone') }}</div>
          </div>
          <div class="col-sm-8">
            <div class="pb-1 text-secondary">{{ phone }}</div>
          </div>
          <div class="col-sm-4">
            <div class="pb-1">{{ t('address') }}</div>
          </div>
          <div class="col-sm-8">
            <div class="pb-1 text-secondary">{{ address }}</div>
          </div>
        </div>
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
