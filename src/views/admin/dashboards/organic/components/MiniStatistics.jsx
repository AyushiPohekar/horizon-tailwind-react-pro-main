// Assets
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

const MiniStatistics = (props) => {
  const {
    bgColor,
    icon,
    title,
    value,
    growth,
    growthColor,
    cardBg,
    titleColor,
    valueColor,
    detailColor,
    iconColor,
  } = props;
  return (
    <div
      className={`flex ${cardBg} justify-between rounded-[20px] bg-clip-border p-6 font-dm shadow-3xl shadow-shadow-500  dark:!bg-navy-800 dark:shadow-none pb-6 mx-7`}
    >
         <div
        className={`flex h-20 w-20 items-center justify-center ${iconColor} rounded-full  ${bgColor} `}
      >
        {icon}
      </div>
      <div className='flex flex-col gap-3'>
        <h5 className={`font-dm text-lg font-medium ${titleColor} `}>
          {title}
        </h5>
        <p className={`font-dm text-2xl font-bold ${valueColor} `}> {value} </p>
      </div>

   
    </div>
  );
};

export default MiniStatistics;
