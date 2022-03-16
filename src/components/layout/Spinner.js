import spinner from './assets/spinner.gif';

function Spinner() {
    return (
        <div className='mt-20'>
            <img className='text-center mx-auto' src={spinner} alt='Loading...' width={180} />
        </div>
    );
};

export default Spinner;