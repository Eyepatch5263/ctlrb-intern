import React from 'react';
import { Bell, HelpCircle, User } from 'lucide-react';

export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-blue-600">yourLOGO</span>
            
            </div>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-gray-800">
                    <HelpCircle size={20} />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                    <Bell size={20} />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                    <User size={20} />
                </button>
            </div>
        </header>
    );
}