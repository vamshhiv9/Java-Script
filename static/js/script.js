function ageindays(){
    var birthyear=prompt("what is your year of birth?")
    var ageindays=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('you are '+ageindays+' days');
    //h1.setAttribute('id','ageindays');
    h1.id='ageindays';
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function result()
{
    document.getElementById('ageindays').remove();
}
function generatecats()
{
    var img=document.createElement('img');
    img.src="https://edgecats.net/";
    document.getElementById('flex-box-generate').appendChild(img);
}
