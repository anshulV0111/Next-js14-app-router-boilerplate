import CardContent from './CardContent';
// import AnimateHomeCard from './AnimateHomeCard';
import AnimateCasinoCard from './AnimateCasinoCard';

export default function Card({
  id, iconUrl, onGameClick, isFavorite, handleFavouriteGame, casinoGameId, type = 'casino', index, altImgUrl, title, price,
}) {
  if (type === 'home') {
    return (
      <CardContent
        title={title}
        price={price}
        iconUrl={iconUrl}
        onGameClick={onGameClick}
        handleFavouriteGame={handleFavouriteGame}
        casinoGameId={casinoGameId}
        id={id}
        isFavorite={isFavorite}
        altImgUrl={altImgUrl}
      />
    );
  }
  return (
    <AnimateCasinoCard className="w-fit" id={id} type={type} index={index}>
      <CardContent
        title={title}
        price={price}
        iconUrl={iconUrl}
        onGameClick={onGameClick}
        handleFavouriteGame={handleFavouriteGame}
        casinoGameId={casinoGameId}
        id={id}
        isFavorite={isFavorite}
        altImgUrl={altImgUrl}
      />
    </AnimateCasinoCard>
  );
}
