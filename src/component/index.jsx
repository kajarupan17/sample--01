import React, { Component } from 'react'
import "./index.css"
import "./table.jsx"

export default class home extends Component 
{
    render()
     {
      return(
          <div>
                <h1 className="myHeader">REACT FIRST SAMPLE</h1>
                <div>
                
                    <form className="for">

                        <label for="ID">ID</label><br></br>
                        <input type="text" id="id" name="ID" placeholder="ENTER ID"></input>

                        <label for="name">Name</label><br></br>
                        <input type="text" name="Name" placeholder="ENTER YOUR NAME"></input>

                        <label for="SEVERITY">SEVERITY</label>
                            <select SEVERITY="SEVERITY" name="SEVERITY">
                                    <option value="SCHOOL">HIGH</option>
                                    <option value="BANK">LOW</option>
                            </select>
                        
                        <label for="PRIORITY">PRIORITY</label>
                            <select PRIORITY="PRIORITY" name="PRIORITY">
                                    <option value="SCHOOL">HIGH</option>
                                    <option value="BANK">LOW</option>
                            </select>

                        <label for="ASSIGNED">ASSIGNED PROJECT</label>
                        <input type="text" ASSIGNED="Name" ASSIGNED="ENTER DETAIL "></input>
                        
                        <label for="SATUS">SATUS</label>
                        <textarea type="text" SATUS="comments" id="comments"SATUS="ENTER DETAIL">
                          say something!
                        </textarea>
                        
                     
                       &nbsp;&nbsp; <input type="submit" value="SAVE"></input> &nbsp;&nbsp;&nbsp; 
                                          <input type="submit" value="CLOSE"></input><br></br>
                                          
                    </form><br></br>
                    <center>
                    <table id="customers">
                        <tr>
                            <th>ID</th>
                           <th>NAME</th>
                           <th>SEVERITY</th>
                           <th>PRIORITY</th>
                           <th>ASSIGNED PROJECT</th>
                           <th>SATUS</th>
                           <th>EDIT</th>
                           <th>DELET</th>
                           
                        </tr>
                         <tr>
                         <td>100</td>
                         <td>K.KAJAN</td>
                         <td>HIGH</td>
                         <td>HIGH</td>
                         <td>SGIC</td>
                         <td>SGIC</td>
                         <td>EDIT</td>
                         <td>DELET</td>
                        </tr>
                       
                    </table><br></br>
                    </center>

                    <footer>
                         <p>SGIC @ KAJARUPAN - BATCH-03 </p>
                    </footer>
                </div>
          </div>
          
        
      )
    }
  }