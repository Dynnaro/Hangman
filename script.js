T=["motorcycle","train","horse","bicycle","car","truck"];
function randomword(){
    x=10;
    do{
	x=Math.floor(Math.random()*10);
	if(x==6){x=5;} 
	}while(x>6);
    word=T[x];
    console.log(word);
}

function generate_guesszone(){
   L=word.length;
   empty_nodes = new Array();
   empty_tds = new Array();
   for(i=0;i<L;i++){
   	var ch0=document.createTextNode("_");
   	var ch=document.createElement("h2");
   	ch.style="text-align:center;"
   	ch.id="l"+i;
   	ch.appendChild(ch0);
   	empty_nodes[i]=ch;
   	console.log(empty_nodes[i]);
   	var ch1=document.createElement("th");
   	ch1.style="margin-left:10px;margin-right:10px;"
   	empty_tds[i]=ch1;
   	empty_tds[i].appendChild(empty_nodes[i]);
    document.getElementById("tr").appendChild(empty_tds[i]);
   }
   
}
comp=1;

function image_change(){
    if (comp==1){
    document.getElementById("hangman").src="image/Hang/1.png"
	} 
	if (comp==2){
    document.getElementById("hangman").src="image/Hang/2.png"
	}
	if (comp==3){
    document.getElementById("hangman").src="image/Hang/3.png"
	}
	if (comp==4){
    document.getElementById("hangman").src="image/Hang/4.png"
	}
	if (comp==5){
    document.getElementById("hangman").src="image/Hang/5.png"
	}
	if (comp==6){
    document.getElementById("hangman").src="image/Hang/6.png"
	}
}
wg = new Array();
wc=0;

function test(){
	Letter=document.getElementById("guess").value;
	if(Letter.length>"1"){
		alert("insert only one letter please !");
	}
	else {
		pos = new Array();
		wor = new Array();
		j=0;
		for(i=0;i<L;i++){
			if(Letter==word[i]){
             pos[j]=i;
             wor[j]=word[i];
             j++;
			}
		}
		if(j!=0){
			for(i=0;i<j;i++){
				var ch="l"+pos[i];
				document.getElementById(ch).innerHTML=wor[i];
			}
			if(comp>1){
				comp--;
			}
		}
		else if(j==0){
			comp++;
			wg[wc]=Letter;
			wc++;
		}
		pos = new Array();
		wor = new Array();
	}
}

function wrong_guess(){
      ch=" "
      for(i=0;i<wc;i++){
      ch=ch+wg[i];
      }
       document.getElementById("guesses").innerHTML="Wrong Answers : "+ch;
}

function restart(){
     location.reload();
return false;
}
function lost(){
	if(comp==6){
       document.getElementById("g").disabled="true";
       document.getElementById("lost").style.visibility="visible";
	}
}
function won(){
	verif=0;
	for(i=0;i<L;i++){
		var c="l"+i;
		var le=document.getElementById(c).innerHTML;
		if(le=="_"){
			verif=1;
		}
	}
	console.log(verif);
	if(verif==0){
		document.getElementById("won").style.visibility="visible";
       document.getElementById("g").disabled="true";
}

}