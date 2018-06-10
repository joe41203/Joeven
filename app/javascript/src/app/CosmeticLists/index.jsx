import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  handleFetchCosmetics,
  handleSearchCosmetics,
  handleCreateCosmetics,
} from './redux/actions';
import SearchForm from './components/SearchForm';
import CosmeticCards from './components/CosmeticCards';
import NewCosmeticForm from './components/NewCosmeticForm';

class CosmeticLists extends React.Component {
  constructor(props){
  	super(props);
    this.state = {
      query: '',
      newCosmetic: {
        name: '',
        images: [],
      }
    }
  }

  componentDidMount = () => {
    const { handleFetchCosmetics } = this.props;
    handleFetchCosmetics()
  }

  handleChangeQuery = query => this.setState({ query });
  handleKeyPress = keyCode => {
    const { handleSearchCosmetics } = this.props;
    const { query } = this.state;
    if (keyCode === 'Enter') {
      handleSearchCosmetics(`${query}`)
    }
  }

  handleNewCosmeticName = name => this.setState({
    ...this.state,
    newCosmetic: {
      ...this.state.newCosmetic,
      name,
    }
  })

  handleNewCosmeticImage = image => {
    const images = this.state.newCosmetic.images;
    this.setState({
      ...this.state,
      newCosmetic: {
        ...this.state.newCosmetic,
        images: [...images, image]
      }
    })
  }

  render() {
    const { cosmetics, handleCreateCosmetics } = this.props;
    const { query } = this.state;

    return (
      cosmetics ? (
        <div>
          <SearchForm
            handleChangeQuery={this.handleChangeQuery}
            handleKeyPress={this.handleKeyPress}
          />
          <CosmeticCards cosmetics={cosmetics}/>
          <NewCosmeticForm
            handleNewCosmeticName={this.handleNewCosmeticName}
            handleNewCosmeticImage={this.handleNewCosmeticImage}
            handleCreateCosmetics={handleCreateCosmetics}
            newCosmetic={this.state.newCosmetic}
          />
        </div>
      ) : <div>HelloWorld</div>
    );
  }
}

CosmeticLists.propTypes = {
  handleFetchCosmetics: PropTypes.func,
  handleSearchCosmetics: PropTypes.func,
  handleCreateCosmetics: PropTypes.func,
  cosmetics: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    cosmetics: state.cosmeticLists.cosmetics,
  }
}

export default connect(mapStateToProps, { handleFetchCosmetics, handleSearchCosmetics, handleCreateCosmetics })(CosmeticLists);
