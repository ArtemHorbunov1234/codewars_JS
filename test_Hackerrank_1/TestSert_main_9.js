async function getCountryName(code) {
    let a = 1;
    while (a < Infinity) {
        try {
            const response = await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${a}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const data = await response.json();

            for (const country of data.data) {
                if (country.alpha2Code === code) {
                    console.log(country.name);
                    return;
                }
            }
            a++;
        } catch (error) {
            console.error(error.message);
        }
    }
}
getCountryName('AF');
getCountryName('ZW');
getCountryName('GB');
