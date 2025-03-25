<template>
  <div class="skills-section px-3 px-lg-4">
    <h2 class="h3 mb-3">{{ t('professionalSkills') }}</h2>
    <div class="row">
      <div class="col-md-4" v-for="(skill, index) in skills" :key="index">
        <div class="mb-2">
          <i class="fas fa-hand-point-right"></i> <span>{{ skill.title }}</span>
          <ul>
            <li v-for="(skillItem, indexSkill) in skill.skills" :key="indexSkill">
              <span>{{ skillItem }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SkillsSection',
})
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Skill {
  title: string
  skills: string[]
}

defineProps<{
  skills: Skill[]
}>()
</script>
