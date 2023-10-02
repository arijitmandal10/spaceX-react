import React, { useState } from 'react';
import { useCapsules } from '../utils/useCapsules';
import Capsule from './Capsule';

const Body = () => {
	const [limit, setLimit] = useState(6); // Number of items per page
	const [offset, setOffset] = useState(0); // Starting point
	const [selectedStatus, setSelectedStatus] = useState(''); // Status filter
	const [selectedType, setSelectedType] = useState(''); // Type filter

	const capsules = useCapsules(limit, offset, selectedStatus, selectedType);

	const nextPage = () => {
		setOffset(offset + limit);
	};

	const prevPage = () => {
		if (offset >= limit) {
			setOffset(offset - limit);
		}
	};

	// Function to update the status filter
	const handleStatusFilterChange = (event) => {
		setSelectedStatus(event.target.value);
		setOffset(0); // Reset the offset when the filter changes
	};

	// Function to update the type filter
	const handleTypeFilterChange = (event) => {
		setSelectedType(event.target.value);
		setOffset(0); // Reset the offset when the filter changes
	};

	return (
		<div className='flex justify-center flex-col'>
			<div className='m-10 self-center flex justify-center w-full sm:w-99 p-1'>
				<div className='border p-2'>
					<p className='text-l font-bold'>Status</p>
					{/* Status filter dropdown */}
					<select value={selectedStatus} onChange={handleStatusFilterChange}>
						<option value=''>All</option>
						<option value='active'>Active</option>
						<option value='retired'>Retired</option>
					</select>
				</div>
				&nbsp; &nbsp;
				<div className='border p-2'>
					<p className='text-l font-bold'>Type</p>
					<select value={selectedType} onChange={handleTypeFilterChange}>
						<option value=''>All</option>
						<option value='Dragon 1.0'>Dragon 1.0</option>
						<option value='Dragon 1.1'>Dragon 1.1</option>
						<option value='Dragon 2.0'>Dragon 2</option>
					</select>
				</div>
				&nbsp; &nbsp;
				<button className='border p-3 bg-black rounded-lg w-40 text-white' onClick={prevPage} disabled={offset === 0}>
					Previous Page
				</button>
				&nbsp; &nbsp;
				{capsules.length > 0 && (
					<button className='border p-3 bg-black rounded-lg w-40 text-white' onClick={nextPage}>
						Next Page
					</button>
				)}
			</div>
			<div className='flex justify-around flex-wrap p-2 gap-5'>
				{capsules.length === 0 ? (
					<p className='text-xl font-bold text-red-700'>No capsules available.</p>
				) : (
					capsules.map((capsule, index) => (
						<Capsule
							key={index}
							capsule_id={capsule.capsule_id}
							details={capsule.details}
							original_launch={capsule.original_launch}
							missions={capsule.missions}
							landings={capsule.landings}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Body;
