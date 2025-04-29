<template>
  <div class="work-experience-section px-3 px-lg-3">
    <h2 class="h3 mb-1 pt-3">{{ t('workExperience') }}</h2>
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
          <div v-if="exp.projects.length == 0">{{ exp?.description }}</div>
          <div
            v-else
            v-for="(project, indexProject) in exp.projects.slice().reverse()"
            :key="indexProject"
          >
            <div class="mb-2">
              <!-- <i class="fas fa-hand-point-right"></i> -->
              <b>
                <i>- {{ project.name }}</i>
              </b>
              <span v-if="project.period"> - {{ project.period }}</span>
              <div class="ps-3">
                <label> <b>Description:</b> {{ project.description }} </label>
                <label> <b>Role:</b> {{ project.role }} </label>
                <p><b>Framework:</b> {{ project.lang }}</p>
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
  role?: string
  period?: string
}

interface Experience {
  title: string
  company: string
  period: string
  projects: Project[]
  description?: string
}

defineProps<{
  experience: Experience[]
}>()
</script>
