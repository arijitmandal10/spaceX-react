import React from 'react';

function Capsule({ capsule_id, details, original_launch, missions, landings }) {
	return (
		<div className='border rounded-lg p-5 w-[20em] h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500'>
			<div>
				<p>Capsule ID:</p> {capsule_id}
			</div>
			<span>
				Details:
				{details}
			</span>

			<p>Original Launch: {original_launch}</p>
			<div>
				Missions:
				<ul>
					{missions.map((mission, index) => (
						<li key={index}>
							Name: {mission.name}, Flights: {mission.flight}
						</li>
					))}
				</ul>
			</div>
			<p>Landings: {landings}</p>
		</div>
	);
}

export default Capsule;
