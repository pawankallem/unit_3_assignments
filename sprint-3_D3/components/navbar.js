

const navbar=()=>{
    
    return `<div id="navbar">
    <div id="home"><a href="/sprint-3_D3/search.html">Home</a></div>
    <div id="searchByname">
      <input type="text" id="input" placeholder="Search for Receipe Here" />
      <button id="search">Search</button>
    </div>
    <div id="pages">
      <div><a href="/sprint-3_D3/name.html">Search By Name</a></div>
      <div><a href="/sprint-3_D3/randomReceipes.html">Receipes</a></div>
      <div>
        <a href="/sprint-3_D3/receipeOfDay.html">Receipe Of The Day</a>
      </div>
    </div>
  </div>`;
}

export default navbar;