import { useTranslations } from "next-intl";

const DescriptionText = () => {
        const t = useTranslations('Blog');
  return (
    <p className='mb-2 md:mb-4'> {t(`description`)}</p>
  )
}

export default DescriptionText;