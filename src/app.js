var UI = require('ui');
var Vector2 = require('vector2');

var NUM_POKEMON = 151;

var poke_names = [
" 001      \nBulbasaur\nGrass/Poison",
" 002      \nIvysaur\nGrass/Poison",
" 003      \nVenusaur\nGrass/Poison",
" 004      \nCharmander\nFire\n",
" 005      \nCharmeleon\nFire\n",
" 006      \nCharizard\nFire/Flying",
" 007      \nSquirtle\nWater\n",
" 008      \nWartortle\nWater\n",
" 009      \nBlastoise\nWater\n",
" 010      \nCaterpie\nBug\n",
" 011      \nMetapod\nBug\n",
" 012      \nButterfree\nBug/Flying",
" 013      \nWeedle\nBug/Poison",
" 014      \nKakuna\nBug/Poison",
" 015      \nBeedrill\nBug/Poison",
" 016      \nPidgey\nNormal/Flying",
" 017      \nPidgeotto\nNormal/Flying",
" 018      \nPidgeot\nNormal/Flying",
" 019      \nRattata\nNormal\n",
" 020      \nRaticate\nNormal\n",
" 021      \nSpearow\nNormal/Flying",
" 022      \nFearow\nNormal/Flying",
" 023      \nEkans\nPoison\n",
" 024      \nArbok\nPoison\n",
" 025      \nPikachu\nElectric\n",
" 026      \nRaichu\nElectric\n",
" 027      \nSandshrew\nGround\n",
" 028      \nSandslash\nGround\n",
" 029      \nNidoran F\nPoison\n",
" 030      \nNidorina\nPoison\n",
" 031      \nNidoqueen\nPoison/Ground",
" 032      \nNidoran M\nPoison\n",
" 033      \nNidorino\nPoison\n",
" 034      \nNidoking\nPoison/Ground",
" 035      \nClefairy\nNormal\n",
" 036      \nClefable\nNormal\n",
" 037      \nVulpix\nFire\n",
" 038      \nNinetales\nFire\n",
" 039      \nJigglypuff\nNormal\n",
" 040      \nWigglytuff\nNormal\n",
" 041      \nZubat\nPoison/Flying",
" 042      \nGolbat\nPoison/Flying",
" 043      \nOddish\nGrass/Poison",
" 044      \nGloom\nGrass/Poison",
" 045      \nVileplume\nGrass/Poison",
" 046      \nParas\nBug/Grass",
" 047      \nParasect\nBug/Grass",
" 048      \nVenonat\nBug/Poison",
" 049      \nVenomoth\nBug/Poison",
" 050      \nDiglett\nGround\n",
" 051      \nDugtrio\nGround\n",
" 052      \nMeowth\nNormal\n",
" 053      \nPersian\nNormal\n",
" 054      \nPsyduck\nWater\n",
" 055      \nGolduck\nWater\n",
" 056      \nMankey\nFighting\n",
" 057      \nPrimeape\nFighting\n",
" 058      \nGrowlithe\nFire\n",
" 059      \nArcanine\nFire\n",
" 060      \nPoliwag\nWater\n",
" 061      \nPoliwhirl\nWater\n",
" 062      \nPoliwrath\nWater/Fighting",
" 063      \nAbra\nPsychic\n",
" 064      \nKadabra\nPsychic\n",
" 065      \nAlakazam\nPsychic\n",
" 066      \nMachop\nFighting\n",
" 067      \nMachoke\nFighting\n",
" 068      \nMachamp\nFighting\n",
" 069      \nBellsprout\nGrass/Poison",
" 070      \nWeepinbell\nGrass/Poison",
" 071      \nVictreebel\nGrass/Poison",
" 072      \nTentacool\nWater/Poison",
" 073      \nTentacruel\nWater/Poison",
" 074      \nGeodude\nRock/Ground",
" 075      \nGraveler\nRock/Ground",
" 076      \nGolem\nRock/Ground",
" 077      \nPonyta\nFire\n",
" 078      \nRapidash\nFire\n",
" 079      \nSlowpoke\nWater/Psychic",
" 080      \nSlowbro\nWater/Psychic",
" 081      \nMagnemite\nElectric/Steel",
" 082      \nMagneton\nElectric/Steel",
" 083      \nFarfetch'd\nNormal/Flying",
" 084      \nDoduo\nNormal/Flying",
" 085      \nDodrio\nNormal/Flying",
" 086      \nSeel\nWater\n",
" 087      \nDewgong\nWater/Ice",
" 088      \nGrimer\nPoison\n",
" 089      \nMuk\nPoison\n",
" 090      \nShellder\nWater\n",
" 091      \nCloyster\nWater/Ice",
" 092      \nGastly\nGhost/Poison",
" 093      \nHaunter\nGhost/Poison",
" 094      \nGengar\nGhost/Poison",
" 095      \nOnix\nRock/Ground",
" 096      \nDrowzee\nPsychic\n",
" 097      \nHypno\nPsychic\n",
" 098      \nKrabby\nWater\n",
" 099      \nKingler\nWater\n",
" 100      \nVoltorb\nElectric\n",
" 101      \nElectrode\nElectric\n",
" 102      \nExeggcute\nGrass/Psychic",
" 103      \nExeggutor\nGrass/Psychic",
" 104      \nCubone\nGround\n",
" 105      \nMarowak\nGround\n",
" 106      \nHitmonlee\nFighting\n",
" 107      \nHitmonchan\nFighting\n",
" 108      \nLickitung\nNormal\n",
" 109      \nKoffing\nPoison\n",
" 110      \nWeezing\nPoison\n",
" 111      \nRhyhorn\nGround\nRock",
" 112      \nRhydon\nGround\nRock",
" 113      \nChansey\nNormal\n",
" 114      \nTangela\nGrass\n",
" 115      \nKangaskhan\nNormal\n",
" 116      \nHorsea\nWater\n",
" 117      \nSeadra\nWater\n",
" 118      \nGoldeen\nWater\n",
" 119      \nSeaking\nWater\n",
" 120      \nStaryu\nWater\n",
" 121      \nStarmie\nWater/Psychic",
" 122      \nMr. Mime\nPsychic\n",
" 123      \nScyther\nBug/Flying",
" 124      \nJynx\nIce/Psychic",
" 125      \nElectabuzz\nElectric\n",
" 126      \nMagmar\nFire\n",
" 127      \nPinsir\nBug\n",
" 128      \nTauros\nNormal\n",
" 129      \nMagikarp\nWater\n",
" 130      \nGyarados\nWater/Flying",
" 131      \nLapras\nWater/Ice",
" 132      \nDitto\nNormal\n",
" 133      \nEevee\nNormal\n",
" 134      \nVaporeon\nWater\n",
" 135      \nJolteon\nElectric\n",
" 136      \nFlareon\nFire\n",
" 137      \nPorygon\nNormal\n",
" 138      \nOmanyte\nRock/Water",
" 139      \nOmastar\nRock/Water",
" 140      \nKabuto\nRock/Water",
" 141      \nKabutops\nRock/Water",
" 142      \nAerodactyl\nRock/Flying",
" 143      \nSnorlax\nNormal\n",
" 144      \nArticuno\nIce/Flying",
" 145      \nZapdos\nElectric/Flying",
" 146      \nMoltres\nFire/Flying",
" 147      \nDratini\nDragon\n",
" 148      \nDragonair\nDragon\n",
" 149      \nDragonite\nDragon/Flying",
" 150      \nMewtwo\nPsychic\n",
" 151      \nMew\nPsychic\n",
" ?&0      \nMissingNo\n?????\n",
null];

