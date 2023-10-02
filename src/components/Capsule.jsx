import React, { useState } from 'react';

function Capsule({ capsule_id, details, original_launch, missions, landings, reuse_count, status }) {
	const datePart = original_launch && typeof original_launch === 'string' ? original_launch.split('T')[0] : original_launch;
	const [isPopupVisible, setPopupVisible] = useState(false);

	const togglePopup = () => {
		setPopupVisible(!isPopupVisible);
	};

	return (
		<div
			className='border rounded-lg p-5 w-[20em] h-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 hover:cursor-pointer'
			onClick={togglePopup}
		>
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
			<p className='text-zinc-100'>
				<b className='text-amber-950'>Landings:</b> {landings}
			</p>

			{isPopupVisible && (
				<div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center'>
					<div className='bg-white p-8 rounded-lg'>
						<button className='absolute top-2 right-2 text-red-600 hover:text-red-800' onClick={togglePopup}>
							Close
						</button>
						<div>
							<b className='text-amber-950 flex justify-center'>Missions</b>
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
						<p>
							<b className='text-amber-950'>Reuse Count:</b> {reuse_count}
						</p>
						<p>
							<b className='text-amber-950'>Status:</b> {status}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Capsule;
