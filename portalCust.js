let plans=[];
let planNames=['KickStart', 'QuickStart', 'Plus', 'Expert', 'Enterprise'];
jQuery(window).load(function(){


  if(window.location.pathname === "/support/catalog/items/44"){
              let customText=document.getElementsByClassName('custom_text');
              let a=(document.getElementsByClassName("static_rich_text"));
              a[0].getElementsByTagName('b')[0].innerText=a[0].getElementsByTagName('b')[0].innerText+"(* Addition of two or more products with add ons comes with an additional cost)";
              a[0].getElementsByTagName('b')[0].style.color='red';
              for(let i=0; i<customText.length; i++){
                  let label=customText[i].getElementsByTagName('label');
                  for(let j=0; j<label.length; j++){
                      if(label[i].innerHTML==="Onboarding Package"){
                        label[i].style.display="none";
                        let name=label[i].getAttribute('for');
                        let input=document.getElementById(name)
                        input.style.display='none';
                        break;
                      }
                  }
                }
               let ui=jQuery('.pull-right')[0];
                let placeRequest=document.getElementsByName('commit');
                jQuery(placeRequest).hide();

                let button = document.createElement('button');
                button. defaultValue='place Request';
                button.innerHTML='place Request';
                button.className="btn btn-red";
                button.addEventListener('click', validator);
                ui.appendChild(button);
      }

})

 function validator(){
   let dropDowns=jQuery('.dropdown');
   let values=[];
   let productValue=[];
   for(let i=1; i<=16; i++){
     values.push(dropDowns[i].getElementsByTagName('div')[0].getElementsByTagName('span')[0].innerHTML);
   }

   for(let i=17; i<=28; i++){
    productValue.push(dropDowns[i].getElementsByTagName('div')[0].getElementsByTagName('span')[0].innerHTML);
   }
  console.log(productValue);
   for(let iterator=0; iterator<5; iterator++){
      let init=Array(15).fill(0);
      plans.push(init);
   }
   console.log('values', values);

  //  0  ks
  //  1 qs
  //  2 plus
  //  3 expert
  //  4 enterprise

   for(let value=0; value<=15; value++){
      switch(value){
          case 0:
            if(values[0]==='3'){
              changeTheValue(0, 0);
            }
            else if(values[0]==='6'){
              changeTheValue(1, 0);
            }
            else if(values[0]==='10'){
              changeTheValue(2, 0);
            }
            else if(values[0]==='14'){
              changeTheValue(3, 0);
            }
            else{
              changeTheValue(4, 0);
            }
            break;
          case 1:
            if(values[value]==='Not Required'){
              changeTheValue(0, 1);
            }
            else if(values[value]==='1'){
              changeTheValue(1, 1);
            }
            else if(values[value]==='3'){
              changeTheValue(2, 1);
              changeTheValue(3, 1);
            }
            else{
              changeTheValue(4, 1);
            }
            break;
          case 2:
            if(values[value]==='Project Management assistance required'){
              changeTheValue(2, 2);
            }
            else if(values[value]==='Project Management assistance with regular steering committee reviews'){
              changeTheValue(3, 2);
            }
              plans[0][value]='-';
              plans[1][value]='-';
              plans[4][value]='-';
            break;
          case 3:
            if(values[value]==='2'){
              changeTheValue(2, 3);
            }
            else if(values[value]==='3'){
              changeTheValue(3, 3);
            }
            else if(values[value]==="More than 3"){
              changeTheValue(4, 3);
            }
              plans[0][value]='-';
              plans[1][value]='-';
            
            break;
          case 4:
            if(values[value]==="Yes it is required"){
              changeTheValue(3, 4);
            }
              plans[0][value]='-';
              plans[1][value]='-';
              plans[4][value]='-';
              plans[2][value]='-';

            break;
          case 5:
            if(values[value]==="1 to 2"){

              changeTheValue(0, 5);
            }
            else if(values[value]==="2 to 3"){
              changeTheValue(1, 5);
            }
            else if(values[value]==="4 to 8"){
              changeTheValue(2, 5);

            }
            else if(values[value]==="6 to 14"){
              changeTheValue(3, 5);
            }
            else{
              changeTheValue(4, 5);
            }
            break;
          case 6:
            if(values[value]==="Less than 4"){
              changeTheValue(0, value);
            }
            else if(values[value]==="Less than 8"){
              changeTheValue(1, value);
            }
            else if(values[value]==="Less than 36"){
              changeTheValue(2, value);

            }
            else if(values[value]==="Less than 120"){
              changeTheValue(3, value);
            }
            else{
              changeTheValue(4, value);
            }
            break;
          case 7:
            if(values[value]==="2"){
              changeTheValue(2, value);

            }
            else if(values[value]==="4"){
              changeTheValue(3, value);
            }
            else if(values[value]==="More than 4"){
              changeTheValue(4, value);
            }
            plans[0][value]='-';
            plans[1][value]='-';
            break;
          case 8:
            if(values[value]==="One call per week"){
              changeTheValue(3, value);
            }
            else if(values[value]==="More than One call per week"){
              changeTheValue(4, value);
            }
            plans[0][value]='-';
            plans[1][value]='-';
            plans[2][value]='-';

            break;
          case 9:
            if(values[value]==="Yes it is required"){
              changeTheValue(3, value);
            }
            plans[0][value]='-';
            plans[1][value]='-';
            plans[2][value]='-';
            plans[4][value]='-';
            break;
          case 10:
            //nothing to check
            break;
          case 11:
            if(values[10]==='Simple'){
              if(values[value]==='High'){
                changeTheValue(0, value);
              }
              else if(values[value]==='Medium'){
                changeTheValue(1, value);
              }
              if(values[value]==='Low'){
                changeTheValue(2, value);
              }

            }
            else if(values[10]==='Moderate'){
              if(values[value]==='High'){
                changeTheValue(1, value);
              }
              if(values[value]==='Medium'){
                changeTheValue(2, value);
              }
              else if(values[value]==='Low'){
                changeTheValue(3, value);
              }
            }
            else if(values[10]==='Complex'){
              if(values[value]==='Medium' || values[value]==="High"){
                changeTheValue(3, value);
              }
              else{
                changeTheValue(4, value);
              }
            }
            break;
          case 12:
            if(values[value]==="More than 150"){
              changeTheValue(4, value);
            }
            plans[0][value]='-';
            plans[1][value]='-';
            plans[2][value]='-';
            plans[3][value]='-';

            break;
          case 13:
            if(values[value]==="Customer will do the configurations themselves, while Freshworks will have to review the configuration"){
              changeTheValue(0, value);
            }
            else if(values[value]==="Customer will do the configurations themselves, while customer will need some clarification and guidance from Freshworks on some of the configurations"){
              changeTheValue(1, value);
            }
            else if(values[value]==="Customer will do the configurations jointly along with Freshworks"){
              changeTheValue(2, value);

            }
            else if(values[value]==="Freshworks will have to do the configurations with no hands on help from customer"){
              changeTheValue(3, value);
            }
            plans[4][value]='-';

            break;
          case 14:
            if(values[value]==="No bespoke app needed"){
              changeTheValue(0, value);
            }
            else if(values[value]===" Upto one bespoke app as an add-on"){
              changeTheValue(1, value);
            }
            else if(values[value]==="Upto one bespoke app as an add-on"){
              changeTheValue(2, value);

            }
            else if(values[value]==="Upto three bespoke apps as an add-on"){
              changeTheValue(3, value);
            }
            else{
              changeTheValue(4, value);
            }
            break;
          case 15:
            if(values[value]==="No migrations needed"){
              changeTheValue(0, value);
            }
            else if(values[value]==="Migrations needed"){
              changeTheValue(1, value);
              changeTheValue(2, value);
              changeTheValue(3, value);
            }
            plans[4][value]='-';
            break;
          }
   }
  //  console.log('plans', plans);
   let percentages={}
   percentageCalculator(percentages);
   let nameOfPlan;
   if(percentages['Enterprise']>=10){
    nameOfPlan='Enterprise or Custom';
  }
  else if(percentages['Expert']>=7){
    nameOfPlan='Expert';
  }
  else if(percentages['Plus']>=7){
    nameOfPlan='Plus';
  }
  else if(percentages['QuckStart']>=7){
    nameOfPlan='Quickstart';
  }
  else if(percentages['KickStart']>=80){
    nameOfPlan='Kickstart';
  }
  else{
    nameOfPlan='Custom';
  }
   console.log('percentages', percentages);

  if(count(values, '...')===0){
      let customText=document.getElementsByClassName('custom_text');
      for(let i=0; i<customText.length; i++){
        let label=customText[i].getElementsByTagName('label');
        for(let j=0; j<label.length; j++){
            if(label[i].innerHTML==="Onboarding Package"){
              let name=label[i].getAttribute('for');
              let input=document.getElementById(name);
              input.value=nameOfPlan;
            }
        }
    }
  }
  else{
    console.log('error');
  }

}

function changeTheValue(plansId, columnId){

  plans[plansId][columnId]=1;

}

function percentageCalculator(percentages){

  for(let id=0; id<5; id++){
    let oneCount=count(plans[id], 1);
    let nonCharCount=count(plans[id], '-');
    percentages[planNames[id]]=(oneCount/(plans[id].length-nonCharCount))*100;
  }
}


function count(arr, item){
  let nos=0;
  for(let i=0; i<arr.length; i++){
    if(arr[i]===item){
      nos++;
    }
  }
  return nos;
}


// if(L19>=10%,"Enterprise or Custom"
//       ,if(K19>=7%,"Expert"
//          ,if(J19>=7%,"Plus"
//              ,if(I19>=7%,"Quickstart"
//                 ,if(H19>=80%,"Kickstart","Custom")
//                 )
//             )
//         )
//     )