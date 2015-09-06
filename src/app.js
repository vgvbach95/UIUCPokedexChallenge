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

var poke_info = [
" 001      \n\nBulbasaur\n\n0.7  m\n6.9 kg",
" 002      \n\nIvysaur\n\n1.0  m\n13.0 kg",
" 003      \n\nVenusaur\n\n2.0  m\n100.0 kg",
" 004      \n\nCharmander\n\n0.6  m\n8.5 kg",
" 005      \n\nCharmeleon\n\n1.1  m\n19.0 kg",
" 006      \n\nCharizard\n\n1.7  m\n90.5 kg",
" 007      \n\nSquirtle\n\n0.5  m\n9.0 kg",
" 008      \n\nWartortle\n\n1.0  m\n22.5 kg",
" 009      \n\nBlastoise\n\n1.6  m\n85.5 kg",
" 010      \n\nCaterpie\n\n0.3  m\n2.9 kg",
" 011      \n\nMetapod\n\n0.7  m\n9.9 kg",
" 012      \n\nButterfree\n\n1.1  m\n32.0 kg",
" 013      \n\nWeedle\n\n0.3  m\n3.2 kg",
" 014      \n\nKakuna\n\n0.6  m\n10.0 kg",
" 015      \n\nBeedrill\n\n1.0  m\n29.5 kg",
" 016      \n\nPidgey\n\n0.3  m\n1.8 kg",
" 017      \n\nPidgeotto\n\n1.1  m\n30.0 kg",
" 018      \n\nPidgeot\n\n1.5  m\n39.5 kg",
" 019      \n\nRattata\n\n0.3  m\n3.5 kg",
" 020      \n\nRaticate\n\n0.7  m\n18.5 kg",
" 021      \n\nSpearow\n\n0.3  m\n2.0 kg",
" 022      \n\nFearow\n\n1.2  m\n38.0 kg",
" 023      \n\nEkans\n\n2.0  m\n6.9 kg",
" 024      \n\nArbok\n\n3.5  m\n65.0 kg",
" 025      \n\nPikachu\n\n0.4  m\n6.0 kg",
" 026      \n\nRaichu\n\n0.8  m\n30.0 kg",
" 027      \n\nSandshrew\n\n0.6  m\n12.0 kg",
" 028      \n\nSandslash\n\n1.0  m\n29.5 kg",
" 029      \n\nNidoran F\n\n0.4  m\n7.0 kg",
" 030      \n\nNidorina\n\n0.8  m\n20.0 kg",
" 031      \n\nNidoqueen\n\n1.3  m\n60.0 kg",
" 032      \n\nNidoran M\n\n0.5  m\n9.0 kg",
" 033      \n\nNidorino\n\n0.9  m\n19.5 kg",
" 034      \n\nNidoking\n\n1.4  m\n62.0 kg",
" 035      \n\nClefairy\n\n0.6  m\n7.5 kg",
" 036      \n\nClefable\n\n1.3  m\n40.0 kg",
" 037      \n\nVulpix\n\n0.6  m\n9.9 kg",
" 038      \n\nNinetales\n\n1.1  m\n19.9 kg",
" 039      \n\nJigglypuff\n\n0.5  m\n5.5 kg",
" 040      \n\nWigglytuff\n\n1.0  m\n12.0 kg",
" 041      \n\nZubat\n\n0.8  m\n7.5 kg",
" 042      \n\nGolbat\n\n1.6  m\n55.0 kg",
" 043      \n\nOddish\n\n0.5  m\n5.4 kg",
" 044      \n\nGloom\n\n0.8  m\n8.6 kg",
" 045      \n\nVileplume\n\n1.2  m\n18.6 kg",
" 046      \n\nParas\n\n0.3  m\n5.4 kg",
" 047      \n\nParasect\n\n1.0  m\n29.5 kg",
" 048      \n\nVenonat\n\n1.0  m\n30.0 kg",
" 049      \n\nVenomoth\n\n1.5  m\n12.5 kg",
" 050      \n\nDiglett\n\n0.2  m\n0.8 kg",
" 051      \n\nDugtrio\n\n0.7  m\n33.3 kg",
" 052      \n\nMeowth\n\n0.4  m\n4.2 kg",
" 053      \n\nPersian\n\n1.0  m\n32.0 kg",
" 054      \n\nPsyduck\n\n0.8  m\n19.6 kg",
" 055      \n\nGolduck\n\n1.7  m\n76.6 kg",
" 056      \n\nMankey\n\n0.5  m\n28.0 kg",
" 057      \n\nPrimeape\n\n1.0  m\n32.0 kg",
" 058      \n\nGrowlithe\n\n0.7  m\n19.0 kg",
" 059      \n\nArcanine\n\n1.9  m\n155.0 kg",
" 060      \n\nPoliwag\n\n0.6  m\n12.4 kg",
" 061      \n\nPoliwhirl\n\n1.0  m\n20.0 kg",
" 062      \n\nPoliwrath\n\n1.3  m\n54.0 kg",
" 063      \n\nAbra\n\n0.9  m\n19.5 kg",
" 064      \n\nKadabra\n\n1.3  m\n56.5 kg",
" 065      \n\nAlakazam\n\n1.5  m\n48.0 kg",
" 066      \n\nMachop\n\n0.8  m\n19.5 kg",
" 067      \n\nMachoke\n\n1.5  m\n70.5 kg",
" 068      \n\nMachamp\n\n1.6  m\n130.0 kg",
" 069      \n\nBellsprout\n\n0.7  m\n4.0 kg",
" 070      \n\nWeepinbell\n\n1.0  m\n6.4 kg",
" 071      \n\nVictreebel\n\n1.7  m\n15.5 kg",
" 072      \n\nTentacool\n\n0.9  m\n45.5 kg",
" 073      \n\nTentacruel\n\n1.6  m\n55.0 kg",
" 074      \n\nGeodude\n\n0.4  m\n20.0 kg",
" 075      \n\nGraveler\n\n1.0  m\n105.0 kg",
" 076      \n\nGolem\n\n1.4  m\n300.0 kg",
" 077      \n\nPonyta\n\n1.0  m\n30.0 kg",
" 078      \n\nRapidash\n\n1.7  m\n95.0 kg",
" 079      \n\nSlowpoke\n\n1.2  m\n36.0 kg",
" 080      \n\nSlowbro\n\n1.6  m\n78.5 kg",
" 081      \n\nMagnemite\n\n0.3  m\n6.0 kg",
" 082      \n\nMagneton\n\n1.0  m\n60.0 kg",
" 083      \n\nFarfetch'd\n\n0.8  m\n15.0 kg",
" 084      \n\nDoduo\n\n1.4  m\n39.2 kg",
" 085      \n\nDodrio\n\n1.8  m\n85.2 kg",
" 086      \n\nSeel\n\n1.1  m\n90.0 kg",
" 087      \n\nDewgong\n\n1.7  m\n120.0 kg",
" 088      \n\nGrimer\n\n0.9  m\n30.0 kg",
" 089      \n\nMuk\n\n1.2  m\n30.0 kg",
" 090      \n\nShellder\n\n0.3  m\n4.0 kg",
" 091      \n\nCloyster\n\n1.5  m\n132.5 kg",
" 092      \n\nGastly\n\n1.3  m\n0.1 kg",
" 093      \n\nHaunter\n\n1.6  m\n0.1 kg",
" 094      \n\nGengar\n\n1.5  m\n40.5 kg",
" 095      \n\nOnix\n\n8.8  m\n210.0 kg",
" 096      \n\nDrowzee\n\n1.0  m\n32.4 kg",
" 097      \n\nHypno\n\n1.6  m\n75.6 kg",
" 098      \n\nKrabby\n\n0.4  m\n6.5 kg",
" 099      \n\nKingler\n\n1.3  m\n60.0 kg",
" 100      \n\nVoltorb\n\n0.5  m\n10.4 kg",
" 101      \n\nElectrode\n\n1.2  m\n66.6 kg",
" 102      \n\nExeggcute\n\n0.4  m\n2.5 kg",
" 103      \n\nExeggutor\n\n2.0  m\n120.0 kg",
" 104      \n\nCubone\n\n0.4  m\n6.5 kg",
" 105      \n\nMarowak\n\n1.0  m\n45.0 kg",
" 106      \n\nHitmonlee\n\n1.5  m\n49.8 kg",
" 107      \n\nHitmonchan\n\n1.4  m\n50.2 kg",
" 108      \n\nLickitung\n\n1.2  m\n65.5 kg",
" 109      \n\nKoffing\n\n0.6  m\n1.0 kg",
" 110      \n\nWeezing\n\n1.2  m\n9.5 kg",
" 111      \n\nRhyhorn\n\n1.0  m\n115.0 kg",
" 112      \n\nRhydon\n\n1.9  m\n120.0 kg",
" 113      \n\nChansey\n\n1.1  m\n34.6 kg",
" 114      \n\nTangela\n\n1.0  m\n35.0 kg",
" 115      \n\nKangaskhan\n\n2.2  m\n80.0 kg",
" 116      \n\nHorsea\n\n0.4  m\n8.0 kg",
" 117      \n\nSeadra\n\n1.2  m\n25.0 kg",
" 118      \n\nGoldeen\n\n0.6  m\n15.0 kg",
" 119      \n\nSeaking\n\n1.3  m\n39.0 kg",
" 120      \n\nStaryu\n\n0.8  m\n34.5 kg",
" 121      \n\nStarmie\n\n1.1  m\n80.0 kg",
" 122      \n\nMr.Mime\n\n1.3  m\n54.5 kg",
" 123      \n\nScyther\n\n1.5  m\n56.0 kg",
" 124      \n\nJynx\n\n1.4  m\n40.6 kg",
" 125      \n\nElectabuzz\n\n1.1  m\n30.0 kg",
" 126      \n\nMagmar\n\n1.3  m\n44.5 kg",
" 127      \n\nPinsir\n\n1.5  m\n55.0 kg",
" 128      \n\nTauros\n\n1.4  m\n88.4 kg",
" 129      \n\nMagikarp\n\n0.9  m\n10.0 kg",
" 130      \n\nGyarados\n\n6.5  m\n235.0 kg",
" 131      \n\nLapras\n\n2.5  m\n220.0 kg",
" 132      \n\nDitto\n\n0.3  m\n4.0 kg",
" 133      \n\nEevee\n\n0.3  m\n6.5 kg",
" 134      \n\nVaporeon\n\n1.0  m\n29.0 kg",
" 135      \n\nJolteon\n\n0.8  m\n24.5 kg",
" 136      \n\nFlareon\n\n0.9  m\n25.0 kg",
" 137      \n\nPorygon\n\n0.8  m\n36.5 kg",
" 138      \n\nOmanyte\n\n0.4  m\n7.5 kg",
" 139      \n\nOmastar\n\n1.0  m\n35.0 kg",
" 140      \n\nKabuto\n\n0.5  m\n11.5 kg",
" 141      \n\nKabutops\n\n1.3  m\n40.5 kg",
" 142      \n\nAerodactyl\n\n1.8  m\n59.0 kg",
" 143      \n\nSnorlax\n\n2.1  m\n460.0 kg",
" 144      \n\nArticuno\n\n1.7  m\n55.4 kg",
" 145      \n\nZapdos\n\n1.6  m\n52.6 kg",
" 146      \n\nMoltres\n\n2.0  m\n60.0 kg",
" 147      \n\nDratini\n\n1.8  m\n3.3 kg",
" 148      \n\nDragonair\n\n4.0  m\n16.5 kg",
" 149      \n\nDragonite\n\n2.2  m\n210.0 kg",
" 150      \n\nMewtwo\n\n2.0  m\n122.0 kg",
" 151      \n\nMew\n\n0.4  m\n4.0 kg",
null];

