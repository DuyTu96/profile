<template>
  <header class="d-print-none">
    <div class="container text-center text-lg-left">
      <div class="py-3 clearfix">
        <h1 class="site-title mb-0"></h1>
        <div class="site-nav">
          <nav role="navigation">
            <ul class="nav justify-content-center">
              <li
                class="nav-item"
                v-for="(socialData, index) in resume.socialNetworks"
                :key="index"
              >
                <a class="nav-link" :href="socialData.link" :title="socialData.name">
                  <i :class="socialData.icon"> </i>
                  <span class="menu-title sr-only">{{ socialData.name }}</span>
                </a>
              </li>
              <li class="nav-item">
                <button class="btn btn-link nav-link" @click="toggleLanguage">
                  <i class="fas fa-globe"></i> <span>{{ locale }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <div class="page-content">
    <div class="container">
      <div class="cover shadow-lg bg-white">
        <div class="cover-bg p-3 p-lg-4 text-white">
          <div class="row">
            <div class="col-lg-4 col-md-5">
              <div class="avatar hover-effect bg-white shadow-sm p-1">
                <img :src="resume.profileImage" width="150" height="200" />
              </div>
            </div>
            <div class="col-lg-8 col-md-7 text-center text-md-start">
              <h2 class="h1 mt-2">{{ resume.name }}</h2>
              <p>{{ resume.jobTitle }}</p>
              <div class="d-print-none">
                <a
                  class="btn btn-light text-dark shadow-sm mt-1 me-1"
                  href="cv.pdf"
                  target="_blank"
                >
                  {{ t('download') }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="about-section pt-4 px-3 px-lg-4 mt-1">
          <div class="row">
            <div class="col-md-6">
              <h2 class="h3 mb-3">{{ t('aboutMe') }}</h2>
              <p>
                {{ resume.about }}
              </p>
            </div>
            <div class="col-md-5 offset-md-1">
              <div class="row mt-2">
                <div class="col-sm-4">
                  <div class="pb-1">{{ t('age') }}</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary" id="age-text">{{ calculateAge }}</div>
                </div>
                <div class="col-sm-4">
                  <div class="pb-1">{{ t('email') }}</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">tudd.dev@gmail.com</div>
                </div>
                <div class="col-sm-4">
                  <div class="pb-1">{{ t('phone') }}</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">+84 963 636 837</div>
                </div>
                <div class="col-sm-4">
                  <div class="pb-1">{{ t('address') }}</div>
                </div>
                <div class="col-sm-8">
                  <div class="pb-1 text-secondary">Ha Noi, Viet Nam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
        <div class="skills-section px-3 px-lg-4">
          <h2 class="h3 mb-3">{{ t('professionalSkills') }}</h2>
          <div class="row">
            <div class="col-md-4" v-for="(skill, index) in resume.skills" :key="index">
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
        <hr class="d-print-none" />
        <div class="work-experience-section px-3 px-lg-4">
          <h2 class="h3 mb-4">{{ t('workExperience') }}</h2>
          <div class="timeline">
            <div
              class="timeline-card timeline-card-primary card shadow-sm"
              v-for="(exp, index) in resume.experience"
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
        <hr class="d-print-none" />
        <div class="page-break"></div>
        <div class="education-section px-3 px-lg-4">
          <h2 class="h3 mb-4">{{ t('education') }}</h2>
          <div class="timeline" v-for="(edu, index) in resume.education" :key="index">
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
        <hr class="d-print-none" />
        <div class="page-break"></div>
        <div class="education-section px-3 px-lg-4 pb-4">
          <h2 class="h3 mb-4">{{ t('additionalInformation') }}</h2>
          <div class="timeline">
            <div class="timeline-card timeline-card-info card shadow-sm">
              <div class="card-body">
                <div v-for="(info, index) in resume.additionalInfo" :key="index">
                  <i class="fas fa-hand-point-right"></i> {{ info.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="d-print-none" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import resumeEn from '@/i18n/lang/en/resume.json'
import resumeJa from '@/i18n/lang/ja/resume.json'

interface Resume {
  personalDetails: { dateOfBirth: string }
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
  education: Array<{ degree: string; institution: string; period: string }>
  additionalInfo: Array<{ text: string }>
}

const { locale, t } = useI18n()

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
