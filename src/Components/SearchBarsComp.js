import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

function SearchBarsComp({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === '') {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered('');
    };
    return (
      <div className="search-bar">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p key="value-title">{value.title} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  export default SearchBarsComp;
  
// function SearchBarsComp({disabled}) {
//     const [focused, setFocused] = useState(false);
//     const [borderColor, setBorderColor] = useState("#E1E3E8");

//     const EmptySearchBar = styled(TextField)({
//         width: "309px",
//         padding: "12px 16px",
        
//         "> div": {border: "1px #E1E3E8 solid",
//                 borderRadius: "8px",
//                 backgroundColor: "#F8F9FA",
//                 height: "42px",
//                 "> fieldset": {border: "none"}}
//     })
    
//     const DisabledSearchBar = styled(TextField)({
//         width: "325px",
//         padding: "12px",
//         "> div": {border: "1px #E1E3E8 solid",
//                 borderRadius: "8px",
//                 backgroundColor: "#F8F9FA",
//                 height: "42px",
//                 "> fieldset": {border: "none"}}
//     })

//     const handleClickOutside = (e) => {
//         setFocused(false);
//         setBorderColor("#E1E3E8")
//       };

//       useEffect(() => {
//         if (focused === true) {
//             setBorderColor("#0066AD");
//             document.addEventListener("mousedown", handleClickOutside)
//         }
//       }, [focused]);

//     {
//         if (disabled === false) {
//             return(
//                 <EmptySearchBar placeholder="Search" onClick={(e) => setFocused(true)} sx={{"> div": {borderColor: {borderColor}}}} InputProps={{
//                     startAdornment: (
//                         <InputAdornment position="start">
//                             <SearchOutlinedIcon onClick={searchFunction}/>
//                         </InputAdornment>
//                     )
//                 }} variant="outlined">

//                  </EmptySearchBar>
//             )
//             }
//         else if (disabled === true) {
//             return(
//                 <DisabledSearchBar placeholder="Disabled" disabled={true} InputProps={{
//                     startAdornment: (
//                         <InputAdornment position="start">
//                             <SearchOutlinedIcon />
//                         </InputAdornment>
//                     ) 
//                 }} variant="outlined">
//                 </DisabledSearchBar>
//             )
//         }
//     }
// }

// export default SearchBarsComp;