const ModalComponent = ({ isOpen, onClose,leadsData }) => {
    return (
      <>
       
        {isOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
          {/* Blurred background */}
          <div className="fixed inset-0 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>

          {/* Modal content */}
          <div className="relative p-8 bg-white w-1/2 rounded shadow-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={onClose}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Review</h2>

            <span id="leads_data">{leadsData}</span>
          </div>
        </div>
      )}
      </>
    );
  };
  
  export default ModalComponent;