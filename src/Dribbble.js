import fetchJsonp from 'fetch-jsonp';


const access_token = '6fdb740315fc230859ae7ad534b3811e9dc166fde1f812ba781709e896242646';

class Dribbble {
        load(onComplete) {
        let url = 'https://api.dribbble.com/v1/shots?access_token=' + access_token;
        fetchJsonp(url)
            .then((response) => response.json())
            .then((json) => {
                onComplete(json);
            }).catch((ex) => {
            console.error('parsing failed', ex);
        });

    }
}

export default Dribbble
