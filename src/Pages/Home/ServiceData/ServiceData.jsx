


const ServiceData = ({service,index}) => {

  const {title ,description} = service;

  return (
    <div>
      <div>
        <div  className={`${index >= 5 ? 'border-l-2 lg:border-l-[3px] border-none ml-2 lg:ml-3' : 'border-l-2 lg:border-l-[3px] border-slate-300 ml-2 lg:ml-2'}`}>
          <div className='relative' >
            <div className='absolute top-0 -left-[12px] lg:-left-[16px] bg-gray-900 h-5 w-5 lg:h-7 lg:w-7 rounded-full flex justify-center items-center lg:text-base font-semibold text-slate-200'>{index + 1}</div>
            <div  className='pl-3 sm:pl-5 md:pl-4 lg:pl-10'>
              <div className="pb-2">
              <h3 className='text-xl font-bold text-gray-900' style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>{title}</h3>
              <p className="text-xs sm:text-base md:text-sm lg:text-base text-gray-700 italic">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceData;