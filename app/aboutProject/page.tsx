// app/admin/page.tsx
export const dynamic = 'force-dynamic';

import dbConnect from '@/lib/mongoose';
import Employee from '@/models/Employee';

export default async function AdminPage() {
  await dbConnect();
  const employees = await Employee.find().lean();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">📋 Onboarding Dashboard</h1>
      <table className="w-full border rounded shadow text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Department</th>
            <th className="p-2 text-left">Start Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp: any, i: number) => (
            <tr key={i} className="border-t hover:bg-gray-50">
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.role}</td>
              <td className="p-2">{emp.department}</td>
              <td className="p-2">{emp.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
