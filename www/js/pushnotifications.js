function alerting () {
        var inicios = new Array();
        var alertPalestra = new Array();
        var now = new Date().getTime();
        var utcBrasil = new Date(now - 10800 * 1000);

        /*
        $http.get('https://raw.githubusercontent.com/grgau/semac/master/semac-schedule.json')
        .success(function(data, status, headers,config){
            $scope.results = data; // for UI
        })
        .error(function(data, status, headers,config){
        console.log('data error');
        })
        .then(function(results){
            things = results.data.dia1;
        })
        */

        for (i=0; i<things.length; i++) {
            inicios[i] = things[i].inicio;
            var parts = inicios[i].split(':');
            alertPalestra[i] = new Date ();
            alertPalestra[i].setHours(parts[0]-3);
            alertPalestra[i].setMinutes(parts[1]);
            alertPalestra[i].setSeconds(0);

            var alert = alertPalestra[i] - utcBrasil;
            alert = alert/60000;
            console.log(alert);

            if (alert < 10 && alert >= 6) {
                $cordovaLocalNotification.schedule({
                    id: 2,
                    title: 'Atencao!',
                    text: 'A palestra '+things[i].nome+' comecara em aproximadamente 10 minutos',
                    at: alertPalestra[i]
                }).then(function (result) {
                    console.log('Notification 2 triggered');
                });
            }
        }
        console.log(alertPalestra);
        console.log(utcBrasil);
}

function test() {
  alert('called');
  return;
}
