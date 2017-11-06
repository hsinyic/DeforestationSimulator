/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var HWellT = ee.FeatureCollection("ft:1eVBd9BT8qe323aQqH0JA-U2j9yrqdqam9-luyMta"),
    HWellC = ee.FeatureCollection("ft:1JhvbiO9hDtNHLtBmHzs2b7mODicCGb4F7bLY0qmv"),
    DUWellC_1 = ee.FeatureCollection("ft:1B-3gfn2JEqLKRMLGwKti5Hmv2LUf1Q3ghupuyfHB"),
    VWells_Gas_LastProd_2011_1 = ee.FeatureCollection("ft:14EKqC1GVO6yY9qbEYpl1nrv_qA57462zZ1FI26Yz"),
    VWells_Gas_Completion_2013_2 = ee.FeatureCollection("ft:1dpypL_m1LZOjEy1oI8pBohWAp3DJ522u9QdtiDdo"),
    VWells_Gas_Completion_2013_1 = ee.FeatureCollection("ft:1P9YdVRHK0_ZoCGPaGVDkr1XLKji6IrmY94rH5Rpg"),
    DUWellC_2 = ee.FeatureCollection("ft:1dX2r52HYfT22lCmA3JwTuDVy6rp4cJi2RgLLJJ-I"),
    VWells_Gas_LastProd_2011_2 = ee.FeatureCollection("ft:1hnvKAkx7Tu4NrMdD7wuDlpP10MTz2H7JFTVPagwb");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var db= ('0000FF').toString();
var lb= ('#11ffff').toString();
var bl = ('#538dd6').toString();
var red=('ff510f').toString();
var lr = ('#ff8f7d').toString();
var gr= ('#4cff62').toString();
var lg = ('#afff14').toString();
var dg= ('#196e0a').toString();
var yellow=('#fff832').toString();
var whi=('#f7f7f7').toString();
var black = ('#101010').toString();
var pink = ('#ff50f1').toString();




var DUWellC = DUWellC_1.merge(DUWellC_2);
// Map.addLayer(DUWellC, {'color':gr}, "Merged");
Map.addLayer(DUWellC.filterMetadata("Production Type","not_equals","GAS"), 
{'color':gr}, "Merged_Gas");
Map.addLayer(DUWellC.filterMetadata("Production Type","not_equals","OIL"), 
{'color':bl}, "Merged_Oil");

var DUWellC_check1 = DUWellC_1;
Map.addLayer(DUWellC_check1.filterMetadata("Production Type","not_equals","GAS"), 
{'color':dg}, "1_gas");
Map.addLayer(DUWellC_check1.filterMetadata("Production Type","not_equals","OIL"), 
{'color':db}, "1_oil");


var DUWellC_check2 = DUWellC_2;

Map.addLayer(DUWellC_check2.filterMetadata("Production Type","not_equals","GAS"), 
{'color':lg}, "2_gas");
Map.addLayer(DUWellC_check2.filterMetadata("Production Type","not_equals","OIL"), 
{'color':lb}, "2_oil");