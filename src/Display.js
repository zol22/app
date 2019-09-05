import React, { Component } from 'react'

const TableHeader =  () => {
    return(
        <thead>
        <tr>
          <th style={{paddingTop:'40px'}}>New Post</th>
          {/*<th>Job</th>*/}
        </tr>
      </thead>
    )
}

/* Child TableBody receives props from Parent Table. Child access props by declaring it in 
the functional component callback, remenber dont use "this" since it's not a class, you dont'
have to reference the component itself*/
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          {/*<td>{row.job}</td>*/}
          <td>
              <img src={row.url} alt="No GIF"></img>
          </td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>  
      )
    }) 
    return <tbody>{rows}</tbody>
}


  class Table extends Component {
    render() {
        const {characterData,removeCharacter} = this.props; 
        /*Destructuring assigment, assigning values taken directly from an object to variables.
          Equivalent to -> const charData = this.props.characterData
          Equivalent to -> const removeChar = this.props.removeCharacter*/
        return (
            <table>
                <TableHeader/>

                {/* Parent Table gives props to Child TableBody*/}
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
      )
    }
  }
export default Table;