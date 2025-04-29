<template>
  <div class="skills-section mt-3 px-3 px-lg-2">
    <h2 class="h5 mb-1">{{ t('professionalSkills') }}</h2>
    <div class="skills-list">
      <div class="skill-group" v-for="(skill, index) in skills" :key="index">
        <div class="mb-2">
          <span>{{ skill.title }}</span>
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

<style scoped>
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1rem;
}
</style>
