function clear() {
  document.getElementById('input').value = '';
  document.getElementById('result').innerHTML = '';
}

document.getElementById('btn-1').addEventListener('click', function(e) {
  const a = document.getElementById('input').value;
  let num = Math.ceil(Math.random()* a);

  if(a === '' ) {
    document.getElementById('result').innerHTML = '';
    alert('Type a number')
  } else{
    document.getElementById('result').innerHTML = num;

  }
  e.preventDefault();
})



