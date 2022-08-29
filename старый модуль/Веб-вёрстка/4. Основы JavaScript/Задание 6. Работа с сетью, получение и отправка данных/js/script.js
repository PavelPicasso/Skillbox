$(() => {
    const url = {
        latest: 'http://data.fixer.io/api/latest'
    };
    const access_key = '6d42ff22fd18c394839583a4b0b8715c';

    $.get(
        url.latest, 
        {
            'access_key': access_key,
            'symbols': 'USD, EUR, RUB'
        }, 
        (response) => {
            if(response.success){
				$('.valuta-usd').html((response.rates.RUB / response.rates.USD).toFixed(2));
				$('.valuta-eur').html((response.rates.RUB / response.rates.EUR).toFixed(2));
			}else{
				alert('ERROR! ' + response.error.type);
			}
        }
    );
});