var poke_images = [ 
'images/poke1.png',
'images/poke2.png',
'images/poke3.png',
'images/poke4.png',
'images/poke5.png',
'images/poke6.png',
'images/poke7.png',
'images/poke8.png',
'images/poke9.png',
'images/poke10.png',
'images/poke11.png',
'images/poke12.png',
'images/poke13.png',
'images/poke14.png',
'images/poke15.png',
'images/poke16.png',
'images/poke17.png',
'images/poke18.png',
'images/poke19.png',
'images/poke20.png',
'images/poke21.png',
'images/poke22.png',
'images/poke23.png',
'images/poke24.png',
'images/poke25.png',
'images/poke26.png',
'images/poke27.png',
'images/poke28.png',
'images/poke29.png',
'images/poke30.png',
'images/poke31.png',
'images/poke32.png',
'images/poke33.png',
'images/poke34.png',
'images/poke35.png',
'images/poke36.png',
'images/poke37.png',
'images/poke38.png',
'images/poke39.png',
'images/poke40.png',
'images/poke41.png',
'images/poke42.png',
'images/poke43.png',
'images/poke44.png',
'images/poke45.png',
'images/poke46.png',
'images/poke47.png',
'images/poke48.png',
'images/poke49.png',
'images/poke50.png',
'images/poke51.png',
'images/poke52.png',
'images/poke53.png',
'images/poke54.png',
'images/poke55.png',
'images/poke56.png',
'images/poke57.png',
'images/poke58.png',
'images/poke59.png',
'images/poke60.png',
'images/poke61.png',
'images/poke62.png',
'images/poke63.png',
'images/poke64.png',
'images/poke65.png',
'images/poke66.png',
'images/poke67.png',
'images/poke68.png',
'images/poke69.png',
'images/poke70.png',
'images/poke71.png',
'images/poke72.png',
'images/poke73.png',
'images/poke74.png',
'images/poke75.png',
'images/poke76.png',
'images/poke77.png',
'images/poke78.png',
'images/poke79.png',
'images/poke80.png',
'images/poke81.png',
'images/poke82.png',
'images/poke83.png',
'images/poke84.png',
'images/poke85.png',
'images/poke86.png',
'images/poke87.png',
'images/poke88.png',
'images/poke89.png',
'images/poke90.png',
'images/poke91.png',
'images/poke92.png',
'images/poke93.png',
'images/poke94.png',
'images/poke95.png',
'images/poke96.png',
'images/poke97.png',
'images/poke98.png',
'images/poke99.png',
'images/poke100.png',
'images/poke101.png',
'images/poke102.png',
'images/poke103.png',
'images/poke104.png',
'images/poke105.png',
'images/poke106.png',
'images/poke107.png',
'images/poke108.png',
'images/poke109.png',
'images/poke110.png',
'images/poke111.png',
'images/poke112.png',
'images/poke113.png',
'images/poke114.png',
'images/poke115.png',
'images/poke116.png',
'images/poke117.png',
'images/poke118.png',
'images/poke119.png',
'images/poke120.png',
'images/poke121.png',
'images/poke122.png',
'images/poke123.png',
'images/poke124.png',
'images/poke125.png',
'images/poke126.png',
'images/poke127.png',
'images/poke128.png',
'images/poke129.png',
'images/poke130.png',
'images/poke131.png',
'images/poke132.png',
'images/poke133.png',
'images/poke134.png',
'images/poke135.png',
'images/poke136.png',
'images/poke137.png',
'images/poke138.png',
'images/poke139.png',
'images/poke140.png',
'images/poke141.png',
'images/poke142.png',
'images/poke143.png',
'images/poke144.png',
'images/poke145.png',
'images/poke146.png',
'images/poke147.png',
'images/poke148.png',
'images/poke149.png',
'images/poke150.png',
'images/poke151.png',
'images/unknown.png'
];

