import '../../style/pages/register/register.scss';

function Register() {
    
    return (
        <div id='form'>
            <form id="registrationForm" name="form" action="" method="POST">
                <fieldset name="fieldset" className="fieldset">
                    <legend>Cadastro</legend>
                    <input 
                    id="name"
                    type="text"  
                    placeholder="Nome"  
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"></input>

                    <input 
                    id="cpf"
                    type="number"
                    placeholder="CPF"></input>

                    <input 
                    id="email"
                    type="email" 
                    placeholder="E-mail"></input>

                    <input 
                    id="age"
                    type="date" 
                    placeholder="Data de Nascimento"></input>

                    <input 
                    id="imgFile"
                    type="file" 
                    accept=".png" ></input>
                    
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