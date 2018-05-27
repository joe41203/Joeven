import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleFetchCosmetics } from './redux/actions';

class CosmeticLists extends React.Component {
  constructor(props){
  	super(props);
  }

  componentDidMount = () => {
    const { handleFetchCosmetics } = this.props;
    handleFetchCosmetics()
  }

  render() {
    const { cosmetics } = this.props;

    return (
      cosmetics ? (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tfoot>
              {
                cosmetics.map((cosmetic, i) => {
                  return(
                    <tr key={`cosmetic-${i}`}>
                      <th>{`${cosmetic.name}`}</th>
                    </tr>
                  )
                })
              }
            </tfoot>
          </table>
        </div>
      ) : <div>HelloWorld</div>
    );
  }
}

CosmeticLists.propTypes = {
  handleFetchCosmetics: PropTypes.func,
  cosmetics: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    cosmetics: state.cosmeticLists.cosmetics,
  }
}

export default connect(mapStateToProps, { handleFetchCosmetics })(CosmeticLists);
