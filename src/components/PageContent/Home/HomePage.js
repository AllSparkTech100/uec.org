import './home.css';
import Box from '../Boxes/Box';

function Home() {
    return (
        <section>
            <div className='intro'>
                <h4>WELCOME TO OUR CHURCH <br /> <span> THE CHURCH WITH <br />A MISSION</span></h4>
            </div>
            
            <div className='intro-2'>
                <div className='thought'>
                <h3>U.E.C Diobu</h3>
                <h4>A Church That is Relevant</h4>
             </div>

                <div className='box'>
                <Box />
                </div>
            </div>
        </section>
    );
}

export default Home;