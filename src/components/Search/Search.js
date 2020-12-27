import React from 'react';
import Autosuggest from 'react-autosuggest';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import CanteenResults from '../CanteenResults/CanteenResults';
import './Search.css';

class Search extends React.Component {
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
        const { loadSearchResults } = this.props;
        console.log()
        const keyword = value
        if(keyword){
          axios.get('http://localhost:5000/student/searchresults', {
            headers:{
              keyword:keyword
            }, 
          }).then(res => {
            console.log(res.data.payload)
            loadSearchResults(res.data.payload)        
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
            marginTop: "5px",
          },  
          input: {
              borderColor: "rgb(128, 110, 114)",
              borderRadius: "7px",
              backgroundColor: "white",
              width: "40vw",
              padding: "12px",
              opacity: "0.5",        
          },
          suggestion:{
            borderColor: "blue",
            borderRadius: "7px",
            color: "black",
            padding: "5px",   
          }
        };
        return(          
            <div className = "hsearch-container">
              <div style = {{display:"flex"}}>                
                <Autosuggest
                  theme={theme}
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={this.getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  inputProps={inputProps}            
                />
                <Button className = "pl-4 pr-4 ml-2 btn btn-primary" onClick = {this.onSearch}>Search</Button> 
              </div>                    
            </div>          
        ) 
      }
    // return(
    //     // <div className = "hsearch-container">
    //     //     <input className = "hinput-container" type = "text" placeholder = "Search..." />
    //     // </div>
    // )
}

export default Search;