import { useState } from 'react';

function VerifyThree() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.csv')) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith('.csv')) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 bg-white">
        <h1 className="text-xl text-gray-800 mb-6 font-avenir">Bulk Email Verifier</h1>
        
        <div className="mb-6 lg:border lg:border-gray-200 lg:w-[350px] lg:h-[450px]">
          <h2 className="text-lg font-medium text-gray-700 mb-1 text-center lg:translate-y-7 font-avenir">Import list</h2>
          <p className="text-sm text-gray-500 mb-4 text-center lg:translate-y-8 font-avenir">Upload file with emails to verify</p>
          
          <div
            className={`border-2 border-dashed rounded-lg p-8 transition-colors lg:w-[300px] lg:translate-x-4 lg:translate-y-10 ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <img src="https://i.ibb.co/ZzJ6F9CC/Screenshot-2025-02-10-140605-removebg-preview.png" alt="File Icon" className="w-90 h-40 text-gray-400 mb-4 font-avenir" />
              <p className="text-sm text-gray-600 mb-1">
                Drop your file or{' '}
                <label className="text-blue-500 hover:text-blue-600 cursor-pointer font-avenir">
                  click here
                  <input
                    type="file"
                    className="hidden"
                    accept=".csv"
                    onChange={handleFileChange}
                  />
                </label>
              </p>
              <p className="text-xs text-gray-500 font-avenir">File should be in .csv format</p>
            </div>
          </div>
          <button
          className="lg:w-[300px] lg:h-[30px] lg:translate-y-14 lg:translate-x-4 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors font-avenir font-semibold"
          onClick={() => {
            if (file) {
              console.log('Uploading file:', file.name);
            }
          }}
        >
          Upload
        </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyThree;
