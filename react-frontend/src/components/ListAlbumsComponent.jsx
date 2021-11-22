import React, {Component} from 'react';
import AlbumService from '../services/AlbumService';

class ListAlbumsComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            albums: []
        }

        this.addAlbum = this.addAlbum.bind(this);
        this.updateAlbum = this.updateAlbum.bind(this);
        this.deleteAlbum = this.deleteAlbum.bind(this);
    }

    deleteAlbum(id){
        AlbumService.deleteAlbum(id).then( res => {
            this.setState({albums: this.state.albums.filter(album => album.id !== id)});
        })
    }

    updateAlbum(id){
        this.props.history.push(`/add-album/${id}`);

    }

    componentDidMount(){
        AlbumService.getAlbums().then((res) => {
            this.setState({ albums: res.data});
        });
    }

    addAlbum(){
        this.props.history.push('/add-album-1');
    }

    render(){
        return (
            <div>
                <h2 className="text-center">Albums List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.addAlbum}>Add Album</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Genre</th>
                                <th>Label</th>
                                <th>Year</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                this.state.albums.map(
                                    album =>
                                    <tr key = {album.id}>
                                        <td>{album.title}</td>
                                        <td>{album.artist}</td>
                                        <td>{album.genre}</td>
                                        <td>{album.label}</td>
                                        <td>{album.year}</td>
                                        <td>
                                            <button onClick = {()=> this.updateAlbum(album.id)} className="btn btn-info">Update</button>
                                            <button onClick = {()=> this.deleteAlbum(album.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default ListAlbumsComponent