 
let myColorList =[];
let divArray = [];
let colorButton = document.getElementById("colorButton");
let colorPicker = document.getElementById("colorPicker");
let storedBlogs = JSON.parse(localStorage.getItem('homeColorSelection'));
 
 
 
 
 
 let objecttochage={
  valuedue:[0.367322,0.860646,-0.227968,0.280085, 0.672501, 0.047413,-.01182, 0.04294,0.968881],
  valuetit:[1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039],
  valuepro:[0.152286,1.052583,-0.204868,0.114503,0.786281, 0.099216,-.003882,-0.048116, 1.051998],



 Deurtranopi:function(color = null){
  let colorPicker3 = document.querySelector("#colorPicker");
    colorPicker3.addEventListener('input', (event) => {
    let rgb = color || colorPicker3.value;
 
      let arrempy=[];
      if(/^#?[A-Fa-f0-p]{6}$/.test(rgb)){  
           rgb = rgb.split("#")[1] || rgb;
            for(let i= 0; i<rgb.length; i+=2){
              arrempy.push(parseInt(rgb[i] + rgb[i+1], 16));
                 
                 }
        let  finDeuValR =  (arrempy[0])* (this.valuedue[0]) + (arrempy[1])*(this.valuedue[1])+ (arrempy[2])*(this.valuedue[2]);
        let  finDeuValG =  (arrempy[0])* (this.valuedue[3]) + (arrempy[1])*(this.valuedue[4])+ (arrempy[2])*(this.valuedue[5]);
        let  finDeuValB =  (arrempy[0])* (this.valuedue[6]) + (arrempy[1])*(this.valuedue[7])+ (arrempy[2])*(this.valuedue[8]);

           let  fintetValR = (arrempy[0])* (this.valuetit[0]) + (arrempy[1])*(this.valuetit[1])+ (arrempy[2])*(this.valuetit[2]);
           let  fintetValG = (arrempy[0])* (this.valuetit[3]) + (arrempy[1])*(this.valuetit[4])+ (arrempy[2])*(this.valuetit[5]);
           let  fintetValB = (arrempy[0])* (this.valuetit[6]) + (arrempy[1])*(this.valuetit[7])+ (arrempy[2])*(this.valuetit[8]); 

           let  fiproValR = (arrempy[0])* (this.valuepro[0]) + (arrempy[1])*(this.valuepro[1])+ (arrempy[2])*(this.valuepro[2]);
           let  fiproValG = (arrempy[0])* (this.valuepro[3]) + (arrempy[1])*(this.valuepro[4])+ (arrempy[2])*(this.valuepro[5]);
           let  fiproValB = (arrempy[0])* (this.valuepro[6]) + (arrempy[1])*(this.valuepro[7])+ (arrempy[2])*(this.valuepro[8]); 




        let  mydutronope=
         [finDeuValR,finDeuValG,finDeuValB,fintetValR,fintetValG,fintetValB,fiproValR,fiproValG,fiproValB];
   

        
    
               let newarray=[];
              let changevalue= mydutronope;
                  for(let x=0;  x<9; x++){
                     if(changevalue[x]>255){
                         changevalue[x]=255
                        newarray.push(changevalue[x]);
                            }

                     else{
                           newarray.push(changevalue[x]);
                      }
 
       

                   }
 let rgbvalue = arrempy[0]+","+ arrempy[1]+","+ arrempy[2];
    let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
    let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
    let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));
 


let colordue = document.getElementById("dueh2");
let colortit = document.getElementById("tit2");
let colorpro = document.getElementById("pro2");
let btnColordue =document.getElementById("valuedue");
let btnColortit =document.getElementById("valuetit");
let btnColorpro =document.getElementById("valuepro");
let colorButton = document.getElementById("colorButton");




      
            btnColordue.innerText = "Deu("+rdh+")";
             navigator.clipboard.writeText(colordue.value);
             colordue.style.backgroundColor="RGB("+rdh+")";

             btnColortit.innerText="Trit("+rth+")";
             navigator.clipboard.writeText(colortit.value);
             colortit.style.backgroundColor="RGB("+rth+")";

             btnColorpro .innerText= "pro("+rph+")";
             navigator.clipboard.writeText(colorpro.value);
             colorpro.style.backgroundColor="RGB("+rph+")";

             colorButton.style.backgroundColor="RGB("+rgbvalue+")";



  }




});


 
 },
 delete:function(){

  deleteBtn.onclick = function() {
  
  const valueToRemove = myvalueinput;

  const index = myColorList.findIndex(color => color.toUpperCase() === valueToRemove.toUpperCase());

  if (index !== -1) { // Check if the color exists in the array
      myColorList.splice(index, 1); // Remove the color at the found index
  }

  deleteDiv(newDiv.id);

};



 }

};







