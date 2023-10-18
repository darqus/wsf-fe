import { i18n, } from 'src/boot/i18n'

const { t, } = i18n.global

const { VITE_NAME_FULL, VITE_VERSION, VITE_BUILD_DATE, VITE_DESCRIPTION, } =
  import.meta.env

export const TITLE = `${VITE_NAME_FULL}: ${VITE_VERSION} ${t(
    'version.build'
  )} ${VITE_BUILD_DATE}`

export const DESCRIPTION = VITE_DESCRIPTION

export const meta = {
  title: TITLE,
  meta: {
    description: {
      name: 'description',
      content: VITE_DESCRIPTION,
    },
    keywords: { name: 'keywords', content: VITE_DESCRIPTION, },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8',
    },
    noscript: {
      default: t('titles.noscript'),
    },
  },
}
