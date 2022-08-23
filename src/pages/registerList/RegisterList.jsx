import '../../style/pages/registerlist/registerlist.scss';

function RegisterList() {
    return (
        <div className="registerlist">
            <h2>Registros</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className='th'>Nome</th>
                        <th className='th'>E-mail</th>
                        <th className='th'>Idade</th>
                        <th className='th'>Imagem</th>
                    </tr>
                </thead>
                <tbody className="tbody">

                </tbody>
            </table>
        </div>
    )
}

export default RegisterList;