import { API_URL } from './config';


// characters data


const getAllCharacters = async (page) => {
    const response = await fetch(`${API_URL}/character/?page=${String(page)}`);
    return await response.json();
}

const filterCharacterById = async (characterId) => {
    const response = await fetch(`${API_URL}/character/${characterId}`);
    return await response.json();  
}

const filterCharacterByName = async (characterName) => {
    const response = await fetch(`${API_URL}/character/?name=${characterName}`);
    return await response.json();  
}




const paginationAllCharacter = async () => {
    const response = await fetch(`${API_URL}/character/`);
    return await response.json();  

}


// locations data

const getAllLocations = async (page) => {
    const response = await fetch(`${API_URL}/location/?page=${String(page)}`);
    return await response.json();  
}


const filterLocationByName = async (locationName) => {
    const response = await fetch(`${API_URL}/location/?name=${locationName}`);
    return await response.json();  
}

const filterLocationById = async (locationId) => {
    const response = await fetch(`${API_URL}/location/${locationId}`);
    return await response.json();  
}


// episodes data

const getAllEpisodes = async (episodeId) => {
    const response = await fetch(`${API_URL}/episode/?page=${episodeId}`);
    return await response.json();  
}
const getEpisodeById = async (episodeId) => {
    const response = await fetch(`${API_URL}/episode/${String(episodeId)}`);
    return await response.json();  
}

const filterEpisodesByName = async (episodeName) => {
    const response = await fetch(`${API_URL}/episode/${episodeName}`);
    return await response.json();  
}

const filterEpisodesByEpisode = async (episodeEpisode) => {
    const response = await fetch(`${API_URL}/episode/${episodeEpisode}`);
    return await response.json();  
}




export {
    getAllCharacters,
    filterCharacterById,
    filterCharacterByName,
    paginationAllCharacter,

    getAllLocations,
    filterLocationByName,
    filterLocationById,

    getAllEpisodes,
    filterEpisodesByEpisode,
    filterEpisodesByName,
    getEpisodeById
};