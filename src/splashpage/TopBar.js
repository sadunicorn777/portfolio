import '../App.css';
import { TopBarLink } from './TopBarLink';

export const TopBar = (props) => {

    const opacity = props.opacity

    return (
        <div className="topbar" style={{opacity: opacity, height: opacity < 0.1 ? 0 : 70}}>
            {opacity < 0.1 ? null : 
            <>
            <TopBarLink text="GitHub" dec={false}/>
            <TopBarLink text="LinkedIn" dec={false}/>
            <TopBarLink text="Email" dec={false}/>
            <TopBarLink text="About Me" dec={false}/>
            <TopBarLink text="Resume" dec/>
            </>
            }
        </div>
    )
}
