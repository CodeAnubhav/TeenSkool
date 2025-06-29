import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lightbulb } from 'lucide-react';

const IdeaInfoForm = ({ formData, handleInputChange, categories }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-yellow-400" />
        <h3 className="text-lg font-semibold text-white">Your Business Idea</h3>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="ideaTitle" className="text-white">Idea Title *</Label>
        <Input
          id="ideaTitle"
          value={formData.ideaTitle}
          onChange={(e) => handleInputChange('ideaTitle', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50"
          placeholder="Give your idea a catchy title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-white">Category *</Label>
        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)} required>
          <SelectTrigger className="glass-effect border-white/30 text-white">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent className="glass-effect border-white/30">
            {categories.map((category) => (
              <SelectItem key={category} value={category} className="text-white hover:bg-white/10">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">Idea Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50 min-h-[120px]"
          placeholder="Describe your business idea in detail. What is it about and how does it work?"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="problem" className="text-white">Problem It Solves</Label>
        <Textarea
          id="problem"
          value={formData.problem}
          onChange={(e) => handleInputChange('problem', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50"
          placeholder="What problem does your idea solve? Why is this important?"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="solution" className="text-white">Your Solution</Label>
        <Textarea
          id="solution"
          value={formData.solution}
          onChange={(e) => handleInputChange('solution', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50"
          placeholder="How does your idea solve the problem? What makes it effective?"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="target" className="text-white">Target Audience</Label>
        <Input
          id="target"
          value={formData.target}
          onChange={(e) => handleInputChange('target', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50"
          placeholder="Who would use your product/service?"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="uniqueness" className="text-white">What Makes It Unique?</Label>
        <Textarea
          id="uniqueness"
          value={formData.uniqueness}
          onChange={(e) => handleInputChange('uniqueness', e.target.value)}
          className="glass-effect border-white/30 text-white placeholder:text-white/50"
          placeholder="What makes your idea different from existing solutions?"
        />
      </div>
    </div>
  );
};

export default IdeaInfoForm;