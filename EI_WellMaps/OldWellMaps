/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var HWellT = ee.FeatureCollection("ft:1eVBd9BT8qe323aQqH0JA-U2j9yrqdqam9-luyMta"),
    HWellC = ee.FeatureCollection("ft:1JhvbiO9hDtNHLtBmHzs2b7mODicCGb4F7bLY0qmv"),
    DUWellC_1 = ee.FeatureCollection("ft:1B-3gfn2JEqLKRMLGwKti5Hmv2LUf1Q3ghupuyfHB"),
    VWell_Gas_1 = ee.FeatureCollection("ft:14EKqC1GVO6yY9qbEYpl1nrv_qA57462zZ1FI26Yz"),
    VWell_NoneGas_2 = ee.FeatureCollection("ft:1dpypL_m1LZOjEy1oI8pBohWAp3DJ522u9QdtiDdo"),
    VWell_NoneGas_1 = ee.FeatureCollection("ft:1P9YdVRHK0_ZoCGPaGVDkr1XLKji6IrmY94rH5Rpg"),
    DUWellC_2 = ee.FeatureCollection("ft:1dX2r52HYfT22lCmA3JwTuDVy6rp4cJi2RgLLJJ-I"),
    VWell_Gas_2 = ee.FeatureCollection("ft:1hnvKAkx7Tu4NrMdD7wuDlpP10MTz2H7JFTVPagwb"),
    geometry = /* color: #bf04c2 */ee.Geometry.Point([-98.57645988464355, 38.241146330442525]),
    Active_all = ee.FeatureCollection("ft:1Rto8ImdBnuDcBNX-ApGkuSfZf7UetvXjjFPc6RAu");
/***** End of imports. If edited, may not auto-convert in the playground. *****/


// Color scheme 
var db= ('0000FF').toString();
var lb= ('#11ffff').toString();
var bl = ('#538dd6').toString();
var red=('ff510f').toString();
var lr = ('#ff8f7d').toString();
var gr= ('#4cff62').toString();
var lg = ('#afff14').toString();
var dg= ('#196e0a').toString();
var yellow=('#ffeb00').toString();
var whi=('#f7f7f7').toString();
var black = ('#101010').toString();
var pink = ('#ff50f1').toString();
var orange = ('#ff9d24').toString();
var lorange = ('#ffcc99').toString();
var lyellow = ('#fffcb0').toString();

var activeProducingWells = function(fc) {
  fc = ee.FeatureCollection(fc);
  var output = fc
.filter(ee.Filter.inList('Producing Status', ['ACTIVE']))
// .filter(ee.Filter.inList('Entity Type', ['WELL', 'COM']))
.filter(ee.Filter.inList('Production Type',  ['GAS', 'O&G', 'OIL', 'CBM']));
  return output;
};


var entry_count = function(fc){
  fc = ee.FeatureCollection(fc);
  var output = fc.size();
  return ee.Number(output);
};

var well_count = function(fc){
  fc = ee.FeatureCollection(fc);
  var output = fc.aggregate_sum('Well Count');
  return ee.Number(output);
};

var VWell_Gas = VWell_Gas_1.merge(VWell_Gas_2); // print(VWell_Gas.size());print(VWell_Gas_1.size());print(VWell_Gas_2.size());// Merging didnt create problems 
var VWell_NoneGas = VWell_NoneGas_1.merge(VWell_NoneGas_2);
var DUWellC = DUWellC_1.merge(DUWellC_2);

var Well_List_names = ee.List(['VWell_Gas', "VWell_NoneGas", "DUWellC", "HWellC"]);
var Well_List = ee.List([VWell_Gas, VWell_NoneGas, DUWellC, HWellC]);
var Well_List_active = Well_List.map(activeProducingWells);

var count = Well_List.map(well_count);
var count_active = Well_List_active.map(well_count);
print('Total well count unfiltered'); print(Well_List_names.zip(count));
print('Total active producign well count'); print(Well_List_names.zip(count_active)); 



// Map.addLayer(VWell_Gas,  {'color':lb}, "VWell_Gas");
// Map.addLayer(VWell_NoneGas,  {'color':pink}, "VWell_NoneGas");
// Map.addLayer(HWellC,  {'color':lorange}, "HWellC");
// Map.addLayer(DUWellC,  {'color':lyellow}, "DUWellC");
// Map.addLayer(activeProducingWells(VWell_Gas), {'color':db}, "VWell_Gas_active");
// Map.addLayer(activeProducingWells(VWell_NoneGas),  {'color':red}, "VWell_NoneGas_active");
// Map.addLayer(activeProducingWells(HWellC),  {'color':orange}, "HWellC_active");
// Map.addLayer(activeProducingWells(DUWellC), {'color':yellow}, "DUWellC_active");

///////
//  HWellT includes HWellC >> HWellT is projection of Horitzontal Wells into to the future  
//////

/*Map.addLayer(HWellT.filterMetadata("Production Type","equals","GAS"), 
{'color':pink}, "HorizontalTrajectory GAS wells");
Map.addLayer(HWellT.filterMetadata("Production Type","not_equals","GAS"),
{'color':gr}, "HorizontalTrajectory OIL wells");


Map.addLayer(HWellC.filterMetadata("Production Type","equals","GAS")
, {'color':db}, "HWell_Completion2013 GAS wells");
Map.addLayer(HWellC.filterMetadata("Production Type","not_equals","GAS")
, {'color':black}, "HWell_Completion2013 OIL wells");
*/


//////
// Set map center 
//////

Map.centerObject(geometry, 10);

Map.addLayer(Active_all.filterMetadata("Updated Production Type","equals","GAS")
.filterMetadata("Drill Type","equals","H"), 
{'color':pink}, "Horizontal GAS wells"); 

Map.addLayer(Active_all.filterMetadata("Updated Production Type","equals","GAS")
.filterMetadata("Drill Type","equals","D"), 
{'color':black}, "Directional GAS wells"); 
