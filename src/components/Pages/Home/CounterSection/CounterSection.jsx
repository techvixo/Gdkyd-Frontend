import { useTranslations } from "next-intl";
import CounterCard from "./CounterCard";

const CounterSection = () => {
  const counterData = [
    {
      countNumber: "4 +",
      name: "Satisfied Clients",
    },
    {
      countNumber: "8 +",
      name: "Projects Completed",
    },
    {
      countNumber: "5 +",
      name: "Awards Earned",
    },
    {
      countNumber: "52 +",
      name: "Content Created",
    },
  ];
  const t = useTranslations('HomePage');
  const keys = ['counter1', 'counter2', 'counter3','counter4'];
  return (
    <section id="CounterSection" className="my-4 md:my-10 py-9 md:py-24 bg-primary">
      <div className="main_container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
         <div className=" hidden md:block">
         <div
            className="single_count flex flex-col gap-2"
          >
            <h4 className="text-xl md:text-2xl font-semibold  text-white">
            {t("CounterSection.title")}
            </h4>
            <p className="text-[#d4d4d4] text-sm md:text-base"> {t("CounterSection.des")}</p>
          </div>
         </div>
          {keys.map((key, i) => {
            const name = t(`CounterSection.Counters.${key}.name`)
            const countNumber = t(`CounterSection.Counters.${key}.countNumber`)

            return <CounterCard key={i} name={name} countNumber={countNumber}></CounterCard>;
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