// -----the value that come from the index page and creating div




storedBlogs.forEach(myvalueinput => {
myColorList.push(myvalueinput);

const newDiv = document.createElement("div");
newDiv.id = `dynamicDiv-${Math.floor(Math.random() * 1000)}`;
newDiv.className="rgbdiv";
newDiv.style.backgroundColor=myvalueinput;
// newDiv.textContent=myvalueinput;
const deleteBtn = document.createElement("button");
deleteBtn.className = "fa-solid fa-trash fa-xl";



// deleteBtn.onclick = function() {
  
//   const valueToRemove = myvalueinput;

//   const index = myColorList.findIndex(color => color.toUpperCase() === valueToRemove.toUpperCase());

//   if (index !== -1) { // Check if the color exists in the array
//       myColorList.splice(index, 1); // Remove the color at the found index
//   }

//   deleteDiv(newDiv.id);

// };


newDiv.appendChild(deleteBtn);
document.getElementById("botomid").appendChild(newDiv);

divArray.push(newDiv);

function deleteDiv(id) {
  // Find the div element by ID
  const divToDelete = document.getElementById(id);
  
  // Remove it from the DOM
  if (divToDelete) {
      divToDelete.remove();
  }

  // Optionally remove it from the array
  divArray = divArray.filter(div => div.id !== id);
}


// newDiv.onclick = objecttochage.Deurtranopi(myvalueinput);



  
});


// ----add button---


let btn_add= document.getElementById("add");
  btn_add.onclick=createNewDiv;
 