var poke_images = [ 
'poke1.png',
'poke2.png',
'poke3.png',
'poke4.png',
'poke5.png',
'poke6.png',
'poke7.png',
'poke8.png',
'poke9.png',
'poke10.png',
'poke11.png',
'poke12.png',
'poke13.png',
'poke14.png',
'poke15.png',
'poke16.png',
'poke17.png',
'poke18.png',
'poke19.png',
'poke20.png',
'poke21.png',
'poke22.png',
'poke23.png',
'poke24.png',
'poke25.png',
'poke26.png',
'poke27.png',
'poke28.png',
'poke29.png',
'poke30.png',
'poke31.png',
'poke32.png',
'poke33.png',
'poke34.png',
'poke35.png',
'poke36.png',
'poke37.png',
'poke38.png',
'poke39.png',
'poke40.png',
'poke41.png',
'poke42.png',
'poke43.png',
'poke44.png',
'poke45.png',
'poke46.png',
'poke47.png',
'poke48.png',
'poke49.png',
'poke50.png',
'poke51.png',
'poke52.png',
'poke53.png',
'poke54.png',
'poke55.png',
'poke56.png',
'poke57.png',
'poke58.png',
'poke59.png',
'poke60.png',
'poke61.png',
'poke62.png',
'poke63.png',
'poke64.png',
'poke65.png',
'poke66.png',
'poke67.png',
'poke68.png',
'poke69.png',
'poke70.png',
'poke81.png',
'poke82.png',
'poke83.png',
'poke84.png',
'poke85.png',
'poke86.png',
'poke87.png',
'poke88.png',
'poke89.png',
'poke90.png',
'poke91.png',
'poke92.png',
'poke93.png',
'poke94.png',
'poke95.png',
'poke96.png',
'poke97.png',
'poke98.png',
'poke99.png',
'poke100.png',
'poke101.png',
'poke102.png',
'poke103.png',
'poke104.png',
'poke105.png',
'poke106.png',
'poke107.png',
'poke108.png',
'poke109.png',
'poke110.png',
'poke111.png',
'poke112.png',
'poke113.png',
'poke114.png',
'poke115.png',
'poke116.png',
'poke117.png',
'poke118.png',
'poke119.png',
'poke120.png',
'poke120.png',
'poke121.png',
'poke122.png',
'poke123.png',
'poke124.png',
'poke125.png',
'poke126.png',
'poke127.png',
'poke128.png',
'poke129.png',
'poke130.png',
'poke131.png',
'poke132.png',
'poke133.png',
'poke134.png',
'poke135.png',
'poke136.png',
'poke137.png',
'poke138.png',
'poke139.png',
'poke130.png',
'poke131.png',
'poke132.png',
'poke133.png',
'poke134.png',
'poke135.png',
'poke136.png',
'poke137.png',
'poke138.png',
'poke139.png',
'poke140.png',
'poke141.png',
'poke142.png',
'poke143.png',
'poke144.png',
'poke145.png',
'poke146.png',
'poke147.png',
'poke148.png',
'poke149.png',
'poke150.png',
'poke151.png',
'unknown.png'
];

