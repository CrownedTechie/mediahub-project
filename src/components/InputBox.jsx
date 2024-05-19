import './InputBox.css';

const InputBox = ({type, placeholder, icon}) => {
    return (
        <>
            <div className='verification-box'>
                <div className="input-field">
                    <input
                        type={type}
                        name={type}
                        id=""
                        placeholder={placeholder}
                    />
                   
                    <span class="material-symbols-outlined">{ icon }</span>
                </div>
            </div>
            
        </>
  )
}


export default InputBox;