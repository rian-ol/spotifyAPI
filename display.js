import {retrieveAToken} from './script.js';

const token = retrieveAToken();

document.getElementById('artistsShort').addEventListener("click", async function(){
    const artists = await fetchArtists(token, "short_term");
    populateArtists(artists)
}); 


document.getElementById('artistsMedium').addEventListener("click", async function(){
    const artists = await fetchArtists(token, "medium_term");
    populateArtists(artists)
}); 

document.getElementById('artistsLong').addEventListener("click", async function(){
    const artists = await fetchArtists(token, "long_term");
    populateArtists(artists)
}); 





document.getElementById('songShort').addEventListener("click", async function(){
    const songs = await fetchArtists(token, "short_term");
    populateSongs(songs)
}); 

document.getElementById('songMedium').addEventListener("click", async function(){
    const songs = await fetchArtists(token, "medium_term");
    populateSongs(songs)
}); 

document.getElementById('songLong').addEventListener("click", async function(){
    const songs = await fetchArtists(token, "long_term");
    populateSongs(songs)
}); 



export async function fetchArtists(token, term) {
    const result = await fetch(`https://api.spotify.com/v1/me/top/artists?limit=20&time_range=${term}`, {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

export async function fetchSongs(token, term) {
    const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=${term}`, {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}


function populateArtists(artists) {
    var tableBody = document.getElementById("table");
    tableBody.innerHTML = "";
    
    for(const element of artists.items){
        var row = document.createElement("tr");
        row.innerHTML = `
            <td> ${element.name} </td>
            <td> <img src="${element.images[0].url}" width = "150" height ="150" </td>

        `;
        tableBody.appendChild(row);
    }

    console.log(artists);

}



function populateSongs(songs){

}