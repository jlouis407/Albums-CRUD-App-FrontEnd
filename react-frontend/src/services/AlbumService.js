import axios from 'axios';

const ALBUM_API_BASE_URL = "http://localhost:8080/api/v1/albums";

class AlbumService {

    getAlbums(){
        return axios.get(ALBUM_API_BASE_URL);
    }

    createAlbum(album){
        return axios.post(ALBUM_API_BASE_URL, album);
    }

    getAlbumById(albumId){
        return axios.get(ALBUM_API_BASE_URL + '/' + albumId);
    }

    updateAlbum(album, albumId){
        return axios.put(ALBUM_API_BASE_URL + '/' + albumId, album); 
    }

    deleteAlbum(albumId) {
        return axios.delete(ALBUM_API_BASE_URL + '/' + albumId);
    }

}

export default new AlbumService();