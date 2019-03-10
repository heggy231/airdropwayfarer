import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import '../MainFolder/Main.css'
import axios from 'axios'

class AddPost extends Component {
    // constructor(props, context) {
    //   super(props, context);
  
    //   this.state = {
    //     show: false,
    //   };
  
    //   this.handleShow = () => {
    //     this.setState({ show: true });
    //   };
  
    //   this.handleHide = () => {
    //     this.setState({ show: false });
    //   };
    // }
    constructor(props, context){
        super(props, context);
        //Making sure all of our methods below are bound to the THIS object.
        //otherwise we able to access the STATE object.
        this.onChangeCreatePostCity = this.onChangeCreatePostCity.bind(this)
        this.onChangeCreatePostTitle = this.onChangeCreatePostTitle.bind(this)
        this.onChangeCreatePostDescription = this.onChangeCreatePostDescription.bind(this)
        this.onChangeCreatePostImageUrl = this.onChangeCreatePostImageUrl.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    
        this.state ={
            show: false,
            city: "",
            title: "",
            description: "",
            imageUrl: "",
            completed: false
        } 
        this.handleShow = () => {
            this.setState({ show: true });
          };
      
          this.handleHide = () => {
            this.setState({ show: false });
          };
      }



    
      // The 4 onChange... updates the state to what was changed 
    
    
      onChangeCreatePostCity(e){
        this.setState({
          city:e.target.value
        });
      }
    
      onChangeCreatePostTitle(e){
        this.setState({
          title:e.target.value
        });
      }  
      
      onChangeCreatePostDescription(e){
        this.setState({
          description:e.target.value
        });
      }  
      
      onChangeCreatePostImageUrl(e){
        this.setState({
          imageUrl:e.target.value
        });
      }
    
    
    //Now we need the method handling the submitting of the form
    onSubmit = (e) => { 
      e.preventDefault()
      axios({
        method: 'post',
        url: 'http://localhost:3001/api/cityposts',
        data: { 
          city: this.state.city,
          title: this.state.title,
          description: this.state.description,
          imageUrl:this.state.imageUrl 
            },
          headers: {authorization: `Bearer ${localStorage.token}`}
        })
        .then( response => {
          console.log(response)
        })
        .catch(err => console.log(err))
        // reset all keys in this.setState to empty string as it was initially
  
  
    }
    
    
    render() {
      return (

        <div>
          <button variant="primary" onClick={this.handleShow}>
            Add Post
          </button>
          
          <Modal  
          // style={{padding: 10, width: 460 , height: 400}}
            show={this.state.show}
            onSubmit={this.handleHide}
            // onClick={this.handleHide}
            dialogClassName="modal-300w"
            aria-labelledby="example-custom-modal-styling-title-vcenter"
            // {...this.props}
            // size="lg"
            // aria-labelledby="contained-modal-title-vcenter"
            // centered
            
          >
         {/* <button onClick={this.handleHide}/>  */}
         <button onClick={this.handleHide}><i class="far fa-window-close"></i></button>
            {/* <Modal.Header closeButton>
            <h6>Create New Post</h6>
              <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
              </Modal.Title>
            </Modal.Header> */}

         

            <Modal.Body  style={{padding: 10}} >
                    <div style={{marginTop: 20}}>
               
                    <h4 style={{textAlign: "center"}}>Create New Post</h4>
                <form onSubmit={this.onSubmit}>
                
                    {/* <div className='form-group'>

                        <div className="form-check form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="cityOptions"
                                id='cityLondon'
                                value='London'
                                checked={this.state.city==='London'}
                                onChange={this.onChangeCreatePostCity}
                                />
                                <label className="form-check-label">London</label>
                        </div>

                        <div className="form-check form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="cityOptions"
                                id='citySydney'
                                value='Sydney'
                                checked={this.state.city==='Sydney'}
                                onChange={this.onChangeCreatePostCity}
                                />
                                <label className="form-check-label">Sydney</label>
                        </div>
                        
                        <div className="form-check form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="cityOptions"
                                id='citySan Francisco'
                                value='San Francisco'
                                checked={this.state.city==='San Francisco'}
                                onChange={this.onChangeCreatePostCity}
                                />
                                <label className="form-check-label">San Francisco</label>
                        </div>

                        <div className="form-check form-check">
                        <input
                                className="form-check-input"
                                type="radio"
                                name="cityOptions"
                                id='citySeattle'
                                value='Seattle'
                                checked={this.state.city==='Seattle'}
                                onChange={this.onChangeCreatePostCity}
                                />
                                <label className="form-check-label">Seattle</label>
                        </div>

                        </div> */}
                        
                        <div className='form-group'>
                        <label>City: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.city}
                        onChange={this.onChangeCreatePostCity}
                        />
                        </div>

                        <div className='form-group'>
                        <label>Title: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChangeCreatePostTitle}
                        />
                        </div>

                        <div className='form-group'>
                        <label>Description: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeCreatePostDescription}
                        />
                        </div>

                        <div className='form-group'>
                        <label>Image: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.imageUrl}
                        onChange={this.onChangeCreatePostImageUrl}
                        />
                        </div>


                    <div className="form-group">
                    
                    </div>
                        
                    <button   onSubmit={this.handleHide} ><input type='submit' value='Create Post'  className="btn btn-primary" /></button>
                    
                </form>
               
                </div>
            </Modal.Body>
            <div>
                
            </div>

             
          </Modal>
        </div>
      );
    }
  }
  
  export default AddPost;