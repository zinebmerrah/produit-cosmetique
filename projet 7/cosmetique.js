
let ajouter = document.getElementById('ajouter');
let dataList = [];

document.getElementById("ajouter").addEventListener('click', function Add(){


  let  nom = document.getElementById("nom").value;
  let  marque = document.getElementById("marque").value;
  let  prix = document.getElementById("prix").value;
  let  date = document.getElementById("date").value;
  let  type = document.getElementById("type").value;
  let  ouipromo = document.getElementById("ouipromo").checked ;
  let  nonpromo = document.getElementById("nonpromo").checked;
  let  valider = true


         //name

    let nomcheck = /^[A-Za-z]{1,30}$/ ;
    let nameError = "nom invalid" ;
    

    if (nom !== "" && nom.length <=30 && nomcheck.test(nom)){
        document.getElementById('nomError').innerHTML = "";
    }


    else {
        
        valider = false;
        document.getElementById('nomError').innerHTML = nameError; 
    }

             //prix

    let prixcheck = /^\d+,\d{1,2}$|^\d+$/ig; 
    let prixError = "prix invalid" ;

    if(prix !== "" && prixcheck.test(prix) ){
        document.getElementById('prixError').innerHTML = "" ;

    }

    else {
        document.getElementById('prixError').innerHTML = prixError ; 
        valider = false ;
    }

 
                //promotion

    let promotionError = "selectionnez si oui ou non";

    if (ouipromo == true){
        prom = "Oui"
    }
    else if (nonpromo == true){
        prom = "Non"
    }
    else {
        prom = ""
    }
    if (ouipromo== false && nonpromo == false ){
        document.getElementById('promo').innerHTML = promotionError;
    }

    else if (ouipromo== true && nonpromo== false){


        document.getElementById('promo').innerHTML = "";
    }

    else {

        document.getElementById('promo').innerHTML = "";
    }

                //date

    let dateError = "selectionnez une date";

    if (date !== "" ){
        document.getElementById('dateError').innerHTML = "";
    }

    else {
        document.getElementById('dateError').innerHTML = dateError;
        valider = false
    }


                //type

    let typeError = "selectinnez un type";
  
    if (type !== "") {
        
        document.getElementById('typeError').innerHTML = "";
    }

    else {
        document.getElementById('typeError').innerHTML = typeError;
        valider = false
    }


            //marque
    
        let marqueError = "Please select a type";
    if (marque !== "") {
       document.getElementById('marqueError').innerHTML = "";
    }

    else {
        document.getElementById('marqueError').innerHTML = marqueError;
        valider = false
    }


    if (valider == false){
        preventDefault();
    }

    else {
        stocker();
        Table();
        clear();

    }
})

function stocker(){

    let newList = {

        nom : nom.value ,
        marque : marque.value ,
        prix : prix.value ,
        date : date.value ,
        type : type.value ,
        prom : prom,
    }


    dataList.push(newList);

    localStorage.setItem('products' , JSON.stringify(dataList));

}


function Table(){


    let table = '';
    for( let i = 0 ; i < dataList.length ; i++ ){
        table +=     `  
        <tr>
        <td>${dataList[i].nom}</td>
        <td>${dataList[i].marque}</td>
        <td>${dataList[i].prix }</td>
        <td>${dataList[i].date}</td>
        <td>${dataList[i].type}</td>
        <td>${dataList[i].prom}</td>
        <td>
        <input type="button" class="delBtn" id ="btndel" onclick = "supprimer(${i})" value="❌">
        <input type="button" class="editBtn" onclick="modifier(${i})" value="🖍️">
        </td>
        </tr> `; 
    }

    document.getElementById("tbody").innerHTML = table;

}

function supprimer(i){
    dataList.splice(i,1);
    localStorage.product = JSON.stringify(dataList);
    Table();
} 


function clear(){
    document.getElementById("nom").value = "";
    document.getElementById("marque").value = "";
    document.getElementById("date").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("type").value = "";
    document.getElementById("ouipromo").checked = false;
    document.getElementById("nonpromo").checked = false;
}

function modifier(i) {
    nom.value = dataList[i].nom;
    marque.value = dataList[i].marque;
    prix.value = dataList[i].prix;
    type.value = dataList[i].type;
    date.value = dataList[i].date;
    ajouter.innerHTML= 'Update';

}