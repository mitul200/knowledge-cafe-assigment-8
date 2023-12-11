import logo from '../../images/profile.png' 

const Header = () => {
    return (
        <div>
            <div className='flex justify-between m-8 items-center'>
            <h1 className="text-3xl font-bold ">Knowledge Cafe</h1>
            <div>
                <img className='h-16 w-16' src={logo} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Header;