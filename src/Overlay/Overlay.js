import '../App.scss';
import './Overlay.scss';

function Overlay() {
    return (
        <div className='overlay'>

            <div className='headbar'>
                <div className='headbar-container'>
                    <h3 className='headbar-container-item headbar-name'>Oleh Hrubnik</h3>

                    <div className='headbar-container-item headbar-link'>Home</div>
                    <div className='headbar-container-item headbar-link'>About</div>
                    <div className='headbar-container-item headbar-link'>Projects</div>
                    <div className='headbar-container-item headbar-link'>Contacts</div>

                </div>

            </div>

            <div className='sidebar'>
                <div className='sidebar-container'>
                    <hr></hr>

                    <div className='sidebar-buttons'>
                        <div className='sidebar-button'></div>
                        <div className='sidebar-button'></div>
                        <div className='sidebar-button'></div>
                    </div>

                    <hr></hr>
                </div>
            </div>

        </div>
    );
}

export default Overlay;
