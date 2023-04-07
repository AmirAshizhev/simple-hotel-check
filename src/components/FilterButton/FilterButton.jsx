import './FilterButton.css'

function FilterButton({name, buttonState, setButtonState}){



  const handleClick = () => {
    setButtonState((buttonState+1) % 3)
  }

  return(
    <button className={`filterButton ${buttonState !== 0 && 'filterButton_on'}`} onClick={handleClick}>
      <span className={`filterButton__name ${buttonState !== 0 && 'filterButton__name_on'}`}>{name}</span>
      <span className={`filterButton__icon ${buttonState === 0 ? 'filterButton__icon_off' : buttonState === 1 ? 'filterButton__icon_up' : 'filterButton__icon_down' }`}></span>
    </button>
  )
}

export default FilterButton;