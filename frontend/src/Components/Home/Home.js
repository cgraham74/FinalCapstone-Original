import {Link} from 'react-router-dom'
import RecipeCard from '../Recipe/RecipeCard';
import Navigator from '../navigation/Navigator'
import LandingPage from '../LandingPage/LandingPage';

function Home(props) {
    return(
        <div>
            <Navigator/>
            <LandingPage />
        </div>
       
    )
}

export default Home;