import React, { memo } from 'react';
import PropTypes from 'prop-types';

/*
    Aqui o professor está colocando um Alias para o elemento importado, porque ele possue o mesmo nome aqui deste componente
*/
import { Card as CardUI } from '../../../components';
import {
    LabelStyled,
    ValueStyled,
    CardContentStyled
} from './style';



function Card({ value, label, color }) {
    
    return (
        
        <CardUI>
            <CardContentStyled color={color}>
                <ValueStyled>{value}      
                </ValueStyled>
                <LabelStyled>{label}</LabelStyled>
                </CardContentStyled>
        </CardUI>
    );
}


export default memo(Card)

