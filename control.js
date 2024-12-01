const file = document.getElementById('file');
const maxSize =  500 * 1024;

file.addEventListener('change',(e)=>{

    const filename = document.getElementById('file-name');
    const ErrorMsg = document.getElementById('file-error');
    
    filename.textContent ="";
    ErrorMsg.textContent ="";

    const uploadedFile = e.target.files[0];
    const fileType = ['image/png' , 'image/jpeg'];

    if(uploadedFile){

        if(uploadedFile.size > maxSize){
            ErrorMsg.textContent = "Allowed Size Upto 500kb";
            ErrorMsg.style.background = 'black'
            e.target.value ="";
            return;
        }

        if (!fileType.includes(uploadedFile.type)) {
            ErrorMsg.textContent = "Invalid file type. Please upload a PNG or JPEG image.";
            ErrorMsg.style.background = 'black';
            e.target.value = ""; 
            return;
        }

        filename.textContent = `Uploaded file: ${uploadedFile.name}`
        filename.style.color = 'black'

    }
    else {
        filename.textContent = `NO file choosen`
   }
   
})