colorButton.addEventListener('click', () => {
  colorPicker.click();
});






  function createNewDiv(){

    let myvalueinput =document.querySelector("input").value;
    // let myColorList2 = JSON(localStorage.getItem("homeColorSelection"));
    
    

      if (myColorList.length<20) {
         for(x=0; x<1; x++){

       myColorList.push(myvalueinput);
      //  alert(storedBlogs)


const newDiv = document.createElement("div");
newDiv.id = `dynamicDiv-${Math.floor(Math.random() * 1000)}`;
newDiv.className="rgbdiv";
newDiv.style.backgroundColor=myvalueinput;
// newDiv.textContent=myvalueinput;
const deleteBtn = document.createElement("button");
deleteBtn.className = "fa-solid fa-trash fa-xl";
// deleteBtn.innerText = "Delete";



deleteBtn.onclick = function() {
  
  const valueToRemove = myvalueinput;

  const index = myColorList.findIndex(color => color.toUpperCase() === valueToRemove.toUpperCase());

  if (index !== -1) { // Check if the color exists in the array
      myColorList.splice(index, 1); // Remove the color at the found index
  }


console.log(myColorList);
  

  alert(myColorList);

  deleteDiv(newDiv.id);
};

newDiv.appendChild(deleteBtn);
document.getElementById("botomid").appendChild(newDiv);

divArray.push(newDiv);

function deleteDiv(id) {
  // Find the div element by ID
  const divToDelete = document.getElementById(id);
  
  // Remove it from the DOM
  if (divToDelete) {
      divToDelete.remove();
  }

  // Optionally remove it from the array
  divArray = divArray.filter(div => div.id !== id);
}


newDiv.addEventListener("click", function() {
           objecttochage.Deurtranopi(myvalueinput);



//             if(/^#?[A-Fa-f0-p]{6}$/.test(myvalueinput)){
                  
//               myvalueinput = myvalueinput.split("#")[1] || myvalueinput;
//               for(let i= 0; i<myvalueinput.length; i+=2){
     
//                 inVersArr.push(parseInt(myvalueinput[i] + myvalueinput[i+1], 16));
     
     
             
//           }
//          }

        
         
//                       let valuearr=[0.367322,0.860646,-.227968,0.280085,0.672501,0.047413,-0.01182,0.04294,0.968881,
//          1.255528,-0.076749,-0.178779,-0.078411,0.930809,0.147602,0.004733,0.691367,0.3039,
//          0.152286, 1.052583, -.204868, 0.114503, 0.786281, 0.099216,-.003882, -.048116, 1.051998
//         ];


//        let  finDeuValR =  (inVersArr[0])* (valuearr[0]) + (inVersArr[1])*(valuearr[1])+ (inVersArr[2])*(valuearr[2]);
//        let   finDeuValG =  (inVersArr[0])* (valuearr[3]) + (inVersArr[1])*(valuearr[4])+ (inVersArr[2])*(valuearr[5]);
//        let   finDeuValB =  (inVersArr[0])* (valuearr[6])+ (inVersArr[1])*(valuearr[7])+ (inVersArr[2])*(valuearr[8]);
   
//        let   fintetValR =  inVersArr[0]* valuearr[9]     + inVersArr[1]*valuearr[10]+ inVersArr[2]*valuearr[11];
//        let  fintetValG =  inVersArr[0]* valuearr[12]    + inVersArr[1]*valuearr[13]+inVersArr[2]*valuearr[14];
//        let  fintetValB =  inVersArr[0]* valuearr[15]    + inVersArr[1]*valuearr[16]+inVersArr[2]*valuearr[17];
   
//        let fiproValR =  inVersArr[0]* valuearr[18] + inVersArr[1]*valuearr[19]+ inVersArr[2]*valuearr[20];
//        let fiproValG =  inVersArr[0]* valuearr[21] + inVersArr[1]*valuearr[22]+inVersArr[2]*valuearr[23];
//        let fiproValB =  inVersArr[0]* valuearr[24] + inVersArr[1]*valuearr[25]+inVersArr[2]*valuearr[26];
          
//            let newarray=[];
//            let changevalue=[finDeuValR,finDeuValG,finDeuValB,fintetValR,fintetValG,fintetValB,fiproValR,fiproValG,fiproValB];
//            for(let x=0;  x<9; x++){
//             if(changevalue[x]>255){
//               changevalue[x]=255
   
//               newarray.push(changevalue[x]);
//             }
//             else{
//              newarray.push(changevalue[x]);
//             }
           
                 
//            }
        

//         let rgbvalue =inVersArr[0]+","+inVersArr[1]+","+inVersArr[2];
//         let rdh = Math.abs(Math.round(newarray[0]))+","+Math.abs(Math.round(newarray[1]))+","+Math.abs(Math.round(newarray[2]));
//         let rth = Math.abs(Math.round(newarray[3]))+","+Math.abs(Math.round(newarray[4]))+","+Math.abs(Math.round(newarray[5]));
//         let rph = Math.abs(Math.round(newarray[6]))+","+Math.abs(Math.round(newarray[7]))+","+Math.abs(Math.round(newarray[8]));

//        let colordue = document.getElementById("dueh2");
//        let colortit = document.getElementById("tit2");
//        let colorpro = document.getElementById("pro2");
      
//        let btnColordue =document.getElementById("valuedue");
//        let btnColortit =document.getElementById("valuetit");
//        let btnColorpro =document.getElementById("valuepro");

//        btnColordue.innerText= rdh;
//         colordue.style.backgroundColor="RGB("+rdh+")";


//         btnColortit.innerText=rth;
//         colortit.style.backgroundColor="RGB("+rth+")";

//         btnColorpro.innerText=rph;
//         colorpro.style.backgroundColor="RGB("+rph+")";


//         colorButton.style.backgroundColor="RGB("+rgbvalue+")";


     
//  
           
});        

}

}
else{
alert("box is full");

alert(myColorList);
}

}


 document.getElementById("reset").addEventListener("click",()=>{

  location.reload();
  myColorList.length=0;
  window. location. href ="index.html";
 });

 let print_btn = document.getElementById("print_id");
 print_btn.addEventListener("click",()=>{

   
   localStorage.setItem("forPrintData", JSON.stringify(myColorList));

   window.location.href="print.html";
 });


// transalation

// function setLanguage(language) {
     
   
//   document.getElementById("colorButton").textContent = transalation[language].colorButton;

 
// }


// window.onload = () => {

//   let savedLanguage = localStorage.getItem("language");
   
//   setLanguage(savedLanguage);



// }

 
// JSON.parse(localStorage.getItem("transalation"));