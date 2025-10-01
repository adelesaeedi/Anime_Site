import { useState} from 'react';

function SearchInput({onFormSubmit, initialValue}) {
    const [term, setTerm] = useState(initialValue);

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        onFormSubmit(term);
    }
    
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-group mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Enter anime title"
          aria-label="Recipient's username"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
      </div>
    </form>
  );
}

export default SearchInput;
