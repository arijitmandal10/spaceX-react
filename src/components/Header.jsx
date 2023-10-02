import React from 'react';

const Header = () => {
	return (
		<div
			className='min-h-[60vh] m-2 p-20  bg-fixed bg-cover flex justify-start items-end'
			style={{ background: "URL('https://sxcontent9668.azureedge.us/cms-assets/assets/Crew_6_Desktop_9857f5c2f0.jpg')" }}
		>
			<div className='border-4 border-white p-8'>
				<h1 className='text-5xl font-bold text-emerald-50 mb-5'>Welcome to my SpaceX Project</h1>
				<p className='text-xl font-bold text-red-200'>Explore the world of Capsules</p>
			</div>
		</div>
	);
};

export default Header;