var poke_gps_location = [
  [33.6367,-117.7026], //1
  [33.6415,-117.7010], //2
  [33.6458,-117.7016], //3
  [33.6458,-117.6890], //4
  [33.6479,-117.6980], //5
  [33.6504,-117.7062], //6
  [33.6567,-117.7001], //7
  [33.6550,-117.6982], //8
  [33.6529,-117.7025], //9
  [33.6490,-117.6901], //10
  [33.6403,-117.6962], //11
  [33.6589,-117.6894], //12
  [33.6530,-117.6895], //13
  [33.6515,-117.6951], //14
  [33.6602,-117.6945], //15
  [33.6498,-117.6884], //16
  [33.6523,-117.7034], //17
  [33.6464,-117.6922], //18
  [33.6458,-117.6864],
  [33.6477,-117.6851],
  [33.6490,-117.6885],
  [33.6529,-117.6986],
  [33.6539,-117.6980],
  [33.6484,-117.7030],
  [33.6478,-117.7087],
  [33.6444,-117.7078],
  [33.6436,-117.7039],
  [33.6416,-117.7015],
  [33.6433,-117.6995],
  [33.6438,-117.7013],
  [33.6465,-117.7014],
  [33.6479,-117.7009],
  [33.6596,-117.6967],
  [33.6533,-117.6929],
  [33.6543,-117.7027],
  [33.6529,-117.7017],
  [33.6520,-117.7001],
  [33.6476,-117.7004],
  [33.6451,-117.6986],
  [33.6517,-117.6886],
  [33.6494,-117.6895],
  [33.6336,-117.6801],
  [33.6467,-117.6876],
  [33.6442,-117.6868],
  [33.6445,-117.6887],
  [33.6433,-117.6908],
  [33.6419,-117.6957],
  [33.6404,-117.6978],
  [33.6396.-117.7015],
  [33.6436,-117.6873],
  [33.6393,-117.7002],
  [33.6519,-117.6844],
  [33.6435,-117.6949],
  [33.6397,-117.6918],
  [33.6419,-117.6958],
  [33.6322,-117.7176],
  [33.6423,-117.7082],
  [33.6414,-117.7034],
  [33.6405,-117.7080],
  [33.6429,-117.7107],
  [33.6453,-117.7003],
  [33.6467,-117.6950],
  [33.6488,-117.6982],
  [33.6479,-117.6924],
  [33.6503,-117.6926],
  [33.6453,-117.6908],
  [33.6444,-117.6961],
  [33.6415,-117.6950],
  [33.6475,-117.6964],
  [33.6470,-117.6961],
  [33.6585,-117.6947],
  [33.6575,-117.6918],
  [33.6508,-117.7046],
  [33.6550,-117.6875],
  [33.6602,-117.6922],
  [33.6503,-117.6950],
  [33.6501,-117.6985],
  [33.6509,-117.6880],
  [33.6492,-117.7000],
  [33.6523,-117.7022],
  [33.6383,-117.7041],
  [33.6518,-117.7032],
  [33.6570,-117.6966],
  [33.6563,-117.7004],
  [33.6587,-117.6982],
  [33.6605,-117.6958],
  [33.6614,-117.6930],
  [33.6612,-117.6949],
  [33.6547,-117.6944],
  [33.6540,-117.6893],
  [33.6542,-117.6864],
  [33.6547,-117.6893],
  [33.6520,-117.6869],
  [33.6455,-117.7003],
  [33.6445,-117.6971],
  [33.6467,-117.7109],
  [33.6494,-117.7091],
  [33.6517,-117.7070],
  [33.6528,-117.7069],
  [33.6538,-117.7052],
  [33.6566,-117.7031],
  [33.6577,-117.7016],
  [33.6383,-117.6945],
  [33.6528,-117.6896],
  [33.6593,-117.6919],
  [33.6511,-117.6908],
  [33.6433,-117.7095],
  [33.6556,-117.6864],
  [33.6580,-117.6877],
  [33.6575,-117.6903],
  [33.6561,-117.6903],
  [33.6380,-117.6971],
  [33.6363,-117.6970],
  [33.6390,-117.6964],
  [33.6381,-117.6948],
  [33.6378,-117.6930],
  [33.6346,-117.6990],
  [33.6520,-117.6968],
  [33.6543,-117.6988],
  [33.6576,-117.6844],
  [33.6582,-117.6858],
  [33.6587,-117.6852],
  [33.6587,-117.6839],
  [33.6526,-117.6839],
  [33.6476,-117.6832],
  [33.6433,-117.6868],
  [33.6414,-117.6909],
  [33.6412,-117.7052],
  [33.6460,-117.6913],
  [33.6566,-117.6867],
  [33.6555,-117.6852],
  [33.6373,-117.6982],
  [33.6413,-117.6875],
  [33.6451,-117.6860],
  [33.6394,-117.7032],
  [33.6484,-117.6988],
  [33.6510,-117.6867],
  [33.6400,-117.6923],
  [33.6432,-117.7095],
  [33.6423,-117.7061],
  [33.6428,-117.6899],
  [33.6494,-117.6914],
  [33.6597,-117.6940],
  [33.6412,-117.6874],
  [33.6560,-117.6844],
  [33.6522,-117.7045],
  [33.6473,-117.6995],
  [33.6489,-117.6836],
  [33.6482,-117.6846],
  [33.6615,-117.6913]
];

