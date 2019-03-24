import React from 'react';
import _ from 'lodash';
import api from '../api';

class Colors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        {reds: []},
        {pinks: []},
        {oranges: []},
        {yellows: []},
        {purples: []},
        {greens: []},
        {blues: []},
        {browns: []},
        {whites: []},
        {greys: []}
      ]
    }
  }

  async componentDidMount() {
    const response = await api.get('/colors');
    const {
      reds, pinks, oranges,
      yellows, purples, greens,
      blues, browns, whites, greys } = response.data;

    this.setState({ colors: {
      reds, pinks, oranges,
      yellows, purples, greens,
      blues, browns, whites, greys }});
  }

  renderColors = () => {
    const { colors } = this.state;

    if(!colors.reds) {
      return <div>Loading...</div>
    }
    return _.map(colors, shades => {
      return _.map(shades, shade => {
        return (
          <div
            key={shade.id}
            className="four column"
            style={{ backgroundColor: `#${shade.hex}`, height: '50px'}}
          >
            {shade.name}
          </div>
        )
      });
    });
  }
  render() {

    if (!this.state.colors) {
      return <div>Loading...</div>
    }

    return (
        <div className="ui grid">
          <div className="doubling six column row">
            {this.renderColors()}
          </div>
        </div>
    )
  }
}

export default Colors;
