import css from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className={css.heroContainer}>
        <h1 className={css.heroContainerTitle}>
          Take good <span className={css.heroContainerSpan}>care</span> of your
          small pets
        </h1>
        <p className={css.heroContainerText}>
          Choosing a pet for your home is a choice that is meant to enrich your
          life with immeasurable joy and tenderness.
        </p>
      </div>
    </>
  );
};

export default Hero;
