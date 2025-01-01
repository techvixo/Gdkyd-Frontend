import ContactForm from "../../../Shared/ContactFrom/ContactFrom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoTiktok } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { useTranslations } from "next-intl";

const ContactBox = () => {
  const t = useTranslations('Contact');
  return (
    <div className="py-5 md:py-10">
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="contact_content w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#070F11] my-2 ">
            {t(`ContactForm.title`)}
            </h2>
            <div className="border-b-2 py-2 md:py-4">
              <p>
              {t(`ContactForm.description`)}
                <span className="text-secondary font-semibold">KYD</span>
              </p>
            </div>
            <h6 className="text-md md:text-lg font-semibold text-[#333333] my-2 md:my-5">
            {t(`ContactForm.office`)}
            </h6>
            <div className="flex flex-col gap-2 md:gap-3 mb-2">
              <div className="flex items-center gap-2 md:gap-4">
                <p className="p-2 md:p-3 shadow  bg-[#D3E5F0] text-md md:text-xl rounded text-black">
                  <span>
                    <FaPhoneAlt />
                  </span>
                </p>
                <p>
                {t(`ContactForm.ContactInfo.call`)} : <span className="font-semibold">+86-13902617335</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="p-2 md:p-3 shadow  bg-[#D3E5F0] text-md md:text-xl rounded text-black">
                  <span>
                    <FaWhatsapp />
                  </span>
                </p>
                <p>
                {t(`ContactForm.ContactInfo.wp`)} : <span className="font-semibold">+86-13902617335                </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="p-2 md:p-3 shadow  bg-[#D3E5F0] text-md md:text-xl rounded text-black">
                  <span>
                    <MdOutlineMailOutline />
                  </span>
                </p>
                <p>
                {t(`ContactForm.ContactInfo.mail`)} :{" "}
                  <span className="font-semibold">
                  kyd@kuaiyuda.com
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="p-2 md:p-3 shadow  bg-[#D3E5F0] text-md md:text-xl rounded text-black">
                  <span>
                    <FaLocationDot />
                  </span>
                </p>
                <p>
                KYD :{" "}
                  <span className="font-semibold">
                  {t(`ContactForm.ContactInfo.address`)}
                  </span>
                </p>
              </div>
            </div>
            {/*============= Social media link or icon here =============== */}
            <p className="text-sm md:text-base my-2 md:my-5 md:pt-3">
            {t(`ContactForm.social`)}
            </p>
            <div className="flex items-center text-md md:text-2xl gap-3 md:gap-6 text-black my-3">
              <a
                target="blank"
                href="https://x.com/KYD_Precision"
                className=" "
              >
                <FaSquareXTwitter />
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/guangdongkyd"
                className=" "
              >
                <FaFacebookF />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/company/guangdong-kyd-medical-mask-machinery/"
                className=" "
              >
                <FaLinkedinIn />
              </a>
              <a
                target="blank"
                href="https://www.tiktok.com/@kyd_precision_machinery"
                className="text-black "
              >
               <IoLogoTiktok />
              </a>
              <a
                target="blank"
                href="https://wa.me/+86-13902617335"
                className=""
              >
                <RiWhatsappFill />
              </a>
            </div>
          </div>
          <div className="w-full">
            <ContactForm
            name= {t(`ContactForm.FormData.name`)} 
            phone= {t(`ContactForm.FormData.phone`)} 
            email= {t(`ContactForm.FormData.email`)} 
            product={t(`ContactForm.FormData.product`)} 
            note= {t(`ContactForm.FormData.note`)} 
            ></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
