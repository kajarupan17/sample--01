import React, { Component } from 'react'
import "./index.css"
import "./index.jsx"

export default class home extends Component 
{
    render()
     {
      return(
          <div>
                <div>
                
                    <form>
                    <h2>HTML Table</h2>

                    <table>
                        <tr>
                             <th>ID</th>
                             <th>NAME</th>
                             <th>SEVERITY</th>
                             <th>PRIORITY</th>
                             <th>ASSIGNED PROJECT</th>
                             <th>SATUS</th>
                        </tr>
                        <tr>
                        <td>100</td>
                        <td>k.kajan</td>
                        <td>HIGH</td>
                        <td>HIGH</td>
                        <td>SGIC</td>
                        </tr>
                      </table>


                    </form>
                    
                </div>
          </div>
          
        
      )
    }
  }