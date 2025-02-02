import { Link } from "react-router-dom";

function ContactsThree() {
  return (
    <div className="h-[650px] border border-gray-200 rounded-xl bg-white shadow-lg flex flex-col sm:flex-row">
      <div className="w-full sm:w-64 border-b sm:border-r border-gray-200 px-4 py-6">
        <nav className="space-y-1">
          <Link to="/" className="block py-2 text-blue-500 font-medium">
            All Contacts
          </Link>

          <Link to="/my-contacts" className="block py-2 text-gray-600">
            My Contacts
          </Link>

          <Link to="/all-emails" className="block py-2 text-gray-600">
            All emails
          </Link>

          <Link to="/valid-emails" className="block py-2 text-gray-600">
            Valid emails
          </Link>

          <Link to="/accept-all-emails" className="block py-2 text-gray-600">
            Accept all emails
          </Link>

          <Link to="/no-mails" className="block py-2 text-gray-600">
            No mails
          </Link>

          <Link to="/no-list" className="block py-2 text-gray-600">
            No List
          </Link>

          <div className="py-4">
            <Link
              to="/all-saved-views"
              className="flex items-center justify-between py-2 text-blue-500 font-medium"
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
