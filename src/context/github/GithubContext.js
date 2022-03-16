import {createContext, useState} from 'react';

const GithubContext = createContext();

export const GithubProvider = ({children}) =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);

    // for searching any github profile
    const searchUsers = async (text) =>{   // we passed search name in text
        setLoading(true);
        const response = await fetch(`https://api.github.com/search/users?q=${text}`);

        const {items} = await response.json();
        //console.log(items);
        setUsers(items);
        setLoading(false);
    };
    
    // for clearing the search results
    const clearUsers = () =>{
        setUsers([]);
    };

    // for going to particular user's page
    const getUser = async (login) =>{
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${login}`);
        
        if(response.status===404)
        {
            window.location = '/notfound';
            setLoading(false);
        }
        else
        {
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }
    };

    // for getting repos of current particular user
    const getUserRepos = async (login) =>{
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${login}/repos?sort=stars&per_page=10`);

        const data = await response.json();
        setRepos(data);
        setLoading(false);
    };

    return(
        <GithubContext.Provider
            value={{ users, loading, user, repos, searchUsers, clearUsers, getUser, getUserRepos}}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;