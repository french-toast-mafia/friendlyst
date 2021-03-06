import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import Nav from '../Nav.jsx';
import { connect } from 'react-redux';

const CLOUDINARY_UPLOAD_PRESET = 'bjotvl61';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dmbpgz4gp/image/upload';

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts,
    user: state.userReducer.user
  }
};

class AddItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      userId: this.props.user.id,
      img: '',
      title: '',
      price: '',
      location: '',
      description: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnUpdate = this.handleOnUpdate.bind(this);
    this.onImageDrop = this.onImageDrop.bind(this);
  }

  componentDidMount() {
    this.dropzone1 = new Dropzone("div#my-dropzone1", { url: "/api/item/dummyRoute"});
    this.dropzone1.on('addedfile', file => {
      this.onImageDrop([file]);
    })
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          img: response.body.secure_url
        });
      }
    });
  }

  handleOnChange(event) {
    let temp = event.target.name;
    this.setState({
      [temp]: event.target.value
    })
  }

  handleOnUpdate() {
    axios.post(`/api/item/add`, this.state)
    .then(response => {
      
      this.setState({
        img: '',
        title: '',
        price: '',
        location: '',
        description: ''
      })
    })
    .catch(err => { 
      return console.error(err) 
    });
  }

  render() {
    return (
      <div className="container snippets edit-profile">
        <Nav />
        <div className="row"> 
          <div className="col-xs-12 col-sm-9">
            <div className="form-horizontal">
              <div className="panel panel-default">
                <div className="panel-heading">
                <h4 className="panel-title">Item info</h4>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-sm-2 control-label">title</label>
                    <div className="col-sm-10">
                      <input name="title" onChange={this.handleOnChange} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Price</label>
                    <div className="col-sm-10">
                      <input name="price" onChange={this.handleOnChange} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Location</label>
                    <div className="col-sm-10">
                      <input name="location" onChange={this.handleOnChange} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Desc.</label>
                    <div className="col-sm-10">
                      <textarea rows="4" name="description" onChange={this.handleOnChange} type="text" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-sm-2 control-label">Image</label>
                    <div className="col-sm-10">
                      <div className="dropzone" id="my-dropzone1">
                      </div>  
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-10 col-sm-offset-2">
                      <button type="submit" onClick={this.handleOnUpdate} className="btn btn-primary">Submit</button>
                      <button type="reset" className="btn btn-default">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddItem);