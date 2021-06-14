$(document).ready(function(){
	sampleTable();
	tablePage();
	tableNavGrid();
	editTable();
	groupingData();
	getTime();
	cookieSsEna();
	
})
let cookieSsEna = () =>{
 let x = "Cookies enabled: " + navigator.cookieEnabled;
	console.log(x)

}
function onSignIn(googleUser) {
	
  var profile = googleUser.getBasicProfile();
  let goForm = document.querySelector('.g-signin2');
  let  userInfo = document.querySelector('#userinfo');
  goForm.classList.add('none')
  userInfo.classList.add('block')
  let objectName = {
  	"name":profile.getName(),
  	"id":profile.getId(),
  	"image":profile.getImageUrl(),
  	"email":profile.getEmail(),
  }
  let name = profile.getName();
   let id = profile.getId();
  	let image = profile.getImageUrl();
  	let email = profile.getEmail();\
  	document.querySelector('.name').innerHTML = name;
  let userin = JSON.stringify(objectName)
  localStorage.setItem('userInfo', userin)
	console.log(profile);
}

let getTime =() =>{
	let date = new Date().toLocaleString();
	$('#time').text(date);
}
setInterval(getTime, 1000);

let sampleTable =  () => {
		let sampleTable = $('#sample-table');
		sampleTable.jqGrid({
	        colModel: [
	        	{ name:"id", align:"center"},
	            { name: "firstName",  align:"center" },
	            { name: "lastName" , align:"center"}
	        ],
	        data: [
	            { id: 10, firstName: "Angela", lastName: "Merkel" },
	            { id: 20, firstName: "Vladimir", lastName: "Putin" },
	            { id: 30, firstName: "David", lastName: "Cameron" },
	            { id: 40, firstName: "Barack", lastName: "Obama" },
	            { id: 50, firstName: "François", lastName: "Hollande" },
	        ],
	        autowidth:true,
	        sortname:"firstName",
	        sortorder:"desc",
	        viewrecords:true


		})
}


let tablePage = () =>{
	let tPage = $('#table-wiPag');
	tPage.jqGrid({
		colNames:["S.No", "Name" , "Age", "Mobile Number"],
		colModel: [
			{name:"id", index:"id" , align:"center", sorttype:"Number"},
			{name:"name" , index:"name", align:"center"},
			{name:"age" , align:"center"},
			{name:"number", align:"center"}
		],
		data:[
			{id:1, name:"siva" , age:"26" , number:9542754248},
			{id:2, name:"siva" , age:"26" , number:9542754248},
			{id:2, name:"siva" , age:"26" , number:9542754248},
			{id:3, name:"siva" , age:"26" , number:9542754248},
			{id:4, name:"siva" , age:"26" , number:9542754248},
			{id:5, name:"siva" , age:"26" , number:9542754248},
			{id:6, name:"siva" , age:"26" , number:9542754248},
			{id:7, name:"siva" , age:"26" , number:9542754248},
			{id:8, name:"siva" , age:"26" , number:9542754248},
			{id:9, name:"siva" , age:"26" , number:9542754248},
			{id:10, name:"siva" , age:"26" , number:9542754248},
			{id:11, name:"siva" , age:"26" , number:9542754248},
			{id:12, name:"siva" , age:"26" , number:9542754248},
			{id:13, name:"siva" , age:"26" , number:9542754248},
			{id:14, name:"siva" , age:"26" , number:9542754248},
			{id:15, name:"siva" , age:"26" , number:9542754248},
			{id:16, name:"siva" , age:"26" , number:9542754248},
			{id:17, name:"siva" , age:"26" , number:9542754248},
			{id:18, name:"siva" , age:"26" , number:9542754248},
			{id:19, name:"siva" , age:"26" , number:9542754248}
		],
		autowidth:true,
		rowNum:10,
		rowList:[5,10,15,20],
		loadonce:true,
		viewrecords:true,
		pager:$('#pagination')
	})
}

let tableNavGrid = () =>{
	let navGrid = $('#table-navGrid');
	navGrid.jqGrid({
		colNames:["S.No", "Name" , "Age", "Mobile Number"],
		colModel: [
			{name:"id", index:"id" , align:"center", sorttype:"number", editable:true},
			{name:"name" , index:"name", align:"center" , editable:true},
			{name:"age" , align:"center", editable:true},
			{name:"number", align:"center", editable:true, sorttype:"number"}
		],
		data:[
			{id:1, name:"siva" , age:"26" , number:9542754248},
			{id:2, name:"siva" , age:"26" , number:9542754248},
			{id:2, name:"siva" , age:"26" , number:9542754248},
			{id:3, name:"siva" , age:"26" , number:9542754248},
			{id:4, name:"siva" , age:"26" , number:9542754248},
			{id:5, name:"siva" , age:"26" , number:9542754248},
			{id:6, name:"siva" , age:"26" , number:9542754248},
			{id:7, name:"siva" , age:"26" , number:9542754248},
			{id:8, name:"siva" , age:"26" , number:9542754248},
			{id:9, name:"siva" , age:"26" , number:9542754248},
			{id:10, name:"siva" , age:"26" , number:9542754248},
			{id:11, name:"siva" , age:"26" , number:9542754248},
			{id:12, name:"siva" , age:"26" , number:9542754248},
			{id:13, name:"siva" , age:"26" , number:9542754248},
			{id:14, name:"siva" , age:"26" , number:9542754248},
			{id:15, name:"siva" , age:"26" , number:9542754248},
			{id:16, name:"siva" , age:"26" , number:9542754248},
			{id:17, name:"siva" , age:"26" , number:9542754248},
			{id:18, name:"siva" , age:"26" , number:9542754248},
			{id:19, name:"siva" , age:"26" , number:9542754248}
		],
		autowidth:true,
		multiselect:true,
		rowNum:10,
		rowList:[5,10,15,20],
		viewrecords:false,
		pager:$('#navPa'),
		searching: {
            defaultSearch: "cn"
        },
	}).jqGrid("filterToolbar");
	navGrid.jqGrid('navGrid' , '#navPa' , {edit:true , add:true})
}

