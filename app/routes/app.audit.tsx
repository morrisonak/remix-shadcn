import  { useState } from 'react';

const AuditForm = () => {
  const [formData, setFormData] = useState({
    inspectorName: '',
    date: '',
    time: '',
    signature: '',
    railroadContractor: '',
    subdivision: '',
    cfrDefect: '',
    crossing: '',
    switchType: '',
    carEquipmentNumber: '',
    engineNumber: '',
    trackStructureMP: '',
    notes: '',
    description: '',
    contractualComplaint: '',
    crrlNumber: '',
    numberOfOccurrences: '',
    preventativeMaintenance: '',
    correctiveActionNeeded: '',
    followUpActionRequired: '',
    contractorRecordsInspected: '',
    documentationAttached: '',
    contractorRepresentativeName: '',
    contractorSignature: '',
    correctiveActionDate: '',
    correctiveActionTaken: '',
    correctiveDocumentationAttached: '',
    correctiveActionNotes: '',
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Submit formData to server or handle it as needed
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-bold text-center mb-6">CapMetro</h1>
        <h2 className="text-lg font-semibold text-center mb-4">AUDIT/INSPECTION REPORT</h2>
        
        {/* Row for Inspector's Name, Date, Time, Signature */}
        <div className="mb-4 grid grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inspectorName">
              CMTA Inspector’s Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inspectorName"
              name="inspectorName"
              type="text"
              value={formData.inspectorName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Time:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signature">
              Signature:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="signature"
              name="signature"
              type="text"
              value={formData.signature}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        {/* Checkbox Groups and Other Inputs */}
        {/* This area would have checkboxes for Railroad/Contractor, Subdivision, etc. */}
        {/* You would continue to add more input fields here... */}

        {/* Notes Section */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
            Notes:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Description Section */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuditForm;
