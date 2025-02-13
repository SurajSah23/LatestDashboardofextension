import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlanAndBillingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { id: 'Normal', name: 'Normal', validEmails: 1050, verifications: 2050, monthlyPrice: 19 },
    { id: 'Standard', name: 'Standard', validEmails: 6000, verifications: 10050, monthlyPrice: 79, popular: true },
    { id: 'Premium', name: 'Premium', validEmails: 20050, verifications: 40050, monthlyPrice: 249 },
  ];

  const getPrice = (monthlyPrice) => (isAnnual ? monthlyPrice * 12 : monthlyPrice);
  const formatNumber = (num) => num.toLocaleString();

  const confirmSelection = (planId, planName) => {
    toast.info(`Confirm ${planName} plan?`, {
      position: "top-center",
      autoClose: false,
      closeOnClick: true,
      draggable: true,
      onClose: () => setSelectedPlan(planId)
    });
  };

  return (
    <div className="py-4 px-3 text-gray-90">
      <div className="max-w-5xl mx-auto flex justify-between items-start">
        {/* Left Side - Plan Selection */}
        <div className="w-1/3 lg:translate-y-11">
          <h2 className="text-2xl font-semibold mb-4">Choose Your Plan</h2>
          <div className="flex items-center space-x-2 mb-4">
            <span className={`${!isAnnual ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>Monthly</span>
            <div className="relative flex items-center">
              <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} className="hidden" />
              <div className="w-8 h-4 bg-gray-300 rounded-full p-0.5 cursor-pointer" onClick={() => setIsAnnual(!isAnnual)}>
                <div className={`w-3 h-3 bg-white rounded-full shadow-md transform duration-300 ${isAnnual ? 'translate-x-4 bg-blue-500' : 'translate-x-0'}`}></div>
              </div>
            </div>
            <span className={`${isAnnual ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>Annual</span>
          </div>
        </div>
        
        {/* Right Side - Plans */}
        <div className="w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative border border-gray-300 rounded-md p-3 shadow-sm transition-all duration-300 hover:shadow-md ${plan.id === selectedPlan ? 'border-blue-500' : ''}`}
            >
              {plan.popular && (
                <span className="absolute top-1 right-1 bg-blue-500 text-xs text-white px-1 py-0.5 rounded">Popular</span>
              )}
              <h3 className="text-md font-semibold text-gray-800 mb-2">{plan.name}</h3>
              <p className="text-xs mb-1"><span className="font-medium">{formatNumber(plan.validEmails)}</span> emails</p>
              <p className="text-xs mb-2"><span className="font-medium">{formatNumber(plan.verifications)}</span> verifications</p>
              <div className="text-lg font-bold mb-2">
                ${getPrice(plan.monthlyPrice)}
                <span className="text-xs text-gray-500"> {isAnnual ? '/yr' : '/mo'}</span>
              </div>
              <button
                onClick={() => confirmSelection(plan.id, plan.name)}
                className={`w-full py-1 px-2 text-sm rounded-md font-medium transition-all duration-300 ${plan.id === selectedPlan ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {plan.id === selectedPlan ? 'Selected' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer className="translate-x-60" />
    </div>
  );
}

export default PlanAndBillingPage;
