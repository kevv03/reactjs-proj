import {Link} from 'react-router-dom'

function Error() {
    return (
        <div>
            <h3>Oops! No se encontró la página que estaba buscando...</h3>
            <img src="/src/assets/error.png" alt="Página no encontrada" />
            <Link to="/">Volver a la página principal</Link>
        </div>
    )
}

export default Error
