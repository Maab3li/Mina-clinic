document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.querySelector('#country')
    const steteSelect = document.querySelector('#state')
    const citySelect = document.querySelector('#city')

    fetch('https://api.countrystatecity.in/v1/countries', {
        headers: {
            'X_CSCAPI_KEY' : 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA== '
        }
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            const option = document.createElement('option');
            option.value = country.iso2;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        })
    }).catch(error => console.log('Error fetching countries', error));

    countrySelect.addEventListener('change', function() {
        const countryCode = this.value;
        steteSelect.innerHtml = '';
        citySelect.innerHtml = ''

        fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
            headers: {
                'X_CSCAPI_KEY' : 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA== '
            }
        }).then(response => response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option');
                option.value = state.iso2;
                option.textContent = state.name;
                steteSelect.appendChild(option);
            })
        }).catch(error => console.log('Error loading states', error));
    })

    steteSelect.addEventListener('change', function() {
        const countryCode = countrySelect.value;
        const stateCode = this.value;
        steteSelect.innerHtml = '';
        citySelect.innerHtml = ''

        fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
            headers: {
                'X_CSCAPI_KEY' : 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA== '
            }
        }).then(response => response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option');
                option.value = this.name;
                option.textContent = this.name;
                citySelect.appendChild(option);
            })
        }).catch(error => console.log('Error loading cities', error));
    
    })
    })