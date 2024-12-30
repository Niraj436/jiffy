'use client';
import { API } from '@/config/config';
import { useEffect, useState } from 'react';

const useGetQuests = () => {
    const [loading, setLoading] = useState(true);
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        const getQuests = async () => {
            setLoading(true);
            try {
                const res = await fetch(`${API}/api/quests`);
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setQuests(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };
        getQuests();
    }, []);

    return { quests, loading };
};
export default useGetQuests;
