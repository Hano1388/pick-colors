import React from 'react';
import _ from 'lodash';
import myServer from '../api';

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

  componentDidMount() {
    myServer.get('/colors').then(response => {
      const {
        reds, pinks, oranges,
        yellows, purples, greens,
        blues, browns, whites, greys } = response.data;

      this.setState({ colors: {
        reds, pinks, oranges,
        yellows, purples, greens,
        blues, browns, whites, greys }});
    });
  }

  renderColors = () => {
    return <div>  Hello</div>
    // return color.map(color => {
    //   return (
    //       <div key={color.id} className="four column" style={{ backgroundColor: `#${color.hex}`}}></div>
    //   )
    // })
  }
  render() {
    // console.log(this.state);
    const { colors } = this.state;

    console.log(colors);

    if (!colors.reds) {
      console.log("hello");
      return <div>Loading...</div>
    }

    // Object.keys(colors).map(function(key, index) {
      // console.log(colors[key]);
      // TODO: call render function with colors[key] as an argument here
    // })

    return (
        <div>
          render colors
        </div>
    )
  }
}

export default Colors;
