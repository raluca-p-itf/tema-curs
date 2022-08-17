axios
    .get('https://api.spacexdata.com/v4/launches')
    .then(function (response) {
        // handle success
        console.log(response);

        let smth = response.data;
        console.log(smth);

        for (let i = 0; i < smth.length; i++) {
            let smth2 = smth[i].date_local;

            smth3 = moment(smth2).format('D');

            console.log(smth3);

        }

    })
    
    .catch(function (error) {
        // handle error
        console.log(error);
    })
;

