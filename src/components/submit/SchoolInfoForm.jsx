import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { School } from 'lucide-react';

const SchoolInfoForm = ({ formData, handleInputChange, states }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <School className="h-5 w-5 text-green-400" />
        <h3 className="text-lg font-semibold text-white">School Information</h3>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="schoolName" className="text-white">School Name *</Label>
        <Input
          id="schoolName"
          value={formData.schoolName}
          onChange={(e) => handleInputChange('schoolName', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50"
          placeholder="Enter your school name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-white">City *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            className="glass-effect border-white/30 text-white placeholder:text-white/50"
            placeholder="Enter your city"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state" className="text-white">State *</Label>
          <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)} required>
            <SelectTrigger className="glass-effect border-white/30 text-white">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent className="glass-effect border-white/30">
              {states.map((state) => (
                <SelectItem key={state} value={state} className="text-white hover:bg-white/10">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SchoolInfoForm;