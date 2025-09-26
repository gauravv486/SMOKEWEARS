import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(search.trim()){
            navigate(`/search?q=${encodeURIComponent(search)}`)
        }
        setSearch("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value) }} className='border-none outline-none'/>
                <button type='submit'><FaSearch /></button>
            </form>
        </div>
    )
}

export default SearchBar
