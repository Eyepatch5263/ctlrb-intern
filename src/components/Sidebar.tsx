import React from 'react';
import { Home, Search, MessageCircle, Link2, ShoppingCart, FileText, Users, Award, Settings, MenuSquare, PieChart, Phone, Mail, Locate } from 'lucide-react';

export function Sidebar() {
    const menuItems = [
        { icon: Home, label: 'Home' },
        { icon: MenuSquare, label: 'Menu'},
        { icon: Search, label: 'Search' },
        { icon: PieChart, label: 'Pie Chart'},
        { icon: MessageCircle, label: 'Messages' },
        { icon: Link2, label: 'Links' },
        { icon: Phone, label: 'Phone'},
        { icon: Mail, label:"Email"},
        { icon: Locate, label: 'Location'},
        { icon: ShoppingCart, label: 'Orders' },
        { icon: FileText, label: 'Documents' },
        { icon: Users, label: 'Users' },
        { icon: Award, label: 'Awards' },
        { icon: Settings, label: 'Settings' }
    ];

    return (
        <aside className="bg-white border-r border-gray-200 w-16 flex-shrink-0">
            <div className="flex flex-col items-center py-4 space-y-4">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                        title={item.label}
                    >
                        <item.icon size={20} />
                    </button>
                ))}
            </div>
        </aside>
    );
}