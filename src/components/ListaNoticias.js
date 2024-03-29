import React from 'react';
import Noticia from './Noticia.js'
import PropTypes from 'prop-types';

const ListaNoticias = ({noticias}) => (
        <div className="row">
            {noticias?.map(noticia =>(
                <Noticia
                    key = {noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
);
 
ListaNoticias.propTypes ={
    noticias: PropTypes.array.isRequired
}

export default ListaNoticias;