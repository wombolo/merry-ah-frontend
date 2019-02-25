/* eslint-disable require-jsdoc */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createComment, getComments, deleteComment, editComment,
} from '../actions/commentActions';

class Comment extends Component {
  state = {
    body: '',
  }

  componentDidMount() {
    this.props.getComments(2, 200, 10);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      body: this.state.body,
    };
    this.props.createComment(2, commentData);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (commentId) => {
    this.props.deleteComment(commentId);
  }

  handleEdit = (commentId) => {
    const commentData = {
      body: this.state.body,
    };
    this.props.editComment(commentId, commentData);
  }

  render() {
    const { body } = this.state;
    const { comment } = this.props;
    const { auth } = this.props;
    return (
      <div>
        <div className="comment-section">
                <h6>Add your comment</h6>
                <form onSubmit={this.handleSubmit}>
                  <textarea
                  name="body"
                  required
                  onChange={this.handleChange}
                  value={body}
                  placeholder="Type comment here. . .">
                  </textarea>
                  <button
                  className="comment-button"
                  disabled={comment.isCreating}>
                  {comment.isCreating ? 'Loading...' : 'Comment'}
                  </button>
                </form>
                <div className="comments">
                  <h6>Comments</h6>
                  {comment.isFetching
                    ? 'Loading' : comment.comments.data.map(item => (
                      <div className="single-comment" key={item.id}>
                      <img src="../assets/images/painting.jpg"
                        className="comment-thumbnail" alt=""/>
                      <div className="single-comment-details">
                      <div className='row'>
                      <h6 className='col-6 p-0'>{item.User.username}</h6><h6 className='col-6 p-0'>{new Date().getMinutes()} mins ago</h6>
                      </div>
                        <small className='col-12 p-0'>{item.body}</small>
                        <p className='col-12 p-0'>
                          <i className="fa fa-heart-o"></i>
                          {auth.user.id === item.userId
                            ? <div className='d-inline ml-5'>                        
                          <i className="fa fa-edit" data-toggle="modal" data-target="#GSCCModal"
                           ></i>
                          <i className="fa fa-trash ml-1"
                          onClick={() => this.handleClick(item.id)}></i>
                          </div> : ''}
                        </p>
                      </div>
                      <div className=""></div>
                    </div>
                    ))}
                </div>
              </div>


<div id="GSCCModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
      <h4 className="modal-title" id="myModalLabel">Edit Comment</h4>
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;  </button>
      </div>
      <div className="modal-body">
      <input value={this.state.body} className='form-control' name="body" onChange={this.handleChange}/>
     </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={() => this.handleEdit(111)}>Save changes</button>
      </div>
    </div>
  </div>
</div>



      </div>
    );
  }
}
Comment.propTypes = {
  createComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    comments: PropTypes.object,
  }),
};
const mapStateToProps = state => ({
  comment: state.comment,
  auth: state.auth,
});
export default connect(mapStateToProps,
  {
    createComment, getComments, deleteComment, editComment,
  })(Comment);
