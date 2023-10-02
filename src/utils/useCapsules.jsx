import { useEffect, useState } from 'react';

export const useCapsules = (limit, offset, selectedStatus, selectedType) => {
	const [capsules, setCapsules] = useState([]);
	let baseUrl = `https://api.spacexdata.com/v3/capsules?limit=${limit}&offset=${offset}`;

	// Add selectedStatus to the API request if it's not empty
	if (selectedStatus) {
		baseUrl += `&status=${selectedStatus}`;
	}

	// Add selectedType to the API request if it's not empty
	if (selectedType) {
		baseUrl += `&type=${selectedType}`;
	}

	const getCapsules = async () => {
		try {
			const response = await fetch(baseUrl);
			if (!response.ok) {
				throw new Error(`Failed to fetch data from ${baseUrl}`);
			}
			const data = await response.json();
			setCapsules(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCapsules();
	}, [limit, offset, selectedStatus, selectedType]); // Add limit, offset, selectedStatus, and selectedType as dependencies

	return capsules;
};
