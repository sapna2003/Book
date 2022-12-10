var conp=document.querySelector('p');
console.log(conp.innerText);
var sames=document.querySelectorAll('#same');
        sames.forEach((e,index)=>{
            e.addEventListener("click",()=>{
                console.log("clicked");
                var XTTP=new XMLHttpRequest();
                XTTP.onreadystatechange=function()
                {
                    if (this.readyState == 4 ) {
                      console.log(this.responseText);
                      var content=this.responseText;
                      if (content=='\n')
                      {
                        console.log("this is are line gaps");
                      }
                      conp.innerHTML=this.responseText;
                    }
                }
                console.log("this is an index", index);
                if (index == 0) {
                    XTTP.open("GET", "/AliceInWonderland.txt", true);
                }
                else if(index ==1)
                {
                     XTTP.open("GET", "/JekyllAndHyde.txt", true);
                }
                else{
                    // LOTR.txt;
                    XTTP.open("GET", "/LOTR.txt", true);
                }
                XTTP.send();
            })
        })