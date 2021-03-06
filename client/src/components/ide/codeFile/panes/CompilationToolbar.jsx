import React, {Component} from 'react';
import SVG from '../../../SVG';
import './CompilationToolbar.scss';

class CompilationToolbar extends Component {
  render() {
    const { hide, compile, toggleAuto, auto, compiling } = this.props;
    const compileClasses = ['tool'];
    const autoClasses = ['tool'];
    if(compiling) compileClasses.push('disabled');
    if(auto) autoClasses.push('on');
    else autoClasses.push('off');
    return (
      <div className="compilation-toolbar">
        <div className={compileClasses.join(' ')} onClick={compile} data-rh="Compile Code">
          <SVG name="code"/>
        </div>
        <div className={autoClasses.join(' ')} onClick={toggleAuto} data-rh="Auto-Compile (Toggle)">
          <SVG name="magic"/>
        </div>
        <div className="tool end" onClick={hide} data-rh="Hide">
          <SVG name="minus"/>
        </div>
      </div>
    )
  }
}

export default CompilationToolbar;
