window.onload=function(){
	var bodys=document.body,nUm=num=0;
	bodys.style.position="relative"; 
	var intros=document.getElementsByTagName('img'); 
	var selfIntros=document.getElementById('xp'); 
	var SelfInfo=document.getElementById('selfInfo'); 
	console.log('%chi 欢迎光临肖平的展示项目页面','background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
	for (var i = intros.length - 1; i >= 0; i--) {
		intros[i].index=i;
		intros[i].onclick=function(){
			if(num%2===0){
				intros[this.index].style.position="absolute";
				intros[this.index].style.width="100%";
				intros[this.index].style.top="0";
				intros[this.index].style.left="0";
				intros[this.index].style.zIndex="22";
				intros[this.index].style.transform="rotateX(0deg)";
				intros[this.index].style.boxShadow="0 0 8px 6px rgba(0, 0, 0, 0.2), 0 0 8px 12px rgba(0, 0, 0, 0.2),0 0 8px 24px rgba(0, 0, 0, 0.2)";
				num++;
			}else{ 
				this.style.position="relative";
				this.style.width="80%";
				this.style.zIndex="0";
				this.style.float="left";
				this.style.transform="rotateY(-360deg)";
				num++;
			};
		};  
	};  
	SelfInfo.onclick=function(){mySelf();};
	function mySelf(){
		if(nUm%2===0){
			selfIntros.style.position="fixed";
			selfIntros.style.backgroundColor="rgba(255,255,255,1)";
			selfIntros.style.width="100%";
			selfIntros.style.height="100%";
			selfIntros.style.left="20%";
			selfIntros.style.paddingLeft="5%";
			selfIntros.style.fontSize="1.7rem";
			selfIntros.style.top="0";nUm++; 
		}else{
			selfIntros.style.position="relative";
			selfIntros.style.left="";
			selfIntros.style.paddingLeft="";
			selfIntros.style.backgroundColor="rgba(255,255,255,1)"; nUm++;
		}	
	};
	selfIntros.onmousedown=function(){mySelf();};
}
