import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Upload } from 'lucide-react';

const PhotoUpload = ({ onPhotoSelect }) => {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload SVG, PNG, JPG, or GIF files only.');
      return;
    }

    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(img.src);
      if (img.width > 800 || img.height > 400) {
        alert('Image dimensions should not exceed 800x400px');
        return;
      }
      setPreview(URL.createObjectURL(file));
      onPhotoSelect(file);
    };
    img.src = URL.createObjectURL(file);
  };

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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="w-[4000px] mx-auto p-4 lg:rounded-lg">
      <div className="rounded-lg overflow-hidden">
        <div className="p-4 lg:-translate-x-3">
          <h2 className="text-gray-600 text-sm font-bold mb-1">Your photo</h2>
          <p className="text-gray-500 text-sm">This will be displayed on your profile.</p>
        </div>

        <div className="flex items-center p-4 lg:translate-x-72 lg:-translate-y-20">
          {preview ? (
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img 
                src={preview} 
                alt="Profile preview" 
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full lg:-translate-y-8">
                <img src="https://i.ibb.co/j9wx7c47/Avatar-35.png" alt="image" />
            </div>
          )}

          <div 
            className={`translate-x-6 border-2 lg:w-[500px] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors
              ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <Upload className="w-6 h-6 text-gray-400 mb-2" />
            <div className="text-sm text-center">
              <span className="text-blue-500 font-medium">Click to upload</span>
              <span className="text-gray-500"> or drag and drop</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG, or GIF (max. 800x400px)</p>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".svg,.png,.jpg,.jpeg,.gif"
            onChange={handleFileInput}
          />
        </div>
      </div>
    </div>
  );
};

// Adding PropTypes validation to fix ESLint warning
PhotoUpload.propTypes = {
  onPhotoSelect: PropTypes.func.isRequired,
};

const SettingsFour = () => {
  const handlePhotoSelect = (file) => {
    console.log('Selected file:', file);
  };

  return (
    <div className="flex items-center justify-center p-4 lg:-translate-y-10">
      <PhotoUpload onPhotoSelect={handlePhotoSelect} />
    </div>
  );
};

export default SettingsFour;
