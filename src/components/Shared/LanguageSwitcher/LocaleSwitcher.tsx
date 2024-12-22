"use client"
import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher({isSticky, isRoot}) {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
    isRoot={isRoot} 
    isSticky={isSticky}
      defaultValue={locale}
      items={[
        {
          value: 'en',
          flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
          label: t('en')
        },
        {
          value: 'zh',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
          label: t('zh')
        }
      ]}
      label={t('label')}
    />
  );
}
