import React from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import Header2 from '@/components/Header2';
import Analytics from '@/components/Analytics';
import LightHouse from '@/components/LightHouse';
import RankingsSection from '@/components/RankingsSection';
import Backlinks from '@/components/BackLinks';
import SearchConsole from '@/components/SearchConsole';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Header2 />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <RankingsSection />
            <Analytics />
            <LightHouse />
          </div>
          <div className='md:grid md:grid-cols-3 grid grid-cols-1'>
            <div className='md:col-span-2 col-span-1'>
              <Backlinks />
            </div>
            <SearchConsole />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;