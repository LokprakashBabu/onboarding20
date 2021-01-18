let plans=[];
let planNames=['KickStart', 'QuickStart', 'Plus', 'Expert', 'Enterprise'];
let multipleProducts=false;
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
   let values={};
   let productValue=[];
   let addOns=document.querySelectorAll('.custom_checkbox');
   let checkTrue=[];
   for(let i=6; i<addOns.length; i++){
      checkTrue.push(addOns[i].getElementsByTagName('input')[1].checked);
   }
   console.log('check true', checkTrue);
   if(count(checkTrue, true)>1){
    multipleProducts=true;
   }
   for(let i=1; i<=16; i++){
     values[dropDowns[i].getElementsByTagName('label')[0].innerText]=dropDowns[i].getElementsByTagName('div')[0].getElementsByTagName('span')[0].innerHTML;
   }

   for(let i=17; i<=28; i++){
    productValue.push(dropDowns[i].getElementsByTagName('div')[0].getElementsByTagName('span')[0].innerHTML);
   }
  console.log(productValue);
  let totalProducts=count(productValue, 'Yes');

  if(totalProducts>1){
    multipleProducts=true;
  }

  console.log('multiple products', multipleProducts);

   for(let iterator=0; iterator<5; iterator++){
      let init=Array(15).fill(0);
      plans.push(init);
   }
   console.log('values', values);
   fillProjectDuration(values, "Project Duration anticipated in weeks*");
   fillTrainingSession(values, "Total number of Training sessions needed*");
   fillProjectManagement(values, "Project Management*");
   fillRemoteMeetings(values, "# of remote meetings per week with customer*");
   fillSupportNeeded(values, "Support needed with Solutioning*");
   fillTotalHours(values, "Per week total number of hours (including meetings…involved for backend coordinations, & trainings)*");
   fillAnticipatedHours(values, "Total Number of Hours anticipated (worst case)*");
   fillPhases(values, "Number of Phases (Duration per phase is 3 weeks)*");
   fillProgressStatus(values, "Weekly progress status review calls*");
   fillCommiteeMeeting(values, "Steering Committe meetings*");
   fillTeamMaturity(values, "Customer's Team Maturity & Competency*");
   fillAgents(values, "Number of Agents*");
   fillOwnerShip(values, "Configuration ownership*");
   fillIntegrations(values, "Custom App / Integrations*");
   fillMigrations(values, "Migrations*");



  //  0  ks
  //  1 qs
  //  2 plus
  //  3 expert
  //  4 enterprise

   console.log('plans', plans);
   let percentages={}
   percentageCalculator(percentages);
   let nameOfPlan;
   if(percentages['Enterprise']>=10){
    nameOfPlan=multipleProducts?'Enterprise or Custom (This package has multiple products involved. So, it has additional cost)':'Enterprise or Custom';
  }
  else if(percentages['Expert']>=7){
    nameOfPlan=multipleProducts?'Expert (This package has multiple products involved. So, it has additional cost)':'Expert';
  }
  else if(percentages['Plus']>=7){
    nameOfPlan=multipleProducts?'Plus (This package has multiple products involved. So, it has additional cost)':'Plus';
  }
  else if(percentages['QuckStart']>=7){
    nameOfPlan=multipleProducts?'Quickstart (This package has multiple products involved. So, it has additional cost)':'Quickstart';
  }
  else if(percentages['KickStart']>=80){
    nameOfPlan=multipleProducts?'Kickstart (This package has multiple products involved. So, it has additional cost)':'Kickstart';
  }
  else{
    nameOfPlan=multipleProducts?'Custom (This package has multiple products involved. So, it has additional cost)':'Custom';
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
    console.error('error');
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

function fillMigrations(values, value){
  if(values[value]==="No migrations needed"){
    changeTheValue(0, 15);
  }
  else if(values[value]==="Migrations needed"){
    changeTheValue(1, 15);
    changeTheValue(2, 15);
    changeTheValue(3, 15);
  }
  plans[4][15]='-';
}
function fillIntegrations(values, value){
    if(values[value]==="No bespoke app needed"){
      changeTheValue(0, 14);
    }
    else if(values[value]===" Upto one bespoke app as an add-on"){
      changeTheValue(1, 14);
    }
    else if(values[value]==="Upto one bespoke app as an add-on"){
      changeTheValue(2, 14);

    }
    else if(values[value]==="Upto three bespoke apps as an add-on"){
      changeTheValue(3, 14);
    }
    else{
      changeTheValue(4, 14);
    }
}
function fillOwnerShip(values, value){
          if(values[value]==="Customer will do the configurations themselves, while Freshworks will have to review the configuration"){
            changeTheValue(0, 13);
          }
          else if(values[value]==="Customer will do the configurations themselves, while customer will need some clarification and guidance from Freshworks on some of the configurations"){
            changeTheValue(1, 13);
          }
          else if(values[value]==="Customer will do the configurations jointly along with Freshworks"){
            changeTheValue(2, 13);

          }
          else if(values[value]==="Freshworks will have to do the configurations with no hands on help from customer"){
            changeTheValue(3, 13);
          }
          plans[4][13]='-';

}
function fillAgents(values, value){
          if(values[value]==="More than 150"){
            changeTheValue(4, 12);
          }
          plans[0][12]='-';
          plans[1][12]='-';
          plans[2][12]='-';
          plans[3][12]='-';
}
function fillTeamMaturity(values, value){
          if(values["Complexity of Customer's environment/Landscape*"]==='Simple'){
            if(values[value]==='High'){
              changeTheValue(0, 11);
            }
            else if(values[value]==='Medium'){
              changeTheValue(1, 11);
            }
            if(values[value]==='Low'){
              changeTheValue(2, 11);
            }

          }
          else if(values["Complexity of Customer's environment/Landscape*"]==='Moderate'){
            if(values[value]==='High'){
              changeTheValue(1, 11);
            }
            if(values[value]==='Medium'){
              changeTheValue(2, 11);
            }
            else if(values[value]==='Low'){
              changeTheValue(3, 11);
            }
          }
          else if(values["Complexity of Customer's environment/Landscape*"]==='Complex'){
            if(values[value]==='Medium' || values[value]==="High"){
              changeTheValue(3, 11);
            }
            else{
              changeTheValue(4, 11);
            }
          }
}

function fillCommiteeMeeting(values, value){
          if(values[value]==="Yes it is required"){
            changeTheValue(3, 9);
          }
          plans[0][9]='-';
          plans[1][9]='-';
          plans[2][9]='-';
          plans[4][9]='-';
}
function fillProgressStatus(values, value){
            if(values[value]==="One call per week"){
            changeTheValue(3, 8);
          }
          else if(values[value]==="More than One call per week"){
            changeTheValue(4, 8);
          }
          plans[0][8]='-';
          plans[1][8]='-';
          plans[2][8]='-';

}
function fillPhases(values, value){
          if(values[value]==="2"){
            changeTheValue(2, 7);
          }
          else if(values[value]==="4"){
            changeTheValue(3, 7);
          }
          else if(values[value]==="More than 4"){
            changeTheValue(4, 7);
          }
          plans[0][7]='-';
          plans[1][7]='-';
}
function fillAnticipatedHours(values, value){
      if(values[value]==="Less than 4"){
        changeTheValue(0, 6);
      }
      else if(values[value]==="Less than 8"){
        changeTheValue(1, 6);
      }
      else if(values[value]==="Less than 36"){
        changeTheValue(2, 6);

      }
      else if(values[value]==="Less than 120"){
        changeTheValue(3, 6);
      }
      else{
        changeTheValue(4, 6);
      }
}

function fillTotalHours(values, key){
  if(values[key]==="1 to 2"){
    changeTheValue(0, 5);
  }
  else if(values[key]==="2 to 3"){
    changeTheValue(1, 5);
  }
  else if(values[key]==="4 to 8"){
    changeTheValue(2, 5);

  }
  else if(values[key]==="6 to 14"){
    changeTheValue(3, 5);
  }
  else{
    changeTheValue(4, 5);
  }
}
function fillSupportNeeded(values, key){
            if(values[key]==="Yes it is required"){
            changeTheValue(3, 4);
          }
            plans[0][4]='-';
            plans[1][4]='-';
            plans[4][4]='-';
            plans[2][4]='-';
}
function fillRemoteMeetings(values, key){
            if(values[key]==='2'){
            changeTheValue(2, 3);
          }
          else if(values[key]==='3'){
            changeTheValue(3, 3);
          }
          else if(values[key]==="More than 3"){
            changeTheValue(4, 3);
          }
            plans[0][3]='-';
            plans[1][3]='-';
}
 function fillProjectManagement(values, key){
            if(values[key]==='Project Management assistance required'){
            changeTheValue(2, 2);
          }
          else if(values[key]==='Project Management assistance with regular steering committee reviews'){
            changeTheValue(3, 2);
          }
            plans[0][2]='-';
            plans[1][2]='-';
            plans[4][2]='-';
}

 function  fillProjectDuration(values, key){
if(values[key]==='3'){
  changeTheValue(0, 0);
}
else if(values[key]==='6'){
  changeTheValue(1, 0);
}
else if(values[key]==='10'){
  changeTheValue(2, 0);
}
else if(values[key]==='14'){
  changeTheValue(3, 0);
}
else{
  changeTheValue(4, 0);
}
}

function fillTrainingSession(values, key){

  if(values[key]==='Not Required'){
    changeTheValue(0, 1);
  }
  else if(values[key]==='1'){
    changeTheValue(1, 1);
  }
  else if(values[key]==='3'){
    changeTheValue(2, 1);
    changeTheValue(3, 1);
  }
  else{
    changeTheValue(4, 1);
  }
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