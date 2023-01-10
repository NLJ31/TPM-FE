document.querySelectorAll(".dropzone-input").forEach((inputElement)=>{

const dropZoneElement = inputElement.closest(".drag-drop");

    dropZoneElement.addEventListener("dragover", (e) =>{
        e.preventDefault();
        dropZoneElement.classList.add("drag-drop__over");
        ["dragleave","dragend"].forEach(type=>{

            dropZoneElement.addEventListener(type , (e) =>{
            
                dropZoneElement.classList.remove("drag-drop__over");
            });
        });
    });
    dropZoneElement.addEventListener("drop", (e) =>{
        e.preventDefault();
        file = e.dataTransfer.files[0];
        let FileType = file.type;
        let DragDropValidation = ["image/jpeg","image/jpg","image/png","application/pdf"];

        if(DragDropValidation.includes(FileType)){
           let filereader = new FileReader();
           filereader.onload = ()=>{
            let fileURL = filereader.result;
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropZoneElement.innerHTML = imgTag;
           }
           filereader.readAsDataURL(file);
        }
        else{
            alert("Please enter from one of the file format");
        }
        dropZoneElement.classList.remove("drag-drop__over");
    });
});


function showPassword(){
    var x = document.getElementById("Password");
    var c = document.getElementById("Confirm-Password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    var a = document.getElementById("hide3");
    var b = document.getElementById("hide4");
    if(x.type==='password' || c.type==="password"){
        x.type="text";
        c.type="text";
        y.style.display="none";
        z.style.display="block";
        a.style.display="none";
        b.style.display="block";
    }  
    else{
        x.type="password";
        c.type="password"
        y.style.display="block";
        z.style.display="none";
        a.style.display="block";
        b.style.display="none";
    }
}


function CheckInformationGroup(){
    let GrupName = document.getElementById("Nama-group").value.trim();
    let Pass1 = document.getElementById("Password").value;
    let Pass2 = document.getElementById("Confirm-Password").value;
    let binusian="";

    //Check uda diisi apa belum
    if(GrupName == ""){
        alert("Please enter your Group Name")
        return false;
    }
    if(Pass1 == ""){
        alert("Please enter your password")
        return false;
    }
    if(Pass2 == ""){
        alert("Please confirm your password")
        return false;
    }

    // Check Radio button
    if(document.getElementById("Binusian").checked){
         binusian = document.getElementById("Binusian").value
    }
    else if(document.getElementById("Non-Binusian").checked){
        binusian = document.getElementById("Non-Binusian").value
    }
    else{
        alert("Please enter whether you are a Binusian or not")
        return false;
    }
    if(ValidationPassword()==0){
        return false;
    }
    if(ValidationConfirmPassword()==0){
        return false;
    }
    console.log(GrupName);
    console.log(Pass1);
    console.log(Pass2);
    console.log(binusian);
    alert("Group Successfully Registered!")
    return true;
}


function ValidationPassword(){
    var input = document.getElementById("Password").value

    input = input.trim();
    document.getElementById("Password").value = input;
    if(input.length<8){
        document.getElementById("message1").style.display="block";
        return false
    }
    else{
        document.getElementById("message1").style.display="none";
    }

    if(!input.match(/[A-Z]/)){
        document.getElementById("message2").style.display="block";
        return false
    }
    else{
        document.getElementById("message2").style.display="none";
    }
    if(!input.match(/[a-z]/)){
        document.getElementById("message3").style.display="block";
        return false
    }
    else{
        document.getElementById("message3").style.display="none";
    }
    if(!input.match(/[0-9]/)){
        document.getElementById("message4").style.display="block";
        return false
    }
    else{
        document.getElementById("message4").style.display="none";
    }
    if(!input.match(/[^A-Za-z0-9-'']/i)){
        document.getElementById("message5").style.display="block";
        return false
    }
    else{
        document.getElementById("message5").style.display="none";
    }
    return true;
}

function ValidationConfirmPassword(){
    var input1 = document.getElementById("Confirm-Password").value
    var input = document.getElementById("Password").value
    input = input.trim();
    document.getElementById("Password").value = input;
    input1 = input1.trim();
    document.getElementById("Confirm-Password").value = input1;

    if(input1!==input){
        document.getElementById("message6").style.display="block";
        return false;
    }
    else{
        document.getElementById("message6").style.display="none";
    }
    return true;
}