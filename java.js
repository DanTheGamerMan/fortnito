//Define Variables
var Btn = document.getElementById('submit');
var usernameInput = document.getElementById('username');
var platformInput = document.getElementById('platform');
var result = document.querySelector('.result');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

//Find player data
const fetchPlayers = async (username, platform) => {
    const call = await fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/${platform}/${username}`, 
	{
        headers: {
            'TRN-Api-Key': 'b3cdd27a-0b0a-4b51-9114-8bb2834cb715'
        }
    });

    const data = await call.json();
    return { data }
};


  
//Show all the data using usernameInput and platformInput
const showData = () => {
    fetchPlayers(usernameInput.value, platformInput.value).then((respond) => {
        const markup = 
		`
            <div class="stats">
                <h3 id="h3">${respond.data.epicUserHandle}'s profile (${respond.data.platformNameLong})</h3>
                <div class="row">
                    <div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[8].value}</h6>
                            <p>Wins</p>
                        </div>
                    </div>
					
                    <div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[10].value}</h6>
                            <p>Kills</p>
                        </div>
                    </div>

					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[9].value}</h6>
                            <p>Win %</p>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[11].value}</h6>
                            <p>K/D Ratio</p>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[7].value}</h6>
                            <p>Total Games Played</p>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[0].value}</h6>
                            <p>Top 5's</p>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[3].value}</h6>
                            <p>Top 10's</p>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[1].value}</h6>
                            <p>Top 3's</p>
                        </div>
                    </div>
					
					<div class="col-4">
                        <div class="stat">
                            <h6>${respond.data.lifeTimeStats[5].value}</h6>
                            <p>Top 25's</p>
                        </div>
                    </div>
                </div>
				
                </div>
               </div>
            </div>
        `;
        result.insertAdjacentHTML('beforeend', markup);
    }) //Display error on console
        .catch(err => console.log(err));
};

const clearField = () => {
    usernameInput.value = '';
    platformInput.value = 'Choose Platform';
};

const clearPlayer = () => {
    result.innerHTML = '';
}



function closeerror(){
   document.getElementById("error").innerHTML = "";
}

//Make the button earn it's keep
Btn.addEventListener('click', function () {
	if(usernameInput.value === "" || platformInput.value === 'Choose Platform'){
		document.getElementById("error").innerHTML = "Please type something into the search box or check that you have chosen a platform";
		// close the div in 5 secs
		window.setTimeout( closeerror, 2000 );
	}
	else{
    //document.getElementById("error").innerHTML = "Fetching Data. This may take a second";
		// close the div in 5 secs
		//window.setTimeout( closeerror, 2000 );
    showData();
    clearPlayer();
	}
});


//Fetch JSON
let apiKey = "b3cdd27a-0b0a-4b51-9114-8bb2834cb715"

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.fortnitetracker.com/v1/profile/pc/DanThe_GamerMan"

fetch(proxyurl + url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "TRN-Api-Key": apiKey,
  }
}).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  });//Fetch JSON
  