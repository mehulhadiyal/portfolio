new Typed('#typed', {
    strings: ['Designer'],
    typeSpeed: 40,
    delaySpeed: 90,
    loop: true
  });

  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') || 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') || '*';
    let sort = isotopeItem.getAttribute('data-sort') || 'original-order';
  
    // Initialize Isotope only after images have loaded
    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });
    });
  
    // Adding event listeners to the filter buttons
    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        // Remove the 'filter-active' class from the currently active filter
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        
        // Add the 'filter-active' class to the clicked filter
        this.classList.add('filter-active');
        
        // Update Isotope's filter
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      });
    });
  });
  