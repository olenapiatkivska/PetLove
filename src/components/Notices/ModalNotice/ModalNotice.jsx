import Rating from './Rating/Rating.jsx';
import ModalMain from '../../ModalMain/ModalMain.jsx';
import Info from './Info/Info.jsx';
import { useEffect } from 'react';
import Buttons from './Buttons/Buttons.jsx';
import css from './ModalNotice.module.css';

const ModalNotice = ({
  notice,
  setShowDetails,
  showDetails,
  isFavorite,
  setIsFavorite,
  setShowFirstNotification,
}) => {
  const { imgURL, title, popularity, comment, category, price, _id } = notice;

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        showDetails && setShowDetails(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [setShowDetails, showDetails]);

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showDetails]);

  return (
    <>
      <ModalMain fn={setShowDetails}>
        <div className={css.imgWrapp}>
          <img src={imgURL} alt={`Animal ${title}`} />
          <span>{category}</span>
        </div>
        <h3 className={css.modalNoticeTitle}>{title}</h3>
        <Rating popularity={popularity} />
        <Info notice={notice} />

        <p className={css.modalNoticeComment}>{comment}</p>

        {price !== undefined && price !== null && (
          <p className={css.modalNoticePrice}>${price}</p>
        )}
        <Buttons
          isFavorite={isFavorite}
          id={_id}
          setIsFavorite={setIsFavorite}
          setShowFirstNotification={setShowFirstNotification}
        />
      </ModalMain>
    </>
  );
};

export default ModalNotice;

// import Rating from './Rating/Rating.jsx';
// import ModalMain from '../../ModalMain/ModalMain.jsx';
// import Info from './Info/Info.jsx';
// import { useEffect } from 'react';
// import Buttons from './Buttons/Buttons.jsx';
// import css from './ModalNotice.module.css';

// const ModalNotice = ({
//   notice,
//   setShowDetails,
//   showDetails,

//   setShowFirstNotification,
// }) => {
//   const { imgURL, title, popularity, comment, category, price, _id } = notice;

//   useEffect(() => {
//     const handleKeyPress = e => {
//       if (e.key === 'Escape') {
//         showDetails && setShowDetails(false);
//       }
//     };

//     document.addEventListener('keydown', handleKeyPress);
//     return () => {
//       document.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [setShowDetails, showDetails]);

//   useEffect(() => {
//     if (showDetails) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [showDetails]);

//   return (
//     <>
//       <ModalMain fn={setShowDetails}>
//         <div className={css.imgWrapp}>
//           <img src={imgURL} alt={`Animal ${title}`} />
//           <span>{category}</span>
//         </div>
//         <h3 className={css.modalNoticeTitle}>{title}</h3>
//         <Rating popularity={popularity} />
//         <Info notice={notice} />

//         <p className={css.modalNoticeComment}>{comment}</p>

//         {price !== undefined && price !== null && (
//           <p className={css.modalNoticePrice}>${price}</p>
//         )}
//         <Buttons id={_id} setShowFirstNotification={setShowFirstNotification} />
//       </ModalMain>
//     </>
//   );
// };

// export default ModalNotice;
