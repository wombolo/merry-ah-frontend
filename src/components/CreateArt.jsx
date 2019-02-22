import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { connect } from 'react-redux';

import CKEditor from 'ckeditor4-react';

import {
  addFile, removeFile, handleUploadImages, getCategories
} from '../actions/artActions';
import Notify from '../utils/Notify';


/**
 * @param {function} render
 *  @returns {JSX} jsx
 */
export class CreateArt extends Component {

  state={
    description:'',
    title: '',
    categoryId: '',
    price: 0,
    accessToken:localStorage.getItem('authToken')
  };

  handleChange = (event) => {
    this.setState({[ event.target.name] : event.target.value });
  };

  handleEditorChange = (event) => {
    this.setState({ description: event.editor.getData() });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const files = this.props.artProps.files;
    if (files){
      const response = await this.props.handleUploadImages(files, this.state);
    }
  };

  componentDidMount() {
    this.props.getCategories();
  }

  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    const { files, categories, isLoading } = this.props.artProps;
    let numberOfFiles = 0;

    const componentConfig = {
      iconFiletypes: ['.mp4', '.mov', 'images'],
      showFiletypeIcon: true,
      postUrl: 'dummy-url',
    };

    const djsConfig = {
      autoProcessQueue: false,
      maxFiles: 7,
      uploadMultiple: true,
      acceptedFiles: 'image/*,.mp4,.mov',
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage: '<i class="fa fa-3x fa-cloud-upload"> </i> <br/>Drag an image here to upload, or click to select multiple',
      maxFilesize: 50,  //MB
      addRemoveLinks: true,
    };

    const eventHandlers = {
      addedfile: (file) => {
        numberOfFiles++;

        if (numberOfFiles <= 7){
          this.props.addFile({id: file.upload.uuid, file});
        }

        console.log('filescount>>', files.length);

      },
      removedfile: (file) => {
        console.log('>>>',file.upload.uuid);
        this.props.removeFile({id: file.upload.uuid})
      },

      maxfilesreached:(files) =>{
        Notify.notifyError('Maximum files reached')
      },

    };

    return (
      <div className="container mt-5 pt-5">
        <form onSubmit={this.handleSubmit}>
          <div className='col-md-6 offset-md-3'>
            <h5>CREATE NEW ARTICLE</h5>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control"
                     onChange={this.handleChange} name='title'
                     required={true}
                     placeholder="Enter Title"/>
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-control" name='categoryId' onChange={this.handleChange} required={true}>
                <option>Select A Category</option>
                {categories.map(category =>{
                  return (
                    <option key={category.id} value={category.id}>{category.categoryName}</option>
                  )
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Price</label>
              <input type="number" step={.01} className="form-control col-8" defaultValue={0.00}
                     onChange={this.handleChange} name='price'
                     placeholder="Enter Price"/>
                     <small className='text-danger'>Price set to 0.00 means item is not for sale</small>
            </div>

            <div className='row mt-4'>
              <h6 className='text-artistic col-md-12'>Add media files about the Artwork</h6>

              <div className=''>
                <DropzoneComponent
                  config={componentConfig}
                  eventHandlers={eventHandlers}
                  djsConfig={djsConfig}
                />
              </div>
            </div>

            <div className='row mt-5'>
              <h6 className='text-artistic col-md-12'>Brief Description on the Artwork</h6>
              <div className=''>
                <CKEditor onChange={this.handleEditorChange}/>
              </div>
            </div>

            <div className='row mt-5 mb-5'>
              <button className='btn btn-primary' disabled={isLoading}>
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  artProps: state.artReducer,
});

export default connect(mapStateToProps, {
  addFile, removeFile, handleUploadImages, getCategories
})(CreateArt);
