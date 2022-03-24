import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const useCategory = () => {
    const [categoryData, setCategoryData] = useState();

    useEffect(() => {
        loadcategoryData();
    }, []);

    const loadcategoryData = useCallback(async () => {
        //Consome os dados da API fornecida  
        try {
            const response = await api.get('/categories');
           /// console.log("useCategory :: " + Object.keys(response.data[0]))
            setCategoryData(response.data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return [categoryData];
}

export default useCategory;