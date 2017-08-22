
print(activeProducingWells(VWells_Gas).size());
print(activeProducingWells(VWells_NoneGas).size());
print(activeProducingWells(DUWellC).size());
print(activeProducingWells(HWellC).size());

print(activeProducingWells(VWells_Gas).aggregate_sum('Well Count'));
print(activeProducingWells(VWells_NoneGas).aggregate_sum('Well Count'));
print(activeProducingWells(DUWellC).aggregate_sum('Well Count'));
print(activeProducingWells(HWellC).aggregate_sum('Well Count'));


print(VWells_Gas.aggregate_sum('Well Count'));
print(VWells_NoneGas.aggregate_sum('Well Count'));
print(DUWellC.aggregate_sum('Well Count'));
print(HWellC.aggregate_sum('Well Count'));


var imageTable = {
  cols: [{id: 'well', label: 'Well Type', type: 'string'},
         {id: 'active', label: 'Active Producing Wells', type: 'number'}, 
         ],
  rows:[]
};

for (var i=0; i<length; i++){
  var id = all_properties_client[i][0];
  var date = all_properties_client[i][1][0];
  var cloud = all_properties_client[i][1][1];
  addRow(date, id, cloud);
}


function addRow(Well_List_names, count){
  imageTable.rows.push({c: [ {v: id}, {v: cloud}]});
}


var data = new ui.Chart(imageTable, 'Table');
// data.addRows([
//   ['Work', 11],
//   ['Eat', 2],
//   ['Commute', 2],
//   ['Watch TV', 2],
//   ['Sleep', {v:7, f:'7.000'}]
// ]);
print(data);

