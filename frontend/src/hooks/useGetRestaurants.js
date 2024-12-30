'use client';
import { API } from '@/config/config';
import { useEffect, useState } from 'react';

const useGetRestaurants = () => {
	const [loading, setLoading] = useState(true);
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		const getRestaurants = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${API}/api/restaurants`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setRestaurants(data);
			} catch (error) {
				console.log(error.message);
			} finally {
				setLoading(false);
			}
		};
		getRestaurants();
	}, []);

	return { restaurants, loading };
};
export default useGetRestaurants;
