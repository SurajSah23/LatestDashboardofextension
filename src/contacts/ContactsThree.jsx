import { Link } from "react-router-dom";

function ContactsThree() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg">
      <div className="w-full border-b border-gray-200 px-4 py-6">
        <nav className="space-y-1">
          <Link 
            to="/" 
            className="block py-3 px-3 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            All Contacts
          </Link>

          <Link 
            to="/my-contacts" 
            className="block py-3 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            My Contacts
          </Link>

          <Link 
            to="/all-emails" 
            className="block py-3 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            All emails
          </Link>

          <Link 
            to="/valid-emails" 
            className="block py-3 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Valid emails
          </Link>

          <Link 
            to="/accept-all-emails" 
            className="block py-3 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Accept all emails
          </Link>

          <Link 
            to="/no-mails" 
            className="block py-3 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            No mails
          </Link>

          <Link 
            to="/no-list" 
            className="block py-3 px-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            No List
          </Link>

          <div className="py-4 border-t border-gray-200 mt-4">
            <Link
              to="/all-saved-views"
              className="flex items-center justify-between py-3 px-3 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              All Saved Views
              <img
                src="https://i.ibb.co/CwNM9rM/ooui-next-ltr.png"
                alt="Chevron right"
                className="w-4 h-4"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ContactsThree;
