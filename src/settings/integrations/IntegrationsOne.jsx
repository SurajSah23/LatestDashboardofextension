import PropTypes from 'prop-types';

// Import company logos from public URLs
const LOGOS = {
  hubspot: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
  salesforce: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
  zoho: "https://www.zoho.com/branding/images/zoho-logo-512px.png",
  pipedrive: "https://www.pipedrive.com/favicon.ico",
  googleSheets: "https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png",
  zapier: "https://cdn.zapier.com/zapier/images/favicon.ico"
};

function IntegrationCard({ logo, name, description, buttonText = "Connect" }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <img src={logo} alt={`${name} logo`} className="w-8 h-8 mb-4 object-contain" />
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="text-blue-500 border border-blue-500 rounded px-4 py-1.5 text-sm hover:bg-blue-50 transition-colors">
        {buttonText}
      </button>
    </div>
  );
}

IntegrationCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string
};

function IntegrationsOne() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Integrations</h1>
        
        {/* CRM Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-900 mb-4">CRM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <IntegrationCard
              logo={LOGOS.hubspot}
              name="HubSpot"
              description="Auto-synchronize the data to your HubSpot account."
            />
            <IntegrationCard
              logo={LOGOS.salesforce}
              name="Salesforce"
              description="Auto-synchronize the data to your Salesforce account."
            />
            <IntegrationCard
              logo={LOGOS.zoho}
              name="Zoho"
              description="Auto-synchronize the data to your Zoho account."
            />
            <IntegrationCard
              logo={LOGOS.pipedrive}
              name="Pipedrive"
              description="Auto-synchronize the data to your Pipedrive account."
            />
          </div>
        </div>

        {/* Google Sheets Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <IntegrationCard
              logo={LOGOS.googleSheets}
              name="Google Sheets"
              description="Auto-synchronize the data to your Google Sheets account."
            />
          </div>
        </div>

        {/* Other Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-900 mb-4">Other</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <IntegrationCard
              logo={LOGOS.zapier}
              name="Zapier"
              description="Connect GetProspect to 5000+ other apps using Zapier."
              buttonText="Setting apps"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationsOne;
