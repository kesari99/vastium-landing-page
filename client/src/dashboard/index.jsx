import { CalendarCheck, CircleEllipsis, Headset, LayoutDashboard, Settings, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import logo from '@/assets/logo.jpg';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const mainMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', value: 'dashboard' },
    { icon: LayoutDashboard, label: 'Recruitment', value: 'recruitment' },
    { icon: CalendarCheck, label: 'Schedule', value: 'schedule' },
    { icon: User, label: 'Employee', value: 'employee' },
    { icon: CircleEllipsis, label: 'Department', value: 'department' },
  ];

  const otherMenuItems = [
    { icon: Headset, label: 'Support', value: 'support' },
    { icon: Settings, label: 'Settings', value: 'settings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      
      {/* Sidebar */}
      <aside className="w-24 lg:w-40 bg-white shadow-md hidden md:block">
       
        <div className="p-4">
        <div className='flex items-center w-[169px] h-[62px] mb-6'>
          <img src={logo} alt="logo" className="w-10  h-10" />
          <span className='text-[#0A337A] text-[18px] font-extrabold hidden lg:inline'>Vasitum</span>
        </div>
          <h2 className="text-xs lg:text-xl text-gray-500 mb-4 hidden md:block">Main menu</h2>
          <nav>
            {mainMenuItems.map((menuItem) => (
              <Button
                key={menuItem.value}
                variant={activeTab === menuItem.value ? 'secondary' : 'ghost'}
                className={`w-full mb-2 justify-start ${activeTab === menuItem.value ? 'text-[#FF5151]' : ''}`}
                onClick={() => setActiveTab(menuItem.value)}
              >
                <menuItem.icon className="mr-2 h-4 w-4 md:mr-0" />
                <span className="hidden lg:inline">{menuItem.label}</span>
              </Button>
            ))}
          </nav>
          <h2 className="text-xs lg:text-xl text-gray-500 mb-4 hidden md:block">Settings</h2>
          <nav>
            {otherMenuItems.map((menuItem) => (
              <Button
                key={menuItem.value}
                variant={activeTab === menuItem.value ? 'secondary' : 'ghost'}
                className={`w-full mb-2 justify-start ${activeTab === menuItem.value ? 'text-[#FF5151]' : ''}`}
                onClick={() => setActiveTab(menuItem.value)}
              >
                <menuItem.icon className="mr-2 h-4 w-4 md:mr-0" />
                <span className="hidden lg:inline">{menuItem.label}</span>
              </Button>
            ))}
          </nav>
        </div>
      </aside>

     
    </div>
  );
};

export default Dashboard;
