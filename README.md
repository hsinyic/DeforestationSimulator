# DeforestationSimulator
Backend algorithm development for spatial simulation of deforestation / oil and gas extraction mapping based on entirely on Google Earth Engine JavaScript library. Computation is optimized to avoid local computation. 


# Methodology for deforestation simulation 
1. triangulation -- combining 5 year deforestation pattern with annual deforestation map from Hansen et al  
2. smoothing initial data 
3. speckle filtering   

# Methodology for oil and gas extraction mapping 
1. filter and display by drill date, 
2. spatial overlap analysis 
3. plot of average well depth vs distance from shale gas and tight oil plays to determine the transition away from horizontal fracked wells to vertical wells 

# To Do 
1. merge remote sensing validation scripts from another account 
