    // Debounce function
    function debounce(func, delay) {
        let timeoutId;
        return function () {
          const context = this;
          const args = arguments;
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func.apply(context, args);
          }, delay);
        };
      }
  
      // Simulated data array
      const dataArray = [
        {itemName:'Category Name 1', count:'12'},
        {itemName:'Category Name 2', count:'13'},
        {itemName:'Category Name 3', count:'14'},
        {itemName:'Category Name 4', count:'15'},
        {itemName:'Category Name 5', count:'16'},
        {itemName:'Category Name 6', count:'17'},
        {itemName:'Category Name 7', count:'18'},
        {itemName:'Category Name 8', count:'19'},
      ];
  
      // Simulated search function 
      function performSearch(query) {
        const results = dataArray.filter(
          item =>
            item.itemName.toLowerCase().includes(query.toLowerCase()) ||
            item.count.toLowerCase().includes(query.toLowerCase())
        );
  
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = '';
        if (query.trim() === '') {
            return; 
        }
  
        results.forEach(result => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result_item');
          resultItem.innerHTML = `
              <p>${result.itemName}</p>
              <p>${result.count}</p>
          `;
          resultsContainer.appendChild(resultItem);
        });
      }
  
  
      // Get the search input element
      const searchInput = document.getElementById('searchInput');
  
      // Attach an event listener with debouncing
      searchInput.addEventListener('input', debounce(function () {
        const query = searchInput.value;
        performSearch(query);
      }, 300)); // Adjust the delay as needed (in milliseconds)