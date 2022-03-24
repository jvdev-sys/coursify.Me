import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const useMedia = (id) => {
    const [media, setMedia] = useState();

    useEffect(() => {
        loadMediaData();
    }, [id]);

    const loadMediaData = useCallback(async () => {
        //Consome os dados da API fornecida  
        try {
            const response = await api.get(`/media/${id}`);
            setMedia(response.data.media_details.sizes.thumbnail.source_url);

        } catch (error) {
            console.log(error);
        }
    }, []);

    return [media];
}

export default useMedia;