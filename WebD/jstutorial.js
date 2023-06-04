let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);
for(let i= 0 ; i < 10 ; i++)
{
    console.log("HELLO WORLD\n");
}  
function inputMsg() {
    let name = prompt('Enter Name of Student');
    namasteBtn.textContent = 'Roll No. 1:' + name;
}

//use differ or DOMContentloaded to add script in bw instead at the end
//namasteBtn.addEventListener("DOM.......", inputMsg); for proper syntax go to video apna college playlist of  webd