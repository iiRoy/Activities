'use client';

const UserCard = ({ type, count }: { type: string; count: number }) => {
  return (
    <div className='rounded-2xl text-text odd:bg-primaryShade even:bg-secondaryShade p-4 flex-1 min-w-[22vmax] md:min-w-[16vmax] w-auto'>
      <h1 className='text-[3.5vmax] lg:text-[3vmax] font-bold'>{count}</h1>
      <h2 className='capitalize text-[2vmax] lg:text-[1.7vmax] font-medium opacity-80'>{type}</h2>
    </div>
  );
};

export default UserCard;
