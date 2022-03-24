import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const usePosts = () => {
    const [postsData, setPostsData] = useState();
    
    useEffect(() => {
        loadPostsData();
    }, []);

    const loadPostsData = useCallback(async () => {
        //Consome os dados da API fornecida  
        try {
            const response = await api.get('/posts');
            console.log(response.data[0].featured_media)
            setPostsData(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }, []);

    return [postsData];
}

export default usePosts;