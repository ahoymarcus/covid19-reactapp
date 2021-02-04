import React, { memo, useState, useEffect, useCallback } from 'react';
import Api from '../../api';
import Board from './components/Board';
import { ContainerStyled } from './style';


function Main() {
    
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');
    
    
    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data));
    }, []);
    
    /*
        O useEffectt está ouvindo duas variáveis, a 1ª que vai se manter constante foi chamada logo acima usando useCallback()
    */
    useEffect(() => {
        getCovidData(country);
    }, [getCovidData, country]);
    
    
    return (
        
        <ContainerStyled>
            <div className="mb-2">
            
            </div>
            <Board data={data} />
            
        </ContainerStyled>
    );
}


export default memo(Main);

