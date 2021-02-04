import React, { memo } from 'react';
import RefreshIcon from '../../../assets/images/refresh.svg';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style';


const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
	const { cases, recovered, deaths, todayCases, todayDeaths } = data;
	
	const renderCountries = (country, index) => (
		
		<MenuItem key={`country-${index}`} value={country.value}>
			<ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </ItemStyled>
		</MenuItem>
	);
    
    
    /*
        Nestas funções são usadas a Api Navigator, seguindo a sua def. E em url temos o endereço de onde este App vai estar publicado
    */
    const textCovid19 = `País: ${country} - Total de casos: ${cases} - Mortes: ${deaths} - Recuperados: ${recovered}`;
    
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    };
    
    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app'
        });
    };
    
    /*
        Esta variável é relacionada ao contexto de PWA e trata de compartilhamento
    */
    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    );
    /*
        Esta variável também é relacionada ao contexto de PWA 
    */
    const renderCopyButton =(
        <div>
            <Button variant="container" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    );

    
    
    return(
    
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">COVID19</Typography> 
                    <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography> 
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography> 
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}

                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    );
}



export default memo(Panel)


