import { User } from '../types/user'
import { NavLink } from 'react-router-dom';
import Item from 'antd/lib/list/Item';

export const authenticated = (user: User, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}

export const isAuthenticate = () => {
    if (!localStorage.getItem('user')) {
        return <div>
            <ul className="text-center flex  my-auto" >
                <li className="px-2"><NavLink  to={`/SignUp`}>Đăng Ký</NavLink></li>
                <li>/</li>
                <li className="px-2"> <NavLink  to={`/SignIn`}>Đăng Nhập</NavLink></li>
            </ul>
        </div>
    } else {
        return <div>
            
            <ul className="text-center flex  my-auto" >
                <NavLink className="px-2" onClick={() => { localStorage.removeItem('user'); setuser(1)}} to={`/`}>Đăng Xuất</NavLink>
            </ul>
        </div>
    }

}