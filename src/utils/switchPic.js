export const handleSwitcher = (e,setCurrentIndex, newProducts)=>{

    const name = e.target.dataset.name
    if (name === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newProducts.length);
        
      } else if (name === 'left') {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? newProducts.length - 1 : prevIndex - 1
        );
      }
    }