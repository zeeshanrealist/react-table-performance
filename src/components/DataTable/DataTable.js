import React, {Component, PropTypes} from 'react';

export default class DataTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired
  }

  render() {
    const { data, headers } = this.props;
    return (
      <div>
      {
        data && data.length ?
          <table>
            <thead>
              <tr>
                {
                  headers.map(header => (
                    <th key={header}>{header}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                data.map(cell => (
                  <tr key={cell.id}>
                    {
                      Object.keys(cell).map((key, index) =>
                        <td key={index}>{cell[key]}</td>
                      )
                    }
                  </tr>
                ))
              }
            </tbody>
          </table> : null
      }
      </div>
    );
  }
}
