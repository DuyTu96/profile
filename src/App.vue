<template>
  <HeaderComponent
    :social-networks="resume.socialNetworks"
    :locale="locale"
    @toggle-language="toggleLanguage"
  />
  <div class="page-content">
    <div class="container">
      <div class="row">
        <!-- Left sidebar -->
        <div class="col-lg-4 left-sidebar">
          <div class="cover-left-sidebar shadow-lg bg-white h-100 mb-4">
            <ProfileHeader
              :name="resume.name"
              :job-title="resume.jobTitle"
              :profile-image="resume.profileImage"
            />
            <AboutSection
              :about="resume.about"
              :age="calculateAge"
              :email="resume.personalDetails.email"
              :phone="resume.personalDetails.phone"
              :address="resume.personalDetails.address"
              :dateOfBirth="resume.personalDetails.dateOfBirth"
              :education="resume.education.institution"
            />
            <SkillsSection :skills="resume.skills" />

            <AdditionalInfoSection :additionalInfo="resume.additionalInfo" />
          </div>
        </div>
        <!-- Main content area -->
        <div class="col-lg-8 right-component">
          <div class="cover shadow-lg bg-white">
            <WorkExperienceSection :experience="resume.experience" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import resumeEn from '@/i18n/lang/en/resume.json'
import resumeJa from '@/i18n/lang/ja/resume.json'
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProfileHeader from '@/components/ProfileHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import WorkExperienceSection from '@/components/WorkExperienceSection.vue'
import AdditionalInfoSection from '@/components/AdditionalInfoSection.vue'

interface Resume {
  personalDetails: { dateOfBirth: string; email: string; phone: string; address: string }
  socialNetworks: Array<{ link: string; name: string; icon: string }>
  profileImage: string
  name: string
  jobTitle: string
  about: string
  skills: Array<{ title: string; skills: string[] }>
  experience: Array<{
    title: string
    company: string
    period: string
    projects: Array<{ name: string; description: string; lang: string }>
  }>
  education: { degree: string; institution: string; period: string }
  additionalInfo: Array<{ text: string }>
}

const { locale } = useI18n()

// Initialize locale from localStorage or default to 'en'
locale.value = localStorage.getItem('locale') || 'en'

const resume = computed<Resume>(() => {
  return locale.value === 'en' ? resumeEn : resumeJa
})

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ja' : 'en'
  localStorage.setItem('locale', locale.value)
}

const calculateAge = computed(() => {
  const birthDate = new Date(resume.value.personalDetails.dateOfBirth)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
})
</script>

<style scoped>
.cover {
  height: 100%;
}
.left-sidebar {
  /* margin-top: 8px; */
  padding-right: 0;
}

.right-component {
  padding-left: 0;
}
.page-content {
  margin-bottom: 5rem;
}
</style>
