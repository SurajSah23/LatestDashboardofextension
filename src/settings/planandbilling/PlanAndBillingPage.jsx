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

  const getPrice = (monthlyPrice) => (isAnnual ? monthlyPrice * 2 : monthlyPrice);
  const formatNumber = (num) => num.toLocaleString();

  const confirmSelection = (planId, planName) => {
    toast.info(`Are you sure you want to select the ${planName} plan?`, {
      position: "top-center",
      autoClose: false,
      closeOnClick: true,
      draggable: true,
      onClose: () => setSelectedPlan(planId) // Jab user toast band karega toh plan select hoga
    });
  };

  return (
    <div className="py-12 px-6 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-10">Find the Right Plan for You</h2>

        <div className="flex justify-center items-center space-x-3 mb-8">
          <span className={`${!isAnnual ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>Monthly</span>
          <div className="relative flex items-center">
            <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} className="hidden" />
            <div className="w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ${isAnnual ? 'translate-x-6 bg-blue-500' : 'translate-x-0'}`}></div>
            </div>
          </div>
          <span className={`${isAnnual ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>Annual</span>
          <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded">Save 40%</span>
        </div>

        <div className="grid grid-cols-3 md-grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative border border-gray-300 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${plan.id === selectedPlan ? 'border-blue-500' : ''}`}
            >
              {plan.popular && (
                <span className="absolute top-3 right-3 bg-blue-500 text-xs text-white px-2 py-1 rounded">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-sm mb-2"><span className="font-medium">{formatNumber(plan.validEmails)}</span> valid emails</p>
              <p className="text-sm mb-4"><span className="font-medium">{formatNumber(plan.verifications)}</span> verifications</p>
              <div className="text-3xl font-bold mb-4">${getPrice(plan.monthlyPrice)}<span className="text-sm text-gray-500"> /mo</span></div>
              <button
                onClick={() => confirmSelection(plan.id, plan.name)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 ${plan.id === selectedPlan ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {plan.id === selectedPlan ? 'Selected' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer className="translate-x-80"/>
    </div>
  );
}

export default PlanAndBillingPage;
