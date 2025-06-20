import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';

const PersonalInfoForm = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <User className="h-5 w-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Personal Information</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="studentName" className="text-white">Full Name *</Label>
          <Input
            id="studentName"
            value={formData.studentName}
            onChange={(e) => handleInputChange('studentName', e.target.value)}
            className="glass-effect border-white/30 text-white placeholder:text-white/50"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="glass-effect border-white/30 text-white placeholder:text-white/50"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">Phone Number</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="glass-effect border-white/30 text-white placeholder:text-white/50"
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age" className="text-white">Age *</Label>
          <Input
            id="age"
            type="number"
            min="10"
            max="25"
            value={formData.age}
            onChange={(e) => handleInputChange('age', e.target.value)}
            className="glass-effect border-white/30 text-white placeholder:text-white/50"
            placeholder="16"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="grade" className="text-white">Grade/Year</Label>
          <Input
            id="grade"
            value={formData.grade}
            onChange={(e) => handleInputChange('grade', e.target.value)}
            className="glass-effect border-white/30 text-white placeholder:text-white/50"
            placeholder="10th Grade"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;