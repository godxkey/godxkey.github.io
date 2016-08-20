window.onload=function(){
	var game=document.getElementsByClassName("navR")[0];
	var PIC=document.getElementsByClassName("ContHid");
	var arrLi=game.children;
	game.children[0].className+=" firstP";
	PIC[0].className+=" ContBlo";
	// console.log(PIC.className);
	for(var i=0;i<arrLi.length;i++){
		// var arrLi[i]=i; 
		arrLi[i].index=i;
		arrLi[i].onclick=function(){
			for(var j=0;j<arrLi.length;j++){
				arrLi[j].className="";
				PIC[j].className="PicContent ContHid";
				this.className+=" firstP";
				PIC[this.index].className+=" ContBlo";
			}
			console.log(this.index);
		}
	};
	function changex(eve,num){
		var liBimgs=document.getElementsByClassName("PicContent")[eve];
		var liBimgsLi=liBimgs.children;
		for(var k=num;k<liBimgsLi.length;k++){
			if(k>10){k=2;k++;return k;}else{
				liBimgsLi[k].style.backgroundImage="url(images/"+k+".jpg)";
			}
			// console.log(liBimgsLi[k]);
		}
		return liBimgsLi;
	};	
	changex(0,3);	changex(1,4);
	changex(2,5);	changex(3,7);
	changex(4,6);	changex(5,4);	changex(6,2);
	var mtk=document.getElementById("motaikuang"); 
	var liBimgs=document.getElementsByClassName("PicContent");
	for(var m=0;m<liBimgs.length;m++){
		var liARRs=liBimgs[m].children;
		for(var n=0;n<liARRs.length;n++){
			liARRs[n].onclick=function(){
				mtk.style.display="block";
			}
		}
	}
	mtk.onclick=function(){mtk.style.display="none";};
}	