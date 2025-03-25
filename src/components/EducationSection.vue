<template>
  <div class="education-section px-3 px-lg-4">
    <h2 class="h3 mb-4">{{ t('education') }}</h2>
    <div class="timeline" v-for="(edu, index) in education" :key="index">
      <div class="timeline-card timeline-card-success card shadow-sm">
        <div class="card-body">
          <div class="h5 mb-1">
            {{ edu.degree }}
            <span class="text-muted h6">from {{ edu.institution }} </span>
          </div>
          <div class="text-muted text-small mb-2">{{ edu.period }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EducationSection',
})
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Education {
  degree: string
  institution: string
  period: string
}

defineProps<{
  education: Education[]
}>()
</script>
