import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

type InsuranceType = 'home' | 'auto' | 'renter' | 'business';


const QuoteForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [insuranceType, setInsuranceType] = useState<InsuranceType>('home');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type: InsuranceType) => {
    setInsuranceType(type);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      // setStep(step + 1);
      // off due to quote page maintenance
    } else {
      // Submit form logic here
      alert('Thank you for your submission! We will contact you shortly.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
      
      {step === 1 && (
        <div className="animate-fade-in">
          <p className="mb-6 text-neutral-600">
            Select the type of insurance you're interested in:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {['home','auto','renter','business'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleTypeChange(type as InsuranceType)}
                className={`p-4 border-2 rounded-lg text-center transition-all ${
                  insuranceType === type
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {step === 2 && (
        <form className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'First Name', name: 'firstName', type: 'text' },
              { label: 'Last Name', name: 'lastName', type: 'text' }
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-1">
                  {label} <span className="text-primary-600">*</span>
                </label>
                <input
                  type={type}
                  id={name}
                  name={name}
                  value={(formData as any)[name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            ))}
          </div>
          {['email','phone'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-neutral-700 mb-1">
                {field.charAt(0).toUpperCase() + field.slice(1)} <span className="text-primary-600">*</span>
              </label>
              <input
                type={field}
                id={field}
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          ))}
        </form>
      )}
      
      {step === 3 && (
        <form className="space-y-4 animate-fade-in">
          <div>
            <label htmlFor="zipCode" className="block text-sm font-medium text-neutral-700 mb-1">
              Zip Code <span className="text-primary-600">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <p className="text-neutral-600 mb-4 pt-4">
            By submitting, you agree to our <a href="#" className="text-primary-600 hover:underline">Terms</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
          </p>
        </form>
      )}
      
      <div className="mt-6 flex justify-between items-center">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="text-neutral-600 hover:text-primary-600"
          >
            Back
          </button>
        )}
        <div className={step === 1 ? 'w-full' : ''}>
          <Button onClick={handleSubmit} className="w-full md:w-auto">
            {step === 3 ? 'Get My Quote' : 'Continue'}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="mt-6 flex items-center gap-2">
        {[1,2,3].map((num) => (
          <React.Fragment key={num}>
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm
              ${step >= num ? 'bg-primary-600 text-white' : 'bg-neutral-200 text-neutral-600'}
            `}>
              {num}
            </div>
            {num < 3 && (
              <div className={`flex-grow h-1 ${step >= num ? 'bg-primary-600' : 'bg-neutral-200'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default QuoteForm;
