import TailwindButton from './components/TailwindCss/TailwindButton';

const AppTailwindCss = () => {
  return (
    <>
      <h1 className="text-sky-300 text-3xl font-bold underline">
        Hello world!
      </h1>
      <TailwindButton onClick={() => console.log('button clicked')}>
        TailwindButton
      </TailwindButton>
    </>
  );
};

export default AppTailwindCss;
