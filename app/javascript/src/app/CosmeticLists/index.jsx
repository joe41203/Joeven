import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CosmeticList from './CosmeticList';
import {
  handleFetchCosmetics,
  handleSearchCosmetics,
  handleCreateCosmetics
} from './redux/actions';

class CosmeticLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      newCosmetic: {
        name: '',
        images: []
      }
    };
  }

  componentDidMount = () => {
    const { handleFetchCosmetics } = this.props;
    handleFetchCosmetics();
  };

  handleChangeQuery = query => this.setState({ query });
  handleKeyPress = keyCode => {
    const { handleSearchCosmetics } = this.props;
    const { query } = this.state;
    if (keyCode === 'Enter') {
      handleSearchCosmetics(`${query}`);
    }
  };

  handleNewCosmeticName = name =>
    this.setState({
      ...this.state,
      newCosmetic: {
        ...this.state.newCosmetic,
        name
      }
    });

  handleNewCosmeticImage = image => {
    const images = this.state.newCosmetic.images;
    this.setState({
      ...this.state,
      newCosmetic: {
        ...this.state.newCosmetic,
        images: [...images, image]
      }
    });
  };

  render() {
    const {
      cosmetics,
      handleSearchCosmetics,
      handleCreateCosmetics
    } = this.props;
    const { query } = this.state;

    return cosmetics ? (
      <div>
        <div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Search Box"
              onChange={e => this.handleChangeQuery(e.target.value)}
              onKeyPress={e => this.handleKeyPress(e.key)}
            />
            <button
              className="button is-primary"
              onClick={() => handleSearchCosmetics(`${query}`)}
            >
              SEARCH
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tfoot>
              {cosmetics.map((cosmetic, i) => {
                return (
                  <tr key={`cosmetic-${i}`}>
                    <th>{`${cosmetic.name}`}</th>
                    <th>
                      <img src={cosmetic.images[0]} />
                    </th>
                  </tr>
                );
              })}
            </tfoot>
          </table>
          <div>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Name"
                onChange={e => this.handleNewCosmeticName(e.target.value)}
              />
              <input
                className="input"
                type="file"
                placeholder="image"
                onChange={e => this.handleNewCosmeticImage(e.target.files[0])}
              />
              <button
                className="button is-primary"
                onClick={() => handleCreateCosmetics(this.state.newCosmetic)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="table">
          <p>Name</p>
          <CosmeticList search={query ? query : undefined} />
        </div>
      </div>
    ) : (
      <div>HelloWorld</div>
    );
  }
}

CosmeticLists.propTypes = {
  handleFetchCosmetics: PropTypes.func,
  handleSearchCosmetics: PropTypes.func,
  handleCreateCosmetics: PropTypes.func,
  cosmetics: PropTypes.array
};

const mapStateToProps = state => ({
  cosmetics: state.cosmeticLists.cosmetics
});

export default connect(
  mapStateToProps,
  { handleFetchCosmetics, handleSearchCosmetics, handleCreateCosmetics }
)(CosmeticLists);
