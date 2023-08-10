import React, { useEffect } from 'react'

const GameVersion = ({openVersion, setOpenVersion, setDexNumber, setGameIMG}) => {

    useEffect(() => {
        if(openVersion == true) {
            document.getElementById('GameSelectionMenu').style.transform = 'translateY(0vh)';
        } else {
            document.getElementById('GameSelectionMenu').style.transform = 'translateY(-101vh)';
        }
    })

    function onClickVersion(e) {
        setDexNumber(e.getAttribute('data-value'));
        setGameIMG(e.src);
        setOpenVersion(false);
      }


  return (
    <div id="GameSelectionMenu">
        <div className='Logos'>
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={2} src={'./game-logos/rby.png'} alt="Red Blue Green" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={3} src={'./game-logos/gsc.png'} alt="Gold Silver Emerald" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={4} src={'./game-logos/rse.png'} alt="Ruby Sapphire" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={5} src={'./game-logos/dppt.png'} alt="Diamond Pearl Platinum" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={9} src={'./game-logos/b2w2.png'} alt="Black 2 White 2" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={12} src={'./game-logos/xy.png'} alt="X Y" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={16} src={'./game-logos/sm.png'} alt="Sun Moon" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={27} src={'./game-logos/swsh.png'} alt="Sword Shield" />
            <img className="gameLogo" onClick={(e) => {onClickVersion(e.target)}} data-value={31} src={'./game-logos/svc.png'} alt="Scarlett Violet" />
        </div>

    </div>
  )
}

export default GameVersion