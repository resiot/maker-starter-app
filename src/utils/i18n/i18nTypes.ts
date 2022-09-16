export const supportedLangs = ['en', 'ko', 'zh', 'ja', 'it'] as const
export type LangType = typeof supportedLangs[number]

export const SUPPORTED_LANGUAGUES = [
  { label: 'English', value: 'en' },
  /* { label: '中文', value: 'zh' }, // chinese
  { label: '日本人', value: 'ja' }, // japanese
  { label: '한국어', value: 'ko' }, // korean */
  { label: 'Italiano', value: 'it' }, // italian
] as { label: string; value: LangType }[]
