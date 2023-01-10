var CurrentTab = 0;

showTab(CurrentTab);

function showTab(n){

    var x = document.getElementsByClassName("tab");
    x[n].style.display="block";
    if(n==0){
        document.getElementById("Back-Btn").style.display="none";
    }
    else{
        document.getElementById("Back-Btn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("Next-Btn").innerHTML = "Submit";
      } else {
        document.getElementById("Next-Btn").innerHTML = "Next";
      }
}
function next_page(n){
    var x = document.getElementsByClassName("tab");
    x[CurrentTab].style.display="none";
    CurrentTab = CurrentTab + n;
    // if (CurrentTab >= x.length) {
    //     document.getElementsByClassName("form").submit();
    //     return false;
    //   }
    showTab(CurrentTab);
}

function show(anything){

    document.querySelector('.provinsi').value=anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}

// drag drop CV
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
        // console.log(e);
        file = e.dataTransfer.files[0];
        let FileType = file.type;
        let DragDropValidation = ["image/jpeg","image/jpg","image/png","application/pdf"];

        if(DragDropValidation.includes(FileType)){
           let filereader = new FileReader();
           filereader.onload = ()=>{
            let fileURL = filereader.result;
            // console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropZoneElement.innerHTML = imgTag;
           }
           filereader.readAsDataURL(file);
        //    console.log(file); ini yg bagus
        }
        else{
            alert("Please enter from one of the file format");
            // return false;
        }
        // ShowFile();
        dropZoneElement.classList.remove("drag-drop__over");
        // return true;
    });

});
//Browse Button CV
document.querySelectorAll(".dropzone-input").forEach((inputElement)=>{

    const dropZoneElement = inputElement.closest(".drag-drop");
    
    const CvButton = document.getElementById("Curriculum-Vitae"), label = document.getElementById("cv"); 

    label.addEventListener("click", function(){
        CvButton.click();

    });

    CvButton.addEventListener("change", function(){

        file = this.files[0];
        let FileType = file.type;
        let DragDropValidation = ["image/jpeg","image/jpg","image/png","application/pdf"];

        if(DragDropValidation.includes(FileType)){
           let filereader = new FileReader();
           filereader.onload = ()=>{
            let fileURL = filereader.result;
            // console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropZoneElement.innerHTML = imgTag;
           }
           filereader.readAsDataURL(file);
        //    console.log(file); ini yg bagus
        }
        else{
            alert("Please enter from one of the file format");
            // return false;
        }
        // return true;
    });

});

// drag drop ID
document.querySelectorAll(".dropzone-input1").forEach((inputElement)=>{

    const dropZoneElement = inputElement.closest(".drag-drop1");
    
        dropZoneElement.addEventListener("dragover", (e) =>{
            e.preventDefault();
            dropZoneElement.classList.add("drag-drop__over1");
            ["dragleave","dragend"].forEach(type=>{
    
                dropZoneElement.addEventListener(type , (e) =>{
                
                    dropZoneElement.classList.remove("drag-drop__over1");
                });
            });
        });
        dropZoneElement.addEventListener("drop", (e) =>{
            e.preventDefault();
            // console.log(e);
            file1 = e.dataTransfer.files[0];
            let FileType = file1.type;
            let DragDropValidation = ["image/jpeg","image/jpg","image/png","application/pdf"];
    
            if(DragDropValidation.includes(FileType)){
               let filereader = new FileReader();
               filereader.onload = ()=>{
                let fileURL = filereader.result;
                // console.log(fileURL);
                let imgTag = `<img src="${fileURL}" alt="">`;
                dropZoneElement.innerHTML = imgTag;
               }
               filereader.readAsDataURL(file1);
            //    console.log(file); ini yg bagus
            }
            else{
                alert("Please enter from one of the file format");
                // return false;
            }
            // ShowFile();
            dropZoneElement.classList.remove("drag-drop__over1");
            // return true;
        });
    });

