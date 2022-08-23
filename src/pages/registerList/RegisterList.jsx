import '../../style/pages/registerlist/registerlist.scss';

function RegisterList() {
    return (
        <div className="registerlist">
            <h2>Registros</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Idade</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody className="tbody">

                </tbody>
            </table>
        </div>
    )
}

export default RegisterList;