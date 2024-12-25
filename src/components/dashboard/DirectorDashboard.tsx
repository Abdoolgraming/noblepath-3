import React from 'react';
import { BarChart3, TrendingUp, Users, School } from 'lucide-react';
import { StatCard } from '../common/StatCard';

export default function DirectorDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Director Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="1,234"
          icon={<Users className="text-blue-500" size={24} />}
          trend="+5% from last month"
        />
        <StatCard
          title="Average Performance"
          value="78%"
          icon={<TrendingUp className="text-green-500" size={24} />}
          trend="+2% from last term"
        />
        <StatCard
          title="Teacher Count"
          value="45"
          icon={<School className="text-purple-500" size={24} />}
          trend="2 new this month"
        />
        <StatCard
          title="Revenue"
          value="₦15.2M"
          icon={<BarChart3 className="text-orange-500" size={24} />}
          trend="+12% from last month"
        />
      </div>

      {/* Add more director-specific components */}
    </div>
  );
}