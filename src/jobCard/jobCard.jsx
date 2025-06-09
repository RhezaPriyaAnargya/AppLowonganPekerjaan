import React, { useState } from "react";

const JobCard = ({ job }) => {
    const {
        title,
        job_description,
        job_qualification,
        job_type,
        job_tenure,
        job_status,
        company_name,
        company_image_url,
        company_city,
        salary_min,
        salary_max,
    } = job;

    const [isDetailVisible, setIsDetailVisible] = useState(false);

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col">
            <div className="flex justify-center p-4">
                <img
                    className="w-fit h-32 object-cover "
                    src={company_image_url || "https://via.placeholder.com/150"}
                    alt={company_name}
                />
            </div>
            <div className="p-4 flex-grow">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base mb-2">Type: {job_type}</p>
                <p className="text-gray-700 text-base mb-4">Location: {company_city}</p>
                <button
                    onClick={() => setIsDetailVisible(!isDetailVisible)}
                    className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 w-full"
                >
                    {isDetailVisible ? "Show Less" : "Show Details"}
                </button>
            </div>

            {isDetailVisible && (
                <div className="p-4 border-t border-gray-200">
                    <p className="text-gray-700 text-base mb-2">Description: {job_description}</p>
                    <p className="text-gray-700 text-base mb-2">
                        Qualification: {job_qualification}
                    </p>
                    <p className="text-gray-700 text-base mb-2">Tenure: {job_tenure}</p>
                    <p className="text-gray-700 text-base mb-2">
                        Status: {job_status === 1 ? "Open" : "Closed"}
                    </p>
                    <p className="text-gray-700 text-base mb-2">
                        Salary: {salary_min.toLocaleString()} - {salary_max.toLocaleString()}
                    </p>
                </div>
            )}
        </div>
    );
};

export default JobCard;
