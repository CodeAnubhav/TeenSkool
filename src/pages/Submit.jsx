  import React, { useState, useContext } from 'react';
  import { motion } from 'framer-motion';
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
  import { useToast } from '@/components/ui/use-toast';
  import { Send, Lightbulb, AlertTriangle, Database } from 'lucide-react';
  import { SupabaseContext } from '@/contexts/SupabaseContext';
  import PersonalInfoForm from '@/components/submit/PersonalInfoForm';
  import SchoolInfoForm from '@/components/submit/SchoolInfoForm';
  import IdeaInfoForm from '@/components/submit/IdeaInfoForm';
  import { initialFormData, categories, states } from '@/components/submit/formData';

  const Submit = () => {
    const { toast } = useToast();
    const { supabase, integrationCompleted } = useContext(SupabaseContext);
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      const requiredFields = ['studentName', 'email', 'age', 'schoolName', 'city', 'state', 'ideaTitle', 'category', 'description'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        toast({
          title: "Missing Information",
          description: `Please fill in the following required fields: ${missingFields.join(', ')}.`,
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      const newSubmissionData = {
        student_name: formData.studentName,
        email: formData.email,
        phone: formData.phone,
        age: parseInt(formData.age, 10),
        grade: formData.grade,
        school_name: formData.schoolName,
        city: formData.city,
        state: formData.state,
        idea_title: formData.ideaTitle,
        category: formData.category,
        description: formData.description,
        problem_solves: formData.problem,
        solution_details: formData.solution,
        target_audience: formData.target,
        uniqueness_details: formData.uniqueness,
        submitted_at: new Date().toISOString(),
        status: 'pending'
      };

      if (integrationCompleted && supabase) {
        try {
          const { error } = await supabase
            .from('idea_submissions')
            .insert([newSubmissionData]);

          if (error) {
            throw error;
          }

          toast({
            title: "Idea Submitted to Supabase! 🎉",
            description: "Thank you! Your innovative idea has been securely saved."
          });
        } catch (error) {
          console.error("Error submitting to Supabase:", error);
          toast({
            title: "Supabase Submission Error",
            description: "Could not save your idea to the database. Please try again. " + error.message,
            variant: "destructive"
          });
          setIsSubmitting(false);
          return;
        }
      } else {
        const submissions = JSON.parse(localStorage.getItem('ideaSubmissions') || '[]');
        const localStorageSubmission = {
          ...formData, 
          id: Date.now(),
          submittedAt: new Date().toISOString(),
          status: 'pending_local'
        };
        submissions.push(localStorageSubmission);
        localStorage.setItem('ideaSubmissions', JSON.stringify(submissions));

        toast({
          title: "Idea Saved Locally! ✅",
          description: "Your idea is saved locally. Please complete Supabase integration to save it to the cloud!"
        });
      }

      setFormData(initialFormData);
      setIsSubmitting(false);
    };

    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mb-6"
            >
              <Lightbulb className="h-16 w-16 text-yellow-400 floating-animation" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Submit Your Big Idea
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Share your innovative business concept and join the community of young entrepreneurs making a difference
            </p>
          </motion.div>

          {!integrationCompleted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 p-4 rounded-lg glass-effect border border-yellow-500/50 flex items-center gap-4"
            >
              <AlertTriangle className="h-10 w-10 text-yellow-400" />
              <div>
                <h3 className="text-yellow-300 font-semibold text-lg">Supabase Integration Pending</h3>
                <p className="text-yellow-200/80 text-sm">
                  Your submissions are currently being saved to local storage. For secure cloud storage, please ensure Supabase is connected.
                </p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-effect border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Idea Submission Form
                </CardTitle>
                <CardDescription className="text-white/70">
                  Fill out all the details about yourself and your innovative business idea
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <PersonalInfoForm formData={formData} handleInputChange={handleInputChange} />
                  <SchoolInfoForm formData={formData} handleInputChange={handleInputChange} states={states} />
                  <IdeaInfoForm formData={formData} handleInputChange={handleInputChange} categories={categories} />

                  <motion.div
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="pt-6"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full pulse-glow bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white py-6 text-lg disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            <Database className="h-5 w-5" />
                          </motion.div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Submit My Idea
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  };

  export default Submit;