var poke_gps_location = [
  [0,0], //1
  [0,0], //2
  [0,0], //3
  [0,0], //4
  [0,0], //5
  [0,0], //6
  [0,0], //7
  [0,0], //8
  [0,0], //9
  [0,0], //10
  [0,0], //11
  [0,0], //12
  [0,0], //13
  [0,0], //14
  [0,0], //15
  [0,0], //16
  [0,0], //17
  [0,0], //18
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [40.1153, -88.2314],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0],
  [0,0]
];

var LATITUDE = -1.0;
var LONGITUDE = -1.0;
var ALTITUDE = -1.0;
//POKEDEX Cards
var pokemon_found_entries;

var current_viewable_entry_index;

var pokedex_entry_card = new UI.Card({
  title: 'Pokedex',
  body: poke_names[NUM_POKEMON]
});

/*var poke_image = new UI.Image({
  position: new Vector2(50,50),
  size: new Vector2(56, 56),
  image: POKEMON_DATA.poke_images[POKEMON_DATA.NUM_POKEMON]
});*/

//CATCH A POKEMON Cards
var catch_pokemon_card = new UI.Card({
  title: 'Look for a Pokemon',
  body: 'Throw a Pokeball!'
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
    //console.log('lat_pokemon:' + poke_gps_location[pokemon_index][0] + ' lon_pokemon:' + poke_gps_location[pokemon_index][1]);
    if((poke_gps_location[pokemon_index][0]*1.01) >= LATITUDE && (poke_gps_location[pokemon_index][0]*0.99) <= LATITUDE){
      if((Math.abs(poke_gps_location[pokemon_index][1]*1.01)) >= Math.abs(LONGITUDE) && (Math.abs(poke_gps_location[pokemon_index][1]*0.99)) <= Math.abs(LONGITUDE)){
        found_pokemon_index = pokemon_index;
        console.log('found a pokemon');
        console.log(found_pokemon_index);
        break;
      }
    }
  }
  
  if(found_pokemon_index >= 0){
    //SUCCESS
    successful_pokemon_catch_card.show();
    pokemon_found_entries[found_pokemon_index] = true;
    console.log(pokemon_found_entries[found_pokemon_index]);
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
  console.log('Entry_num:' + entry_number + " value:" + pokemon_found_entries[entry_number]);
   if(pokemon_found_entries[entry_number]){
     //Known Pokemon
     pokedex_entry_card.body(poke_names[entry_number]);
     //poke_image.image = poke_images[entry_number];
   }
  else {
    //Unknown Pokemon
    pokedex_entry_card.body(poke_names[NUM_POKEMON]);
    //poke_image.image = poke_images[NUM_POKEMON];
  }
  //pokedex_entry_card.add(poke_image);
  console.log("changing screens");
  pokedex_entry_card.show();
  current_viewable_entry_index = entry_number;
}

catch_pokemon_card.on('click', 'down', function() {
  console.log('Catching a pokemon Click:');
  //UPDATE GPS COORDS
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
  waiting_for_catch_info.show();
  catch_pokemon_card.hide();
});

catch_pokemon_card.on('click', 'select', function(e){
  //Change the pokedex_card to the current viewable poke index if the pokemon has been found
  console.log('select Click');
  transition_to_pokedex_entry(current_viewable_entry_index);
  catch_pokemon_card.hide();
});

pokedex_entry_card.on('click', 'select', function(e){
  catch_pokemon_card.show();
  pokedex_entry_card.hide();
});

pokedex_entry_card.on('click', 'up', function(e){
  transition_to_pokedex_entry(current_viewable_entry_index-1);
});

pokedex_entry_card.on('click', 'down', function(e){
  transition_to_pokedex_entry(current_viewable_entry_index+1);
});

successful_pokemon_catch_card.on('click', 'down', function(e){
  transition_to_pokedex_entry(current_viewable_entry_index);
  successful_pokemon_catch_card.hide();
});

failed_pokemon_catch_card.on('click', 'down', function(e){
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
