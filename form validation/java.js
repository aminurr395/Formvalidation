function formvali()
{
var x= document.forms["stdinfo"]["name"].value;
var f= document.forms["stdinfo"]["fname"].value;
var m= document.forms["stdinfo"]["mname"].value;
var y= document.forms["stdinfo"]["email"].value;	
var z= document.forms["stdinfo"]["phone"].value;
var pass=document.forms["stdinfo"]["pass"].value;
if(x=="")
{
	window.alert("name must be field out")
	return false;
}
else if(f=="")
{
	window.alert("Fname must be field out")
	return false;
}
else if(m=="")
{
	window.alert("Mname must be field out")
	return false;
}
else if(y=="")
{
	window.alert("email must be field out")
	return false;
}
else if(z=="")
{
	window.alert("phone must be field out")
	return false;
}
else if(pass=="")
{
	window.alert("password must be field out")
	return false;
}
//-for vali password

var passreg= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");	
if(!passreg.test(pass))
{
	window.alert("Password mustbe at least one Small capital digit and special character");
	return false;
}
// Fname vali 
var Fnamereg= new RegExp("*[A-Z]");	
if(!Fnamereg.test(fname))
{
	window.alert("Password mustbe at least one Small capital digit and special character");
	return false;
}
//for phone vali
var phone=z.length; 
	if(phone!=11)
	{
		window.alert("phone number must not be less then 11 digits ");
		return false;
	}
	
}

//function for phone validation 
function phonevali()
{
	var z= document.forms["stdinfo"]["phone"].value;
	var phone=z.length; 
	if(phone!=11)
	{
		window.alert("phone number must not be less then 11 digits ");
		return false;
	}

}

//function for Passvalidation 

function passvali(){
var pass=document.forms["stdinfo"]["pass"].value;
var passreg= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");	
if(!passreg.test(pass))
{
	
	window.alert("Password mustbe at least one Small capital digit and special character");
	return false;
	
	
}
//validation email
function email(){
	
	var email=document.forms["stdinfo"]["email"].value;
	var email= new RegExp("^(?=.*[a-z0-9])");

}
	
}