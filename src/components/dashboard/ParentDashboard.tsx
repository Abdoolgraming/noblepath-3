import React from 'react';
import { User } from '../../types/auth';
import { BookOpen, ClipboardCheck, FileSpreadsheet, TrendingUp } from 'lucide-react';

interface ParentDashboardProps {
  user: User;
}

export default function ParentDashboard({ user }: ParentDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome, {user.name}!
        </h1>
        <p className="mt-2 text-gray-600">
          Monitor your child's academic progress and attendance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current Grade"
          value="A"
          icon={<BookOpen className="text-blue-500" size={24} />}
          trend="Improved from B+"
        />
        <StatCard
          title="Attendance"
          value="95%"
          icon={<ClipboardCheck className="text-green-500" size={24} />}
          trend="Last month: 92%"
        />
        <StatCard
          title="Assignments"
          value="8/10"
          icon={<FileSpreadsheet className="text-purple-500" size={24} />}
          trend="2 pending"
        />
        <StatCard
          title="Class Rank"
          value="#5"
          icon={<TrendingUp className="text-orange-500" size={24} />}
          trend="Up 3 positions"
        />
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
}

function StatCard({ title, value, icon, trend }: {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon}
      </div>
      <p className="text-sm text-gray-500 mt-2">{trend}</p>
    </div>
  );
}