import { useEffect, useState } from 'react';

export const useCapsules = () => {
	const [capsules, setCapsules] = useState([]);
	const baseUrl = 'https://api.spacexdata.com/v3/capsules';

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
	}, []);

	return capsules;
};
