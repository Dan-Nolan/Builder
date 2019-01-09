import React, { Component } from 'react';
import SaveToolbar from './SaveToolbar';
import SVG from '../../SVG';
import { READ_THE_DOCS } from '../../../config';

class ValidationsToolbar extends Component {
  render() {
    return (
      <React.Fragment>
        <SaveToolbar />
        <li className="docs">
          <a href={`${READ_THE_DOCS}/abi_validations.html`} target="_blank" rel="noopener noreferrer">
            <SVG name="book" />
            <div> ABI Validations Docs </div>
          </a>
        </li>
      </React.Fragment>
    )
  }
}

export default ValidationsToolbar;
