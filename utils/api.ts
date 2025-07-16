import axios from 'axios';

// Base API URL
const baseURL = 'https://jsonplaceholder.typicode.com';

// Type to represent the properties of a post
export interface Post {
    id: number;
    title: string;
    body: string;
}

// Type to represent the properties of a comment
export interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

// Function to fetch paginated posts
export const getPosts = async (page: number, limit: number): Promise<{ data: Post[]; total: number }> => {
    try {
        const response = await axios.get(`${baseURL}/posts`, {
            params: { _page: page, _limit: limit }, // Pagination parameters
        });

        return {
            data: response.data,
            total: parseInt(response.headers['x-total-count'], 10), // Ensures the 'total' field is a number
        };
    } catch (error: unknown) {
        // Cast 'error' to a known type if applicable
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.message);
            throw new Error('Unable to fetch posts. Please try again later.');
        } else if (error instanceof Error) {
            console.error('Error:', error.message);
            throw new Error('Unable to fetch posts. Please try again later.');
        } else {
            console.error('Unknown error occurred.');
            throw new Error('An unknown error occurred. Please try again later.');
        }
    }
};

// Function to fetch comments for a specific post
export const getComments = async (postId: number): Promise<Comment[]> => {
    try {
        const response = await axios.get(`${baseURL}/posts/${postId}/comments`);
        return response.data;
    } catch (error: unknown) {
        // Cast 'error' to a known type if applicable
        if (axios.isAxiosError(error)) {
            console.error(`Axios error for post ID ${postId}:`, error.message);
            throw new Error('Unable to fetch comments. Please try again later.');
        } else if (error instanceof Error) {
            console.error(`Error for post ID ${postId}:`, error.message);
            throw new Error('Unable to fetch comments. Please try again later.');
        } else {
            console.error('Unknown error occurred.');
            throw new Error('An unknown error occurred. Please try again later.');
        }
    }
};