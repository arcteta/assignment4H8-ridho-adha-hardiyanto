const getData = async () => {
    let valueCountry = document.getElementById("input-country").value
    const url = `https://covid-193.p.rapidapi.com/statistics?country=${valueCountry ? valueCountry : "indonesia"}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '96919f6eaemsh63fc3ac50061c24p1dd3cdjsneb4a06b3b0aa',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const dataResponse = await response.json();

        let dataCovid = dataResponse.response[0];

        let getActiveCase = document.getElementById("activeCase")
        let getNewCase = document.getElementById("newCase")
        let getRecoveredCase = document.getElementById("recoveredCase")
        let getTotalCase = document.getElementById("totalCase")
        let getTotalDeath = document.getElementById("totalDeath")
        let getTotalTest = document.getElementById("totalTest")

        getActiveCase.innerHTML  = dataCovid.cases.active ? dataCovid.cases.active : "no data"
        getNewCase.innerHTML  = dataCovid.cases.new ? dataCovid.cases.new : "no data"
        getRecoveredCase.innerHTML = dataCovid.cases.recovered ? dataCovid.cases.recovered : "no data"
        getTotalCase.innerHTML = dataCovid.cases.total ? dataCovid.cases.total : "no data"
        getTotalDeath.innerHTML = dataCovid.deaths.total ? dataCovid.deaths.total : "no data"
        getTotalTest.innerHTML = dataCovid.tests.total ? dataCovid.tests.total : "no data"


    } catch (error) {
        console.error(error);
    }

}


