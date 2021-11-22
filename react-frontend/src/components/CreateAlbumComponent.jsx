import React, { Component } from 'react';
import AlbumService from '../services/AlbumService';

class CreateAlbumComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

            title: '',
            artist: '',
            genre: '',
            label: '',
            year: ''

        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeArtistHandler = this.changeArtistHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeLabelHandler = this.changeLabelHandler.bind(this);
        this.changeYearHandler = this.changeYearHandler.bind(this);

        this.saveOrUpdateAlbum = this.saveOrUpdateAlbum.bind(this);
    }

    componentDidMount(){
        if(this.state.id == -1){
            return
        } else {
            AlbumService.getAlbumById(this.state.id).then( (res) => {
                let album = res.data;
                this.setState({title: album.title,
                    artist: album.artist,
                    genre: album.genre,
                    label: album.label,
                    year: album.year 
                });
            });
        }
    }

    saveOrUpdateAlbum = (e) => {
        e.preventDefault();
        let album = {title: this.state.title, artist: this.state.artist, genre: this.state.genre, label: this.state.label, year: this.state.year}
        console.log('album => ' + JSON.stringify(album));

        if(this.state.id == -1){
            AlbumService.createAlbum(album).then(res => {
                this.props.history.push('/albums');
            });
        } else {
            AlbumService.updateAlbum(album, this.state.id).then(res => {
                this.props.history.push('/albums');
            });
        }

        AlbumService.createAlbum(album).then(res =>{
            this.props.history.push('/albums');
        })
    }

    changeTitleHandler= (event) => {
        this.setState({title: event.target.value})
    }

    changeArtistHandler= (event) => {
        this.setState({artist: event.target.value})
    }

    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value})
    }

    changeLabelHandler= (event) => {
        this.setState({label: event.target.value})
    }

    changeYearHandler= (event) => {
        this.setState({year: event.target.value})
    }

    cancel(){
        this.props.history.push('/albums');
    }

    getPageTitle(){
        if(this.state.id == -1){
            return <h3 className="text-center">Add Album</h3>
        } else {
            <h3 className="text-center">Update Album</h3>
        }
    }

    render(){
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            this.getPageTitle()
                        }
                            
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder = "Title" name = "title" className="form control"
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Artist: </label>
                                            <input placeholder = "Artist" name = "artist" className="form control"
                                                value={this.state.artist} onChange={this.changeArtistHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Genre: </label>
                                            <input placeholder = "Genre" name = "genre" className="form control"
                                                value={this.state.genre} onChange={this.changeGenreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Label: </label>
                                            <input placeholder = "Label" name = "label" className="form control"
                                                value={this.state.label} onChange={this.changeLabelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Year: </label>
                                            <input placeholder = "Year" name = "year" className="form control"
                                                value={this.state.year} onChange={this.changeYearHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAlbum}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateAlbumComponent