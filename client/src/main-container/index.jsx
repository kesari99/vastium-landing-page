import React from 'react';
import NavBar from './navbar';
import Card from '../components/card';
import ProgressCard from '../components/progress-card';
import ScheduleCard from '../components/schedule-card';
import { ChevronDown } from 'lucide-react';
import AnnouncmentCard from '../components/announcment-card';

const MainContainer = () => {
    return (
        <div className='flex-1 p-2'>
            <NavBar />
            <h1 className='text-3xl font-bold mb-4'>DashBoard</h1>

            <div className='flex flex-col lg:flex-row w-full'>


                <div className='flex flex-col gap-4 p-4 '>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <Card
                            backgroundColor='#E8F0FB'
                            Heading='Job Open'
                            number='10'
                            description='Actively Hiring'
                            desColor='#3786F1'
                        />

                        <Card
                            backgroundColor='#FDEBF9'
                            Heading='New Employees'
                            number='24'
                            description='4 Department'
                            desColor='#EE61CF'
                        />

                        <Card
                            backgroundColor='#FFEFE7'
                            Heading='Available Position'
                            number='24'
                            description='4 Urgently needed'
                            desColor='#FF5151'
                        />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                        <ProgressCard
                            name='Employee'
                            number='24'
                            men="120"
                            women="96"
                            percentageNumber="2"
                        />
                        <ProgressCard
                            name='Employee'
                            number='24'
                            men="120"
                            women="96"
                            percentageNumber="2"
                        />
                    </div>

                    <div className='flex flex-col gap-3 border rounded-md p-3'>
                        <div className='flex justify-between '>
                            <h1 className='text-[18px] text-[#000000] leading-[28px] font-500 '>Announcement</h1>
                            <div className='flex gap-1 items-center border-[1px] border-[#EFEFEF] p-[5px]'> 
                                <p className='text-[12px] leading[28px] font-400 text-[#686868]'>Today, 13 Sep 2021</p>
                                <ChevronDown className="h-4 w-4" />

                            </div>
                        </div>

                        <AnnouncmentCard 
                            title="Outing schedule for every departement"
                            time="12:30pm"
                        
                        />
                        <AnnouncmentCard 
                            title="Meeting HR Department"
                            time="12:00pm"
                        
                        />
                        <AnnouncmentCard 
                            title="IT Department need two more talents for UX/UI Designer position"
                            time="11:30am"
                        
                        />
                                     <button className='text-[#FF5151] w-full text center  p-2'>
        Creat a New Schedule
        </button>

                        

                    </div>
       


                </div>


    <div className='flex-1 p-4 mt-4 lg:mt-0 flex flex-col items-start md:flex-row lg:flex-col w-full md:max-w-none lg:max-w-[415px] gap-4'>
    {/* Recently Active Section */}
    <div className='bg-[#161E54] border rounded-md p-4 flex flex-col items-start gap-[6px] flex-1 '>
        <h1 className='text-2xl bg-[#1B204A] text-white'>Recently Active</h1>
        <div className='mt-5 mb-5 flex flex-col gap-[6px] p-3'>
            <p className='text-[#c4c1c1]'>10.40 AM, Fri 10 Sept 2021</p>
            <h1 className='text-[18px] leading-[28px] text-white'>You Posted a New Job</h1>
            <p className='text-[#c4c1c1]'>
                Kindly check the requirements and terms of work and make sure everything is right.
            </p>
        </div>
        <div className='flex items-center justify-between w-full'>
            <p className='text-[#ffffff] leading-[21px] '>Today you made 12 Activities</p>
            <button className='bg-[#FF5151] text-white border rounded-md p-2'>See All Activity</button>
        </div>
    </div>

    {/* Upcoming Schedule Section */}
    <div className='border-[1px] flex-1 border-[#E0E0E0] mt-5 md:mt-0 md:ml-5 p-4 flex flex-col items-start rounded-md '>
        <div className='flex flex-row w-full justify-between'>
            <h1 className='font-medium'>Upcoming Schedule</h1>
            <div className='flex items-center gap-[10px]'>
                <span className='text-[12px] text-[#686868]'>Today, 13 Sep 2021</span>
            </div>
        </div>
        <div className='flex flex-col items-start w-full'>
            <p className='text-[12px] text-[#686868]'>Priority</p>
            <ScheduleCard title='Review candidate applications' time='11.30 AM' />
            <p className='text-[12px] text-[#686868] mt-2'>Other</p>
            <ScheduleCard title='Interview with candidates' time='10.30 AM' />
            <ScheduleCard title='Short meeting with product designer from IT Department' time='9.15 AM' />
          
        </div>
        <button className='text-[#FF5151] w-full text center  p-2'>
        Creat a New Schedule
        </button>
    </div>
</div>


            </div>

        </div>
    );
};

export default MainContainer;