var LATITUDE = -1.0;
var LONGITUDE = -1.0;
var ALTITUDE = -1.0;
//POKEDEX Cards
var pokemon_found_entries;

var current_viewable_entry_index = 0;

var top_bar_image = new UI.Image({
  image: 'images/ui_top.png',
  size: new Vector2(144, 11),
  position: new Vector2(0, 0)
});
var bottom_bar_image = new UI.Image({
  image: 'images/ui_bottom.png',
  size: new Vector2(144, 11),
  position: new Vector2(0, 157)
});
var catch_button_indicator_image = new UI.Image({
  image: 'images/complete.png',
  size: new Vector2(14, 14),
  position: new Vector2(124, 77)
});

var pokedex_entry_card = new UI.Window({
  backgroundColor: 'white',
  fullscreen: true
});

var pokedex_entry_text = new UI.Text({
  text: poke_names[NUM_POKEMON],
  position: new Vector2(10,70),
  size: new Vector2(144, 80),
  backgroundColor: 'clear',
  color: 'black'
});

var pokedex_entry_number_text = new UI.Text({
  text: String(current_viewable_entry_index+1),
  position: new Vector2(110, 128),
  size: new Vector2(50, 50),
  backgroundColor: 'clear',
  color: 'black'
});

var poke_image = new UI.Image({
  position: new Vector2(10,15),
  size: new Vector2(56, 56),
  image: poke_images[NUM_POKEMON],
  backgroundColor: 'clear'
});

