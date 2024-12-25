import { useTranslations } from "next-intl";

const ServiceFAQ = () => {
  const t = useTranslations('ServicePage');
  const keys = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7'];
  return (
    <section id="faq_section" className="">
      <div className="main_container bg-white py-5 md:py-10 rounded-md shadow-md">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#070F11] my-4 md:my-7">
         {t(`FAQ.title`)}
        </h2>
        {/* All faq here  */}
        <div className="faq_container m-4 md:mx-16 lg:mx-28 md:pt-5">
          {keys.map((item, i) => {
            return (
              <div
                key={i}
                className="collapse rounded-none collapse-arrow bg-white border-b-2"
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-base text-[#000000] p-0 py-4 ">
                  {t(`FAQ.QuestionList.${item}.title`)}
                </div>
                <div className="collapse-content text-sm md:text-base">
                  <p>  {t(`FAQ.QuestionList.${item}.description`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
