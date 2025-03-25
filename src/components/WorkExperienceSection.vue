<template>
  <div class="work-experience-section px-3 px-lg-4">
    <h2 class="h3 mb-4">{{ t('workExperience') }}</h2>
    <div class="timeline">
      <div
        class="timeline-card timeline-card-primary card shadow-sm"
        v-for="(exp, index) in experience"
        :key="index"
      >
        <div class="card-body">
          <div class="h5 mb-1">
            {{ exp.title }}
            <span class="text-muted h6">at {{ exp.company }}</span>
          </div>
          <div class="text-muted text-small mb-2">{{ exp.period }}</div>
          <div v-for="(project, indexProject) in exp.projects" :key="indexProject">
            <div class="mb-2">
              <i class="fas fa-hand-point-right"></i>
              <i>{{ project.name }}</i>
              <div class="ps-3">
                <span> Description: {{ project.description }} </span>
                <p>Framework: {{ project.lang }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WorkExperienceSection',
})
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Project {
  name: string
  description: string
  lang: string
}

interface Experience {
  title: string
  company: string
  period: string
  projects: Project[]
}

defineProps<{
  experience: Experience[]
}>()
</script>
