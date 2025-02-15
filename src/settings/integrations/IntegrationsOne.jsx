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
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <img src={logo} alt={`${name} logo`} className="w-10 h-10 mb-4 object-contain mx-auto" />
      <p className="text-sm text-gray-700 mb-4 text-center">{description}</p>
      <button className="bg-blue-600 text-white rounded px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors">
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
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Integrations</h1>
        
        {/* CRM Section */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">CRM Integrations</h2>
          <div className="grid grid-cols-2 gap-6">
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

        {/* CRM and Google Sheets in the same row */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Integrations</h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Google Sheets Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Google Sheets Integration</h3>
              <IntegrationCard
                logo={LOGOS.googleSheets}
                name="Google Sheets"
                description="Auto-synchronize the data to your Google Sheets account."
              />
            </div>

            {/* Other Section */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-6">Other Integrations</h3>
              <IntegrationCard
                logo={LOGOS.zapier}
                name="Zapier"
                description="Connect GetProspect to 5000+ other apps using Zapier."
                buttonText="Settings"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationsOne;