//CATCH A POKEMON Cards
var catch_pokemon_card = new UI.Window({
  fullscreen: true,
  backgroundColor: 'white'
});

var catch_arrow_image = new UI.Image({
  image: 'images/arrow.png',
  size: new Vector2(144, 50),
  position: new Vector2(0, 115)
});
var catch_pokemon_title = new UI.Text({
  backgroundColor: 'clear',
  color: 'black',
  position: new Vector2(10, 20),
  size: new Vector2(124, 60),
  text: 'Throw a \nPokeball!',
  font: 'GOTHIC_28_BOLD'
});

var successful_pokemon_catch_card = new UI.Card({
  title: 'Caught!',
  body: 'You caught a Pokemon!'
});

var failed_pokemon_catch_card = new UI.Card({
  title: 'No Pokemon Found',
  body: 'No Pokemon Found'
});

var waiting_for_catch_info = new UI.Card({
  title: 'Catching Pokemon...',
  body: 'Please Wait'
});

//GPS HANDLER
var locationOptions = {
  enableHighAccuracy: true, 
  maximumAge: 0, 
  timeout: 5000
};

function locationSuccess(pos) {
  var coordinates = pos.coords;
  if (coordinates.latitude !== null)
    LATITUDE = coordinates.latitude.toFixed(4);
  else
    LATITUDE = -1.0;
  if (coordinates.longitude !== null)
    LONGITUDE = coordinates.longitude.toFixed(4);
  else
    LONGITUDE = -1.0;
  if (coordinates.altitude !== null)
    ALTITUDE = coordinates.altitude.toFixed(0);
  else ALTITUDE = -1.0;
  console.log('lat= ' + LATITUDE + ' lon= ' + LONGITUDE + ' alt='  + ALTITUDE);
  
  var pokemon_index = 0;
  var found_pokemon_index = -1;
  
  for(pokemon_index = 0; pokemon_index < NUM_POKEMON; pokemon_index++){
    if((poke_gps_location[pokemon_index][0]*1.000005) >= LATITUDE && (poke_gps_location[pokemon_index][0]*0.999995) <= LATITUDE){
      if((Math.abs(poke_gps_location[pokemon_index][1]*1.000005)) >= Math.abs(LONGITUDE) && (Math.abs(poke_gps_location[pokemon_index][1]*0.999995)) <= Math.abs(LONGITUDE)){
        found_pokemon_index = pokemon_index;
        break;
      }
    }
  }
  
  if(found_pokemon_index >= 0){
    //SUCCESS
    successful_pokemon_catch_card.show();
    pokemon_found_entries[found_pokemon_index] = true;
    //console.log(pokemon_found_entries[found_pokemon_index]);
    current_viewable_entry_index = found_pokemon_index;
    localStorage.setItem('Pokedex_finds', pokemon_found_entries);
  }
  else{
    //FAILED
    failed_pokemon_catch_card.show();
  }
  waiting_for_catch_info.hide();
}

