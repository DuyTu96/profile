import { createI18n } from 'vue-i18n'
import resumeEn from '@/i18n/lang/en/resume.json'
import resumeJa from '@/i18n/lang/ja/resume.json'
import labelEn from '@/i18n/lang/en/label.json'
import labelJa from '@/i18n/lang/ja/label.json'

const messages = {
  en: {
    ...resumeEn,
    ...labelEn,
  },
  ja: {
    ...resumeJa,
    ...labelJa,
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  globalInjection: true,
})
