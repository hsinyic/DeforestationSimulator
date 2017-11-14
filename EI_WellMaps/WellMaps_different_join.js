/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var Well = ee.FeatureCollection("ft:1Rto8ImdBnuDcBNX-ApGkuSfZf7UetvXjjFPc6RAu"),
    geometry = /* color: #bf04c2 */ee.Geometry.Point([-95.93974113464355, 30.11038488561688]),
    shaleplay = ee.FeatureCollection("ft:1EIjMHaQqs6SGoIdocVDIQJfFQXVwVKr4tbOgpy6c");
/***** End of imports. If edited, may not auto-convert in the playground. *****/


// Color scheme 
var db= ('0000FF').toString();var lb= ('#11ffff').toString();var bl = ('#538dd6').toString();
var red=('ff510f').toString();var lr = ('#ff8f7d').toString();var gr= ('#4cff62').toString();
var lg = ('#afff14').toString();var dg= ('#196e0a').toString();var yellow=('#ffeb00').toString();
var whi=('#f7f7f7').toString();var black = ('#101010').toString();var pink = ('#ff50f1').toString();var orange = ('#ff9d24').toString();var lorange = ('#ffcc99').toString();
var lyellow = ('#fffcb0').toString();

shaleplay = shaleplay.union(); 
Map.addLayer(shaleplay, {'color':black}, "shale play boundaries", 1, 0.5); 



//select wells of certaint atrributes 
var H_post2000 = Well
.filter(ee.Filter.inList('Updated Production Type',  ['GAS', 'O&G', 'OIL']))
.filterMetadata('First Prod Date','greater_than', ee.Date('2000-01-01').millis())
.filterMetadata("Drill Type","equals","H"); 

var H_pre2000 = Well
.filter(ee.Filter.inList('Updated Production Type',  ['GAS', 'O&G', 'OIL']))
.filterMetadata('First Prod Date','less_than', ee.Date('2000-01-01').millis())
.filterMetadata("Drill Type","equals","H"); 

var U_post2000 = Well
.filter(ee.Filter.inList('Updated Production Type',  ['GAS', 'O&G', 'OIL']))
.filterMetadata('First Prod Date','greater_than', ee.Date('2000-01-01').millis())
.filterMetadata("Drill Type","equals","U");

var U_pre2000 = Well
.filter(ee.Filter.inList('Updated Production Type',  ['GAS', 'O&G', 'OIL']))
.filterMetadata('First Prod Date','less_than', ee.Date('2000-01-01').millis())
.filterMetadata("Drill Type","equals","U");

var D_wells = Well
.filter(ee.Filter.inList('Updated Production Type',  ['GAS', 'O&G', 'OIL']))
.filterMetadata("Drill Type","equals","D"); 

var V_wells = Well
.filter(ee.Filter.inList('Updated Production Type',  ['GAS', 'O&G', 'OIL']))
.filterMetadata("Drill Type","equals","V"); 

var Well_List = ee.List([D_wells,V_wells, H_post2000, H_pre2000,U_post2000, U_pre2000 ]); 
var Well_List_names = ee.List(["D_wells", "V_wells", 'H_post2000', 'H_pre2000','U_post2000', 'U_pre2000']);



var spatialFilter = ee.Filter.intersects({
  leftField: '.geo',
  rightField: '.geo',
  maxError: 10
});
var saveAllJoin = ee.Join.saveAll({
  matchesKey: 'intersected',
});

var play_bound = function(well_layer){
  well_layer = ee.FeatureCollection(well_layer);
  var intersectJoined = saveAllJoin.apply(well_layer ,shaleplay,  spatialFilter);
  // return(intersectJoined);
  return(intersectJoined.aggregate_sum('Well Count'));
};

var shale_wells = Well_List.map(play_bound);
print(Well_List_names.zip(shale_wells));


var intersectJoined = saveAllJoin.apply(H_post2000 ,shaleplay,  spatialFilter);
var intersected = ee.FeatureCollection(ee.List(intersectJoined.first().get('intersected')));

// 4787/26225 pre 2000 H Wells in plays 
// 94654/119710 post 2000 H wells in plays


