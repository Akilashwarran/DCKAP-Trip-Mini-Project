
function searchdes(){
    var search = document.getElementById('dest-search').value;
    search = search.toLowerCase();
    let dest_name = document.getElementsByClassName('destination-name')
    let package_crd = document.getElementsByClassName('package-card')
    for(var i=0; i<dest_name.length;i++){
        if(!dest_name[i].innerHTML.toLowerCase().includes(search)){
            package_crd[i].style.display ='none';
        }
        else{
            package_crd[i].style.display ='block'
        }
    }
}
