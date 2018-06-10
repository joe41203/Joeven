import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  handleFetchCosmetics,
  handleSearchCosmetics,
  handleCreateCosmetics,
} from './redux/actions';
import SearchForm from './components/SearchForm';
import CosmeticCard from './components/CosmeticCard';

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
          <div className='columns is-multiline'>
            {
              cosmetics.map((cosmetic, i) => {
                return(
                  <CosmeticCard cosmetic={cosmetic} />
                )
              })
            }
          </div>
          <div>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='Name'
                onChange={e => this.handleNewCosmeticName(e.target.value)}
              />
              <input
                className='input'
                type='file'
                placeholder='image'
                onChange={e => this.handleNewCosmeticImage(e.target.files[0])}
              />
            <button
              className='button is-primary'
              onClick={() => handleCreateCosmetics(this.state.newCosmetic)}
            >Submit</button>
            </div>
          </div>
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
