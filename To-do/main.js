
const func=()=>{
    var chbx= document.createElement('input')
    chbx.type='checkbox'
    const new1 = document.createElement('input')
    new1.type='text'
    new1.placeholder="What's to be done?"
    document.body.append(chbx,new1)
    var linebreak= document.createElement('br')
    document.body.append(linebreak)
    var linebreak2= document.createElement('br')
    document.body.append(linebreak2)
}
var button = document.getElementById('btn')
button.addEventListener('click',func)














