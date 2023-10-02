import React from 'react';

const SearchBar = () => {
	return (
		<div class='relative m-5 rounded-md shadow-sm'>
			<input
				type='text'
				name='search'
				id='price'
				className='block w-2/3 rounded-md border-0 py-1.5 px-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-auto'
				placeholder='Search'
			/>
		</div>
	);
};

export default SearchBar;