//Browse ID
document.querySelectorAll(".dropzone-input1").forEach((inputElement)=>{

    const dropZoneElement = inputElement.closest(".drag-drop1");
    
    const IDButton = document.getElementById("Flazz/ID"), label = document.getElementById("IDCard"); 

    label.addEventListener("click", function(){
        IDButton.click();

    });

    IDButton.addEventListener("change", function(){

        file1 = this.files[0];
        let FileType = file1.type;
        let DragDropValidation = ["image/jpeg","image/jpg","image/png","application/pdf"];

        if(DragDropValidation.includes(FileType)){
           let filereader = new FileReader();
           filereader.onload = ()=>{
            let fileURL = filereader.result;
            // console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`;
            dropZoneElement.innerHTML = imgTag;
           }
           filereader.readAsDataURL(file1);
        //    console.log(file); ini yg bagus
        }
        else{
            alert("Please enter from one of the file format");
            // return false
        }
        // return file1;
    });
});
    
function Check(){
    let Nama = document.getElementById("Nama-leader").value.trim();

    let email = document.getElementById("Email").value.trim();

    let nomor = document.getElementById("NoWhatsapp").value.trim();

    let Line = document.getElementById("ID-Line").value.trim();

    let Github = document.getElementById("ID-Github").value.trim();

    let TmptLahir = document.getElementById("tempat-lahir").value;

    let TglLhr = document.getElementById("Tanggal-Lahir").value;

    // var file2 = document.getElementById("Curriculum-Vitae");

    // var file3 = document.getElementById("Flazz/ID");

    if(Nama == ""){
        alert("Please enter your name");
        return false;
    }

    if(email ==""){
        alert("Please enter your email");
        return false;
    }

    if(nomor == ""){
        alert("Please enter your Whatsapp Number");
        return false;
    }

    if(Line == ""){
        alert("Please enter your Line ID");
        return false;
    }

    if(Github == ""){
        alert("Please enter your Github ID");
        return false;
    }

    if(TmptLahir == ""){
        alert("Please enter your place of birth");
        return false;
    }

    if(TglLhr == "") {
    alert("please enter your date of birth");
    return false;
    }


    if(CheckEmail()==0){
        return false;
    }

    if(CheckNumber()==0){
        return false;
    }

    if(CheckDate()==0){
        return false;
    }

    // if(file2.files.length == 0 ){
    //     alert("Please enter your cv");
    //     return false;
    // } 

    // if(file3.files.length == 0 ){
    //     alert("Please enter your ID or Binusian Card");
    //     return false;
    // } 

    console.log(Nama);
    console.log(email);
    console.log(nomor);
    console.log(Line);
    console.log(Github);
    console.log(TmptLahir);
    console.log(TglLhr);
    console.log(file);
    console.log(file1);

    alert("Leader Successfully Registered!");
    return true;
}


function CheckNumber(){
    var input = document.getElementById("NoWhatsapp").value

    input = input.trim();
    document.getElementById("NoWhatsapp").value = input;
    if(input.length<9){
        document.getElementById("NO-WA").style.display="block";
        return false;
    }
    else{
        document.getElementById("NO-WA").style.display="none";
    }
    return true;
}

function CheckEmail(){
    var input = document.getElementById("Email").value

    input = input.trim();
    document.getElementById("Email").value = input;

    if(input.split("@").length !==2){
        document.getElementById("Email-validation1").style.display="block";
        return false;
    }
    else{
        document.getElementById("Email-validation1").style.display="none";
    }
    if(!input.split("@")[1].includes(".")){
        document.getElementById("Email-validation2").style.display="block";
        return false;
    }
    else{
        document.getElementById("Email-validation2").style.display="none";
    }
    if(input.split("@")[0].length ===0){
        document.getElementById("Email-validation3").style.display="block";
        return false;
    }
    else{
        document.getElementById("Email-validation3").style.display="none";
    }
    return true;
}

function CheckDate(){
    var Umur = document.getElementById("Tanggal-Lahir").value;

    const age = new Date(Date.now()-new Date(Umur)).getFullYear() - 1970;

    if(age<17){
        document.getElementById("date").style.display="block";
        return false;
    }
    else{
        document.getElementById("date").style.display="none";
    }
}

