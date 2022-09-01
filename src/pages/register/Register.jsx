import '../../style/pages/register/register.scss';

function Register() {
    
    return (
        <div id='form'>
            <form id="formCadastro" name="form" action="" method="POST">
                <fieldset name="fieldset" className="fieldset">
                    <legend>Cadastro</legend>
                    <input 
                    id="nome"
                    type="text"  
                    placeholder="Nome"  
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"></input>

                    <input 
                    id="email"
                    type="email" 
                    placeholder="E-mail"></input>

                    <input 
                    id="idade"
                    type="number" 
                    min="0"
                    max="120" 
                    placeholder="Idade"></input>

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
                        form='formCadastro'>Enviar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Register;