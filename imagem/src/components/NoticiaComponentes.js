import './Noticia.css';

const NoticiaComponente = ({titulo, image, alt, descricao, categoria}) => {
    
    return(
        <div className="noticia">
            <h2 className="titulo">{titulo}</h2>
            <img src={image} alt={alt} className="NoticiaImage"/>
            <p className="descricao">{descricao}</p>
            <p className="categoria">{categoria}</p>
        </div>
    );
}

export default NoticiaComponente;