let dashboard = document.querySelector('#dashboard');

dashboard.onclick = function(){
    dashboard.classList.toggle('active');
}
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
    