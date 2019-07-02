window.onload = function() {
var rsr = Raphael('map', '850', '460');

var regions = [];


var attr = {

fill: '#D8D8D8',

stroke: '#005a98',

'stroke-width': 0,

'stroke-linejoin': 'round'

};


// Region 1
var region1 = rsr.path('M488.5,125.6h-27c-1.5,0-3.4,1.5-4.2,2.7l-7.8,11.9c-0.8,1.2-1.5,3.6-1.8,5c-1.3,6.8-8.1,24.3-42.8,24.3c-43.2,0-39.4-64.2-38-78.2c0.1-1.5-0.4-3.6-1.3-4.8l-29.1-39.8c-0.9-1.2-2.8-3.2-4.3-3.2H316c-1.5,0-3.5,0.1-4.4-1.1L293.4,20c-0.9-1.2-2.9-1.9-4.4-1.9h-21.6c-1.5,0-4.2,1.9-4.2,3.4v5.4c0,1.5,0.3,1.5-1.2,1.5h-16.2c-1.5,0-3.6-0.1-4.8-1.1l-22.7-18c-1.2-0.9-3.3-1.4-4.8-1.4h-27c-1.5,0-2.4,1.2-2,2.7l14.8,55.1c0.4,1.4-0.5,3.6-2,3.6h-10.8c-1.5,0-1.8-0.1-0.8,0.9l17.8,17.3c1.1,1.1,2.5,2.4,3.3,3.7l29.6,49.3c0.8,1.3,2.5,1.8,3.8,1.1l6-3c1.3-0.7,2-2.3,1.4-3.7l-35.7-87.7c-0.6-1.4,0.2-3.5,1.7-3.5h5.4c1.5,0,3.4,2,4.2,3.3l50.9,76.9c0.8,1.2,1.8,3.7,2.2,5.1l9.3,32.7c0.4,1.4,1.7,3.3,2.9,4.2l49.5,34.7c1.2,0.9,3.4,1.3,4.8,1l48-10c1.5-0.3,3.7,0.1,5,0.8l23,13.8c1.3,0.8,3.2,0.5,4.2-0.5l7-6.7c1.1-1,3.1-1.6,4.6-1.6h16.2c1.5,0,2.2-1.4,1.5-2.7l-3-6.1c-0.7-1.3-0.4-3.3,0.7-4.4l33.9-34c1.1-1.1,2.2-3.1,2.6-4.5l4.1-16.8C490.9,127.3,490,125.6,488.5,125.6z');
region1.attr(attr).data({'id': 'region1', 'region': '1',   'title' :'ESTADOS', 'estados' :'Baja California Norte y Baja California Sur.'});
regions.push(region1);


var region2 = rsr.path('M469.4,195.5l2.5-27.8h-3.6L451,184.9c-0.6,0.6-0.9,1.9-0.4,2.8l2.9,5.9c0.6,1,0.6,2.3,0,3.2c-0.6,0.9-1.4,1.3-2.6,1.3h-15.7c-1.2,0-2.8,0.4-3.5,1.2l-6.7,6.4c-0.4,0.4-0.9,0.7-1.4,0.9c1.7,1.7,3.9,3.5,6.5,5.4c0,0,4.5,10,23.9,11l11.9-11v-7.5l13.9-9C479.9,195.5,484.3,191,469.4,195.5z');
region2.attr(attr).data({'id': 'region2', 'region': '2',   'title' :'ESTADOS', 'estados' :'Sinaloa y Sonora.'});
regions.push(region2);


var region3 = rsr.path('M492.3,218.2c0,0-7.2,5.2-11.2,0c0,0-7.1-6.2-13.9-9.9v3.5c0,0.1-0.1,0.3-0.1,0.4l-11.9,11c-0.1,0.1-0.3,0.1-0.4,0.1l0,0h-0.1c6.1,3.6,17.4,9.3,33.3,12.8l7.2-2.6l5.5-7.8C500.6,225.8,498.6,217.5,492.3,218.2z');
region3.attr(attr).data({'id': 'region3', 'region': '3',   'title' :'ESTADOS', 'estados' :'Chihuahua y Durango.'});
regions.push(region3);


var region4 = rsr.path('M533.6,207.4c-1.7-1.7-3.2-3.8-5.1-5.4c-1.3-1-2.6-1.7-3.9-2l0.1-0.9c-2.2-3.9-4.3-7.8-6.7-11.6c-0.3-0.6-7.8,0-8.8,0c-3.6,0-7.5-0.9-11.2-0.3c-4.1,0.6-7.7,2.9-11,4.9c-6.8,4.2-13.6,8.6-20.4,12.8c0,0.7,0,1.4,0,2.2c5.1,2.5,9.9,5.7,14.1,9.3c1.3,1.2,2.6,2.3,4.2,2.6c2,0.3,3.8-0.9,5.7-1.6c5.1-2,8.8,3,10.3,7.4c2.6-0.3,5.1-0.6,7.7-0.7c3-0.3,6.2-0.3,9.3-1c3.3-0.9,5.9-2.8,9-4.3c2.9-1.4,5.9-2.5,8.8-3.9c0.9-0.4,3.5-1.6,3.3-2.6C539.1,210.1,534.9,208.7,533.6,207.4z');
region4.attr(attr).data({'id': 'region4', 'region': '4',  'title' :'ESTADOS', 'estados' :'Coahuila, Nuevo León y Tamaulipas.'});
regions.push(region4);


var region5 = rsr.path('M487.7,237.1l8.1-2.8l6.1-8.4c0,0,4.9-0.6,18-2.5c0,0,7.7-3.8,10.9-4.9c0,0,7.7-4.2,8.6-4.8c0,0,7.2,8.1,6.2,11.7c-1,3.6-2.9,2.9-2.9,2.9l-3.3,23.9l-2.6,18.4c0,0-1,5.2-14.8-3.6c0,0-5.5-8.8-9.1-6.8c-3.6,2-9.6-2.3-9.6-2.3L487.7,237.1z');
region5.attr(attr).data({'id': 'region5', 'region': '5',  'title' :'ESTADOS', 'estados' :'Colima, Jalisco, Michoacán y Nayarit.'});
regions.push(region5);



var region6 = rsr.path('M573.9,286.7c-5.8-3.3-10.4-8.4-13.3-14.3c-0.9-1.9-1.7-3.9-3.6-4.8c-2.3-1-5.1,0.6-7.7,0.4c-4.1-0.3-7.5-2.2-10.7-4.5l-1.2,7.7c0,0.1-0.3,1.2-1.6,1.7c-0.6,0.3-1.2,0.3-1.9,0.3c-2.8,0-7-1.7-12.3-5.2l-0.1-0.1l-0.1-0.1c-1.3-2.2-5.8-8-8.3-6.7c-0.6,0.3-1.3,0.6-2,0.6c-0.3,2.3,0.1,4.8,0.9,7.1c1.4,4.1,3.8,8,3.5,12.3c2,0.1,4.2,0.3,6.1-0.6s3.5-2.8,3-4.8c2.9-0.4,5.7,1.9,7.1,4.5c1.6,2.6,2.5,5.5,4.3,7.7c4.2,4.8,12,5.4,15.4,10.7c1.4,2.3,1.7,5.1,2.9,7.4c2,3.8,6.8,6.1,10.9,4.9c4.2-1.2,7-6.1,5.7-10.1c-0.6-1.9-2-3.6-2.3-5.5C568.1,291.7,571.2,288.8,573.9,286.7z');
region6.attr(attr).data({'id': 'region6', 'region': '6',  'title' :'ESTADOS', 'estados' :'Aguascalientes, Guanajuato, Querétaro, San Luis Potosí y Zacatecas.'});
regions.push(region6);

 

var region7 = rsr.path('M674.7,296.7c-4.9,1-10.1,1.2-15.1,0.7c-2-0.1-4.2-0.6-5.8-1.9c-1.4-1.2-2.2-3-3.3-4.6c-3-4.1-8.6-4.9-13.6-5.4c-4.6-0.6-9.4-1-14.1-0.1c-9.6,1.7-17.4,9.3-27.1,10.3c-5.5,0.6-11.2-1-15.5-4.5c-1.7-1.4-3.5-3.2-5.1-4.3l-0.4,0.3c-2.8,2.2-5.5,4.9-5.1,8c0.1,1,0.6,2,1.2,3c0.4,0.7,0.7,1.4,1,2.3c0.4,1.4,0.4,3,0,4.6c5.7,1.7,12.2,1.4,16.5,5.5c2.6,2.5,5.8,6.5,8.6,4.3c1.2,3.3,2.8,6.5,4.8,9.3c2.6-1.9,6.1-1.6,9.1-2.6c3-0.9,5.8-4.8,3.6-7.1c-1.9-2-5.8-1-7.4-3.2c2.8-8.3,11.6-14.2,20.3-13.3c8.7,0.9,16.4,8.3,17.4,17c0.3,2,0.1,4.2,1,6.1c1.6,3.5,6.1,4.8,9.9,4.1c3.8-0.9,6.8-3.3,9.7-5.8c3.3-2.9,6.5-6.1,8.6-10.1C676.4,305.5,676.8,300.4,674.7,296.7z');
region7.attr(attr).data({'id': 'region7', 'region': '7',  'title' :'ESTADOS', 'estados' :'Guerrero, Oaxaca, Puebla, Tlaxcala y Veracruz..'});
regions.push(region7);

var region8 = rsr.path('M747.7,389.4c7.4-0.3,14.6-0.7,22-1c2.2-4.2-7-6.5-6.7-11.2c0.1-1.6,1.3-2.9,1.9-4.3c0.7-1.9,0.6-3.9,0.4-5.8c-0.7-7.4-1.4-14.8-2.2-22.3c-6.5-3.5-14.9-0.6-21.6-3.9c-3-1.6-5.5-4.3-8.6-5.9c-7-3.8-17.2-1.6-22.2-7.8c-2.5-3-2.8-7.2-3.5-11c-0.9-3.8-2.9-8-6.8-8.7c3.6-10.3,7.8-21.5,17.1-27.1c3.8-2.3,8.8-4.2,9.7-8.6c-11.2-0.4-18.4,11.9-29.1,15.1c-4.3,1.3-9.1,1-13.6,2.2c-3.9,1-7.8,3.6-8.7,7.4c1.9,3.8,1.6,8.6-0.6,12.9c-2,4.1-5.4,7.4-8.7,10.3c-2.8,2.5-6.1,5.1-10,5.9c-0.7,0.1-1.4,0.3-2.3,0.3c-1,0-1.9-0.1-2.9-0.4l-0.1,0.1c-2.9,3.8-1,9.1,1.2,13.3c2.3,4.2,4.9,8.7,3.6,13.3c-0.6,1.7-1.6,3.3-2.2,5.1c-2.5,7.4,4.6,16.4,0.4,22.9c-2.2,3.3-6.4,4.5-10,6.1c-3.6,1.6-7.5,4.8-7,8.7c7.4,1.6,14.3,5.5,19.4,11.3c1,1.2,2,2.3,3.3,3c1.7,0.9,3.9,0.7,5.9,0.7c11.2,0.3,20.4,8,28.8,15.4c1.4,1.2,2.8,2.5,3.8,4.1c0.6,1,1,2.2,1.6,3.2c3.3,5.9,11.6,6.5,18.4,6.4c1.2,0,2.3,0,3.5-0.1c2.8,0,5.7-0.1,8.3,0.9c2.6,1,4.9,3.2,5.2,5.9c0.4,4.8-5.2,9.6-2.8,13.6c1.6,1.4,4.5,0.6,5.8-1.2c1.3-1.7,1.6-4.1,1.9-6.4c0.4-4.9,1-10,1.4-14.9c0.7-7.2,1.4-14.9-1.3-21.7c-1.4-3.8-3.8-8.7-0.7-11.3c2.3-1.9,5.7-0.7,8.4,0.4c-0.4-4.8-9.1-5.8-8.6-10.6C740.6,390.5,744.7,389.6,747.7,389.4z');
region8.attr(attr).data({'id': 'region8', 'region': '8',  'title' :'ESTADOS', 'estados' :'Campeche, Chiapas, Quintana Roo, Tabasco y Yucatán.'});
regions.push(region8);




// Iterate through the regions & change Yorkshire's fill colour to gold
for (var i = 0; i < regions.length; i++) {

	// Change Yorkshire's fill colour to gold
    //if (regions[i].data('id') == 'region1') {
    //	regions[i].node.setAttribute('fill', '#005a98');

    

    //}

    regions[i].mouseover(function(e){
		this.node.setAttribute('fill', '#D8D8D8');
		this.node.style.cursor= 'col-resiz';
		document.getElementById('title').innerHTML = this.data('title');
		document.getElementById('region-name').innerHTML = this.data('region');
		document.getElementById('estados-name').innerHTML = this.data('estados');
	
	});

	regions[i].mouseout(function(e){
		this.node.setAttribute('fill', '#D8D8D8');
	});
}

$('#r1').mouseover(function(e){
	region1.node.setAttribute('fill', '#005a98');
});
$('#r1').mouseout(function(){
	region1.node.setAttribute('fill', '#7FC4FD');
});

$('#r2').mouseover(function(e){
	region2.node.setAttribute('fill', '#005a98');
});
$('#r2').mouseout(function(){
	region2.node.setAttribute('fill', '#7FC4FD');
});

$('#r3').mouseover(function(e){
	region3.node.setAttribute('fill', '#005a98');
});
$('#r3').mouseout(function(){
	region3.node.setAttribute('fill', '#7FC4FD');
});

$('#r4').mouseover(function(e){
	region6.node.setAttribute('fill', '#005a98');
});
$('#r4').mouseout(function(){
	region6.node.setAttribute('fill', '#7FC4FD');
});


$('#r5').mouseover(function(e){
	region8.node.setAttribute('fill', '#005a98');
});
$('#r5').mouseout(function(){
	region8.node.setAttribute('fill', '#7FC4FD');
});

};

