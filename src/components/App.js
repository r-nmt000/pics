import React from 'react';
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 6QYzNjZMGEQDkRWz2YihcEhzQaqGkAoCjTnkvGL5OGM'
            }
        });
        console.log(response.data.results);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
};

export default App;