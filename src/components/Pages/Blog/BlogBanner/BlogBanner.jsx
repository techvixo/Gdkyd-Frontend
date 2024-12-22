import { BASEURL } from '../../../../../Constant';
import ShareBanner from '../../../Shared/ShareBanner/ShareBanner';
const BlogBanner = ({ banner, locale }) => {
  return (
    <ShareBanner
     bannerBg={`${BASEURL}/${banner?.banner_image}`}
    title={locale == "en" ? banner?.title_en
      : banner?.title_cn
    }
    des={locale == "en" ? banner?.description_en
      : banner?.description_cn
    } link={"blog"}
    ></ShareBanner>
  )
}

export default BlogBanner