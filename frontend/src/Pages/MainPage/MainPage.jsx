import React, { Component } from 'react'
import { connect } from "react-redux";
import * as notesOperations from '../../redux/Notes/NotesOperations'
import style from './MainPage.module.css'
import * as API from '../../api/api' 

class MainPage extends Component {
    componentDidMount() {
       const {getNotes}=this.props;
       getNotes('adfasfd') 
    }
    
    render() {
        return (
            <div className={style.container}>
            
           main page
            </div>
        )
    }
}
const mDTP =(dispatch) => ({
    getNotes: (token) => dispatch(notesOperations.getNotes(token)),
  });
export default connect(null, mDTP)(MainPage);