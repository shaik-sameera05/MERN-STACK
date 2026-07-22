const show=() => {
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const mobile=document.getElementById("mobile").value;
    let gender="";
    const genders=document.getElementsByName("gender");
    for(let i=0;i<genders.length;i++){
        if(genders[i].checked){
            gender=genders[i].value;
            break;
        }
    }

let qualifications=[];
const qualify =document.getElementsByClassName("qualify");
for(let i=0;i<qualify.length;i++){
    if(qualify[i].checked){
        qualifications.push(qualify[i].value);
    }
}
const dob = document.getElementById("dob").value;
    let image = document.getElementById("image").files[0];
    document.getElementById("result").innerHTML = `
    <h2>Form Data:</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
        <p>Phone: ${phone}</p>
        <p>Gender: ${gender}</p>
        <p>Qualification: ${qualification.join(", ")}</p>
        <p>D.O.B: ${dob}</p>
        <p>Image: ${image ? URL.createObjectURL(image) : ""}" width="200"</p>
    `;
};