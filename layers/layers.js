ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ResumptionCap370_1 = new ol.format.GeoJSON();
var features_ResumptionCap370_1 = format_ResumptionCap370_1.readFeatures(json_ResumptionCap370_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_ResumptionCap370_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumptionCap370_1.addFeatures(features_ResumptionCap370_1);
var lyr_ResumptionCap370_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResumptionCap370_1, 
                style: style_ResumptionCap370_1,
                interactive: true,
                title: '<img src="styles/legend/ResumptionCap370_1.png" /> Resumption Cap 370'
            });
var format_ResumptionCap124_2 = new ol.format.GeoJSON();
var features_ResumptionCap124_2 = format_ResumptionCap124_2.readFeatures(json_ResumptionCap124_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_ResumptionCap124_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResumptionCap124_2.addFeatures(features_ResumptionCap124_2);
var lyr_ResumptionCap124_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResumptionCap124_2, 
                style: style_ResumptionCap124_2,
                interactive: true,
                title: '<img src="styles/legend/ResumptionCap124_2.png" /> Resumption Cap 124'
            });
var format_Cat2_3 = new ol.format.GeoJSON();
var features_Cat2_3 = format_Cat2_3.readFeatures(json_Cat2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_Cat2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cat2_3.addFeatures(features_Cat2_3);
var lyr_Cat2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cat2_3, 
                style: style_Cat2_3,
                interactive: true,
                title: '<img src="styles/legend/Cat2_3.png" /> Cat2'
            });
var format_Cat1_4 = new ol.format.GeoJSON();
var features_Cat1_4 = format_Cat1_4.readFeatures(json_Cat1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_Cat1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cat1_4.addFeatures(features_Cat1_4);
var lyr_Cat1_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cat1_4, 
                style: style_Cat1_4,
                interactive: true,
                title: '<img src="styles/legend/Cat1_4.png" /> Cat1'
            });
var format_LotTM_5 = new ol.format.GeoJSON();
var features_LotTM_5 = format_LotTM_5.readFeatures(json_LotTM_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_LotTM_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotTM_5.addFeatures(features_LotTM_5);
var lyr_LotTM_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LotTM_5, 
                style: style_LotTM_5,
                interactive: true,
                title: '<img src="styles/legend/LotTM_5.png" /> Lot TM'
            });
var format_2020Lots_6 = new ol.format.GeoJSON();
var features_2020Lots_6 = format_2020Lots_6.readFeatures(json_2020Lots_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_2020Lots_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020Lots_6.addFeatures(features_2020Lots_6);
var lyr_2020Lots_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2020Lots_6, 
                style: style_2020Lots_6,
                interactive: true,
                title: '<img src="styles/legend/2020Lots_6.png" /> 2020 Lots'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ResumptionCap370_1.setVisible(true);lyr_ResumptionCap124_2.setVisible(true);lyr_Cat2_3.setVisible(true);lyr_Cat1_4.setVisible(true);lyr_LotTM_5.setVisible(true);lyr_2020Lots_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ResumptionCap370_1,lyr_ResumptionCap124_2,lyr_Cat2_3,lyr_Cat1_4,lyr_LotTM_5,lyr_2020Lots_6];
lyr_ResumptionCap370_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Publication_Date': 'Publication_Date', 'Project_Title': 'Project_Title', 'Type_of_Government_Notice': 'Type_of_Government_Notice', 'Government_Notice': 'Government_Notice', 'Related_Gazette_Plan__Note_': 'Related_Gazette_Plan__Note_', 'Type': 'Type', 'FeatureID': 'FeatureID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ResumptionCap124_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Publication_Date': 'Publication_Date', 'Project_Title': 'Project_Title', 'Type_of_Government_Notice': 'Type_of_Government_Notice', 'Government_Notice': 'Government_Notice', 'Related_Gazette_Plan__Note_': 'Related_Gazette_Plan__Note_', 'Type': 'Type', 'FeatureID': 'FeatureID', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Cat2_3.set('fieldAliases', {'fid': 'fid', 'CATEGORY': 'CATEGORY', 'LABEL_ENG': 'LABEL_ENG', 'LABEL_CHI': 'LABEL_CHI', 'PLAN_NO': 'PLAN_NO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Cat1_4.set('fieldAliases', {'fid': 'fid', 'CATEGORY': 'CATEGORY', 'LABEL_ENG': 'LABEL_ENG', 'LABEL_CHI': 'LABEL_CHI', 'PLAN_NO': 'PLAN_NO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LotTM_5.set('fieldAliases', {'Labeltest': 'Labeltest', 'ENGLOTDESC': 'ENGLOTDESC', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Area': 'Shape_Area', });
lyr_2020Lots_6.set('fieldAliases', {'Lot': 'Lot', 'Area': 'Area', });
lyr_ResumptionCap370_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Publication_Date': 'TextEdit', 'Project_Title': 'TextEdit', 'Type_of_Government_Notice': 'TextEdit', 'Government_Notice': 'TextEdit', 'Related_Gazette_Plan__Note_': 'TextEdit', 'Type': 'TextEdit', 'FeatureID': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ResumptionCap124_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Publication_Date': 'TextEdit', 'Project_Title': 'TextEdit', 'Type_of_Government_Notice': 'TextEdit', 'Government_Notice': 'TextEdit', 'Related_Gazette_Plan__Note_': 'TextEdit', 'Type': 'TextEdit', 'FeatureID': 'Range', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Cat2_3.set('fieldImages', {'fid': 'TextEdit', 'CATEGORY': 'TextEdit', 'LABEL_ENG': 'TextEdit', 'LABEL_CHI': 'TextEdit', 'PLAN_NO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Cat1_4.set('fieldImages', {'fid': 'TextEdit', 'CATEGORY': 'TextEdit', 'LABEL_ENG': 'TextEdit', 'LABEL_CHI': 'TextEdit', 'PLAN_NO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_LotTM_5.set('fieldImages', {'Labeltest': 'TextEdit', 'ENGLOTDESC': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_2020Lots_6.set('fieldImages', {'Lot': 'TextEdit', 'Area': 'Range', });
lyr_ResumptionCap370_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Publication_Date': 'no label', 'Project_Title': 'no label', 'Type_of_Government_Notice': 'no label', 'Government_Notice': 'no label', 'Related_Gazette_Plan__Note_': 'no label', 'Type': 'no label', 'FeatureID': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_ResumptionCap124_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Publication_Date': 'no label', 'Project_Title': 'header label', 'Type_of_Government_Notice': 'no label', 'Government_Notice': 'no label', 'Related_Gazette_Plan__Note_': 'no label', 'Type': 'no label', 'FeatureID': 'no label', 'SHAPE_Length': 'header label', 'SHAPE_Area': 'header label', });
lyr_Cat2_3.set('fieldLabels', {'fid': 'no label', 'CATEGORY': 'no label', 'LABEL_ENG': 'no label', 'LABEL_CHI': 'no label', 'PLAN_NO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Cat1_4.set('fieldLabels', {'fid': 'inline label', 'CATEGORY': 'no label', 'LABEL_ENG': 'header label', 'LABEL_CHI': 'no label', 'PLAN_NO': 'no label', 'SHAPE_Leng': 'header label', 'SHAPE_Area': 'no label', });
lyr_LotTM_5.set('fieldLabels', {'Labeltest': 'no label', 'ENGLOTDESC': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_2020Lots_6.set('fieldLabels', {'Lot': 'no label', 'Area': 'no label', });
lyr_2020Lots_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});