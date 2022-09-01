import '../../style/pages/register/register.scss';

function Register() {
    
    return (
        <div id='form'>
            <form id="registrationForm" name="form" action="" method="POST">
                <fieldset name="fieldset" className="fieldset">
                    <legend>Cadastro</legend>
                    <div className='inputsContainer'>
                        <label htmlFor="name">Nome:</label>
                        <input 
                        id="name"
                        type="text"  
                        placeholder="Digite seu nome..."  
                        pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                        autoFocus></input>
                    </div>
                    <div className='inputsContainer'>
                        <label htmlFor="cpf">CPF:</label>
                        <input 
                        id="cpf"
                        type="number"
                        placeholder="Digite seu cpf..."></input>
                    </div>

                    <div className='inputsContainer'>
                        <label htmlFor="email">E-mail:</label>
                        <input 
                        id="email"
                        type="email" 
                        autoComplete='email'
                        placeholder="Digite seu e-mail..."></input>
                    </div>

                    <div className='inputsContainer'>
                        <label htmlFor="age">Data de Nascimento:</label>
                        <input 
                        id="age"
                        type="date" 
                        placeholder="Data de Nascimento"></input>
                    </div>

                    <div className='inputsContainer'>
                        <label htmlFor="imgFile">Foto:</label>
                        <input 
                        id="imgFile"
                        type="file" 
                        accept=".png" ></input>
                    </div>
                    
                    <div className='btnContainer'>
                        <button  
                        type="reset" >Limpar</button>
                        <button 
                        type="submit" 
                        disabled="disabled"
                        form='registrationForm'>Enviar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Register;