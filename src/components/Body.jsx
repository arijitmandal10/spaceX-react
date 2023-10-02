import React from 'react';
import { useCapsules } from '../utils/useCapsules';
import Capsule from './Capsule'; // Import your Capsule component

const Body = () => {
	const capsules = useCapsules();
	console.log(capsules);

	return (
		<div className='flex justify-around flex-wrap p-2 gap-5'>
			{capsules.map((capsule, index) => (
				<Capsule
					key={index}
					capsule_id={capsule.capsule_id}
					details={capsule.details}
					original_launch={capsule.original_launch}
					missions={capsule.missions}
					landings={capsule.landings}
				/>
			))}
		</div>
	);
};

export default Body;
