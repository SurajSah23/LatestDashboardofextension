const features = [
    ["Automated follow ups", "Custom tracking domain", "Email reply tracking"],
    ["LinkedIn extension", "Advanced filters", "API Access"],
  ];
  
  function PlanAndBillingPageTwo() {
    return (
      <div className="py-6 px-2 sm:px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Flexbox ka use karke left aur right section bana rahe hain */}
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4 lg:translate-y-10 lg:-translate-x-20">See All Features</h1>
  
            <div className="rounded-lg shadow overflow-hidden w-[850px] lg:translate-x-2">
              <div className="px-4 py-2 bg-gray-50">
                <h3 className="text-md font-medium text-gray-900">All plans include</h3>
              </div>
  
              <div className="divide-y divide-gray-200">
                {features.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200"
                  >
                    {row.map((feature, featureIdx) =>
                      feature ? (
                        <div key={featureIdx} className="p-2 flex items-center space-x-2">
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ) : null
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PlanAndBillingPageTwo;
  