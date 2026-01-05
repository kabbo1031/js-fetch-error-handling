async function load(){
  const result = document.getElementById('result');
  result.innerText = 'Loading...';

  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/invalid-url');

    if(!res.ok){
      throw new Error('HTTP Error: ' + res.status);
    }

    const data = await res.json();
    result.innerText = JSON.stringify(data);
  }catch(err){
    result.innerText = 'Error: ' + err.message;
  }
}
