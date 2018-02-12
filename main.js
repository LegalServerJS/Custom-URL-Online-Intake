<script type="text/javascript">
/*
The purpose of this script is to check to see
if the url contains a GET paremeter called Clinic.
If it does it sets a drop down value to the value of clinic
if it can find that value. Then hides it so the user doesn't
see the Remote Clinic Field.
*/

matthew_RemoteClinic(); //Starts the process.
function matthew_RemoteClinic(){
	//Get Remote Clinic Field ID
	var rm_clinic_id = matthew_grab_id_for_selector('LABEL','Remote Clinics');
	
	//Get any get parameter named "clinic"
	var clinicparam = getParameterByName('clinic');

	//Check if it exists and set it if it does exist.
	if(clinicparam != null && clinicparam != ''){
		setRemoteClinicSelector(rm_clinic_id, clinicparam);
	}
	//Hide Remote Clinic Label and Field
	//Note: You cannot check the hidden box on LS as it becomes impossible to set dynamically. So you show it, set it, and hide it.
	document.getElementById(rm_clinic_id).style.visibility = 'hidden'; //Hide the input
	document.querySelectorAll('[for="' + rm_clinic_id + '"]')[0].style.visibility='hidden';//Hide the label	
}
function getParameterByName(name, url) {
	//Gets the name of a specified parameter from the URL.
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setRemoteClinicSelector(id, clinic){
	//Sets the Remote Clinic Select Field
    var rcselect = document.getElementById(id);
    var i;
    for(i=0; i< rcselect.length; i++){
        if(rcselect.options[i].text.toLowerCase() == clinic.toLowerCase()){
            //Set select
           console.log("Clinic Found");
           rcselect.selectedIndex = i;
         }
     }

}
function matthew_grab_id_for_selector(etype,textlookingfor){
	//Javascript (not jQuery) puller of the for attribute usually for a label to get the id for the input field.
	matthew_all_elements = document.querySelectorAll(etype);
	var i;
    for(i=0; i< matthew_all_elements.length; i++){
		console.log(matthew_all_elements[i].innerText);
        if(matthew_all_elements[i].innerText == textlookingfor){
			console.log("Found Element " + matthew_all_elements[i].innerText);
            dropdownid = matthew_all_elements[i].getAttribute('for');
            console.log(dropdownid);
            return dropdownid;
         }
    }
    return null;
}

</script>
