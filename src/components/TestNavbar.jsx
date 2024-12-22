
import NavLink from './Shared/Navbar/NavLink';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './Shared/LanguageSwitcher/LocaleSwitcher';

const TestNavbar = () => {
    const t = useTranslations('HomePage');
     const keys = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'];
//   console.log(navData)
    return (
        <div className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-2xl items-end justify-between">
                <nav className="flex gap-6 pt-6">
                    {
                        keys.map((key, index) => {
                            return(
                                <NavLink
                                key={index}
                                href={t(`navData.${key}.path`)}
                              >
                                {t(`navData.${key}.title`)}
                              </NavLink>
                            )
                        })
                    }
                    {/* <NavLink href="/">{t('home')}</NavLink>
                    <NavLink href="/profile">{t('profile')}</NavLink> */}
                </nav>
                <div className="mb-[2px] flex items-center">
                    <LocaleSwitcher />
                </div>
            </div>
        </div>
    )
}

export default TestNavbar;