function locationError(err) {
  console.log('location error (' + err.code + '): ' + err.message);
}

//INTERFACE HANDLERS
function transition_to_pokedex_entry(entry_number){
  // LOOP IF GOES OVER
   if(entry_number < 0) {entry_number = NUM_POKEMON-1;}
   else if(entry_number > NUM_POKEMON-1) {entry_number = 0;}
  //console.log('Entry_num:' + entry_number + " value:" + pokemon_found_entries[entry_number]);
   if(pokemon_found_entries[entry_number]){
     //Known Pokemon
     pokedex_entry_text.text(poke_names[entry_number]);
     poke_image.image(poke_images[entry_number]);
   }
  else {
    //Unknown Pokemon
    pokedex_entry_text.text(poke_names[NUM_POKEMON]);
    poke_image.image(poke_images[NUM_POKEMON]);
  }
  current_viewable_entry_index = entry_number;
  
  console.log(poke_image.image);
  pokedex_entry_card.add(pokedex_entry_text);
  pokedex_entry_number_text.text(String(current_viewable_entry_index+1));
  pokedex_entry_card.add(pokedex_entry_number_text);
  pokedex_entry_card.add(poke_image);
  pokedex_entry_card.add(top_bar_image);
  pokedex_entry_card.add(bottom_bar_image);
  pokedex_entry_card.add(catch_button_indicator_image);
  //console.log("changing screens");
  pokedex_entry_card.show();
}

catch_pokemon_card.on('click', 'down', function() {
  //console.log('Catching a pokemon Click:');
  //UPDATE GPS COORDS
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  waiting_for_catch_info.show();
  catch_pokemon_card.hide();
});

catch_pokemon_card.on('click', 'select', function(){
  //Change the pokedex_card to the current viewable poke index if the pokemon has been found
  //console.log('select Click');
  transition_to_pokedex_entry(current_viewable_entry_index);
  catch_pokemon_card.hide();
});

pokedex_entry_card.on('click', 'select', function(){
  catch_pokemon_card.add(catch_arrow_image);
  catch_pokemon_card.add(catch_pokemon_title);
  catch_pokemon_card.show();
  pokedex_entry_card.hide();
});

pokedex_entry_card.on('click', 'up', function(){
  transition_to_pokedex_entry(current_viewable_entry_index-1);
});

pokedex_entry_card.on('click', 'down', function(){
  transition_to_pokedex_entry(current_viewable_entry_index+1);
});

successful_pokemon_catch_card.on('click', 'down', function(){
  transition_to_pokedex_entry(current_viewable_entry_index);
  successful_pokemon_catch_card.hide();
});

failed_pokemon_catch_card.on('click', 'down', function(){
  transition_to_pokedex_entry(current_viewable_entry_index);
  failed_pokemon_catch_card.hide();
});

pokemon_found_entries  = JSON.parse('[' + localStorage.getItem('Pokedex_finds') + ']');
//pokemon_found_entries = null;
if(pokemon_found_entries === null) { pokemon_found_entries = [
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false
];}
current_viewable_entry_index = 0;
transition_to_pokedex_entry(0);
