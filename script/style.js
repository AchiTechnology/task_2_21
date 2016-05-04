/*js文件*/

/*window.onload=function(){
	var aqiData=[];

	var inputTag=document.getElementById("inputTag");
	var hobby=document.getElementById("hobby");
	for(var i=0;i<aqiData.length;i++){
		var li=document.createElement("li");
		li.appendChild(aqiData[i]);
		li.appendChild(li);
		
	}


}*/
//事件绑定函数，兼容浏览器差异
function addEvent(element,event,listener){
	try{
		element.addEventListener(event,listener,false);

	}
	catch(e){
		try{
			element.attachEvent("on"+event,listener);
		}
		catch(e){
			element["on"+event]=listener;
		}
	}
}

//遍历数组发方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr,fn){
	for(var i=0;i<arr.length;i++){
		fn(arr[i],i)
	}
}


//将输入的内容分割为数组
function splitInput(text){
	var inputArray=[];
	inputArray=(text).split(/[,，;；、\s\n]+/);
	return inputArray;
}

function trim(str){
	var regex1=/^\s*/;
	var regex2=/\s*$/;
	return(str.replace(regex1,"")).replace(regex2,"");
}

function Queue(container,isDelDiv){
	this.str=[];

	this.leftPush=function(obj){
		if(obj.length){
			this.str.unshift(obj);
			this.paint();
		}
	};

	this.rightPush=function(obj){
		if(obj.length){
			this.str.push(obj);
			this.paint();
		}
	};

	this.isEmpth=function(){
		return (this.str.length==0);
	}

	this.leftPop=function(){
		if(!this.isEmpth()){
			this.str.shift();
			this.paint();

		}else{
			alert("The queue is already empty!")
		}
	};

	this.rightPop=function(){
		if(!this.isEmpth()){
			this.str.pop();
			this.paint();
		}else{
			alert("The queue is already empty!")
		}
	};

	this.paint=function(){
		var str="";
		
	}

}




























