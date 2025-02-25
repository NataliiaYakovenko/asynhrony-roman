"use strict";

/*
async
await

*/

const URL = 'https://randomuser.me/api/';

function loadDataWithoutAsync(url){
  const p =fetch(url);

  const jsonResponse = p.then((response)=>{
    return response.json()
  })
  jsonResponse.then((data)=>{
    console.log(data);

  })

}

// loadDataWithoutAsync(URL)
//--------------------------------------------------------------

//ASYNC / AWAIT

async function loadDataWithoutAsync(url) {
    const p = fetch(url);
    const response = await p;
    const data = await response.json()

    console.log(data);
}

loadDataWithoutAsync(URL)