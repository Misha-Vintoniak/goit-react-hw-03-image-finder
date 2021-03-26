import s from './Button.module.css';
export default function Button({ onHandleClick }) {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <button type="button" className={s.Button} onClick={onHandleClick}>
      Load More...
    </button>
  );
}
