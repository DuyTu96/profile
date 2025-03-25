<template>
  <header class="d-print-none">
    <div class="container text-center text-lg-left">
      <div class="py-3 clearfix">
        <h1 class="site-title mb-0"></h1>
        <div class="site-nav">
          <nav role="navigation">
            <ul class="nav justify-content-center">
              <li class="nav-item" v-for="(socialData, index) in socialNetworks" :key="index">
                <a class="nav-link" :href="socialData.link" :title="socialData.name">
                  <i :class="socialData.icon"> </i>
                  <span class="menu-title sr-only">{{ socialData.name }}</span>
                </a>
              </li>
              <li class="nav-item">
                <button class="btn btn-link nav-link" @click="$emit('toggle-language')">
                  <i class="fas fa-globe"></i> <span>{{ locale }}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
})
</script>

<script setup lang="ts">
interface SocialNetwork {
  link: string
  name: string
  icon: string
}

defineProps<{
  socialNetworks: SocialNetwork[]
  locale: string
}>()

defineEmits<{
  (e: 'toggle-language'): void
}>()
</script>
