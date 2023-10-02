import React from 'react';

function Capsule({ capsule_id, details, original_launch, missions, landings }) {
	const datePart = original_launch && typeof original_launch === 'string' ? original_launch.split('T')[0] : original_launch;
	return (
		<div className='border rounded-lg p-5 w-[20em] h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:cursor-pointer'>
			<p className='text-zinc-100'>
				<b className='text-amber-950'>Capsule ID: </b> {capsule_id}
			</p>
			<p className='text-zinc-100'>
				<b className='text-amber-950'>Details: </b>
				{details}
			</p>
			<p className='text-zinc-100'>
				<b className='text-amber-950'>Launch date: </b> {datePart}
			</p>
			<div>
				<b className='text-amber-950'>Missions:</b>
				<table className='border-collapse border w-full'>
					<thead>
						<tr className='border'>
							<th className='border p-2 text-center'>Name</th>
							<th className='border p-2 text-center'>Flights</th>
						</tr>
					</thead>
					<tbody>
						{missions.map((mission, index) => (
							<tr className='border' key={index}>
								<td className='border p-2 text-center'>{mission.name}</td>
								<td className='border p-2 text-center'>{mission.flight}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<p className='text-zinc-100'>
				<b className='text-amber-950'>Landings:</b> {landings}
			</p>
		</div>
	);
}

export default Capsule;