var personInfo = [
		{id:"12345",name:"Desktop Computer",note:"note",stock:"Yes",ship:"FedEx", sdate:"2007-12-03"},
		{id:"23456",name:"Laptop",note:"Long text ",stock:"Yes",ship:"InTime",sdate:"2007-12-03"},
		{id:"34567",name:"LCD Monitor",note:"note3",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
		{id:"45678",name:"Speakers",note:"note",stock:"No",ship:"ARAMEX",sdate:"2007-12-03"},
		{id:"56789",name:"Laser Printer",note:"note2",stock:"Yes",ship:"FedEx",sdate:"2007-12-03"},
		{id:"67890",name:"Play Station",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"},
		{id:"76543",name:"Mobile Telephone",note:"note",stock:"Yes",ship:"ARAMEX",sdate:"2007-12-03"},
		{id:"87654",name:"Server",note:"note2",stock:"Yes",ship:"TNT",sdate:"2007-12-03"},
		{id:"98765",name:"Matrix Printer",note:"note3",stock:"No", ship:"FedEx",sdate:"2007-12-03"}
		];
let lastselect;
let editTable = () =>{
	let editTb = $('#table-edit');
	editTb.jqGrid({
		datatyep:"local",
		colModel:[
			{name:"id", index:"id", editable:true,sorttype:"number"},
			{name:"name",index:"name", editable:true},
			{name:"sdate" , index:"sdate",editable:true, sorttype:'date'},
   			{name:'stock',index:'stock', width:60, editable: true,edittype:"checkbox",editoptions: {value:"Yes:No"}},
			{name:'ship',index:'ship',  editable: true,edittype:"select",editoptions:{value:"FE:FedEx;IN:InTime;TN:TNT;AR:ARAMEX"}},
	   		{name:'note',index:'note', sortable:false,editable: true,edittype:"textarea", editoptions:{rows:"2",cols:"10"}}
		],
		autowidth:true,
		pager:$('#editTable'),
		rowNum:10,
		rowList:[5,10,15,20],
		viewrecords:true,
		sortname:"id",
		sortorder:"desc",
		searching:{
			defaultSearch:"cn"
		},
		onSelectRow:function(id){
			if(id && id!== lastselect){
				editTb.jqGrid('restoreRow' , lastselect);
				editTb.jqGrid('editRow' , id , true);
				lastselect = id;
			}
		},
		


	})
	for(var i=0;i < personInfo.length;i++){
	editTb.jqGrid('addRowData',personInfo[i].name,personInfo[i]);

}
}

let groupingData = () => {
	$('#groupData').jqGrid({
		colNames:["S.No", "Name" , "Age", "Mobile Number"],
		colModel: [
			{name:"id", index:"id" , align:"center", sorttype:"Number", editable:true},
			{name:"name" , index:"name", align:"center",editable:true},
			{name:"age" , align:"center", editable:true},
			{name:"number", align:"center", editable:true}
		],
		data:[
			{id:1, name:"siva" , age:"26" , number:9542754248},
			{id:2, name:"siva" , age:"26" , number:9542754248},
			{id:2, name:"siva" , age:"26" , number:9542754248},
			{id:3, name:"siva" , age:"26" , number:9542754248},
			{id:4, name:"siva" , age:"26" , number:9542754248},
			{id:5, name:"siva" , age:"26" , number:9542754248},
			{id:6, name:"siva" , age:"26" , number:9542754248},
			{id:7, name:"siva" , age:"26" , number:9542754248},
			{id:8, name:"siva" , age:"26" , number:9542754248},
			{id:9, name:"siva" , age:"26" , number:9542754248},
			{id:10, name:"siva" , age:"26" , number:9542754248},
			{id:11, name:"siva" , age:"26" , number:9542754248},
			{id:12, name:"siva" , age:"26" , number:9542754248},
			{id:13, name:"siva" , age:"26" , number:9542754248},
			{id:14, name:"siva" , age:"26" , number:9542754248},
			{id:15, name:"siva" , age:"26" , number:9542754248},
			{id:16, name:"siva" , age:"26" , number:9542754248},
			{id:17, name:"siva" , age:"26" , number:9542754248},
			{id:18, name:"siva" , age:"26" , number:9542754248},
			{id:19, name:"siva" , age:"26" , number:9542754248}
		],
		autowidth:true,
		rowNum:10,
		rowList:[5,10,15,20],
		loadonce:true,
		viewrecords:true,
		pager:$('#groupPage'),
		grouping:true,
   		groupingView : {
   		groupField : ['name']
   	},
	})
	$('#groupData').jqGrid('navGrid')
}


