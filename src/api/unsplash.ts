import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_API_TOKEN

export const fetchData = async () => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                client_id: API_KEY,
                query: 'Amuse is a E-commerce site project. Project showcases the implementation of fully fledge E-Commerce site build with trending web frameworks.',
                page: 1,
            },
        });
        return response.data.results; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
};