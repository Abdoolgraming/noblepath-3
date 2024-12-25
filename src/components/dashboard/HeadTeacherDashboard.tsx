import React from 'react';
import { BookOpen, ClipboardCheck, GraduationCap, Users } from 'lucide-react';
import { StatCard } from '../common/StatCard';

export default function HeadTeacherDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Head Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Active Classes"
          value="24"
          icon={<BookOpen className="text-blue-500" size={24} />}
          trend="All classes in session"
        />
        <StatCard
          title="Today's Attendance"
          value="95%"
          icon={<ClipboardCheck className="text-green-500" size={24} />}
          trend="+2% above target"
        />
        <StatCard
          title="Teachers Present"
          value="42/45"
          icon={<Users className="text-purple-500" size={24} />}
          trend="3 on leave"
        />
        <StatCard
          title="Average Performance"
          value="B+"
          icon={<GraduationCap className="text-orange-500" size={24} />}
          trend="Improved from B"
        />
      </div>

      {/* Add more head teacher-specific components */}
    </div>
  );
}