import { useTranslations } from "next-intl";

const DescriptionText = () => {
        const t = useTranslations('Portfolio');
  return (
    <p className='mb-2 md:mb-4'> {t(`Photos.description`)}</p>
  )
}

export default DescriptionText;