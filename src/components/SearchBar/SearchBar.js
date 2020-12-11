import React from 'react';
import "./SearchBar.css";
import Autosuggest from 'react-autosuggest';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

   
  // Teach Autosuggest how to calculate suggestions for any given input value.
 


class SearchBar  extends React.Component {
  constructor(props) {
      super(props);
    
  
      this.state = {
        value: '',
        suggestions: [],
        searchresults:[],
        
      };
    }
    
    
  onSearch = (event) => {
    event.preventDefault();
    const { value } = this.state
    const { loadSearchResuts } = this.props;
    const keyword = value
    if(keyword){
      axios.get('http://localhost:5000/student/searchresults', {
        headers:{
          keyword:keyword
        }, 
      }).then(res => {
        console.log(res.data.payload)
        loadSearchResuts(res.data.payload)        
      })
    } else {
      alert('Please search for a canteen');
    }
  }


    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };
    
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    };
    
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };



    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;       
        return inputLength === 0 ? [] : this.props.details.filter(lang =>
          lang.canteen_name.toLowerCase().slice(0, inputLength) === inputValue
        );
      };
       
    
    
    getSuggestionValue = suggestion => suggestion.canteen_name;
     
    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
      <div>
        {suggestion.canteen_name}
      </div>
    );

  render() {

    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for restaurants',
      value,
      onChange: this.onChange
    };


    const theme = {
      container: {
        width: "40vw"
      },
    
      suggestionsList:{       
        listStyle:"none",
        position: "absolute",
        zIndex:"10",        
        backgroundColor: "white",
        width: "40vw",  
        borderColor: "blue",
        borderRadius: "7px",
      },   
      suggestionsContainer: {
        backgroundColor: "white",
        position: "absolute",
        zIndex:"10",
        borderRadius: "10px",
        borderColor: "blue",
      },   
      input: {
          borderColor: "rgb(128, 110, 114)",
          borderRadius: "7px",
          backgroundColor: "white",
          width: "40vw",
          padding: "12px",
          opacity: "0.5"
        
      },
      suggestion:{
        borderColor: "blue",
        borderRadius: "7px",
        color: "black",
       
      }
    };
    return(
      <div className = "container-search">
        <h1 className = "title">MINIMATO</h1>
        <h2 className = "slogan">Discover the best foods and drinks in your college</h2>
        {/* <div className = "searchbar-container">
            <input style = {{marginBottom: "4vh"}} className = "searchbar" type = "text" placeholder = "   Search..." />
        </div> */}
        <div className = "searchbar-container">
          <Autosuggest theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}            
          />
          <Button onClick = {this.onSearch}> search</Button> 
        </div>
      </div>
    ) 
  }
}

export default SearchBar;


