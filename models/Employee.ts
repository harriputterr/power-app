import mongoose from 'mongoose';

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  department: String,
  startDate: String,
  fileUrl: String, // ✅ This stores the SharePoint file URL
});

export default mongoose.models.Employee ||
  mongoose.model('Employee', EmployeeSchema);
