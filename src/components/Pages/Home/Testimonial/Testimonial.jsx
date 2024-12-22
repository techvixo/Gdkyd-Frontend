
import img1 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
import img2 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
import img3 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
import img4 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
import img5 from "../../../../../public/assets/home-img/testimonial-img/client-img.png";
import TestimonialSlider from "./TestimonialSlider";
import { useTranslations } from "next-intl";

const ClientTestimonial = () => {
  const t = useTranslations('HomePage');
  const keys = ['testimonial1', 'testimonial2', 'testimonial3', "testimonial4", "testimonial5"];
  const images = [img1, img2, img3, img4, img5];

  return (
    <TestimonialSlider
      images={images}
      keys={keys}
      title={t(`Testimonial.title`)}
      description={t(`Testimonial.description`)}
    ></TestimonialSlider>
  );
};

export default ClientTestimonial;
