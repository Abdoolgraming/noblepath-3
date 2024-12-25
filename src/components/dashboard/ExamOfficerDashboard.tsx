import React from 'react';
import { FileSpreadsheet, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { StatCard } from '../common/StatCard';

export default function ExamOfficerDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Exam Officer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Pending Results"
          value="45"
          icon={<Clock className="text-blue-500" size={24} />}
          trend="Due in 2 days"
        />
        <StatCard
          title="Validated Results"
          value="156"
          icon={<CheckCircle2 className="text-green-500" size={24} />}
          trend="+23 today"
        />
        <StatCard
          title="Results with Issues"
          value="12"
          icon={<AlertCircle className="text-red-500" size={24} />}
          trend="4 urgent"
        />
        <StatCard
          title="Total Reports"
          value="213"
          icon={<FileSpreadsheet className="text-purple-500" size={24} />}
          trend="All up to date"
        />
      </div>

      {/* Add more exam officer-specific components */}
    </div>
  );
}