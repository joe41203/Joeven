import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleFetchCosmetics, handleSearchCosmetics } from './redux/actions';
import CosmeticList from './CosmeticList';

class CosmeticLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleChangeQuery = query => this.setState({ query });
  handleKeyPress = keyCode => {
    const { handleSearchCosmetics } = this.props;
    const { query } = this.state;
    if (keyCode === 'Enter') {
      handleSearchCosmetics(`${query}`);
    }
  };

  render() {
    const { cosmetics, handleSearchCosmetics } = this.props;
    const { query } = this.state;

    return cosmetics ? (
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
  cosmetics: PropTypes.array
};

const mapStateToProps = state => ({
  cosmetics: state.cosmeticLists.cosmetics
});

export default connect(mapStateToProps, {
  handleFetchCosmetics,
  handleSearchCosmetics
})(CosmeticLists);
